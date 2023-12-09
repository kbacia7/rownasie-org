import { defineCollection, z } from "astro:content";

const aboutUsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      person: z
        .object({
          title: z.string(),
          name: z.string(),
          photo: image(),
        })
        .optional(),
    }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string(),
      description: z.string(),
      href: z.string().optional(),
    }),
});

const documentsCollection = defineCollection({
  type: "content",
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
  projects: projectsCollection,
  documents: documentsCollection,
  support: supportCollection,
  "association-info": associationInfoCollection,
  "support-us": supportUsCollection,
};
