export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  // No swimming/blog posts
  const blogs: any[] = [] 

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
