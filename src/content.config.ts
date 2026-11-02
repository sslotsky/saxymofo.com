import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const shows = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/shows" }),
  schema: z.object({
    date: z.coerce.date(),
    time: z.string().optional(),
    venue: z.string(),
    city: z.string().default("Minneapolis, MN"),
    band: z.string().optional(),
    link: z.url().optional(),
  }),
});

export const collections = { shows };
