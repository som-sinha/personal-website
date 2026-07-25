import { type CollectionEntry } from "astro:content";
import { published } from "./collection";

export type Post = CollectionEntry<"blog">;

// Notebook = the blog. All published posts, newest-first.
export const allPosts = () => published("blog");

// getStaticPaths shape for /notebook/<slug>.
export async function postParams() {
  const posts = await allPosts();
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}
