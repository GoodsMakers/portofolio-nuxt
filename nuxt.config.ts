// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],

  // Nuxt 4: `@` points to `app/`, while `@@` points to the project root.
  css: ['@@/assets/css/main.css'],

  colorMode: {
    preference: 'system', // or 'dark' if you want it to start dark but still be switchable
    fallback: 'dark',
  },
})
