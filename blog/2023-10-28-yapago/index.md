---
slug: yapago
title: "A Google Pay for Venezuela"
# authors: [tgirotto]
tags: [yapago, software]
---

I am currently in Venezuela, visiting a dear friend. While I fell in love with this country, I had the chance to also witness the systemic inefficiencies of the place. Some are tragic, like the lack of electricity, basic healthcare services and safety, while others are much more mundane (even if still annoying), like the limited choice of products at the supermarket or the lack in digital payment solutions.

### Landscape

* [Pago Movil](https://www.bancodevenezuela.com/index.html@p=3457.html), for which a user needs access to a local bank account.

* [Zinli](https://www.zinli.com/), for which users need a foreign bank account.

* [Binance](https://www.binance.com), which is instead focused on crypto transactions.

Any other option, like Venmo, Google Pay and the likes, are not available in the country.

### What a solution could look like

It looks like some of my past work in building transaction systems in mini-grids in Sub Saharan Africa could be useful. In fact, this sounds like a double entry ledger could help tackle the problem. An MVP would consist exclusively of a fund transfer feature:

1) The sender scans the QR code of the recipient or insert their handle into the mobile app.

2) Both sender and receiver are notified of the transaction.

In [this]() blog post I will go over the implementation of the system in detail, which I built in a couple of weeks of free time.

### How do users get money in and out of the system?

Great, so we figured out the basics of how to get users to send funds to each other. But how do they get to convert their funds into fiat and viceversa? Here is where things got tricky. In fact, while implementing the transaction engine proved to be fairly straight forward,

* We could build integrations with the Stripes of the world to issue payouts to our users. However, as a part of the sign up process, payment processors ask their business users to provide documentation that, at the moment, is pretty much impossible to obtain from the Venezuelan [Ministry of Economy and Finances](https://www.mppef.gob.ve/).

* We could build a network of wakalas similar to the one Safaricom developed in Eastern Africa with [Mpesa](https://www.m-pesa.africa/). However, building such a network would require massive amounts of funding and years of work. The political and economic instability of the country would probably make it extra hard to raise funding.

![Yapago](./image.png)

### Takeaway: the obstacle is regulation, not tech

At the moment it looks like, with my resources, connections and commitments, the best I can do is a wrapper around current solutions (eg Binance). This would remove the core value of my solution, and make it too dependent on the current solutions, which could easily eliminate my solution by implementing a new lightweight interface.