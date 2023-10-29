import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
      transformers: [transformerDirectives()],
    }),
  ],
});
