import tsEslint from "typescript-eslint";
import tsEslintParser from "@typescript-eslint/parser";
import vueEslintParser from 'vue-eslint-parser';
import pluginVue from "eslint-plugin-vue";

/**
 * ESLint config for TypeScript
 * @type {import('eslint').Linter.FlatConfig}
 */
const commonConfig = {
};

/**
 * ESLint config for TypeScript
 * @type {import('eslint').Linter.FlatConfig}
 */
const vueConfig = {
  files: ["**/*.vue"],
  plugins: {
    vue: pluginVue,
  },
  languageOptions: {
    parser: vueEslintParser,
    parserOptions: {
      parser: tsEslintParser,
      sourceType: "module",
    },
  },
};

/**
 * ESLint config for TypeScript
 * @type {import('eslint').Linter.FlatConfig}
 */
const tsConfig = {
  files: ["**/*.ts"],
  languageOptions: {
    parserOptions: {
      parser: tsEslintParser,
      sourceType: "module",
    },
  },
};

export default [
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  commonConfig,
  vueConfig,
  tsConfig,
];
