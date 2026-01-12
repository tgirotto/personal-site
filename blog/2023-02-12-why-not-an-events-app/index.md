---
slug: a-universal-events-app
title: "A Google Maps for events?"
# authors: [tgirotto]
tags: [eventful, events]
---

Every few months, a new **"events"** app appears on Hacker News. Whether it’s music concerts, sports, art shows, or local meetups, every developer has—at some point—dreamed of a unified map showing everything happening in their city. The appeal is obvious, especially since I have often felt the need for such app first hand:

* As a frequent traveller, I often find myself in unfamiliar contexts, and would like to know what's happening around me.

* I am not on social media, nor am I thrilled at the idea of being exposed to mountains of social media slop just to know what's happening around me.

* Like an increasing amount of people, I am looking for opportunities to meet new friends offline. An events app would help me navigate offline opportunities.

Yet, the domains of those apps that I see periodically launch on Hacker News inevitably become vacant after a year, and we are back to square one. Why don't we have a "Google Maps for events" or "Netflix for events" yet?

### The landscape

There are several solutions that currently sit at the edge of an "index of events":

* [Eventbrite](https://www.eventbrite.com/), [Meetup](https://meetup.com/), [Luma](https://luma.com/). These services are specialised on social events, and serve as platforms to help organisers schedule, promote and manage events, while helping attendees discover and rsvp. They are probably the closest thing to what a "Google Maps for Events" should look like. By only focusing on social gatherings, they gloss over all those events that are social, but not peer organised (eg a music concert).

* Social media (including [Facebook Events](https://www.facebook.com/events/)). This is probably the biggest one. Whatsapp groups, Instagram accounts hold massive amounts of information about what is happening and where. However, their incentive to expose users to as much content as possible defeats the very attempt of getting offline mentioned above.

* [Songkick](https://www.songkick.com/) and similar music concert apps are fairly popular in the music world. However, since they are only focused on music events, they cast a net that is not wide enough to capture mainstream interest.

* Ticketing platforms. [Ticketmaster](https://www.ticketmaster.com/) only promote events they manage.

* City official web sites. Berlin is a [great example](https://www.berlin.de/en/tickets/today/). However, these are fragmented, often publicly-maintained web sites that only report geographically specific data.

* Location-specific newsletters and blogs. In expat and nomad hotspots like Berlin, London or Madrid, niche services like [Social Butterfly radar](https://socialbutterflyradar.substack.com/) are common. However, just like city web sites, they are fragmented and hyperlocalised.

* [Fever](https://feverup.com/en) and similar services are positioned as a commercial product rather than an index. In fact, while Google Maps feels like a free index (I'd say on a similar level to Wikipedia), Fever feels like a closed, commercial system, where non-monetizable events are not reported.

* [Airbnb experiences](https://www.airbnb.com/s/experiences), [Tripadvisor Activities](https://www.tripadvisor.it/Attractions-g187791-Activities-Rome_Lazio.html) and similar services all offer custom, on demand experiences that are not exactly events.


### Why hasn't Big Tech solved this?

Somehow, big tech seems to have avoided this problem so far. Google is probably the firm that would be best positioned to tackle this kind of problem. In fact, event data could be presented either as a feature in their maps product, in the form of smart cards in the search engine or as a product of its own.

I can think of a few reasons why this kind of product does not exist yet: 

* It does not pass the [toothbrush test](https://expertbeacon.com/the-secrets-of-the-toothbrush-test-how-google-and-other-tech-giants-decide-which-products-to-bet-on/). However, one can argue that many of Google Products do not pass that test either (think of [Google Classroom](https://classroom.google.com/)).

* It is not profitable enough. However, Google seems to have shipped many products in the name of collecting data about its users.

* **Data decay**. Unlike information about businesses on Google Maps, information about events changes too quickly. However, products like [Google Travel](https://www.google.com/travel/) also expose information that changes quickly.

* Businesses on Google Maps want to be found by definition. This is not necessarily true for events, where exclusivity is sometimes a feature.

### What about Event Schema?
Google already provides a standardized "language" for them through [Event Schema](https://developers.google.com/search/docs/appearance/structured-data/event). This structured data allows any website — from a tiny local pub to a global giant like Ticketmaster — to tell Google exactly what an event is, where it’s happening, and how much a ticket costs.

The integration works through two primary architectural patterns:

* The **pull mechanism** (crawl-based). This is the most common path. Developers embed [JSON-LD](https://json-ld.org/) scripts directly into their HTML. Google’s crawlers (Googlebot) identify these scripts during their routine rounds, parsing the data into a "Rich Result." However, this relies on crawl frequency; if an event is canceled or a time changes, there can be a lag of hours or days before the Search result reflects the reality on the ground.

* The **push mechanism** (indexing API). For high-volume or time-sensitive platforms, Google offers the [Indexing API](https://developers.google.com/search/apis/indexing-api/v3/quickstart). This allows organizers to "push" updates to Google in near real-time. This is the gold standard for accuracy, ensuring that if a game is postponed due to rain, the information is updated in the search index within minutes rather than days.

### The structured data gap
While Event Schema is a powerful tool, it hasn't solved the "events index app" problem for one simple reason: implementation is voluntary. A massive amount of local culture happens in the "dark matter" of the web. PDF flyers, Facebook images, or simple text on a church bulletin board. Until a system can reliably turn that unstructured "mess" into valid Schema, the index will always favor commercial entities with SEO budgets over the local community gatherings that many of us are actually looking for.

### Why Google should do it

While the toothbrush test might be a hurdle, there are three compelling strategic reasons why Google is the only player that could—and should—build a universal events index.

1. Owning [Position Zero](https://seo.ai/blog/position-zero) and the Answer Engine. Google’s search business is currently in a transition from a list of blue links to an AI-driven "answer engine". By building a dedicated platform, Google would no longer be a secondary consumer of fragmented data. They would become the primary source, ensuring they consistently hold position zero - the coveted top-of-page real estate. Also, a native platform allows Google to enforce data quality (standardized timezones, precise geocoding, and verified links) that currently plagues third-party SEO-driven event pages.

2. Completing the "offline interest graph". Google knows what you search for (intent) and where you are (location), but "events" represent the missing link: coordinated social intent. Integrating events into Google Maps transforms it from a static directory of businesses into a living "pulse" of the city. If Google knows you’ve RSVP’d to a gallery opening, it can proactively trigger a whole ecosystem of services: a calendar entry, a waymo ride-hail suggestion, or a YouTube Music notification for the artist's latest track. This creates a "flywheel" effect where one event signal drives engagement across multiple Google products.

3. Solving the "Social" Problem via Utility. Google has historically struggled with social networking (e.g., Google+). However, the next frontier of social isn't a digital feed; it's real-world coordination. Unlike a social network that requires you to post updates, an events platform is a high-value utility. By owning the discovery layer for where people meet offline, Google creates a social moat that doesn't rely on being a social media company. Also, in an era where Instagram and Facebook feeds are increasingly dominated by "slop" (algorithmic filler), a clean, utility-first discovery engine would win back users who are suffering from social media fatigue but still want to be social.

### How to seed data into the platform?

As per the typical aggregator, an events service is only useful as long as it has plenty of good quality content in it. At the same time, because data is siloed and incumbents actively protect it (it's their moat), seeding the platform becomes the biggest problem. Here is what I can think of, besides what's already being done:

* **Long shelf-life content first**. Manual seeding for events with long lead times, such as sports seasons, theater runs, and major festivals should be prioritised. These "low-hanging fruits" provide immediate SEO authority and give the platform utility months before the events actually occur.

* **User-generated data and gamification**. Very much like it helped Google Maps and StackOverflow, gamification could create soft incentives for users to help seed data. For example, allowing users to post events and showing how many others have viewed a posted event would encourage them to participate more.

* **Aggregating "dark social" via Matrix**. Much of the world's event data is locked in private messaging silos like WhatsApp and Telegram. By leveraging the [Matrix protocol](https://matrix.org/), we can bridge these disparate channels, allowing our platform to scan and structure event details from public community chats that are invisible to traditional crawlers.

* **Computer vision & physical signals:**. We will bridge the gap between the physical and digital worlds by using OCR (Optical Character Recognition) to scan street-level imagery. By identifying banners, posters, and flyers—often the only source of truth for local community events—we can capture high-intent data that incumbents ignore (caveat: Street View imagery is only recorded every few years).

### Challenges

Among the many questions still unanswered, these are the most interesting ones to me:

* **Event definition**. What is an event exactly? Would a movie at the cinema be an event? Would a long-running art show in a gallery be an event? Do experiences count as events? This question is important, since the definition of "event" drastically changes the perception of the service.

* **Data veridicity**. Since much of the data would be generated by users, there is no mathematical certainty of its quality. Cross-checking can be used to mitigate the risk of invalid or fake data.

* **Event duplication**. Aggregating information from different sources almost always involves a risk of duplication, which means that deduplication mechanisms are needed. The solution to this kind of problem should be within reach, since a combination of name, description, date and location of the event should allow to understand with a relatively high degree of certainty whether two items are actually referring to the same event.

### Go-to-market strategy

Because its target audience is so vast, an event platform would be extremely hard to promote all at once. The most successful attempt I have seen so far is [Luma](https://luma.com/), which focuses specifically on tech events. This seems to be a classic example of "finding a narrow edge and sticking to it" until the plaform is popular enough to allow for dilution into other verticals, such as sports and music events.

### Conclusion

Much more could be written on this topic: from the use of agentic AI to crawl and process data, to the concept of a "pulse" of an event. Unfortunately, that would be too much for this humble post. I guess the main takeaway is - whether it is built by a tech giant looking to close the "offline intent" loop or a scrappy startup leveraging decentralized protocols and LLMs to parse the "dark web" of local flyers - the creator of this kind of service won't just be building a database. They will be building the interface for how we experience our cities. In an era of digital "slop," the most valuable map isn't the one that shows us where the buildings are—it’s the one that shows us where the people are.