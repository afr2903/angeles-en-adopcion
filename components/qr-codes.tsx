import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { QrCode } from "lucide-react"

export function QRCodes() {
  return (
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto p-6">
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-center flex flex-col items-center gap-2">
            <QrCode className="h-8 w-8 text-primary" />
            Ver todos nuestros ángeles
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            {/* QR Code placeholder - replace with actual QR code generator */}
            <div className="w-48 h-48 bg-muted flex items-center justify-center text-sm text-muted-foreground text-center p-4">
              Código QR para:
              <br />
              angelesadopcion.com
            </div>
          </div>
          <p className="text-sm text-center text-muted-foreground">Escanea para ver los 80+ perritos disponibles</p>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-center flex flex-col items-center gap-2">
            <QrCode className="h-8 w-8 text-primary" />
            Requisitos de adopción
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="bg-white p-4 rounded-lg">
            {/* QR Code placeholder - replace with actual QR code generator */}
            <div className="w-48 h-48 bg-muted flex items-center justify-center text-sm text-muted-foreground text-center p-4">
              Código QR para:
              <br />
              angelesadopcion.com/requisitos
            </div>
          </div>
          <p className="text-sm text-center text-muted-foreground">Escanea para ver requisitos y formulario</p>
        </CardContent>
      </Card>
    </div>
  )
}
