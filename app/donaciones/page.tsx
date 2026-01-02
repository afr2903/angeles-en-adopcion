import { DonationOptions } from "@/components/donation-options"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { HandHeart, Heart, Stethoscope, Utensils, ExternalLink, Gift } from "lucide-react"
import Link from "next/link"

export default function DonacionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <HandHeart className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-balance text-4xl font-bold sm:text-5xl">Ayúdanos a seguir rescatando</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Cada donación nos ayuda a alimentar, cuidar y dar atención médica a más de 80 ángeles rescatados. Tu apoyo
              hace la diferencia.
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="border-2">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-accent/10 p-4">
                  <Utensils className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold">$200</div>
                  <div className="text-sm text-muted-foreground mt-1">Alimento para un mes</div>
                </div>
                <p className="text-sm text-muted-foreground">Alimenta a un ángel durante todo el mes</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-accent/10 p-4">
                  <Stethoscope className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold">$500</div>
                  <div className="text-sm text-muted-foreground mt-1">Atención médica</div>
                </div>
                <p className="text-sm text-muted-foreground">Cubre vacunas, desparasitación y chequeo</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-accent/10 p-4">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold">$1,500</div>
                  <div className="text-sm text-muted-foreground mt-1">Esterilización</div>
                </div>
                <p className="text-sm text-muted-foreground">Cirugía completa de esterilización</p>
              </CardContent>
            </Card>
          </div>

          {/* Donation Options */}
          <DonationOptions />

          {/* Amazon Wishlist section */}
          <Card className="border-2 bg-primary/5">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Lista de deseos de Amazon</h2>
                <p className="text-muted-foreground">
                  Compra directamente los artículos que necesitamos para nuestros ángeles
                </p>
              </div>

              <div className="flex justify-center">
                <Button size="lg" className="gap-2" asChild>
                  <a
                    href="https://www.amazon.com.mx/wedding/registry/2026-registry-placeholder"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Ver lista en Amazon
                  </a>
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Croquetas, medicamentos, cobijas, juguetes y más
              </p>
            </CardContent>
          </Card>

          {/* Bank Transfer Info */}
          <Card className="border-2 bg-muted/30">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Transferencia bancaria</h2>
                <p className="text-muted-foreground">También puedes donar directamente a nuestra cuenta</p>
              </div>

              <div className="mx-auto max-w-md space-y-4 rounded-lg bg-background p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Banco</div>
                    <div className="font-semibold">BanCoppel</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Titular</div>
                    <div className="font-semibold">America Gallegos</div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Número de tarjeta</div>
                  <div className="rounded-md bg-muted p-3 font-mono text-lg font-semibold">4169 1611 0637 1114</div>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                  Por favor envíanos comprobante por WhatsApp al{" "}
                  <a href="https://wa.me/526532850961" className="text-primary hover:underline">
                    653 285 0961
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* PayPal and Tax-deductible info */}
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-2">
              <CardContent className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold">PayPal</h3>
                <p className="text-sm text-muted-foreground">Acepta donaciones internacionales con PayPal</p>
                <Button className="w-full gap-2 bg-transparent" variant="outline" asChild>
                  <a href="https://paypal.me/angelesadopcion" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Donar con PayPal
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">(Placeholder - actualizar con cuenta real)</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 space-y-4 text-center">
                <h3 className="text-xl font-bold">Recibo deducible de impuestos</h3>
                <p className="text-sm text-muted-foreground">
                  Disponible para donaciones de México, USA y Canadá a través de Codapo
                </p>
                <Button className="w-full gap-2 bg-transparent" variant="outline" asChild>
                  <Link href="/contacto">Solicitar recibo</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Other Ways to Help */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-center text-2xl font-bold">Otras formas de ayudar</h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Donaciones en especie</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Alimento para perro (croquetas)</li>
                    <li>• Medicamentos y vitaminas</li>
                    <li>• Cobijas y camas</li>
                    <li>• Juguetes y correas</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Voluntariado</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Pasear ángeles</li>
                    <li>• Ayuda en eventos de adopción</li>
                    <li>• Transporte a veterinaria</li>
                    <li>• Hogar temporal</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 text-center">
                <p className="text-muted-foreground mb-4">Contáctanos para coordinar donaciones o voluntariado</p>
                <a
                  href="https://wa.me/526532850961"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <HandHeart className="h-4 w-4" />
                  WhatsApp: 653 285 0961
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
