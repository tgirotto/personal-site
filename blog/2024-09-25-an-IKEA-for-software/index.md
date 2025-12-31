---
slug: an-ikea-for-software
title: "Starthub: IKEA of software"
# authors: [tgirotto]
tags: [starthub]
---

The company I currently work for offers a software platform to manage solar mini-grids. From a user's perspective, the platform consists of an admin panel and a suite of mobile-first web apps that our customers use to manage their solar mini-grids. It is a fairly standard IoT system: a storage layer (Postgres, Timescale and S3 are the main tools), a view layer (Vue web apps) and a business logic layer, consisting of a set of NestJS services for timeseries data and financial transaction processing. The schema is also nothing new: a set of tables to track the state of energy meters, process inbound and outbound commands from and to devices on the field and some RBAC tables were some of the center pieces.

Yet, it took us about a year to reach a production-grade setup. RLS rules, social login, embedding of a Grafana charts in the frontend, setting up a timeseries database a double entry accounting system took us months to get right. During that year, I often wondered about a faster, simpler way to get started from a ready-made, use-case-focused template instead of rebuilding everything, once again, from scratch. After all, our system was not too different from, say, one of those fleet-tracking systems that are commonly offered in the market I guess?

We could:

* Buy a **closed-source**, **ready-made** system. However, there seemed to be no marketplace that sold systems that we could fully own and customise according to our needs. At best there are marketplaces for UI components or entire frontends, which are hard to customise against a specific database schema.

* Use **low-code** platforms (eg Bubble). These tools can take you suprisingly far, as long as the user remains within their walled-garden and stick to their way of doing things. Since they have an incentive to lock users in, they also make it difficult to export applications built with their tools, and the result is more often than not incompatible with any other platform. 

* Database wrappers (eg Supabase, Firebase). However, they only solve the backend part of the problem and also create vendor lock-in.

* AI. Great to write boilerplate code, but it does not remove the pain of having a battle-tested system ready for use.

Interestingly, in the two previous companies I worked at (one of which was in a completely different sector), we found ourselves having to build different flavors of similar systems. There too, it took us months to get to production.

What are exactly the incentives

* Business incentives

* 

The question has to be asked then: is there any room for an IKEA of software, where developers can share package their code in a standardised way, and others can then use these "packages" to deploy preconfigured cloud applications with one command?