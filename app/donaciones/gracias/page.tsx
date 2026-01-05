import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Home, Share2 } from "lucide-react"
import Link from "next/link"

export default function GraciasPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-lg">
          <Card className="border-2 border-primary/30">
            <CardContent className="p-12 text-center space-y-6">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-12 w-12 text-primary fill-current animate-pulse" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">¡Gracias por tu donación!</h1>
                <p className="text-muted-foreground text-lg">
                  Tu generosidad hace una diferencia real en la vida de nuestros ángeles rescatados.
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                <p>
                  Recibirás un correo de confirmación con los detalles de tu donación.
                  Si necesitas un recibo deducible de impuestos, contáctanos.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Button size="lg" asChild>
                  <Link href="/#angeles">
                    <Heart className="h-5 w-5 mr-2" />
                    Conocer a nuestros ángeles
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/">
                    <Home className="h-5 w-5 mr-2" />
                    Volver al inicio
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                ¿Quieres ayudar más?{" "}
                <a 
                  href="https://wa.me/526532850961?text=Hola!%20Acabo%20de%20hacer%20una%20donación%20y%20me%20gustaría%20saber%20cómo%20más%20puedo%20ayudar" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contáctanos
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

