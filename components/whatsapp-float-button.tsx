"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloatButton() {
  return (
    <a
      href="https://wa.me/526532850961"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button size="lg" className="h-14 w-14 rounded-full shadow-lg hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </a>
  )
}
