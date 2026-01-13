---
sidebar_position: 2
---

# Defining a manifest

Composite actions introduce the problem of chaining. In this article I will briefly describe some of the considerations behind the format I ended up going with.

In order to make things simpler, we will focus on an example of a composite action. This action uses the [OpenWeather](https://openweathermap.org/) api to fetch the weather by a location name. However, since the open weather api does not offer the functionality to fetch the weather by location name directly, we need break the flow into two steps, in the following order:

1) Get the latitude and longitude by location name. This is defined as:

```
{
  "name": "openweather-coordinates-by-location-name",
  "description": "Get openweather coordinates by location name",
  "version": "0.0.1",
  "kind": "composition",
  "manifest_version": 1,
  "repository": "github.com/tgirotto/openweather-coordinates-by-location-name",
  "license": "MIT",
  "inputs": [
    {
      "name": "open_weather_config",
      "type": "OpenWeatherConfig",
      "required": true
    }
  ],
  "steps": {
    "get_geocoding_response": {
      "uses": "tgirotto/http-get:0.0.18",
      "inputs": [
        "https://api.openweathermap.org/geo/1.0/direct?q={{inputs[0].location_name}}&limit=1&appid={{inputs[0].open_weather_api_key}}",
        {
          "Content-Type": "application/json",
          "Authorization": "Bearer {{inputs[0].open_weather_api_key}}"
        }
      ]
    }
  },
  "outputs": [
    {
      "name": "coordinates",
      "type": "GeocodingResponse",
      "value": {
        "name": "{{steps.get_geocoding_response.outputs[0].body[0].name}}",
        "local_names": {
          "af": "{{steps.get_geocoding_response.outputs[0].body[0].local_names.af}}",
          ...
          "zh": "{{steps.get_geocoding_response.outputs[0].body[0].local_names.zh}}"
        },
        "lat": "{{steps.get_geocoding_response.outputs[0].body[0].lat}}",
        "lon": "{{steps.get_geocoding_response.outputs[0].body[0].lon}}",
        "country": "{{steps.get_geocoding_response.outputs[0].body[0].country}}",
        "state": "{{steps.get_geocoding_response.outputs[0].body[0].state}}"
      }
    }
  ],
  "types": {
    "OpenWeatherConfig": {
      "location_name": "string",
      "open_weather_api_key": "string"
    },
    "GeocodingResponse": {
      "name": "string",
      "local_names": {
        "af": "string",
        ...
        "zh": "string"
      },
      "lat": "number",
      "lon": "number",
      "country": "string",
      "state": "string"
    }
  }
}

```

2) Get the weather by latitude and longitude, which is defined as:

```
{
  "name": "openweather-current-weather",
  "description": "Get current weather data from OpenWeather API",
  "version": "0.0.1",
  "kind": "composition",
  "manifest_version": 1,
  "repository": "github.com/tgirotto/openweather-current-weather",
  "license": "MIT",
  "inputs": [
    {
      "name": "weather_config",
      "type": "WeatherConfig",
      "required": true
    }
  ],
  "steps": {
    "get_weather_response": {
      "uses": "tgirotto/http-get:0.0.18",
      "inputs": [
        "https://api.openweathermap.org/data/2.5/weather?lat={{inputs[0].lat}}&lon={{inputs[0].lon}}&appid={{inputs[0].open_weather_api_key}}",
        {
          "Content-Type": "application/json"
        }
      ]
    }
  },
  "outputs": [
    {
      "name": "weather",
      "type": "WeatherResponse",
      "value": {
        "coord": {
          "lon": "{{steps.get_weather_response.outputs[0].body.coord.lon}}",
          "lat": "{{steps.get_weather_response.outputs[0].body.coord.lat}}"
        },
        "weather": [
          {
            "id": "{{steps.get_weather_response.outputs[0].body.weather[0].id}}",
            "main": "{{steps.get_weather_response.outputs[0].body.weather[0].main}}",
            "description": "{{steps.get_weather_response.outputs[0].body.weather[0].description}}",
            "icon": "{{steps.get_weather_response.outputs[0].body.weather[0].icon}}"
          }
        ],
        "base": "{{steps.get_weather_response.outputs[0].body.base}}",
        "main": {
          "temp": "{{steps.get_weather_response.outputs[0].body.main.temp}}",
          "feels_like": "{{steps.get_weather_response.outputs[0].body.main.feels_like}}",
          "temp_min": "{{steps.get_weather_response.outputs[0].body.main.temp_min}}",
          "temp_max": "{{steps.get_weather_response.outputs[0].body.main.temp_max}}",
          "pressure": "{{steps.get_weather_response.outputs[0].body.main.pressure}}",
          "humidity": "{{steps.get_weather_response.outputs[0].body.main.humidity}}",
          "sea_level": "{{steps.get_weather_response.outputs[0].body.main.sea_level}}",
          "grnd_level": "{{steps.get_weather_response.outputs[0].body.main.grnd_level}}"
        },
        "visibility": "{{steps.get_weather_response.outputs[0].body.visibility}}",
        "wind": {
          "speed": "{{steps.get_weather_response.outputs[0].body.wind.speed}}",
          "deg": "{{steps.get_weather_response.outputs[0].body.wind.deg}}"
        },
        "clouds": {
          "all": "{{steps.get_weather_response.outputs[0].body.clouds.all}}"
        },
        "dt": "{{steps.get_weather_response.outputs[0].body.dt}}",
        "sys": {
          "country": "{{steps.get_weather_response.outputs[0].body.sys.country}}",
          "sunrise": "{{steps.get_weather_response.outputs[0].body.sys.sunrise}}",
          "sunset": "{{steps.get_weather_response.outputs[0].body.sys.sunset}}"
        },
        "timezone": "{{steps.get_weather_response.outputs[0].body.timezone}}",
        "id": "{{steps.get_weather_response.outputs[0].body.id}}",
        "name": "{{steps.get_weather_response.outputs[0].body.name}}",
        "cod": "{{steps.get_weather_response.outputs[0].body.cod}}"
      }
    }
  ],
  "types": {
    "WeatherConfig": {
      "lat": "number",
      "lon": "number",
      "open_weather_api_key": "string"
    },
    "WeatherResponse": {
      "coord": {
        "lon": "number",
        "lat": "number"
      },
      "weather": [
        {
          "id": "number",
          "main": "string",
          "description": "string",
          "icon": "string"
        }
      ],
      "base": "string",
      "main": {
        "temp": "number",
        "feels_like": "number",
        "temp_min": "number",
        "temp_max": "number",
        "pressure": "number",
        "humidity": "number",
        "sea_level": "number",
        "grnd_level": "number"
      },
      "visibility": "number",
      "wind": {
        "speed": "number",
        "deg": "number",
        "gust": "number"
      },
      "clouds": {
        "all": "number"
      },
      "dt": "number",
      "sys": {
        "country": "string",
        "sunrise": "number",
        "sunset": "number"
      },
      "timezone": "number",
      "id": "number",
      "name": "string",
      "cod": "number"
    }
  }
}

```

### Self-contained type-checking

The "types" field allows the engine to ensure that the data returned by a step matches the structure expected by the next step in the chain. For example, if openweather-coordinates-by-location-name returns a GeocodingResponse, the engine verifies that the lat and lon fields are present and are of the type number before passing them to the next action.

Because composite actions often deal with nested JSON (as seen in the OpenWeather API), the types definition acts as a map for the engine's parser. When you define a complex type like WeatherResponse, you are providing the engine with the metadata required to:

* **Deep-link** into properties (e.g., steps.get_weather_response.outputs[0].body.main.temp).

* **Fail fast** if an upstream API changes its response structure, providing a clear error message that the "Type mismatch: Expected WeatherResponse, received [Other].

By including the type definitions directly in the manifest, the action remains portable. An engine executing this action doesn't need to fetch a TypeScript definition or a Protobuf file from a third-party repository. Everything needed to validate the inputs and outputs is contained within the JSON itself.

### Chaining

Now, the first two steps are chained as follows:

```
{
  "name": "get-weather-by-location-name",
  "description": "Get weather by location name",
  "version": "0.0.1",
  "kind": "composition",
  "manifest_version": 1,
  "repository": "github.com/tgirotto/get-weather-by-location-name",
  "license": "MIT",
  "inputs": [
    {
      "name": "weather_config",
      "type": "WeatherConfig",
    }
  ],
  "steps": {
    "get_coordinates": {
      "uses": "tgirotto/openweather-coordinates-by-location-name:0.0.1",
      "inputs": [
        {
          "location_name": "{{inputs[0].location_name}}",
          "open_weather_api_key": "{{inputs[0].open_weather_api_key}}"
        }
      ]
    },
    "get_weather": {
      "uses": "tgirotto/openweather-current-weather:0.0.1",
      "inputs": [
        {
          "lat": "{{steps.get_coordinates.outputs[0].lat}}",
          "lon": "{{steps.get_coordinates.outputs[0].lon}}",
          "open_weather_api_key": "{{inputs[0].open_weather_api_key}}"
        }
      ]
    }
  },
  "outputs": [
    {
      "name": "response",
      "description": "Simplified weather information for the location",
      "type": "CustomWeatherResponse",
      "value": {
        "location_name": "{{inputs[0].location_name}}",
        "weather": "{{steps.get_weather.outputs[0].weather[0].description}}"
      }
    }
  ],
  "types": {
    "WeatherConfig": {
      "location_name": "string",
      "open_weather_api_key": "string"
    },
    "CustomWeatherResponse": {
      "location_name": "string",
      "weather": "string"
    }
  }
}
```

The design of the manifest format prioritizes transparency and flexibility. Below are the core pillars that define how data flows through the composition and why this specific format was chosen:

* **Deterministic data mapping**. Each step and output within the manifest acts as a data transformer. By using the ``{{steps.name.outputs[...]}}`` or ``{{inputs[...]}}`` syntax, the manifest establishes a clear directed acyclic graph (DAG) of data. The properties of data passed to actions are mapped specific values from the global input or previous steps. The format is based on a declarative syntax. Instead of writing scripts to extract data, developers use simple object mapping to define exactly which piece of upstream data populates a downstream field. This makes the data flow traceable and easy to debug.

* **Extensible IO**. Unlike simpler CI/CD actions that often restrict you to strings or basic key-value pairs, this format supports n-number of inputs and outputs of any complexity.By leveraging the types field, you can define rich, nested objects as inputs or outputs. Whether an action returns a single boolean or a massive weather report with nested arrays, the manifest handles it through the same consistent mapping logic. This allows developers to build many small, focused actions that aggregate into a powerful workflow.

* **Human-readable**. The format is designed to be read by humans first and machines second. It is self-documenting: the combination of description fields and explicit steps names means that a developer can understand the business logic of a composite action simply by reading the JSON file. I also find the syntax fairly predictable: the manifest remains clean and avoids the "spaghetti code" often found in complex configuration files.

* **JSON-Based Standardization**. Choosing JSON as the foundational language ensures immediate compatibility with the modern development ecosystem. Because it is JSON-based, developers can leverage existing IDE features like schema validation, auto-formatting, and syntax highlighting. JSON is the lingua franca of the web. This allows the engine to be implemented in any language (Go, Rust, Node.js) while ensuring the actions themselves remain portable across different environments and platforms.