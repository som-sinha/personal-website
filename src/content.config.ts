import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Shared: every collection can hide an entry from the live site while keeping
// it committed in the repo. Index pages filter out `draft: true`.
const draft = z.boolean().default(false);

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    // Image paths point at files under `public/` (strings), not `image()`, so
    // content can be authored without committing binaries during scaffolding.
    cover: z.string().optional(),
    draft,
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .default({}),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    draft,
  }),
});

const galleryItem = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  images: z.array(z.string()).default([]),
  draft,
});

const photography = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/photography",
  }),
  schema: galleryItem,
});

const art = defineCollection({
  loader: glob({ pattern: "**/*.{json,yaml,yml}", base: "./src/content/art" }),
  schema: galleryItem,
});

const performances = defineCollection({
  loader: glob({
    pattern: "**/*.{json,yaml,yml}",
    base: "./src/content/performances",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    youtubeId: z.string(),
    draft,
  }),
});

export const collections = { blog, projects, photography, art, performances };
