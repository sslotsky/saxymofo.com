import { getCollection, type CollectionEntry } from "astro:content";

export type Show = CollectionEntry<"shows">;

const startOfToday = () => {
  const now = new Date();
  return Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
};

/** Upcoming shows soonest first, past shows most recent first, as of build time. */
export async function getShows() {
  const all = await getCollection("shows");
  const today = startOfToday();
  const upcoming = all
    .filter((show) => show.data.date.getTime() >= today)
    .sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
  const past = all
    .filter((show) => show.data.date.getTime() < today)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return { upcoming, past };
}

export const formatDate = (date: Date) => ({
  weekday: date.toLocaleDateString("en-US", {
    weekday: "short",
    timeZone: "UTC",
  }),
  month: date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
  day: date.toLocaleDateString("en-US", { day: "numeric", timeZone: "UTC" }),
  year: date.toLocaleDateString("en-US", { year: "numeric", timeZone: "UTC" }),
  iso: date.toISOString().slice(0, 10),
});
