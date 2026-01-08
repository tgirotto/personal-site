---
sidebar_position: 1
---

# Overview

Opencollect is an open source version of [Epicollect](https://five.epicollect.net/).

* In order to lower the barrier to entry for contribution as much as possible, a single programming language is used across the project: Typescript.

* Since survey data is relational, we are going to use Postgres. Since we are trying to minimize time-to-market, we will use [Supabase](https://supabase.com), which offers several advantages:

a) access to the massive Postgres ecosystem (eg geoquery support is particularly interesting to our use case).
b) object a storage service out of the box.
c) clear schema migration strategy.
d) a user management system.
e) a branching strategy for test environments.

* Again with the goal of minimizing development effort, we are going to offload the data sync mechanism to [Electric SQL](https://electric-sql.com/), which is compatible with Supabase.

* In order to make it easy to deploy, we are going to only focus on single-node architecture. A single node with vertical scaling should be enough for the vast majority of users to be able to collect potentially millions of datapoints.

* In order to avoid Play Store and App Store hell and keep the solution lightweight, the frontend is build in Vue as a PWA.

### Roadmap

In order to minimize risk, we want to focus on the trickiest part of the system first, which is data sync with Electric SQL.

1) Create a simple database schema.

2) Create a simple Vue app that talks to Supabase.

Once these steps are developed, the core premise will be validated, and we will regroup and organise work better.