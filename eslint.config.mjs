import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      js,
    },
    rules: {
      indent: ["error", 2],
      semi: ["error", "always"],
      quotes: ["error", "double"],
      camelcase: ["warn", { properties: "never" }],
      "new-cap": ["error", { newIsCap: true }],
    },
  },
]);
