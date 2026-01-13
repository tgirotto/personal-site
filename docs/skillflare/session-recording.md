---
sidebar_position: 2
---

# Iteration 1: KASM

After doing some research, I have come across KASM, which orchestrates containerized desktop infrastructure (VDI) using a highly secure, browser-based delivery method. It excels at streaming entire desktops or individual apps via H.264, providing a seamless user experience with built-in DLP (Data Loss Prevention) features.

Although it's a brilliant piece of technology, it's expensive, and this makes it unusable in my use case. The licensing costs per user, combined with the heavy resource overhead required to run the KASM control plane, created a high barrier to entry for a project that needs to scale dynamically.

# Iteration 2: Apache Guacamole

Seeking a more cost-effective, open-source alternative, I looked into Apache Guacamole. As a clientless remote desktop gateway, it supports standard protocols like VNC, RDP, and SSH.

The Pros: It removed the licensing fees and allowed for a highly customizable frontend.

The Cons: Guacamole still requires a significant "middle-man" architecture (guacd and a web server). While it solved the cost issue of the software itself, the operational complexity of managing a fleet of remote desktops and the latency involved in routing traffic through a central gateway didn't provide the "instant-on" feel I was looking for.

# Iteration 3: Fly.io

Finally, I pivoted away from traditional VDI/Remote Desktop protocols and looked at Fly.io, which allows for running Firecracker microVMs globally. Instead of streaming a desktop, we can package our environments as Docker containers and deploy them as ephemeral Firecracker VMs that live close to the user.

* Speed: These microVMs boot in sub-second times.

* Granularity: We can spin up a dedicated VM for a single user session and shut it down the moment they disconnect, ensuring we only pay for what we use.

* Simplicity: It removes the need for a complex orchestration layer like KASM or a gateway like Guacamole.

# Conclusion

By relying on Fly.io, we have found a scalable and cost-effective way to offer sandboxed, independent test environments. By moving the isolation layer from a full desktop stream to lightweight, ephemeral microVMs at the edge, we reduced our infrastructure overhead by nearly 70% while improving the end-user latency.