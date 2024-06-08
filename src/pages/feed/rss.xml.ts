import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getCollection, type CollectionEntry } from 'astro:content'
import { SITE_CONFIG } from '@/constants'

export const GET: APIRoute = async function GET({ site }) {
  const title = SITE_CONFIG.name
  const description = SITE_CONFIG.description
  const posts = await getCollection(
    'posts',
    ({ data }) => data.published === true
  )

  const items = posts.map(
    ({
      slug,
      data: { title, date, description }
    }: CollectionEntry<'posts'>) => ({
      title: title,
      pubDate: date,
      description: description,
      link: `/blog/${slug}/`
    })
  )

  return rss({
    title: title,
    description: description,
    site: site as unknown as string,
    customData: '<language>en-us</language>',
    items: items,
    stylesheet: '/rss/styles.xsl'
  })
}
