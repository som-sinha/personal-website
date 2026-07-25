import { getCollection, type CollectionEntry } from "astro:content";

type DatedCollection = "blog" | "photography" | "art" | "performances";

// The one place draft-filtering + newest-first sorting lives. The three content
// modules (notebook, projects, gallery) build on this instead of re-deriving the
// same getCollection → filter → sort pipeline in every page.
export async function published<C extends DatedCollection>(
  name: C,
): Promise<CollectionEntry<C>[]> {
  const entries = await getCollection(name, ({ data }) => !data.draft);
  return entries.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  ) as CollectionEntry<C>[];
}

// Projects have no `date` field, so they sort by `featured` rather than by date.
// Kept here alongside `published` so all draft-filtering lives in one module.
export async function publishedProjects(): Promise<
  CollectionEntry<"projects">[]
> {
  const entries = await getCollection("projects", ({ data }) => !data.draft);
  return entries.sort(
    (a, b) => Number(b.data.featured) - Number(a.data.featured),
  );
}
