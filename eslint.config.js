import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  jsxA11y.flatConfigs.recommended,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettier,
  eslintConfigPrettier,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    rules: {
      semi: ["error", "always"],
      "jsx-a11y/alt-text": "error",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": ["error", {printWidth: 150}],
    },
  },
  {
    languageOptions: {
      ...jsxA11y.flatConfigs.recommended.languageOptions,
      globals: {...globals.browser, ...globals.node},
    },
  },
];
