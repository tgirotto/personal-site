---
slug: an-ikea-for-software
title: "Starthub - IKEA for software"
# authors: [tgirotto]
tags: [starthub]
---

The company I currently work for offers a software platform to manage solar mini-grids. From a user's perspective, the platform consists of an admin panel and a suite of mobile-first web apps that our customers use to manage their solar mini-grids. It is a fairly standard IoT system: a storage layer (Postgres, Timescale and S3 are the main tools), a view layer (Vue web apps) and a business logic layer, consisting of a set of NestJS services for timeseries data and financial transaction processing. The schema is also nothing new: a set of tables to track the state of energy meters, process inbound and outbound commands from and to devices on the field and some RBAC tables were some of the center pieces.

Yet, it took us about a year to reach a production-grade setup. RLS rules, social login, embedding of a Grafana charts in the frontend, setting up a timeseries database a double entry accounting system took us months to get right. During that year, I often wondered about a faster, simpler way to get started from a ready-made, use-case-focused template instead of rebuilding everything, once again, from scratch. After all, our system was not too different from, say, one of those fleet-tracking systems that are commonly offered in the market I guess?

<!-- truncate -->

We could:

* Buy a **closed-source**, **ready-made** system. However, there seemed to be no marketplace that sold systems that we could fully own and customise according to our needs. At best there are marketplaces for UI components or entire frontends, which are hard to customise against a specific database schema.

* Use **low-code** platforms (eg Bubble). These tools can take you suprisingly far, as long as the user remains within their walled-garden and stick to their way of doing things. Since they have an incentive to lock users in, they also make it difficult to export applications built with their tools, and the result is more often than not incompatible with any other platform. 

* Leverage **database wrappers** (eg Supabase, Firebase). However, they only solve the backend part of the problem and also create vendor lock-in.

* AI. Great to write boilerplate code, but it does not remove the pain of having a battle-tested system ready for use.

* Scaffolding tools (eg CLIs). However, these are low-level, and do not remove the plumbing work one has to do.

All the solutions above but one seem to focus on a bottom-to-top approach, where value is added by speeding up the composition of a system from the bottom up. What about focusing on the top-to-bottom approach? For example, if a company's goal is to offer some kind of fleet-tracking service, would it not make sense to start from the top, work one's way down to the highest possible layer, and start customise the template from there?


Why is this not happening? Here are some of the reasons I can come up with:

* Systems are just too different from each other. Yes, many of them need auth, RLS, etc, but each system has its own.

* Build-from-scratch syndrome. Developers have a tendency to want to reinvent the wheel for the sake of engineering. Building a system from scratch also has a hidden advantage, which is guaranteeing full control over one's product. In fact, when building a system (code, infrastructure), a developer is implicitly mastering the use and management of the system itself. That knowledge becomes fundamental later on, when wanting to extend it, scale it or fix it.

* Lack of good documentation. A full-fledged system would need to be extremely well-documented in order for a software team to accept to use it.

If we were to lay out system building in a spectrum, it would probably look like this

(add drawing)

The idea of an "IKEA of software" has been floating around lately in some form for another. In the case below, "IKEA" blocks are intended in the form of click-to-configure solutions (Supabase-style apis come to mind as an example).

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

In this blog, the "IKEA approach" is instead intended as being at a higher level in the stack. Is there any room for an **IKEA of software**, where developers can share package their code in a standardised way, and users can then leverage these "packages" to deploy preconfigured cloud applications with one command? 

There might be a few reasons why this could make sense:

* Most real world business cloud applications are fairly well-defined. A fleet-tracking system, a bus-ticketing platform, an IoT platform. Of course, each system has its own quirks, but it is often cheaper to modify a pre-existing system rather than building a completely new system.

* Most software developers, agencies or software houses have unused software lying around that was used at some point to solve real-world problems. Being able to package their software a have **passive income** from it would benefit them.

* Developers generally do not enjoy the process of setting up yet-another-user-management system. A painful, repeatable problem would be solved in a **standardised** way.

* Since cloud software is packaged in a standardised way, developers would need to spend **less time reading documentation**.

* It would improve **decoupling** of software from its creator, very much in the same way YouTube and the likes decoupled content creators from their content.

In the next posts we will be exploring what a potential solution might look like!