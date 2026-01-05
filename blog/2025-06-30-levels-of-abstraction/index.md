---
slug: levels-of-abstraction
title: "Starthub - levels of abstraction"
# authors: [tgirotto]
tags: [starthub]
---

Over the past weeks I have been spending a non-negligible amount of time working with [Supabase](https://supabase.com/), a platform for backend development that has exploded in popularity in the recent years. Sitting on top of Postgres, Supabase uses classic SQL dumps to dump and restore a database schema. SQL dumps are not just snapshots of a database, but can be seen as a way to package the entire business logic of a company. At the same time, in [one](https://tommaso-girotto.co/blog/an-ikea-for-software) of my past blog posts I explored the idea of a top-to-bottom approach to building software, where an entire system could be deployed with a single command independently of the amount and complexity of its components. The question needs then to be asked: could SQL be the right tool to package entire systems, so they can be exchanged, traded and deployed in a standardised way? And, if not, what would such a tool look like? What would be the best **level of abstraction** to work at?

### Iteration 1: SQL

Takeaways:

* SQL dumps only allow for packaging of the database schema. However, we need a tool that allows for the deployment of cloud architecture and business logic. In other words, we need a more generic, lower-level tool.

### Iteration 2: Infrastructure as Code

The IaC industry already offers well-established tools to spin up entire cloud architectures. For examples, both [Terraform](https://developer.hashicorp.com/terraform) and its open-source fork, [OpenTofu](https://opentofu.org/) not only can deploy entire cloud architectures, but also offer registries for developers to share modules and recipes.

Takeaways:

* Although a step forward with respect to the first iteration, deploying a cloud system of arbitrary complexity often entails steps of manual configuration. For example, if we wanted to deploy [Chirpstack](https://www.chirpstack.io/) to a VPS and get it to communicate with a backend server of sorts via webhook, we would need to create an API token via the admin panel and paste it into the environment variables of a Nest JS server. It sounds like we need a escape hatch to perform manual configurations when an API is not availble.

### Iteration 3: Docker

Problems:

* Docker seems to enable arbitrary complexity to the problem of packaging. However, Docker images easily take several MB, even to perform the smallest tasks, like, for example, an HTTP call.

### Iteration 4: Docker + WebAssembly

WebAssembly (WASM) seems to be the most interesting