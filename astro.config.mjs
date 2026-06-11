import cloudflare from "@astrojs/cloudflare"
import { unified } from "@astrojs/markdown-remark"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import Icons from "unplugin-icons/vite"
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs"

// https://astro.build/config
export default defineConfig({
  site: "https://danni.my.id",
  output: "server",
  adapter: cloudflare(),
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss(), Icons({ jsx: "react", "compiler": "jsx" }), Icons({ compiler: "astro" })]
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "one-light",
        dark: "tokyo-night"
      }
    },
    processor: unified({
      remarkPlugins: [remarkReadingTime]
    })
  }
})
