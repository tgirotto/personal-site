---
slug: decentralised-software
title: "Technical vs business decentralisation"
# authors: [tgirotto]
tags: [software]
---

In the last few months I have had the chance to work from a coworking space focused on crypto projects. It has been an interesting experience, for several reasons. First, I was reminded, once again, how vast and differentiated the world of software actually is. While web development, CRUD or mobile apps make the news that reach me with the most frequency, there are hundreds, if not thousands, of verticals that I am completely unfamiliar with. Secondly, interacting with developers that work in the crypto space gave me a chance to think more deeply about ideas that I was already aware of, but that I had never really put serious thought into.

### Decentralisation

One of the most frequent doubts I have is about the domain of space in which crypto is trying to give solutions: is it attempting to give a technical solution to a practical problem? Initially, it definitely looked so. In fact, while Bitcoin definitely made it easier to exchange currency in a with no middlemen, it is also true that most users would still want the backup option of being able to get human assistance when things go South (eg losing their credentials). However, the developers I met at the coworking space often mentioned how they were building new tools to allow for credential recovery and much more. It sounds like, as the ecosystem evolves, new, more user-friendly tools become available to users and lower the barrier to access to the crypto world. If this is the general trend, then, given enough time, decentralised tools should completely remove the need for a man in the middle. In this sense, while we maybe started out 15 years ago with a partial solution, we are now getting closer to a viable system that, besides being technically decentralised, also allows for business decentralisation. This brings about a question: do businesses actually want decentralisation?

### Natural monopolies and conflicts of interest

The fewer options a customer enjoys, the more negotiating power a business has over them. That is, businesses has a natural incentive to decrease optionality in the market as much as possible. Silicon Valley famously [encourages](https://www.linkedin.com/pulse/peter-thiel-principle-why-monopoly-entrepreneurs-goal-collins-ii-8dosc/) entrepreneurs to attempt to build monopolies. The question then follows: if businesses have a natural drive towards centralisation, does this not create a conflict of interest with the techical efforts for decentralisation in software?

### Exhibit A: the Internet

A great example of technical vs business decentralisation is the Internet. Built on decentralised technology, it was designed to have no single points of failure. Protocols like TCP/IP, HTTP, and SMTP are essentially "public goods" — no one owns them, and anyone can use them to build a service.

However, as the Internet matured, business forces aggressively centralised services built on top of it. While the "pipes" remained decentralised, the business-related components - for example data - became massive silos. Companies like Google, Amazon, and Meta leveraged network effects to create digital monopolies. They offered convenience and "free" services in exchange for control over data and user attention. This suggests that technical decentralisation is a necessary but insufficient condition for a truly open ecosystem. Without a way to align economic incentives, the gravity of business will always pull back toward a central hub.

### Exhibit B: email vs instant messaging

A similar dynamic played out with messaging protocols in the form of email and instant messaging (Slack, WhatsApp, Discord, Telegram and the likes). Email can effectively be considered a "decentralised" protocol: no single individual or company owns email. Because it is built on open standards (SMTP, IMAP), a Gmail user can message a ProtonMail user, who can then read that message on an iPhone mail client or a Linux terminal. There is no single "CEO of Email" who can decide to shut down the network or force everyone to use the same app. 

On the other hand, instant messaging networks are built on centralised designs. As a result, the Slacks and WhatsApps of the world are essentially walled gardens. One cannot send a WhatsApp message to a Slack channel (well, technically it can be done, but these networks were not built with to interact that way). As a consequence, the companies running these services have then come to own the entire stack: the protocol, the server, and the interface. From a user experience perspective, Slack is often "better" than email. It’s faster, has better emoji reactions, and feels more cohesive. Why? Because centralisation allows for rapid iteration. Slack can push a new feature to every user overnight. Email, being decentralised, takes decades to change because thousands of independent providers have to agree on new standards. As a developer, this is the ultimate "quality vs. sovereignty" trade-off. We often sacrifice the freedom of decentralised protocols (email) for the polished, high-velocity features of centralised products (Slack).

### What are the best use cases for blockchains then?

If business naturally trends toward centralisation for the sake of efficiency, then the best use cases for blockchains are those where trust is more valuable than efficiency. These are some of the examples I can think of:

* Voting systems. In a centralized system, the "admin" can modify the database. A blockchain-based system, where any citizen can potentially spin up a node to validate election results, makes the voting process "censorship-resistant" and "auditable," where the cost of a slow tally is worth the guarantee that the result is tamper-proof.

* Philantropy. Donors often distrust how funds are allocated. Smart contracts can ensure that funds are only released when specific, verifiable milestones are met, providing "programmatic transparency" that a traditional charity cannot match.

* Asset registries (land, IP, carbon credits). These require a "permanent memory" that outlasts any single government or corporation. By using a blockchain, one ensures that a title deed or carbon credit cannot be double-counted or deleted by a corrupt official.

### Conclusion

Technical decentralization and business decentralization are distinct forces. While we often view decentralization as a "silver bullet" for freedom, we must acknowledge that centralization is an efficiency feature. Especially in the business world, centralization enables the specialization and rapid scaling that form the foundation of our economy. The challenge for the current generation of developers isn't to decentralize everything, but to identify the specific areas where sovereignty is worth the **inefficiency tax**.