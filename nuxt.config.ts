// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  vite: {
    vue: {
      customElement: true
    },
    resolve: {
      alias: [
          {
            find: "@images",
            replacement: fileURLToPath(
                new URL("./assets/images", import.meta.url)
            ),
          }
      ],
    },
  },
  css: ['~/assets/css/main.css']
})
