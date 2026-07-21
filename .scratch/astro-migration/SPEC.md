# Spec — Personal Website Astro Migration

Derived from the grilling thread on 2026-07-20. Source of truth for scope: `docs/CONTEXT.md` + ADRs 0001–0003.

## Goal

Migrate Som Sinha's personal website from a barely-started Vite scaffold to a clean **Astro** site that serves
as a blog (Notebook), a three-section media gallery (Photography / Art / Performances), a curated dev-projects
showcase, and an HTML resume. Content-driven, small interactive islands, static output, deployed on Cloudflare
Pages from GitHub.

## Non-goals

- No CMS; all content in-repo.
- No GitHub API auto-pull for projects (hand-picked only).
- No self-hosted video (performances are YouTube embeds).
- No contact form / backend.
- No fully-divergent per-gallery mini-site themes yet (deferred).
- No ESLint, no Tailwind.

## Success criteria

- `npm run dev` serves the site; `npm run build` produces a static `dist/` with no errors.
- All routes in the page map render with the shared skeleton (nav + logo → home).
- Adding a blog post = drop an `.mdx` file in the blog collection; it appears on `/notebook` and gets its own page.
- Adding a gallery item / project = add a content entry; it appears in the right section.
- Each gallery section shows its distinct scoped theme.
- Resume renders from a structured data file and offers a PDF download link.
- Prettier (with Astro plugin) formats `.astro`/`.ts`/`.mdx`.
- Repo deploys to Cloudflare Pages on push to GitHub (static, build cmd `astro build`, output `dist`).

## Design tokens to carry over

Palette: turf-green `#2c6e49`, sea-green `#4c956c`, light-yellow `#fefee3`, warm-butter-yellow `#ede68a`,
powder-blush `#ffc9b9`, toasted-almond `#d68c45`. Logo typography: **Syne Mono**.

## Page map

See `docs/CONTEXT.md`. Home is lean: Hero → About Me → "Currently working on:" → Contact.
