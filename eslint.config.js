import globals from 'globals';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';

/** @type {import('eslint').Linter.Config[]} */
export default [

    // Global Ignore
    { ignores: [`node_modules/`, `build/`, `.svelte-kit/`, `dist/`], },


    // Base Config
    js.configs.recommended,
    ...svelte.configs[`flat/recommended`],

    // Overrides
    {
        languageOptions: {
            ecmaVersion: 2024,
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            "brace-style": [`error`, `stroustrup`],
            "comma-spacing": [`error`, { "before": false, "after": true }],
            "indent": [`error`, 4, { "SwitchCase": 1 }],
            "max-len": [`warn`, { code: 480 }],
            "no-var": `error`,
            "no-unused-vars": `warn`,
            "object-curly-newline": [`error`, {
                "ObjectExpression": { "multiline": true, "minProperties": 4 },
                "ObjectPattern": { "multiline": true, "minProperties": 4 },
                "ImportDeclaration": { "multiline": true, "minProperties": 4 },
                "ExportDeclaration": { "multiline": false, "minProperties": 4 }
            }],
            "object-curly-spacing": [`error`, `always`],
            "space-infix-ops": [`error`, { "int32Hint": false }],
            "quotes": [`warn`, `backtick`],
            "semi": [`error`, `always`],

            // Svelte Overrides
            "svelte/indent": [ `error`, { "indent": 4, "switchCase": 1 }],
            "svelte/mustache-spacing": `error`,
            "svelte/no-spaces-around-equal-signs-in-attribute": `error`,
            "svelte/no-trailing-spaces": [ `error`, { "skipBlankLines": false, "ignoreComments": true } ],
            "svelte/spaced-html-comment": [`warn`, `always`],
            "svelte/sort-attributes": `warn`,
        }
    }
];