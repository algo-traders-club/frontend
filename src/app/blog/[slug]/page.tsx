import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface BlogPostProps {
  params: {
    slug: string
  }
}

async function getPostContent(slug: string) {
  try {
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd(), 'posts', `${slug}.md`), 'utf-8')
    const { data: frontMatter, content } = matter(markdownWithMeta)
    return { frontMatter, content }
  } catch (error) {
    return null
  }
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const post = await getPostContent(params.slug)

  if (!post) {
    notFound()
  }

  const { frontMatter, content } = post

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="prose prose-lg mx-auto">
        {/* <h1>{frontMatter.title}</h1>
        <p className="text-muted-foreground">{frontMatter.date}</p>
        <ReactMarkdown
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {content}
        </ReactMarkdown> */}
      </article>
    </div>
  )
}