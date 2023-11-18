export const Languages = {
  PL: "pl",
  EN: "en",
} as const;

export type Language = (typeof Languages)[keyof typeof Languages];
