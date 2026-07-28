import { type CollectionEntry } from "astro:content";
import { published } from "./collection";

export type PhotoSet = CollectionEntry<"photography">;
export type ArtPiece = CollectionEntry<"art">;
export type Performance = CollectionEntry<"performances">;

// The three gallery sections, each newest-first.
export const photographySets = () => published("photography");
export const artPieces = () => published("art");
export const performances = () => published("performances");

// Performances render as a streaming layout: newest is the hero, the rest are a row.
export async function performanceRows() {
  const [hero, ...rest] = await performances();
  return { hero, rest };
}

export const youtubeEmbed = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}`;
export const youtubeThumb = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
export const youtubeWatch = (id: string) =>
  `https://www.youtube.com/watch?v=${id}`;
