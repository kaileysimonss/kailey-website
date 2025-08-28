import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMetadata {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export interface Post {
  slug: string
  metadata: PostMetadata
  content: string
}

const postsDirectory = path.join(process.cwd(), 'app/swimming/posts')

export function getBlogPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    console.warn('No swimming posts directory found:', postsDirectory)
    return []
  }

  const filenames = fs.readdirSync(postsDirectory).filter((name) => name.endsWith('.mdx'))

  return filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf-8')

    const { data, content } = matter(fileContents)

    const slug = filename.replace(/\.mdx$/, '')

    return {
      slug,
      metadata: {
        title: data.title || slug,
        publishedAt: data.publishedAt || new Date().toISOString(),
        summary: data.summary || '',
        image: data.image || '',
      },
      content,
    }
  })
}
