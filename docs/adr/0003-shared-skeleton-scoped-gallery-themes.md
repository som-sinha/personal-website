# ADR 0003 — Shared skeleton with scoped per-gallery themes

## Status

Accepted — 2026-07-20

## Context

Each gallery section should feel distinct — photography digital/clean, art artsy/rustic, performances like a
streaming-service home page. But three fully independent looks risk making the site feel like three different
websites and cost more to build.

## Decision

- Keep a **shared skeleton** site-wide: same nav, font stack, and core layout width/structure.
- Let each gallery section **swap a scoped palette + a few texture/layout accents** only.
- Styling is **plain modern CSS** (scoped `<style>` + CSS variables); no Tailwind.
- Carry over **only** the original design tokens (palette + Syne Mono typography); discard the rest of the old scaffold.

## Consequences

- Pages feel thematically distinct while remaining unmistakably the same site.
- Cheap to implement via scoped styles + CSS-variable overrides.
- A future "fully-divergent gallery mini-sites" direction remains open but is explicitly **deferred**.
