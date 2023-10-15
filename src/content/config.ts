import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    published: z.boolean().optional().default(false),
    tags: z.array(z.string())
  })
})

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
  })
})

export const collections = {
  'blog': blogCollection,
  'pages': pagesCollection
}
