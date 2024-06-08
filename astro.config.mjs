import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs'
import icon from 'astro-icon'
import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  site: 'https://danni.my.id',
  output: 'server',
  adapter: vercel(),
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
    remarkPlugins: [remarkReadingTime]
  }
})

