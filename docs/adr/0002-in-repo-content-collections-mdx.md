# ADR 0002 — In-repo content via Content Collections (MDX for blog)

## Status

Accepted — 2026-07-20

## Context

Blog posts, gallery items, and projects all need structured, authorable content. Options ranged from a
hosted CMS to plain in-repo files. The author wants version-controlled, free, low-friction authoring.

## Decision

- Keep **all content in the repo** (no CMS), managed with Astro **Content Collections** and typed schemas.
- Author **blog posts in MDX** (`.mdx`) so components can be embedded in a post when needed.
- **Projects are hand-picked**, hand-authored entries. **No GitHub API auto-pull.**
- **Performances** are YouTube-hosted and embedded; video is never self-hosted (Cloudflare Pages is unsuitable
  for large media files).

## Consequences

- Content is versioned in git and costs nothing to host.
- Typed schemas catch authoring mistakes at build time.
- MDX adds no cost when unused but unlocks in-post interactivity later.
- Curated projects mean better storytelling per project but require manual upkeep when adding new work.
