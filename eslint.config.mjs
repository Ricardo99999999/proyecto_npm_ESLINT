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
      'no-trailing-spaces': 'error',  //Prohíbe espacios en blanco al final de una línea
      'indent': ['error', 2],         //Enforce indentación con 2 espacios
      'semi': ['error', 'always'],    //Exige punto y coma al final de cada sentencia
      'quotes': ['error', 'single'],  //Obliga a usar comillas simples para strings
      'space-before-blocks': ['warn', 'always'], //Requiere un espacio antes de una llave de bloque
      'keyword-spacing': ['error', { before: true, after: true }],  //Exige espacios antes y después de palabras clave (if, else, return, etc.)
    },
  },
]);