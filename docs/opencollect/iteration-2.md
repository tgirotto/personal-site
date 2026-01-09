---
sidebar_position: 1
---

# Discovery phase 2 - PWA

Since in the first iteration Electric SQL and Tanstack were used together with React, I figured it would be easier to just follow those examples. However, since I am now not using either of them anymore, and I am trying to slim down the project as much as possible, I will build a quick example with Vue, which is a simpler and a bit more trimmed down than React.

### Takeaways

After a couple of hours of research, I found out that IndexedDB is not always reliable, especially on iOS. In fact, iOS Safari has a policy where it can clear the storage of a website if the user hasn't interacted with it in 7 days. For a field researcher who might not use the app for two weeks between trips, this is a catastrophic risk. Since Epicollect main focus is offline data collection, the offline reliability requirement is not negotiable.

So it sounds like we are going to need:

* A framework that lets us target the different mobile platforms natively.

* A a framework that lets us keep a single codebase for the builder and the collector apps.

It sounds then we need to pick between Flutter and React Native. While React Native is popular, it has a very fragmented ecosystem and treats web as a bit of a second class citizen. so it sounds like Flutter might be the best option.