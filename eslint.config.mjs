// import { defineConfig } from "eslint/config";
// import globals from "globals";
// import js from "@eslint/js";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs}"] },
//   { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
//   { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
// ]);




import { defineConfig } from "eslint/config";
import js from "@eslint/js"; 
import globals from "globals";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: { 
      globals: globals.browser 
    },
    rules: {
      //"no-console": "error",
      "semi": ["error", "always"],
      //"quotes": ["error", "double"]
    },
    extends: [js.configs.recommended] // Correct way to extend rules
  }
]);
