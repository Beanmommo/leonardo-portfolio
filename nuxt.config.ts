// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  css: ["@/assets/main.scss", "@/assets/main.css"],
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/global.scss";',
        },
      },
    },
  },
  primevue: {
    usePrimeVue: false,
  },
  googleFonts: {
    families: {
      Inter: [400, 700],
    },
    download: true,
  },
});
