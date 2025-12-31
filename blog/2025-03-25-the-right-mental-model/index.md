---
slug: the-right-mental-model
title: "Starthub - the right mental model"
# authors: [tgirotto]
tags: [starthub]
---

The company I currently work for offers a software platform to manage solar mini-grids. From a user point of view, it consists of an admin panel and a suite of mobile-first web apps that our customers use to manage their solar mini-grids. It is a fairly standard CRUD system: a storage layer (Postgres and S3 are some of the tools we use), a view layer (Vue web apps) and a business logic layer, consisting of a set of NestJS services (data and financial transaction processing). The schema is also fairly standard: a set of tables to track the state of energy meters, process inbound and outbound commands from and to devices on the field and some RBAC tables were some of the center pieces.

Yet, it took us about a year to reach a production-grade setup. RLS rules, social login, embedding of a Grafana charts in the frontend, setting up a timeseries database a double entry accounting system and more. Those are all boring, painful, necessary steps that software teams seem to keep tackling, over and over again just to get a new platform running. During that year, I often wondered whether there would be faster, simpler ways to get started from a ready-made template instead of rebuilding everything, once again, from scratch. After all, our system was not too different from, say, one of those fleet-tracking systems that are commonly offered in the market, no?

* Buy a closed-source, ready-made system

At the same time, there are millions of software developers that. What if there was a standardised way to separate software 