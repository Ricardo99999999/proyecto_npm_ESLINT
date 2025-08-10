import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'no-trailing-spaces': 'error',  //Prohibits trailing whitespace at the end of a line
      'indent': ['error', 2],         //Requires indentation with 2 spaces
      'semi': ['error', 'always'],    //Requires a semicolon at the end of each statement
      'quotes': ['error', 'single'],  //Enforces the use of single quotes for strings
      'space-before-blocks': ['warn', 'always'], //Requires a space before an opening block brace  
      'keyword-spacing': ['error', { before: true, after: true }],  //Requires spaces before and after keywords (if, else, return, etc.)
    },
  },
]);