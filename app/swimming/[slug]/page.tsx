import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { getBlogPosts, Post } from 'app/swimming/utils'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) return
  const ogImage = post.metadata.image || `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`

  return {
    title: post.metadata.title,
    description: post.metadata.summary,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.summary,
      type: 'article',
      publishedTime: post.metadata.publishedAt,
      url: `${baseUrl}/swimming/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata.title,
      description: post.metadata.summary,
      images: [ogImage],
    },
  }
}

// Make the page async and type props correctly
interface PageProps {
  params: { slug: string }
}

export default async function SwimmingPost({ params }: PageProps) {
  const post = getBlogPosts().find((p) => p.slug === params.slug)
  if (!post) notFound()

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">{post.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{new Date(post.metadata.publishedAt).toLocaleDateString()}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
