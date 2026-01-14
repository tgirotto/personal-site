---
sidebar_position: 2
---

# Iterations

I took a few hours to play around with different tools and understand the pros and cons of each.

### Iteration 1: Apache Guacamole

[Guacamole](https://guacamole.apache.org/) is a clientless remote desktop gateway that uses standard protocols like VNC, RDP, and SSH. While reliable, it presents two major hurdles for this project:

* Performance latency: because it translates display protocols into HTML5 Canvas, there is a noticeable "input lag," especially when streaming high-fidelity video or complex web pages.

* Static infrastructure: guacamole is a gateway, not a manager. It assumes your target machines (VMs or physical) are already running. It cannot "spin up" a new environment on demand, meaning you waste resources by keeping idle machines alive.

### Iteration 2: KASM Workspaces

After doing some research, I have come across [KASM](https://kasm.com/), which orchestrates containers.KASM is a leader in container streaming. Instead of a full VM, it streams an isolated Docker container directly to the browser using the KasmVNC protocol. It handles the entire lifecycle—creating a container when a user logs in and destroying it when they log out. However, while technically superior, KASM’s licensing model for workspaces becomes expensive for scaling, and the Community Edition has strict limitations that don't align with my limited resources.

### Iteration 3: Flowcase

[Flowcase](https://github.com/flowcase/flowcase) emerged as an attempt to provide an open-source alternative to KASM, focusing on the same container-to-browser streaming logic. The codebase is significantly younger. During testing, the lack of community support and documentation made it difficult to troubleshoot. More crucially, session recording for auditing and security—are currently missing, which is a dealbreaker for this project.

### Iteration 4: Fly.io

Let's change strategy: let's move from managing containers locally to deploying them on edge infrastructure instead. [Fly.io](https://fly.io) allows us to run firecracker microVMs close to the user, reducing the physical distance data has to travel (latency). What's particularly interesting is that, wsing their Scale-to-zero capability, we only pay for the seconds the browser is actually running. This solves the infrastructure management problem by treating the browser as a disposable, serverless function.

### Iteration 5: VPS

While evaluating Fly.io, I encountered a significant 30s+ cold-start delay across all heavy GUI applications (Brave, LibreOffice). Further investigation revealed that Fly.io lazy-loads volume content. This architecture is optimized for small microservices but introduces high latency for applications with large file footprints.

Comparative testing on a standard VPS confirmed that local SSD speeds resolve the issue. Consequently, I am moving away from Fly.io to avoid these storage latency penalties. My next step is to implement a simplified orchestration and routing layer—a 'poor man’s K8s'—on top of traditional VPS instances to maintain performance without the complexity of a full Kubernetes cluster.