// uno.config.ts
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Montserrat",
          weights: [400, 700],
        },
      },
    }),
  ],
  shortcuts: {
    btn: "rounded-md text-white px-5 py-4",
    "btn-primary": "bg-primary",
    "btn-secondary": "bg-secondary",
    "tab-active": "opacity-100 h-auto",
    "tab-inactive": "opacity-0 h-0 overflow-hidden",
  },
  theme: {
    colors: {
      primary: "#776391",
      secondary: "#6558f5",
      pink: "#EF6C92",
    },
  },
});
