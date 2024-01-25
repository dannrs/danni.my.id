import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs'
import icon from "astro-icon";

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      noExternal: ['execa']
    }
  },
  site: 'https://danni.my.id',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false
    }),
    mdx(),
    icon()
  ],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      remarkReadingTime,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light'
          },
          keepBackground: false,
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [
                {
                  type: 'text',
                  value: ' '
                }
              ]
            }
          }
        }
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ]
  }
})
