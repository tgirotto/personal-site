---
slug: levels-of-abstraction
title: "Starthub - levels of abstraction"
# authors: [tgirotto]
tags: [starthub]
---

Over the past weeks I have been spending a non-negligible amount of time working with [Supabase](https://supabase.com/), a platform for backend development that has recently exploded in popularity. Sitting on top of Postgres, Supabase uses classic SQL to dump and restore a database schema. While SQL dumps were conceived as a way to take a snapshot of a database, they can also be seen as a way to package the entire business logic of a company. 

On the other hand, in [one](https://tommaso-girotto.co/blog/an-ikea-for-software) of my past blog posts I explored the idea of a top-to-bottom approach to building software, where an entire system could be deployed with a single command, independently of the amount and complexity of its components, and customised from an initial template. The question needs then to be asked: could SQL be the right tool to package entire systems, so they can be exchanged, traded and deployed in a standardised way? And, if not, what would such a tool look like?

### Iteration 1: SQL

Let's start from the database approach mentioned above. SQL dumps only allow for packaging of the database schema. This means that we have a standard, safe way of packaging the storage layer of any business application. However, SQL does not help us with business logic or deployment configuration. For example, SQL does not allow us to deploy servers running custom business logic to a public cloud provider. Instead, we need a tool that also allows for the deployment of cloud architecture and business logic. In other words, lower-level tool.

### Iteration 2: Infrastructure as Code

The IaC (Infrastructure As Code) industry already offers well-established tools to spin up entire cloud architectures. For examples, both [Terraform](https://developer.hashicorp.com/terraform) and its open-source fork, [OpenTofu](https://opentofu.org/) not only can deploy entire cloud architectures, but also offer registries for developers to share modules and recipes.

Although a step forward with respect to the first iteration, deploying a cloud system of arbitrary complexity often entails steps of manual configuration. For example, if we wanted to deploy [Chirpstack](https://www.chirpstack.io/) to a VPS and get it to communicate with a backend server of sorts via webhook, we would need to create an API token via the admin panel and paste it into the environment variables of a Nest JS server. It sounds like we need a escape hatch to perform manual configurations when an API is not availble.

### Iteration 3: Docker

While Docker is generally used as a tool to package long-running applications, it could potentially be used in a "throwaway" fashion, where after deploying a cloud system, the container simply stops. This would be quite powerful, because it would allow to perform configuration steps of arbitrary complexity, even against third party systems that do not offer an API. For example, if, as a part of a deployment, we had to create manually an API key in a third party tool through its UI, or configure social login, a [Magnitude](https://magnitude.run/)-powered script running inside a throaway Docker container could log into the third party tool and perform the configuration automatically on behalf of the user. Now, although Docker would allow arbitrarily complex systems to be deployed. even the smallest Docker images take several MB. This is particularly inefficient for small, simple packages, where the code to make even a simple API call would end up taking several MB.

### Iteration 4: WebAssembly

For small, specialized packages—such as a script designed to trigger a specific API call or verify a webhook—full container virtualization is often overkill. This is where WebAssembly (WASM) offers a middle ground: process-level virtualization. By targeting WASM, we can package configuration logic into binaries that are often only a few kilobytes in size. Unlike Docker, which requires a heavy daemon and a layered filesystem, WASM modules are platform-agnostic and execute at near-native speeds with near-instant startup times. This makes them the ideal "glue" for a deployment pipeline: they provide the strict isolation required to run untrusted third-party deployment scripts, without the multi-megabyte overhead of a Linux distribution. As more languages (Rust, Go, TypeScript via AssemblyScript) mature their WASM support, we move toward a world where the "package" for a cloud system is as lightweight as a SQL dump, but as capable as a full-blown installer.

### Conclusion

By using SQL as our starting point, we’ve traced a path from simple data snapshots to a more ambitious vision of "executable infrastructure." We’ve moved across the spectrum of abstraction—from the rigid safety of the storage layer to the flexible, programmable environments of Docker and WebAssembly. The ideal package likely isn't a single technology, but a hybrid orchestration of WebAssembly for lightweight, instant-start configuration scripts, and Docker as the "escape hatch" for heavy, legacy, or complex edge cases. Together, they fulfill the top-to-bottom promise: an entire system that is as portable as a SQL dump, yet capable of self-assembling into a production-ready cloud environment with a single command.