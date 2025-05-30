import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    published: z.boolean().optional().default(false),
    tags: z.array(z.string())
  })
})

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
})

export const collections = {
  posts,
  pages
}
