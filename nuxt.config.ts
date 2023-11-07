// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    shim: false
  },
  modules: [
    '@nuxt/content',
    '@nuxthq/studio'
  ],
  content: {
    // ... options
  },
  css: [
    '~/assets/css/main.css',
    '@unocss/reset/tailwind.css'
  ],
})
