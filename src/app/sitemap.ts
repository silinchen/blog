import { getPostList } from '@/utils'

export default async function sitemap() {
  const posts = getPostList().map((post) => ({
    url: `${process.env.POST_BASE_URL}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['', '/post'].map((route) => ({
    url: `${process.env.POST_BASE_URL}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...posts]
}
