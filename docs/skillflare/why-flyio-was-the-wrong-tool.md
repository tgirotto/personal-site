---
sidebar_position: 3
---

TODO: improve

# Why Flyio was the wrong tool

In the last post, I ended up considering Flyio as an option.

However, I noticed that brave was took 30+ seconds to start, so i dug into the forums to understand if anyone had had that problem. Then i tried with chromium, and but no luck. Then i noticed that LibreOffice had the same problem, and eventually that any application was having that problem of taking 30+ seconds to start. however i also realised that the second time around it was only 1-2 seconds. so it was something about caching. 

with a mix of docs, gemini and forums i found out that flyio, in order to speed up startup times, lazy loads contents from the volumes. while this is ok for small apps, like a node server, that only needs a few tens of files, it becomes (very) noticeable when it comes to heavy applications like browsers.

i then tried to deploy the same docker to a simple vps, which instead loads files from ssd, and the lag disappeared.

conclusion: this means that, since i cannot leverage the auto-scale feature from flyio, i will have to build my own poor-man-kubernetes (at this point in development k8s would be way to complex) and routing.