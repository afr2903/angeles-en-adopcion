"use client"

import { QRCodes } from "@/components/qr-codes"
import { Printer, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function QRPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <QrCode className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Códigos QR para evento</h1>
            <p className="text-lg text-muted-foreground">Imprime estos códigos QR para el evento del domingo</p>
          </div>

          <QRCodes />

          <div className="flex justify-center">
            <Button size="lg" className="gap-2" onClick={() => window.print()}>
              <Printer className="h-5 w-5" />
              Imprimir códigos QR
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>Recomendaciones de impresión:</p>
            <ul className="space-y-1">
              <li>• Imprime en tamaño carta o más grande</li>
              <li>• Usa papel de buena calidad para mejor escaneo</li>
              <li>• Prueba que los códigos funcionen antes del evento</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
