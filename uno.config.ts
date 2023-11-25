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
  theme: {
    colors: {
      "primary-100": "#E0D8EA",
      "primary-200": "#C0AFD6",
      "primary-300": "#9F83C2",
      "primary-400": "#876AAA",
      primary: "#776391",
      "primary-600": "#624D7F",
      "primary-700": "#52406A",
      "primary-800": "#47355F",
      "primary-900": "#3D2D52",

      "secondary-100": "#F9E5EB",
      "secondary-200": "#EEC3D0",
      "secondary-300": "#E7ABBD",
      "secondary-400": "#F29DB6",
      secondary: "#EF6C92",
      "secondary-600": "#DA4D76",
      "secondary-700": "#D02D5C",
      "secondary-800": "#9F2D4E",
      "secondary-900": "#7B233C",
    },
  },
});
