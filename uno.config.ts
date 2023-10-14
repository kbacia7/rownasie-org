// uno.config.ts
import { defineConfig } from "unocss";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetWebFonts from "@unocss/preset-web-fonts";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
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
});
