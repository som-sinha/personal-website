---
title: "Northern Supplier Navigator"
description: "A Drupal 11 site that guides Yellowknife-area businesses to the right GNWT supplier service, and tells them what to prepare."
tech: ["Drupal 11", "PHP", "Twig", "MariaDB", "Apache", "Linux"]
links:
  github: "https://github.com/som-sinha/northern-supplier-navigator"
  demo: "https://nsn.somsinha.net"
---

Finding the right government service as a small business is harder than it
should be. Northern Supplier Navigator lets Yellowknife-area businesses pick
what they want to do, like registering to bid, getting procurement help or
asking about a payment. It then points them to the right official GNWT page
with a checklist of what to prepare. It never asks visitors for personal,
banking, bid or invoice details.

I built it to learn Drupal end to end:

- **Content model and migration:** a guide content type with categories and
  checklists, with 11 guides imported from CSV files shaped like an old
  system's export, including a custom PHP import step with unit tests.
- **Editorial workflow:** editors draft, publishers approve, and visitors
  never see drafts. A review dashboard flags guides that are due or overdue.
- **Theming:** a small Olivero sub-theme with Twig templates.
- **Running it for real:** Ubuntu, Apache, PHP-FPM and MariaDB behind
  Cloudflare, with HTTPS, a firewall, nightly backups with a tested restore,
  a documented security update and automated accessibility checks.

I worked alongside an AI coding assistant the way I would with a senior
developer, asking why at every step. The scope and design decisions were
mine.

_Independent portfolio project. Not affiliated with or endorsed by the GNWT._
