import { getCollection } from "astro:content";

import toSlug from "@helpers/toSlug";

import type { Language } from "@i18n/languages";

const getProjectsStaticPaths = async (language: Language) => {
  const projectsEntries = await getCollection("projects", ({ slug }) =>
    slug.startsWith(language),
  );

  return await Promise.all(
    projectsEntries.map(async (entry) => ({
      props: {
        Content: (await entry.render()).Content,
      },
      params: {
        project: toSlug(entry.data.name),
      },
    })),
  );
};

export default getProjectsStaticPaths;
