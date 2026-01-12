---
slug: the-right-mental-model
title: "Starthub - the right mental model"
# authors: [tgirotto]
tags: [starthub]
---

Over the past few months I have been thinking quite a bit about what a tool to deploy stacks of arbitrary complexity should look like. I have already written two blog posts about the [rationale](https://tommaso-girotto.co/blog/an-ikea-for-software) and best [level of abstraction](https://tommaso-girotto.co/blog/levels-of-abstraction) to implement it. So far, it looks like some kind of orhestration engine powered by Docker/WebAssembly. This would allow to package systems (frontend, backend, any kind really) of arbitrary complexity, potentially allowing to run UI-based configuration steps automatically. This is far from a complete model though, and many questions are still unanswered.

<!-- truncate -->

### Are "packages" just cloud primitives?

It does not look like that is the case. In fact, some of these "packages" could very well be purely about configuration. For example, a step that logs into a user's Google Cloud Platform account and copies the credentials into the environment variables of a Vue app that is going to be deployed to Netlify would not map to a cloud primitive. Instead, it sounds like we would need a model that is a little more generic, where an a "package" can be about deploying infrastructure, as well as configuring existing software and more; in other words, a model where a unit can perform any task a human being would be able to perform when deploying a new system.

It sounds like we need an "action" based model. I like the word "action" because it is generic enough to apply to all the use cases while not being tied to any specific layer in the stack. From now on, I will refer then to these packages as "actions".

### How to maximise reuse of actions?

If we want the system to be minimally useful, we need to lower the barrier to entry as much as possible for developers to create new actions, or, better, reuse existing ones. Despite AI being great at generating code (let us leave the discussiong about code quality aside), a working actions is much more than just a bundle of code. It's a **tested** bundle of code. By allowing users to build on top of actions created by other developers, leverage compounds. It sounds like we then need to somehow be able to **compose** existing actions into new actions. Actions would need some kind of registry for dependencies to be resolved and fetched.

From a philosophical standpoint, this bit is particularly important, because it is the technical solution to the "herd" problem mentioned in the previous blog posts, where we would want developers to reuse each other's work as much as possible.

### Should actions have access to the file system?

Yes. If we want actions to be able to perform configurations and be able to create and modify local files (for example, an app to be configured with social login), then they would need access to the fs.

### Where should actions run?

We could build a SaaS-like cloud service that allows users to run, and maybe that could be a way to monetise the service ways down the road. However, this structure assumes the developer is willing to share their credentials with a third party, which is often not possible. We could run actions through a Chrome extension, but this would mean restricting access to the filesystem or network (Chrome extensions have their own quirks when it comes to network operations). We could try using a system-based app (Tauri/Electron, Java applications and the likes), but this would increase friction. In fact, developers would then have to download the binaries before getting started.

A CLI sounds like the best compromise. In fact, a CLI would:

* minimise friction of adoption through tools such as **npx**. Incidentally, npx would also allow for simple version management, where, as soon as a new version is available, the developer is notified (this mechanism would have to be built internally with npx)
* keep options open for cross-platform support
* allow for native network and fs access
* be already familiar to developers
* allow for local, zero-trust execution of actions

In conclusion, Starthub is starting to look like a CLI tool that, used against a registry, allows for composable actions to be downloaded, configured and run on an arbitrary machine.