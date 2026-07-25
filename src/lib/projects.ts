import { type CollectionEntry } from "astro:content";
import { publishedProjects } from "./collection";

export type Project = CollectionEntry<"projects">;

// A project gets a /projects/<slug> detail page only if it has body content.
export const hasBody = (project: Project) =>
  (project.body ?? "").trim().length > 0;

// Where a project's title should link: its detail page if it has one, else the
// best available external link (demo preferred), else nothing.
export function primaryHref(project: Project): string | undefined {
  if (hasBody(project)) return `/projects/${project.id}`;
  return project.data.links.demo ?? project.data.links.github;
}

// All published projects, featured-first.
export const allProjects = () => publishedProjects();

// The single featured project surfaced on the home page ("Currently working on:").
export async function featuredProject() {
  const projects = await allProjects();
  return projects.find((project) => project.data.featured);
}

// getStaticPaths shape for /projects/<slug> — only body-bearing projects.
export async function detailParams() {
  const projects = await allProjects();
  return projects
    .filter(hasBody)
    .map((project) => ({ params: { slug: project.id }, props: { project } }));
}
