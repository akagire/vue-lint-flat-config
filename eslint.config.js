import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import tsEslint from "typescript-eslint";
import tsEslintParser from "@typescript-eslint/parser";
import vueEslintParser from 'vue-eslint-parser';
import pluginVue from "eslint-plugin-vue";
import eslintPluginImport from 'eslint-plugin-import';

const eslintrc = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

/**
 * 全体に適応するカスタムルール
 * @type {import('eslint').Linter.FlatConfig}
 */
const baseConfig = {
  plugins: {
    import: eslintPluginImport,
  },
  ignores: ['**/dist/**/*', '**/node_modules/**/*'],
};

/**
 * 全体に適応するカスタムルール
 * @type {import('eslint').Linter.FlatConfig}
 */
const commonRules = {
  rules: {
    // '@typescript-eslint/no-unused-vars': ['off'],
  },
};

/**
 * Vue ファイルに適応するカスタムルール
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
 * TS/JS ファイルに適応するカスタムルール
 * @type {import('eslint').Linter.FlatConfig}
 */
const tsConfig = {
  files: ["**/*.{js,ts}"],
  languageOptions: {
    parserOptions: {
      parser: tsEslintParser,
      sourceType: "module",
    },
  },
  rules: {
    // '@typescript-eslint/no-unused-vars': ['off'],
  },
};

const test = eslintrc.extends('@vue/eslint-config-airbnb');
console.log({ test });
export default [
  baseConfig,
  ...tsEslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...eslintrc.extends('@vue/eslint-config-airbnb'),
  // commonConfig,
  vueConfig,
  tsConfig,
];
