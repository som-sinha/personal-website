# Context — Som Sinha Personal Website

Living overview of the project: what it is, the domain vocabulary, and the shape of the build.
Decisions that are hard to reverse are recorded as ADRs under `docs/adr/`.

## What this is

A personal website for Som Sinha, migrating from a barely-started Vite scaffold to **Astro**.
It serves four purposes:

1. **Notebook** — a blog (MDX posts).
2. **Gallery** — a media gallery for **photography**, **artworks**, and **performances** (acting).
3. **Projects** — a curated, hand-picked showcase of dev work.
4. **Resume** — an on-site HTML resume with a downloadable PDF.

The site is **content-driven** with a few small **interactive islands** (e.g. a gallery lightbox).

## Vocabulary

- **Notebook** — the blog. Route `/notebook`. (Kept from the original nav; not called "Blog".)
- **Gallery hub** — `/gallery`, links to the three media sections.
- **Gallery section** — one of Photography / Art / Performances, each its own page with its own scoped theme.
- **Performance** — an acting clip, hosted on YouTube and embedded (never self-hosted video).
- **Project** — a hand-authored, curated dev-work entry. Optional per-project detail page. Never auto-pulled from GitHub.
- **Currently working on** — a single, manually-chosen featured project surfaced on the home page.
- **Design token** — a CSS variable (palette colour, font) carried over from the original `main.css`.
- **Shared skeleton** — the site-wide nav, font stack, and layout that stays constant across pages; only palette/accents change per gallery.

## Stack

- **Framework:** Astro, static output (`output: 'static'`). No server adapter unless a future feature needs SSR.
- **Language:** TypeScript on (typed component props + Content Collection schemas).
- **Styling:** plain modern CSS — scoped `<style>` + CSS variables. No Tailwind.
- **Content:** all in-repo via Astro **Content Collections** (blog, gallery, projects). Blog posts in **MDX**.
- **Formatting:** Prettier + `prettier-plugin-astro`. No ESLint (for now).
- **Hosting:** **Cloudflare Pages**, auto-deploy from **GitHub** on push. Domain already managed on Cloudflare.

## Page map

```
/                     Hero -> About Me -> "Currently working on:" (one featured project) -> Contact
/notebook             blog index
/notebook/<slug>      blog post (MDX)
/gallery              gallery hub
/gallery/photography  clean / digital grid
/gallery/art          artsy / rustic
/gallery/performances streaming-service look, YouTube embeds
/projects             curated project cards
/projects/<slug>      optional project detail page
/resume               HTML from structured data + PDF download link at bottom
```

- **Top nav:** Notebook · Gallery · Projects · Resume. Logo → home.
- **Contact:** lives at the bottom of the home page (not a separate route). Plain links: email (mailto) · GitHub · LinkedIn. No contact form.

## Design direction

- **Shared skeleton** across the whole site: same nav, font stack (Syne Mono logo), core layout width.
- Each gallery section swaps a **scoped palette + a few texture/layout accents**:
  - **Photography** — clean, digital, sharp modern grid.
  - **Art** — artsy / rustic (paper/canvas texture, warmer, serif accents).
  - **Performances** — dark, streaming-service home page (hero feature + rows of cards, YouTube embeds).
- Carried-over design tokens (from original `main.css`): palette (turf-green `#2c6e49`, sea-green `#4c956c`,
  light-yellow `#fefee3`, warm-butter-yellow `#ede68a`, powder-blush `#ffc9b9`, toasted-almond `#d68c45`)
  and **Syne Mono** logo typography.

## Migration approach

Clean Astro scaffold. Remove the old Vite config, HTML stubs, `dist/`, `node_modules`, and `package-lock.json`,
then reinit with Astro. Carry over **only** the design tokens (palette + Syne Mono typography) into global CSS.
No real content exists to preserve.

## Deferred (todo)

- **Fully-divergent gallery themes** — let each gallery become its own mini-site look (own nav styling, etc.),
  going beyond the shared-skeleton approach. Keep specs for this.
- **GitHub API auto-pull for projects** — explicitly rejected for now; projects stay hand-picked. Revisit only
  if a comprehensive self-updating repo list is ever wanted (possibly as a hybrid "more on GitHub" section).
