import Image from 'next/image'
import Link from 'next/link'
import WalletConnectButton from './WalletConnectButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/algo-traders-club-logo.svg"
              alt="Algo Traders Club Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-xl font-bold">Algo Traders Club</span>
          </Link>
          <nav className="hidden md:flex space-x-4 items-center">
            <Link href="/courses" className="text-foreground hover:text-primary">Courses</Link>
            <Link href="/blog" className="text-foreground hover:text-primary">Blog</Link>
            <WalletConnectButton />
          </nav>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-background border-t">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2023 Algo Traders Club. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}