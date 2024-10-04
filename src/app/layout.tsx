import '@/styles/globals.css'
import '@solana/wallet-adapter-react-ui/styles.css'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Algo Traders Club',
  description: 'Learn algorithmic trading with Solana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}