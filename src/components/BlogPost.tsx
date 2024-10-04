import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface BlogPostProps {
  content: string
  frontMatter: {
    title: string
    date: string
  }
}

export default function BlogPost({ content, frontMatter }: BlogPostProps) {
  return (
    <article className="prose prose-lg mx-auto">
      <h1>{frontMatter.title}</h1>
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
      </ReactMarkdown>
    </article>
  )
}