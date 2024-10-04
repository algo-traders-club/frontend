import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Post {
  slug: string
  frontMatter: {
    title: string
    date: string
    excerpt: string
  }
}

async function getPosts(): Promise<Post[]> {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      slug,
      frontMatter: frontMatter as Post['frontMatter'],
    }
  })

  return posts
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Algo Traders Club Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>{post.frontMatter.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{post.frontMatter.date}</p>
              <p className="text-sm">{post.frontMatter.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline mt-4 inline-block">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}