---
slug: a-fresh-take-on-offline-data-collection
title: "A fresh take on offline data collection"
# authors: [tgirotto]
tags: [supabase, solar]
---

Working in the solar sector in Tanzania taught me a hard truth: **data collection in the field is a battle of attrition.** Between spotty 2G connections, rugged hardware, and the sheer complexity of relational data (linking customers to assets to maintenance logs), the tools we use can either be our greatest ally or our biggest bottleneck.

For years, the industry has relied on the "Old Guard":

* [**Epicollect:**](https://five.epicollect.net/) Great for simplicity and the fact that it's free (entire companies were built on top of it, so a big thank you to Imperial College), but closed-source. This means it cannot be easily customized. The consequence is that features like webhooks—essential for modern automation—are still unavailable.
* [**ODK (Open Data Kit):**](https://getodk.org/) The gold standard for many, but reliant on the aging XML/XLSForm standard, which can feel restrictive for complex app logic.
* [**KoboToolbox:**](https://www.kobotoolbox.org/) Popular for humanitarian surveys and rapid deployments, but customization beyond core forms can be limiting.
* [**CommCare:**](https://dimagi.com/commcare/) Very powerful, but primarily suited for large-scale enterprise clients with significant configuration budgets.

### Field data collection: Can we do more with less?

While these tools brought incredible value, technology has moved on. We can now build custom, high-performance field tools with a fraction of the previous engineering effort. Modern solutions should meet these criteria:

* **Lower barrier to entry:** Easy to modify for developers in emerging markets using a unified, popular language stack.
* **Universal compatibility:** Natively compatible with as many platforms as possible (Android, iOS, Web).
* **Enterprise-backed:** Built on stable frameworks with long-term industry support.


### Frontend: Flutter

In rural areas, your "office" is a smartphone. Flutter has changed the game by offering a single codebase that targets mobile, web, and desktop with production-grade stability.

* **Native Access:** Since data often comes from QR code scans, Bluetooth (for solar inverters), or high-precision GPS, Flutter is an ideal choice because it can natively access device sensors without a "performance bridge."
* **Offline Excellence:** Flutter allows for direct, native access to device storage (using tools like `Isar` or `Hive`), making it easier to cache thousands of records for offline use.
* **App Store/Play Store Ready:** Unlike web-only tools, you can deploy a polished, installable app that works reliably in low-bandwidth environments.



### Backend: TypeScript

TypeScript is now one of the most widespread programming languages globally. It is natively supported by modern edge function platforms and major backend frameworks. Using TypeScript across the stack means a developer can jump from UI logic to backend validation without the "mental tax" of switching languages.

### Database: Postgres & PostGIS

Rural surveys are almost always location-focused.

* **Postgres** provides the relational integrity needed to link complex hardware hierarchies (e.g., matching a specific battery serial number to a solar panel and a customer contract).
* **PostGIS** turns your database into a geographic engine. It allows for advanced queries like: *"Which solar arrays are within a 10km radius of the rising flood zone?"* Standard JSON-based databases simply cannot compete with this spatial intelligence.

### Storage: S3

Apps like ODK and Epicollect allow to upload images, audio files and more. S3 (or S3-compatible layers) provides virtually infinite, low-cost storage for these files, keeping the primary database lean and focused on searchable metadata.

### Supabase & Convex

In recent years, platforms like [Supabase](https://supabase.com/) and [Convex](https://www.convex.dev/) have had an enormous impact on how we build. They allow a small team to deploy production-Grade infrastructure in hours.

* **No Vendor Lock-in:** Supabase is built on open-source standards (Postgres, GoTrue, PostgREST). If you need to move, you can export your entire database and self-host. Convex has also recently open-sourced its backend, offering similar portability.
* **Standardized Auth & RBAC:** They offer built-in, secure solutions for social login and complex Role-Based Access Control (RBAC).
* **Row-Level Security (RLS):** In Supabase, security is handled at the database level. You can write a single SQL policy to ensure a technician in Mwanza can only see *their* specific installations, making the entire system "secure by default."

### Conclusion

While the "Old Guard" of data collection paved the way, the modularity of **Flutter**, **TypeScript**, and **Postgres** might be the future. For the solar, health, agro sectors, and for any industry working in the "last mile", this stack could be a way to do more with less, empowering local developers to build the tools their communities actually need.