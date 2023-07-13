// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "My App",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
  },
  modules: [
    [
      "@nuxtjs/i18n",
      {
        /* module options */
        lazy: true,
        langDir: "locales",
        strategy: "prefix_except_default",
        locales: [
          {
            code: "eg-en",
            iso: "eg-en",
            name: "English(US)",
            file: "en.json",
          },
          {
            code: "eg-ar",
            iso: "eg-ar",
            name: "Arabic(Egypt)",
            file: "ar.json",
          },
        ],
        defaultLocale: "eg-en",
      },
    ],
  ],
});
