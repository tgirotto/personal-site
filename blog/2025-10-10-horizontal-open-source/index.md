---
slug: horizontal-open-source-deployments
title: "Starthub - trends in OSS deployments"
# authors: [tgirotto]
tags: [starthub, software]
---

As a part of my work on [Starthub](https://starthub.so), I am having to think of a go-to-market strategy. However, given that Starthub is essentially a platform to deploy cloud architectures through generic actions, I would first need to build the some useful actions one by one. This might end up costing a lot in terms of time and effort, because I have no clear idea of what kind of actions would be actually interesting to users. Would developers prefere a simple action that only makes an API call to an API, or would they rather have an action that can deploy a fleet-tracking system in one command? Given that an action could be pretty much anything, I probably need to focus on action bringing a lot of value in a single transaction. Generally this means targeting the deployment of entire cloud architectures then, which take years to develop and built value into. Are there any "ready-made" architectures where I might know, for a fact, that my users would find useful? Open source project could be the way to go. In fact, many open source projects are already have a loyal user base, an already a well-defined scope and are painful to deploy. Instead of building full-fledged applications myself, I could just focus on making it simpler to deploy existing ones.

### Picking an open source project

There are thousands of open source projects out there. How to pick one? If we think of the pain of deployment as a crater, then the bigger the crater, the greater the value added by Starthub. In this scenario, the crater for an open source project will be defined by:

* **Width**, which is its popularity. This is measured as the "number of stars on Github" (I know this is a debatable metric, but it's an acceptable proxy).
* **Depth**, which is the complexity of its deployment. This is measured as the number of cloud primitives needed for the project to be deployed.

It does not take a lot of searching to find out that the biggest "craters" are represented by those open-source projects that have been gaining massive popularity lately and are composed of a lot of primitives, like [Supabase](https://supabase.com) (90k+ Github stars) and [n8n](https://n8n.io) (160k+ Github stars). Let's focus on n8n, the most popular one. If we look at the docs, there are several solutions to deploy the simplest, single-node configuration of n8n. That's great for small and hobby deployments, but not for production-grade, horizontally scalable deployments. In fact, the docs also offer documentation about [queue mode](https://docs.n8n.io/hosting/scaling/queue-mode/), which allows a much more robust, scalable configuration. Now, while it's great that n8n also takes into account the needs of power users, the documentation is quite lengthy to read, and, like it often happens, it leaves a lot of guess work up to the user. Could this be a good wedge to showcase the power of Starthub? 

### Hang on: a different approach to deployments of open source projects

While reading through forums, I have come across a radically different approach to deploying open source projects that has become increasingly popular lately: the [Railway](https://railway.com/deploy/n8n) approach. I found Railway very interesting because it is based on different tradeoffs than what Starthub chose. In fact, Starthub tries to be as unopinionated as possible and hands over full control to the user. In this way, it ensures that any edge case can be potentially handled (think the creation of API keys through a web UI of a platform that offers no corresponding APIs). However, it also adds complexity and introduces the danger of state drift. On the other hand, Railway focuses on simplicity in exchange for freedom and security. In fact, Railway lets you deploy a production-grade configuration of n8n with a single click, but it assumes you are ok with never leaving its walled garden.

### More incumbents

Several incumbents seem to have adopted a similar approach to Railway:

* dev.sh, which is the open source version of Railway. Besides hosting your stack, dev.sh makes it possible to deploy the same stacks your own cloud, which basically turns it into a horizontal-first of [Coolify](https://coolify.io/) or [CapRover](https://caprover.com/).

* [Dokploy](https://dokploy.com/), which leans heavily into the Docker Swarm ecosystem for horizontal scaling, offering a smoother path to multi-node clusters than many other self-hosted tools.

* [Elestio](https://elest.io/about) provides a full-Service experience for over 400+ open-source tools (like n8n, Supabase, or Plausible) while respecting a user's sovereignity. 

* Public cloud providers like [Fly.io](https://fly.io) and [DigitalOcean](https://digitalocean.com) have been offering managed container solutions for a while now.

* Even more alternative: Northflank, Render, Sliplane and others all have slightly different takes on this problem, but, since the focus of this article is about general trends, I will let them aside for now.

### We are moving up the stack

What's the general trend then? While up until a few years ago we had to install open source projects and, more generally, applications manually on a VPS, we can now instantly install a horizontal configuration of said projects, with the ability of scaling each of the required components (db, vm, etc) manually. In a sense, a new layer seems to be emerging in the world of cloud computing, which solely focuses on the horizontal, scalable configuration of applications. What's interesting to notice is that the managed solutions mentioned above all rely, in a way or another, on containerisation. 

### Conclusion: where does Starthub stand?

Rather than focusing exclusively on deployments, Starthub is more of a swiss knife that can be used to perform arbitray tasks, among which deploying cloud architectures. It can be useful in cases where:

* A user never wants credentials to be shared with a third party (the sovereignty wedge).

* A user needs assurance of zero lock-in.

* A user needs to deploy arhitectures across multiple cloud providers.

* A user needs to automate manual configuration steps when deploying a cloud system.