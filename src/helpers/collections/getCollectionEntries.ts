import { getCollection, type ContentCollectionKey } from "astro:content";

import type { Language } from "@i18n/languages";

const getCollectionEntries = async (
  name: ContentCollectionKey,
  language: Language,
) => {
  const collection = await getCollection(name, ({ slug }) =>
    slug.startsWith(language),
  );

  return await Promise.all(
    collection.map(async (entry) => ({
      ...entry,
      Content: (await entry.render()).Content,
    })),
  );
};

export default getCollectionEntries;
