<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title} · Radiate` : 'Radiate: The All-in-One Starter Kit for Nuxt.js',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/icon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <body class="font-sans antialiased">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </body>
</template>
