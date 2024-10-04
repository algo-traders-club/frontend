import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to Algo Traders Club</h1>
      <p className="text-xl mb-8">Learn algorithmic trading on the Solana blockchain</p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/courses">Explore Courses</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/blog">Read Our Blog</Link>
        </Button>
      </div>
    </div>
  )
}