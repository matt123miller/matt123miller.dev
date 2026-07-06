import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection, reference } from "astro:content";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      coverImage: z
        .object({
          src: image(),
          alt: z.string(),
          attribution: z.string(),
        })
        .optional(),
      title: z.string(),
      description: z.string(),
      date: z.date(),
      tags: z.array(z.string()),
      relatedPosts: z.array(reference("blog")).optional(),
      published: z.boolean(),
    }),
});

export const collections = {
  blog: blogCollection,
};
