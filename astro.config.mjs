import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs'
import icon from 'astro-icon'
import { unified } from '@astrojs/markdown-remark'
import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  site: 'https://danni.my.id',
  output: 'server',
  adapter: cloudflare(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      nesting: true
    }),
    mdx(),
    icon()
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'one-light',
        dark: 'tokyo-night'
      }
    },
    processor: unified({
      remarkPlugins: [remarkReadingTime]
    })
  }
})
