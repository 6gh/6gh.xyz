// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon"],
  extends: ["nuxt-umami"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  colorMode: {
    preference: "system", // default theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  appConfig: {
    umami: {
      host: "https://analytics.6gh.xyz",
      id: "b573d842-cacb-4976-992b-63aa5f63a3f0",
      ignoreDnt: true,
      autoTrack: true,
      version: 2,
      useDirective: true,
    },
    nuxtIcon: {
      class: "vertical-align: middle;",
    },
  },
  ssr: true,
  runtimeConfig: {
    public: {
      baseUrl: process.env.CDN_URL || "http://localhost:3000",
    },
  },
});
