const path = require("path");

module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 6,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  globals: {
    React: "writeable"
  },
  rules: {
    // next.js imports react automatically
    "react/react-in-jsx-scope": "off",

    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_"
      }
    ],
    // "graphql/template-strings": [
    //   "error",
    //   {
    //     env: "relay",
    //     schemaJsonFilepath: path.resolve(__dirname, "./schema.json"),
    //     tagName: "graphql"
    //   }
    // ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"]
      }
    ],
    "react/display-name": 0,
    "react/prop-types": 0
  }
};
