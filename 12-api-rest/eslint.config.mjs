
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
        rules: {
            ...js.configs.recommended.rules,

            semi: ["error", "always"],
            quotes: ["error", "single"],
            indent: ["error", 4],
            "no-multiple-empty-lines": ["error", { max: 1 }],
            "eol-last": ["error", "always"],
            "comma-dangle": ["error", "always-multiline"],

            eqeqeq: ["error", "always"],
            curly: ["error", "all"],
            "no-var": "error",
            "prefer-const": "error",
            "class-methods-use-this": "off",
            "no-unused-vars": "off",
        },
    },
]);

