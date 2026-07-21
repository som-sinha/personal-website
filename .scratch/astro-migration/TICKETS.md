# Tickets — Astro Migration (blockers-first)

Tracer-bullet tickets. Each declares its **blocking edges**. Work blockers-first; clear context between tickets.
One file/tracker entry per ticket ideally, but listed here together for the overview.

Legend: `blocked by:` lists tickets that must be done first.

---

## T1 — Clean scaffold & tooling ✅ DONE (2026-07-20)

blocked by: (none)

Remove old Vite scaffold (`vite.config.js`, `index.html`/`notebook.html`/`projects.html`/`contact.html`,
`dist/`, `node_modules/`, `package-lock.json`, stray `.DS_Store`, `src/partials`, `src/js`). Init a fresh
Astro project (TypeScript, static). Add integrations/deps: `@astrojs/mdx`, Prettier + `prettier-plugin-astro`.
Configure `astro.config` with `output: 'static'` and MDX. Verify `npm run dev` + `npm run build` work on the
empty scaffold.

Done when: fresh Astro app builds and serves; Prettier config present; old scaffold gone.

---

## T2 — Design tokens + global styles

blocked by: T1

Port the carried-over palette + Syne Mono typography into a global stylesheet as CSS variables (semantic roles
like `--bg`, `--text`, `--link`, `--accent`, mirroring the old `main.css` mapping). Set up the Syne Mono web
font load. Establish base element styles + layout width token.

Done when: global tokens available site-wide; a throwaway test page renders with the theme.

---

## T3 — Shared skeleton: BaseLayout + Nav + home shell

blocked by: T2

Build `BaseLayout.astro` (html head, global css, `<slot/>`) and a `Nav` component (logo → home; items:
Notebook · Gallery · Projects · Resume). Build the home page shell with lean sections in order:
Hero → About Me → "Currently working on:" (placeholder featured project link) → Contact (email · GitHub · LinkedIn, plain links).

Done when: `/` renders with nav and all four home sections; nav links resolve (even if targets are stubs).

---

## T4 — Content Collections config

blocked by: T1

Define Content Collections with typed schemas: `blog` (MDX: title, date, description, tags, cover?),
`projects` (title, description, tech[], links{github?, demo?}, cover?, featured?), and gallery collections
`photography` / `art` / `performances` (performances: title, date, description, youtubeId; photo/art: title,
date, description, images[]). Add one sample entry per collection for downstream tickets to render.

Done when: schemas typecheck; sample entries load via `getCollection`.

---

## T5 — Notebook (blog index + post pages)

blocked by: T3, T4

`/notebook` lists posts (title, date, description) newest-first. `/notebook/<slug>` renders the MDX post inside
BaseLayout with a post header. Wire nav "Notebook".

Done when: sample post appears in index and renders at its slug.

---

## T6 — Projects (cards + optional detail)

blocked by: T3, T4

`/projects` renders curated project cards (title, description, tech, links). If an entry has body content,
generate `/projects/<slug>` detail page; otherwise the card links out. Home "Currently working on:" points at
one `featured` project.

Done when: sample project shows as a card; a project with a body has a working detail page; home featured link resolves.

---

## T7 — Gallery hub

blocked by: T3

`/gallery` hub page linking to the three sections, using the shared skeleton.

Done when: `/gallery` links to photography, art, performances.

---

## T8 — Photography gallery (clean/digital theme)

blocked by: T4, T7

`/gallery/photography` — sharp modern grid of photo sets from the `photography` collection. Scoped digital/clean
theme. Small lightbox island for viewing images.

Done when: sample photo set renders in the grid; lightbox opens.

---

## T9 — Art gallery (artsy/rustic theme)

blocked by: T4, T7

`/gallery/art` — artsy/rustic layout (paper/canvas texture, warmer palette, serif accents) from the `art`
collection. Reuse the lightbox island.

Done when: sample artwork renders with the rustic theme.

---

## T10 — Performances gallery (streaming-service theme)

blocked by: T4, T7

`/gallery/performances` — dark, streaming-service home-page look: hero feature + rows of cards, each embedding a
YouTube video by `youtubeId`. Scoped dark theme.

Done when: sample performance embeds and plays; layout reads as streaming rows.

---

## T11 — Resume

blocked by: T3

`/resume` — HTML resume rendered from a structured data file (YAML/JSON: experience, education, skills, etc.),
themed to match the site. PDF download link at the bottom (PDF dropped in `public/`).

Done when: resume renders from data; PDF link downloads.

---

## T12 — Deploy on Cloudflare Pages

blocked by: T1 (realistically after core pages exist)

Configure Cloudflare Pages against the GitHub repo: build command `astro build`, output dir `dist`, connect the
Cloudflare-managed domain. Verify auto-deploy on push.

Done when: pushing to GitHub deploys the live site on the domain.

---

## Suggested order

T1 → T2 → T3 (and T4 in parallel after T1) → T5, T6, T7 → T8, T9, T10 → T11 → T12.

```

```
