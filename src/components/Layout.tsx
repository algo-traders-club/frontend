'use client'

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'
import { useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import WalletConnectButton from './WalletConnectButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // Add other wallet adapters here
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
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
                <nav className="hidden md:flex space-x-4">
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
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}