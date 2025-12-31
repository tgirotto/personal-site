---
slug: an-ieee-for-software
title: "Starthub: IEEE for software?"
# authors: [tgirotto]
tags: [starthub]
---

The company I currently work for offers a software platform to manage solar mini-grids. From a user's point of view, the platform consists of an admin panel and a suite of mobile-first web apps that our customers use to manage their solar mini-grids. It is a fairly standard CRUD system: a storage layer (Postgres and S3 are some of the tools we use), a view layer (Vue web apps) and a business logic layer, consisting of a set of NestJS services (data and financial transaction processing). The schema is also nothing new: a set of tables to track the state of energy meters, process inbound and outbound commands from and to devices on the field and some RBAC tables were some of the center pieces.

Yet, it took us about a year to reach a production-grade setup. RLS rules, social login, embedding of a Grafana charts in the frontend, setting up a timeseries database a double entry accounting system took us weeks or months to get right. Interestingly, in the two previous companies I worked at, we had to build similar components. Those are all boring, painful, necessary steps that software teams seem to keep tackling, over and over again just to get a new platform running. During that year, I often wondered whether there was a faster, simpler way to get started from a ready-made, use-case-focused template instead of rebuilding everything, once again, from scratch. After all, our system was not too different from, say, one of those fleet-tracking systems that are commonly offered in the market, no?

Here are the solutions I could think of:

* Buy a closed-source, ready-made system. However, there seemed to be no marketplace to o

It's as if we were 

At the same time, there are millions of software developers that. What if there was a standardised way to separate software 