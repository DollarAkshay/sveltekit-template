import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  
    // Global Ignore
    {
        ignores: [`node_modules/`, `build/`, `.svelte-kit/`, `dist/`],
    },
    
  
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
            "indent": [`error`, 4],
            "no-var": `error`,
            "no-unused-vars": `warn`,
            "quotes": [`warn`, `backtick`],
            "semi": [`error`, `always`],
            "max-len": [`warn`, { code: 480 }],
        }
    }
];