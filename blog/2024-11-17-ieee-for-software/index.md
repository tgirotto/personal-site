---
slug: an-ieee-for-software
title: "IEC specifications for software"
# authors: [tgirotto]
tags: []
---

Recently I have had to implement a token generation system to help customers buy energy in solar minigrids. The [STS](https://www.sts.org.za/) standard is widely used in Sub Saharan countries, and it specifies how tokens should be generated to control energy, gas and water meters. Most smart energy meters deployed in the Sub Saharan region follow [62055-41](https://webstore.iec.ch/en/publication/28425). For the ones that do not know (I didn't), IEC specifications are international technical standards published by the [IEC](https://iec.ch/homepage) (International Electrotechnical Commission). They define how electrical, electronic, and digital systems should be designed, built, tested, and made interoperable. Reading such kind of specification for the first time made me wonder about why such specifications are needed, why they are not mainstream in the world of software and whether they could add value to it.

### Do international standards really not exist in world of software?

Some IEC specifications that are purely about software. Here are some examples:

* [IEC 62304](https://www.iso.org/standard/38421.html). This is the international standard for medical device software life cycle processes.

* [ISO 26262](https://webstore.ansi.org/standards/iso/ISO262622018-1725424). This is a standard for functional safety in automotive software.

* [MISRA C](https://en.wikipedia.org/wiki/MISRA_C). These are guidelines for software in critical systems.

So, no, it is not true that they do not exist in the world of software. Standard specifications have existed in mission critical software for a long time. However, there seem to be no standard specifications for lightweight software, where by "lightweight" we mean "software that is not life-endangering".

### Why are IEC-like specifications useful?

Here are the reasons I can think of:

* Interoperability. 

* Standardisation.

* Risk mitigation.

The mitigate business and technical risk by increasing decoupling between vendors. Very much like interfaces in software, a specification ensures the minimum requirements and set of behaviors a system needs to have in order to be defined as.

In other words, specifications are not just useful, but necessary to allow technical ecosystems to scale.

### Why do IEC-like specifications not exist in the world of software?

* Software is "cheap". Not in the sense that the time taken to make it is cheap, but because of its immaterial nature, that makes improvisation much more acceptable than in the world of hardware. In fact, when hardware is involved, a list of components, with costs, lead times, replacements and more is generally needed, since the cost of an error is much greater.

* Software bugs are, in many cases, solvable in production.

### Are APIs the standard specifications of the world of software?

Yes and no.

Yes in the sense that they separate the "what" from the "how". When we call a third-party api, we only know what the api does, and do not really care how it achieves its goal. There are some attempts to standardise APIs themselves in some sectors, but they are specific to fields such as healthcare, where standards such as [HL7/FHIR](https://hl7.org/fhir/) exist.

No in the sense that there is no standardised solution for common use cases. For example, there is no standard for a bus ticketing platform, although it would work pretty much the same, anywhere in the world.

### Could we benefit from IEC-like specifications in the world of software?

If we had a standard specification for the minimal functionality a bus-ticketing platform should offer, some of the benefits would carry over:

* interoperability. Backend and frontend would be easier to adapt to each other. For example, a Vue admin panel for data management would be easier to adapt to a backend if the main database entities were known from the start.

* decoupling. Frontend and backend developers would be able to work more independently if there was at least general agreement on the most basic requirements the end product needs to implement.

* cost of development. Because development is broken into defined blocks, developers would be eable to more easily assess whether it makes sense to reuse an existing block, or if it makes sense to build a completely new one.

* best practices. Because a common solution is agreed upon, many developers could contribute to refining the common solution into an optimal one, rather than multiple teams working on different solutions to similar problems.