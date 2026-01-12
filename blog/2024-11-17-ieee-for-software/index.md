---
slug: an-ieee-for-software
title: "IEC specifications for software"
# authors: [tgirotto]
tags: []
---

Recently I have had to implement a token generation system to help customers buy energy in solar minigrids. The [STS](https://www.sts.org.za/) standard is widely used in Sub Saharan countries, and it specifies how tokens should be generated to control energy, gas and water meters. Most smart energy meters deployed in the Sub Saharan region follow [IEC 62055-41](https://webstore.iec.ch/en/publication/28425). For the ones that do not know (I didn't), IEC specifications are international technical standards published by the [IEC](https://iec.ch/homepage) (International Electrotechnical Commission). They define how electrical, electronic, and digital systems should be designed, built, tested, and made interoperable. Reading such kind of specification for the first time made me wonder about why such specifications are needed, why they are not mainstream in the world of software and whether they could add value to it.

### Do international standards exist in world of software?

Some IEC specifications themselves are actually about software. Here are some examples:

* [IEC 62304](https://www.iso.org/standard/38421.html) is the international standard for medical device software life cycle processes.

* [ISO 26262](https://webstore.ansi.org/standards/iso/ISO262622018-1725424) is a standard for functional safety in automotive software.

* [MISRA C](https://en.wikipedia.org/wiki/MISRA_C) are guidelines for the development of software in critical systems.

So, yes, standard specifications have existed in mission-critical software for a long time. 

Could APIs be considered standards? Yes and no. Yes in the sense that they separate the "what" from the "how". When we call a third-party api, we only know what the api does, and do not really care how it achieves its goal. There are some attempts to standardise APIs themselves in some sectors, but they are specific to fields such as healthcare, where standards such as [HL7/FHIR](https://hl7.org/fhir/) exist. No in the sense that there is no standardised solution for common use cases. For example, there is no standard for a bus ticketing platform, although it would work pretty much the same, anywhere in the world.

### Lightweight software

While standards exist, even in the world of software, they do not seem to be apply to lightweight software, where "lightweight" refers to software where user lives are not necessarily at stake, but where the business case has a clear scope and standard solution. For example:

* A **bus ticketing** platform. While every city in the world needs a way to issue and validate tickets, there is no universal "IEC-like" specification for the underlying software logic. Each vendor builds a proprietary system, making it difficult for cities to switch providers or integrate with third-party apps without expensive, custom-built adapters.

* A **ride-hailing** platform. Despite the core functionality being identical — matching a driver with a rider, calculating a fare, and processing a payment — every company reinvented the wheel. Because no standard specification exists, developers are stuck building similar applications over and over again.

* A **LoRaWAN device monitoring** platform. While the LoRaWAN protocol standardizes how data travels through the air, the software that monitors and visualizes that data is often rebuilt from scratch, even if the core value - collecting timeseries data from devices on the field - is common to many uses cases. A standard specification for the monitoring layer would allow users to swap their dashboarding software as easily as they swap a physical sensor.

In other words, specifications are not just useful, but necessary to allow technical ecosystems to scale.

### Could we benefit from software standards being more widespread?

Probably. If we had a standard specification for the minimal functionality a platform should offer, some of the benefits would carry over:

* **Interoperability**. Integration would move from a "custom build" to a "configuration" task. For instance, a Vue-based admin dashboard wouldn't need to be custom-coded for every new project; it could be built to expect the standard entities and state transitions of a "ticketing" or "monitoring" specification, making it instantly compatible with any compliant backend.

* **Decoupling**. True decoupling is currently a myth in many projects because the frontend is often a mirror of a changing, proprietary backend API. A formal specification provides a "fontract-first" development environment where teams can work in total independence, knowing that as long as they meet the spec, the components will fit together perfectly.

* **Cost of development**. Specifications turn "unknowns" into "knowns." When a project is broken into standardized blocks, stakeholders can more accurately judge whether to buy or build. Instead of estimating a vague feature, they are assessing the implementation of a defined standard, significantly reducing the "discovery" phase of development.

* **Best practices**. Instead of a thousand developers solving the same edge cases in isolation, a common specification allows the global community to refine a single, optimal logic. Much like how the security community improves OAuth, a "ride-hailing spec" would benefit from the collective wisdom of developers worldwide, baking edge-case handling and security directly into the standard.

### Why is this not happening then?

I can think of two main reasons:

* Software is "cheap". Not in the sense that the time taken to make it is cheap, but because of its immaterial nature, which makes improvisation much more acceptable than in the world of hardware. When hardware is involved, a list of components with costs, lead times, and replacements is needed because the cost of an physical error is terminal.

* Standards mean overhead. Implementing a rigorous specification requires a significant upfront investment in "reading and understanding" before a single line of code is written. In a world driven by minimum viable products and venture capital, the pressure to ship features often outweighs the long-term benefits of standardization. Most startups would rather be first to market with a messy, proprietary API than be second to market with a perfectly compliant IEC-standardized one.

* Software bugs are, in many cases, solvable in production. Because we can "hotfix" a bug and deploy it in seconds, the culture of software development has shifted away from exhaustive pre-planning. In hardware or civil engineering, you cannot "patch" a bridge once it’s built; in software, we have grown comfortable with the "move fast and Bbreak things" philosophy because the cost of a mistake is rarely permanent.

* Lock-in incentives. Proprietary "specifications" are often a business feature, not a bug. When a team builds their own unique solution for a common problem, they create implicit vendor lock-in. By avoiding open standards, companies make it technically difficult and financially expensive for customers to migrate to a competitor. In this landscape, standardization is seen as a threat to "moats" and customer retention, whereas in the world of hardware and utilities, the IEC approach recognizes that the ecosystem cannot scale if every component is a walled garden.

### Conclusion

In conclusion, while the idea of universal software standards is logically sound, the reality of the software industry often creates a "rational" resistance to them. In many sectors, the pressure to standardize simply isn't high enough to overcome the massive gravitational pull of speed, profit, and competition.