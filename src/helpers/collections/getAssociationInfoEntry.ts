import { getEntry } from "astro:content";

import type { Language } from "@i18n/languages";

export default async (language: Language) =>
  await getEntry("association-info", `${language}/main`);
