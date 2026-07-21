# ADR 0001 — Astro (static) on Cloudflare Pages

## Status

Accepted — 2026-07-20

## Context

The site is migrating from a barely-started Vite scaffold. It is content-heavy (blog, galleries,
projects, resume) with only small pockets of interactivity. The domain is already managed on Cloudflare,
and the source repo is on GitHub.

## Decision

- Build with **Astro** using **static output** (`output: 'static'`); no server adapter until a feature demands SSR.
- Host on **Cloudflare Pages**, auto-deploying from **GitHub** on push.

## Consequences

- Astro's content-first model + islands architecture fits a mostly-static personal site well.
- Static output keeps hosting free/simple and removes the need for a runtime backend.
- Cloudflare Pages + existing Cloudflare-managed domain means minimal DNS work.
- Any future server-rendered feature (e.g. a contact form backend, dynamic data) will require adding an
  adapter and reconsidering this decision.
