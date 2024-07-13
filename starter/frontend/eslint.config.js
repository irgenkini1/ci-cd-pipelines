// eslint.config.js
import { Linter } from "eslint";

const config = new Linter.Config();

config.parserOptions = {
  ecmaVersion: 2021,
  sourceType: "module",
};

config.env = {
  browser: true,
  es2021: true,
};

config.extends = [
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:@typescript-eslint/recommended",
];

config.plugins = ["react", "@typescript-eslint"];

config.rules = {
  // Add your custom rules here
};

export default config;