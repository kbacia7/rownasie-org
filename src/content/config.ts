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

const projectsCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string(),
    }),
});

const supportCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string(),
    }),
});

const contactInfoCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      address: z.string(),
      emailQuestions: z.string(),
      emailHelp: z.string(),
      emailRodo: z.string(),
      tel: z.string(),
    }),
});

const supportUsCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      donateLink: z.string(),
    }),
});

export const collections = {
  "about-us": aboutUsCollection,
  board: boardCollection,
  "audit-committee": auditCommitteeCollection,
  projects: projectsCollection,
  support: supportCollection,
  contact: contactInfoCollection,
  "support-us": supportUsCollection,
};
