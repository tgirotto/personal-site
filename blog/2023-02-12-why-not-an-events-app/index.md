---
slug: a-universal-events-app
title: "A Google Maps for events?"
# authors: [tgirotto]
tags: [eventful, events]
---

Every few months I see a new **events** app come up. By "events" I mean music concerts, sport competitions, social gatherings, art shows and more. It seems that, at some point, every developer has thought of showing on a list or map an index of all the events that are happening in their city. I definitely see the appeal of the idea, for several reasons:

* As a frequent traveller, I often find myself in unfamiliar contexts, and would like to know what's happening around me.

* I am not on social media, nor am I thrilled at the idea of being exposed to mountains of social media slop just to know what's happening around me.

* Like an increasing amount of people, I am looking for opportunities to meet new friends offline. An events app would help me navigate offline opportunities.

Yet, the domains of those apps that I see periodically launch on Hacker News inevitably become vacant after a year, and we are back to square one. Why don't we have a "Netflix of events" yet?

### The landscape

There are several solutions that currently sit at the edge of an "index of events":

* [Eventbrite](https://www.eventbrite.com/), [Meetup](https://meetup.com/), [Luma](https://luma.com/). These services are specialised on social events, and serve as platforms to help organisers schedule, promote and manage events, while helping attendees discover and rsvp. They are probably the closest thing to what a "Google Maps for Events" should look like. By only focusing on social gatherings, they gloss over all those events that are social, but not peer organised (eg a music concert).

* Social media. This is probably the biggest one. Whatsapp groups, Instagram accounts hold massive amounts of information about what is happening and where. However, their incentive to expose users to as much content as possible defeats the very attempt of getting offline mentioned above.

* [Facebook Events](https://www.facebook.com/events/). Again, social media.

* [Songkick](https://www.songkick.com/) and similar music concert apps are fairly popular in the music world. However, since they are only focused on music events, they net they cast is not wide enough to capture mainstream interest.

* Ticketing platforms. [Ticketmaster](https://www.ticketmaster.com/) only promote events they manage.

* City official web sites. Berlin is a [great example](https://www.berlin.de/en/tickets/today/). However, these are fragmented, often publicly-maintained web sites that only report geographically siloed data.

* Location-specific newsletters and blogs. In expat and nomad hotspots like Berlin, London or Madrid, niche services like [Social Butterfly radar](https://socialbutterflyradar.substack.com/) are common. However, just like city web sites, they are fragmented and hyperlocal.

* [Fever](https://feverup.com/en) and similar services are positioned as a commercial product rather than an index. While Google Maps feels like a free index (I'd say on a similar level to Wikipedia), Fever feels like a closed, commercial system, where non-monetizable events are not reported.

* [Airbnb experiences](https://www.airbnb.com/s/experiences), [Tripadvisor Activities](https://www.tripadvisor.it/Attractions-g187791-Activities-Rome_Lazio.html) and similar services all offer custom, on demand experiences that are not exactly events.


### Why hasn't Googles done it?

Somehow, big tech seems to have avoided this problem so far. Google is probably the firm that would be best positioned to tackling the problem of events. In fact, event data could be presented either as a feature in their maps product, in the form of smart cards in the search engine or as a standalone product.

I can think of a few reasons why this might not have happened yet: 

* It does not pass the [toothbrush test](https://expertbeacon.com/the-secrets-of-the-toothbrush-test-how-google-and-other-tech-giants-decide-which-products-to-bet-on/). However, one can argue that some of Google Products do not pass that test either.

* It is not profitable enough. However, Google seems to have shipped many products in the name of collecting information.

* Unlike information about businesses on Google Maps, information about events changes too quickly. However, products like [Google Travel](https://www.google.com/travel/) also expose information that changes quickly.

* Businesses on Google Maps want to be found by definition. This is not necessarily true for events, where exclusivity is sometimes a feature.

On the other hand, I can also think of reasons why a company like Google might be interested in building something like this:

* It would improve their search business.

* It would add value to their maps product by gathering more data about what events are people are more interested in.

### Doubts

There are a few aspects of this idea that are still unclear:

* Would a movie at the cinema be an event?

* Would a long-running art show in a gallery be an event?

* Do experiences count as events?


### What could an events app look like?

Although I have been using Google Maps as a point of reference, I wonder whether a map would be the best interface to represent what's effectively a list of items. After all, maybe there is a reason why Eventbrite and Meetup decided on using an Airbnb-like interface that makes it easy to both filter events and visualise how they are geographically distributed in a city.

### How to populate the platform?

As per the typical aggregator, an events service is only useful as long as it has plenty of good quality content in it. At the same time, because data is siloed and incumbents actively protect it (it's their moat), seeding the platform becomes the biggest problem. Here is what I can think of:

* Seeding long-term events manually. Sports competitions, art shows, music events are generally scheduled long before they take place. In other words, they have a long "shelf life". Starting with these events means targeting the low-hanging fruits first.

* Gamification. Very much like it helped Google Maps and StackOverflow, gamification could create soft incentives for users to help seed data. For example, showing how many users have viewed an event posted by another user would encourage users to participate more.

* Scraping chat groups on instant messaging platforms such as Whatsapp and Telegram by leveraging protocols like [Matrix](https://matrix.org/).

### Challenges

* Event duplication. Aggregating information from different sources almost always involves a risk of duplication, which means that deduplication mechanisms are needed. The solution to this kind of problem should be within reach, since a combination of name, description, date and location of the event should allow to understand with a relatively high degree of certainty whether two items are actually referring to the same event.

### Go-to-market strategy

Because its target audience is so vast, an event platform would be extremely hard to promote all at once. The most successful attempt I have seen so far is [Luma](https://luma.com/), which focuses specifically on tech events. This seems to be a classic example of "finding a narrow edge and sticking to it" until the plaform is popular enough to allow for dilution into other verticals, such as sports events and sports events.


### Technical implementation

Given the relational nature of the data, a SQL database should cover most of the needs of this use case. A PWA would probably also be enough for an MVP, and it would allow:

* A single codebase

* Low enough UI latency

* Repackaging for Play Store and App Store if needed, while avoiding publication hell every time an API endpoint changes