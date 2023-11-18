import translations from "./index";

export const useTranslation = (lang: Language) => (key: string) =>
  key
    .split(".")
    .reduce(
      (prev, current) => prev?.[current] || "no-traslation",
      translations[lang],
    ) as unknown as string;
