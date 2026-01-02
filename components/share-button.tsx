"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useState } from "react"

export function ShareButton({ dogName }: { dogName: string }) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const url = window.location.href
    const text = `Mira a ${dogName}, este perrito está buscando un hogar!`

    if (navigator.share) {
      try {
        await navigator.share({ title: dogName, text, url })
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      // Fallback to copying to clipboard
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Button size="icon" variant="outline" onClick={handleShare}>
      <Share2 className="h-5 w-5" />
      {copied && <span className="sr-only">Enlace copiado</span>}
    </Button>
  )
}
