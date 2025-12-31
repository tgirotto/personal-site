---
slug: levels-of-abstraction
title: "Starthub - the right level of abstraction"
# authors: [tgirotto]
tags: [starthub]
---

The company I currently work for offers a software platform to manage solar mini-grids. From the user's point of view, it consists of an admin panel and a suite of mobile-first web apps that our customers use to manage their solar mini-grids. It is a fairly standard CRUD system: a storage layer (Postgres database + S3 storage), a view layer (Vue web apps) and a business logic layer, consisting of a set of NestJS services (data and financial transaction processing). The schema is also fairly standard: a set of tables to track the state of energy meters, process inbound and outbound commands from and to devices on the field, RBAC and among the others. Yet, it took us about a year to reach a production-grade setup. RLS rules, social login, embedding of a Grafana instance... those are the boring, painful, necessary steps that software teams seem to keep tackling, over and over again. During that year, I often wondered whether there would be faster, simpler ways to get started from a ready-made template instead of rebuilding everything, once again, from scratch. After all, our system was not too different from, say, one of those fleet-tracking systems that are commonly offered in the market, no?