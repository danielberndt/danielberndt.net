import {defineCollection, z} from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    createdAt: z.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
