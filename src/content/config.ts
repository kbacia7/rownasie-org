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
      description: z.string(),
    }),
});

const documentsCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      name: z.string(),
      description: z.string(),
      filename: z.string(),
    }),
});

const supportCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string(),
    }),
});

const associationInfoCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      addressPartOne: z.string(),
      addressPartTwo: z.string(),
      addressLink: z.string(),
      emailQuestions: z.string(),
      emailHelp: z.string(),
      emailRodo: z.string(),
      tel: z.string(),
      nip: z.string(),
      krs: z.string(),
      bankAccount: z.string(),
      fbLink: z.string(),
      igLink: z.string(),
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
  documents: documentsCollection,
  support: supportCollection,
  "association-info": associationInfoCollection,
  "support-us": supportUsCollection,
};
