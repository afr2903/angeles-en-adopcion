import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, ExternalLink, FileText, Video } from "lucide-react"
import Link from "next/link"

export default function RequisitosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold sm:text-5xl">Requisitos para adoptar</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Lee cuidadosamente todos los requisitos antes de llenar la solicitud de adopción
            </p>
          </div>

          {/* Requirements */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Requisitos generales</h2>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Ser mayor de 18 años</h3>
                    <p className="text-sm text-muted-foreground">Con identificación oficial vigente</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Contar con un hogar estable</h3>
                    <p className="text-sm text-muted-foreground">
                      Casa o departamento con espacio adecuado para la mascota
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Compromiso económico</h3>
                    <p className="text-sm text-muted-foreground">
                      Capacidad para cubrir gastos de alimento, veterinario y cuidados
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Acuerdo familiar</h3>
                    <p className="text-sm text-muted-foreground">
                      Todos los miembros de la familia deben estar de acuerdo con la adopción
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Visita domiciliaria (requerida)</h3>
                    <p className="text-sm text-muted-foreground">
                      Deberás proporcionar un video de tu casa y patio para verificar que sea un lugar seguro
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Compromiso de por vida</h3>
                    <p className="text-sm text-muted-foreground">
                      La adopción es un compromiso de cuidar al animal durante toda su vida (10-15 años aproximadamente)
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Note */}
          <Card className="border-2 border-accent/30 bg-accent/5">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <Video className="h-6 w-6 shrink-0 text-accent mt-0.5" />
                <div>
                  <h3 className="font-semibold text-lg">Video del hogar obligatorio</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Para garantizar la seguridad de nuestros ángeles, solicitamos un video corto (1-2 minutos) mostrando
                    tu casa, jardín o patio, y las áreas donde el perrito pasará tiempo. Esto nos ayuda a asegurarnos de
                    que el espacio sea adecuado y seguro.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Agreement and Form Link */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start gap-3">
                <Checkbox id="agreement" className="mt-1" />
                <label htmlFor="agreement" className="text-sm leading-relaxed">
                  He leído y acepto todos los requisitos de adopción. Entiendo que debo proporcionar un video de mi
                  hogar y que el refugio realizará una evaluación antes de aprobar la adopción. Me comprometo a cuidar
                  al animal de forma responsable durante toda su vida.
                </label>
              </div>

              <Button size="lg" className="w-full gap-2" asChild>
                <a href="https://forms.google.com/adoptionform-placeholder" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  Ir al formulario de adopción
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Serás redirigido a Google Forms para completar tu solicitud
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">¿Tienes preguntas sobre los requisitos?</p>
            <Button variant="outline" asChild>
              <Link href="/contacto">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
