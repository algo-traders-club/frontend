'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Button } from '../components/ui/button'

export default function WalletConnectButton() {
  const { connected } = useWallet()

  return (
    <div>
      {connected ? (
        <Button variant="outline">Connected</Button>
      ) : (
        <WalletMultiButton className="bg-primary text-primary-foreground hover:bg-primary/90" />
      )}
    </div>
  )
}