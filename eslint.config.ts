import eslintPluginAstro from "eslint-plugin-astro"

export default [
  {
    ignores: [
      ".astro/**",
      "**/*.d.ts",
    ],
  },
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["src/**/*.{js,astro}"],
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
]