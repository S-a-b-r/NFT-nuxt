// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "url";

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
    vite: {
        vue: {
            customElement: true,
        },
        resolve: {
            alias: [
                {
                    find: "@images",
                    replacement: fileURLToPath(
                        new URL("./assets/images", import.meta.url)
                    ),
                },
            ],
        },
    },
    image: {
        dir: "assets/images",
    },
    css: ["~/assets/css/main.css"],
});
