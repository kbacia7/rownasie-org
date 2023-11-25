import translations from "./";

import type { Language } from "./languages";

export const useTranslation = (lang: Language) => (key: string) =>
  key.split(".").reduce(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    (prev, current) => prev?.[current] || "no-traslation",
    translations[lang],
  ) as unknown as string;
