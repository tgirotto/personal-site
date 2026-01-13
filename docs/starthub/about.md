---
sidebar_position: 1
---

# About

Over the past few months I have been working on [Starthub](https://starthub.so), which is an npm for [actions](https://tommaso-girotto.co/blog/the-right-mental-model). To recap briefly, an action is an executable compute unit that:

* exchanges inputs and outputs as JSON arrays.

* has a single purpose.

Practically speaking, [in one of my previous articles](https://tommaso-girotto.co/blog/levels-of-abstraction) I reached the conclusion that an action can be of three kinds:

* **Docker**, for heavy-duty tasks.

* **WebAssembly**, for lightweight tasks.

* **Composition**. A composite action can be composed of an arbitrary number of other actions, of any kind.