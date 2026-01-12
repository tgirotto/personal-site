---
slug: an-ikea-for-software
title: "IKEA for software"
# authors: [tgirotto]
tags: [starthub]
---

The core product of the company I currently work for is a software platform to manage solar mini-grids. From a user's perspective, the platform consists of an admin panel and a suite of mobile-first web apps that our customers use to monitor and control solar mini-grids. It is a fairly standard IoT system: a storage layer (Postgres, Timescale and S3), a view layer (a set of Vue web apps) and a business logic layer, consisting of a set of NestJS services for timeseries data and financial transaction processing. The schema is also nothing new: a set of tables to track the state of energy meters, process inbound and outbound commands from and to devices on the field and some RBAC tables are some of the center pieces.

Yet, it took us about a year to reach a production-grade setup. RLS rules, social login, embedding of a Grafana charts in the frontend, setting up a timeseries database and a double-entry ledger for transaction processing took us months to get right. During that year, I often wondered about a faster, simpler way to get started from a ready-made, use-case-focused template instead of rebuilding everything, once again, from scratch. After all, our system was not substantially different from, say, one of those fleet-tracking systems that are commonly offered in the market.

### Available options

These options come currently to mind:

* Buy a **closed-source**, **ready-made** system. However, there seemed to be no marketplace that sold systems that we could fully own and customise according to our needs. At best, there are marketplaces for UI components, blocks or entire frontends, which are hard to customise against a specific database schema.

* Use **low-code** platforms (eg [Bubble](https://bubble.io/)). These tools can take you suprisingly far, as long as the user remains within their walled garden and stick to their way of doing things. Since they have an incentive to lock users in, they also make it difficult to export applications built with their tools, and the result is more often than not incompatible with any other platform. 

* Leverage **database wrappers** (eg [Supabase](https://supabase.com/), [Firebase](https://firebase.google.com/)). However, they only solve the backend part of the problem, that is, they do not offer out-of-the-box UIs.

* AI. Great to write boilerplate code and ship fast, but it does not remove the pain of having a battle-tested system ready for use.

### Software is still largely artisanal

Despite the trillions of dollars flowing through the industry, software development remains a largely artisanal craft. We treat every new project like a piece of bespoke furniture, meticulously hand-carving the same legs, joints, and frames that have been built a million times before. We take pride in our "hand-coded" auth flows and "custom-built" data pipelines, ignoring the fact that, to the end user, these are merely invisible utilities. In any other mature industry — from automotive to construction and furniture making — this level of repetition would be seen as an economic failure. We are currently in a pre-industrial era of code, where we lack the standardized "blueprints" that would allow us to skip the foundational labor and move straight to the architectural finishings that actually define a product’s value.

### Top to bottom

All the solutions above but one seem to focus on a **bottom-to-top** approach, where value is added by speeding up the composition of a system from the bottom up. I am wondering then, what about a **top-to-bottom** approach instead? If a company's goal is to develop a platform that resembles existing platform, and software is non-tangible (ie, because of its immaterial nature it can always be customised), would it not make sense to start from the top, work one's way down to the highest possible layer, and customise the template from there?

Why is this not happening? Here are some of the reasons I can think of:

* Systems are just **too different** from each other. Yes, many of them need auth, RLS, etc, but each system has its own.

* **Build-from-scratch** syndrome. Developers have a tendency to want to reinvent the wheel for the sake of engineering. Building a system from scratch also has a hidden advantage, which is guaranteeing full control over one's product. In fact, when building a system (code, infrastructure), a developer is implicitly mastering the use and management of the system itself. That knowledge becomes fundamental later on, when wanting to extend it, scale it or fix it. I have some doubts about this point though; in fact, the same argument can be made about AI, which, while writing the code itself, is also eroding a developer's knowledge of their own system.

* Lack of good **documentation**. A full-fledged system would need to be extremely well-documented in order for a software team to adopt it.

<!-- If we were to lay out system building in a spectrum, it would probably look like this

(add drawing) -->

### The IKEA analogy

If the software wold really still is in its artisanal stage, then the question has to be asked: "could we have an "IKEA of software"? The idea has been floating around in some form for another for a long time. In the case below, "IKEA" blocks are intended in the form of click-to-configure solutions (Supabase-style apis come to mind).

<div style={{textAlign: 'center', margin: '2rem auto'}}>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Rp4-E5ATQNY"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
</div>

In this blog, the "IKEA approach" is instead referring to a higher level in the stack, where the starting point is actually the top of the stack, rather than the bottom. Is there any room for an **IKEA of software**, where developers can share package their code in a standardised way, and users can then leverage these "packages" to deploy preconfigured cloud applications with one command? It could make sense for a few reasons:

* Most real world business cloud applications are fairly well-defined. A fleet-tracking system, a bus-ticketing platform, an IoT platform. Of course, each system has its own quirks, but it is often cheaper to modify a pre-existing system rather than building a completely new system.

* Most software developers, agencies or software houses have unused software lying around that was used at some point to solve real-world problems. Being able to package their software a have **passive income** from it would benefit them.

* Developers generally do not enjoy the process of setting up yet-another-user-management system. A painful, repeatable problem would be solved in a **standardised** way.

* Since cloud software is packaged in a standardised way, developers would need to spend **less time reading documentation**.

* Software would be **decoupled** from its creator, very much in the same way writing decouples information from the writer or video decouples content creators from their content.

### Conclusion

As we look at the current landscape, it is clear where the momentum lies. From the rise of database-as-a-service to the explosion of AI-powered autocomplete, the software industry is doubling down on bottom-to-top efficiency. We are getting incredibly good at generating the individual bricks and mortar with the click of a button or a well-crafted prompt. Yet, having the bricks doesn't mean the house is built, and it certainly doesn't mean the foundation is battle-tested. If we continue to focus solely on speeding up the composition of the bottom layers, we are still leaving the hardest part — the orchestration of a production-grade system — to be solved from scratch every single time. This leads to the core question: while all our current tools, including AI, are implicitly focusing on the bottom-to-top, would there be more value in focusing on the opposite? Perhaps the future of software isn't in helping us write the code faster, but in providing the "flat-pack" systems that allow us to start at the top and only dive into the depths when we truly need to innovate.