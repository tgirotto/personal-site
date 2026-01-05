---
sidebar_position: 2
---

# Defining a manifest format

Over the past few months I have been working on Starthub, which is essentiall an npm for [actions](https://tommaso-girotto.co/blog/the-right-mental-model). As previously mentioned, an action is an executable compute unit that:

* exchanges inputs and outputs as JSON arrays.

* has a single purpose.

Practically speaking, [in one of my previous articles](https://tommaso-girotto.co/blog/levels-of-abstraction) I reached the conclusion that an action can be of three kinds:

* Docker, for heavy-duty tasks.

* WebAssembly, for lightweight tasks.

* Composition. A composite action can be composed of an arbitrary number of other actions, of any kind.

This approach encourages encapsulation.

Now, composite actions introduce the problem of chaining. In this article I will briefly describe some of the considerations behind the format I ended up going with.

As an example, I will use the same as the oes


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