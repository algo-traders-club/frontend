'use client'

import { useWallet } from '@solana/wallet-adapter-react'
import { Button } from '@/components/ui/button'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useState, useEffect } from 'react'

export default function WalletConnectButton() {
  const { connected, publicKey, disconnect } = useWallet()
  const { setVisible } = useWalletModal()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleClick = () => {
    if (connected) {
      disconnect()
    } else {
      setVisible(true)
    }
  }

  return (
    <Button onClick={handleClick} variant={connected ? "outline" : "default"}>
      {connected ? `${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)}` : "Connect Phantom"}
    </Button>
  )
}