## Project Explanation

This project works correctly as it is now:
1. eslint.config.mjs: This file runs at initialization. You can add your own rules.
2. ErrorLens let you see errors in real time.
3. If you run npx eslint file.js you can check what errors it has.
4. If you run npx eslint file.js --fix they will be fixed.
5. You can run npm run lint, which internally runs npx eslint.
6. If you run npm run lintFix, it runs npx eslint --fix.

The first parameter is the type of error, the second is characteristic of the rule, so customizations can be made.