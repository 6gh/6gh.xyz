// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "nuxt-icon", '@nuxtjs/google-fonts'],
  extends: ["nuxt-umami"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Fira Code', 'sans-serif']
          }
        }
      }
    }
  },
  colorMode: {
    preference: "system", // default theme
    fallback: "main", // fallback theme
    dataValue: "theme", // activate data-theme in <html> tag
    classSuffix: "",
  },
  googleFonts: {
    families: {
      'Fira Code': true,
      'Spline Sans Mono': true,
    }
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
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
      ],
    },
  },
});
