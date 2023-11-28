import {
  getCollection,
  type ContentCollectionKey,
  type CollectionEntry,
} from "astro:content";

import type { Language } from "@i18n/languages";

const getCollectionEntries = async <T extends ContentCollectionKey>(
  name: T,
  language: Language,
  filter?: (entry: CollectionEntry<T>) => boolean,
) => {
  const extraFilter = filter || (() => true);
  const collection = await getCollection(
    name,
    (entry) => entry.slug.startsWith(language) && extraFilter(entry),
  );

  return await Promise.all(
    collection.map(async (entry) => ({
      ...entry,
      Content: (await entry.render()).Content,
    })),
  );
};

export default getCollectionEntries;
