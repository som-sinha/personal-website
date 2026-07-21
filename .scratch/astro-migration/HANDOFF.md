# Handoff — after T1

T1 (clean scaffold & tooling) is done. This file is your map for taking over T2 onward.

## What exists now

- Fresh **Astro v7** project, TypeScript strict, `output: "static"`.
- `astro.config.mjs` — static + MDX integration.
- `package.json` scripts: `dev`, `build`, `preview`, `format`.
- Prettier + `prettier-plugin-astro` configured (`.prettierrc.json`, `.prettierignore`).
- `.gitignore` in place (ignores `dist/`, `.astro/`, `node_modules/`, `.DS_Store`).
- `src/pages/index.astro` — a throwaway placeholder home page (T3 replaces it).
- `docs/` (CONTEXT + ADRs) and `.scratch/astro-migration/` (SPEC, TICKETS, this file).

### Reference material stashed for you
- `.scratch/astro-migration/old-main.css` — the original palette + Syne Mono styles. **T2 ports tokens from here.**
- `.scratch/astro-migration/old-nav.html` — original nav markup + tagline. **T3 references this.**

## Verify anytime
```
npm run dev      # serves on http://localhost:4321
npm run build    # static build into dist/
npm run format   # prettier
```

## How to work the remaining tickets

Per Matt's main flow, **clear context between tickets** — start each in a fresh session so the model stays in
the smart zone. For each ticket:

1. Open a fresh chat.
2. Point it at `.scratch/astro-migration/SPEC.md` + the specific ticket in `TICKETS.md`, and `docs/CONTEXT.md`.
3. Build the ticket (test-first where behaviour is concrete), then a quick review pass, then mark the ticket
   `✅ DONE` in `TICKETS.md`.

### Recommended next order
- **T2 — design tokens + global styles** (blocked by T1 ✅) → do this next; everything visual depends on it.
- **T4 — content collections config** (blocked by T1 ✅) → can be done in parallel with T2/T3.
- **T3 — shared skeleton (BaseLayout + Nav + home shell)** (blocked by T2).
- Then T5/T6/T7 → T8/T9/T10 → T11 → T12.

### A good opening prompt for the next session
> Implement T2 from `.scratch/astro-migration/TICKETS.md`. Read `docs/CONTEXT.md`, `SPEC.md`, and
> `.scratch/astro-migration/old-main.css` first. Port the palette + Syne Mono typography into a global
> stylesheet as CSS variables with semantic roles, load the web font, set base element + layout-width styles.
> Verify with `npm run build`, format with `npm run format`, then mark T2 done in TICKETS.md.

## Not done yet (flagged)
- **No local git repo** — you said the repo is on GitHub. Initialize/connect it when ready; T12 wires Cloudflare
  Pages auto-deploy.
- **T12 (Cloudflare Pages)** needs the GitHub remote connected: build command `astro build`, output dir `dist`.
