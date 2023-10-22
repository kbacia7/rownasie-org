import { defineCollection, z } from "astro:content";
const aboutUsCollection = defineCollection({
  type: "content",
});

const boardCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      name: z.string(),
      photo: image(),
    }),
});

const auditCommitteeCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      name: z.string(),
      photo: image(),
    }),
});

export const collections = {
  "about-us": aboutUsCollection,
  board: boardCollection,
  "audit-committee": auditCommitteeCollection,
};
