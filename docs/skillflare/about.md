---
sidebar_position: 2
---

# About

Skillflare is an advanced assessment platform designed to move beyond multiple-choice questions. By providing a sandboxed environment, it enables multidimensional testing, where candidates are evaluated on their ability to solve real-world problems, troubleshoot live systems, and demonstrate critical thinking within a functional IT workspace.

### Requirements

* To maintain a sustainable business model, the infrastructure must be highly reactive. Resources should only be consumed when an assessment is active.

* Environments should be completely isolated from each other. Security and integrity are paramount. Each candidate must operate in a walled garden. No user should be able to see the processes, files, or network traffic of another.

* An environment should be accessible to users via a browser. To eliminate "it works on my machine" issues and remove the need for candidates to install heavy software (like VPNs or RDP clients), the entire experience must be delivered via HTML5.

* An environment should have some applications preinstalled, like the Office suite or a browser.

* We should avoid Docker in Docker. While it's tempting to run Docker inside a container for IT labs, DinD introduces significant security vulnerabilities (requiring --privileged mode) and storage driver complexities.

* Only Linux needs to be supported. Focusing exclusively on Linux allows for a more streamlined and cost-effective architecture, while, at least for the first stages, avoiding licensing issues.