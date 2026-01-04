import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-5xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-balance text-4xl font-bold sm:text-5xl">Contáctanos</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Estamos aquí para responder todas tus preguntas sobre adopción, voluntariado o donaciones
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <h2 className="text-2xl font-bold">Información de contacto</h2>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/526532850961"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted"
                    >
                      <div className="rounded-full bg-primary/10 p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">WhatsApp / Teléfono</div>
                        <div className="text-muted-foreground">653 285 0961</div>
                        <div className="text-sm text-primary">Haz clic para chatear</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Correo electrónico</div>
                        <div className="text-muted-foreground">info@angelesadopcion.org</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 rounded-lg border p-4">
                      <div className="rounded-full bg-primary/10 p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Ubicación</div>
                        <div className="text-muted-foreground">El Salto, Jalisco, México</div>
                      </div>
                    </div>

                    <a
                      href="https://instagram.com/angeles.enadopcion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-muted"
                    >
                      <div className="rounded-full bg-primary/10 p-3">
                        <Instagram className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Instagram</div>
                        <div className="text-muted-foreground">@angeles.enadopcion</div>
                        <div className="text-sm text-primary">Síguenos para ver actualizaciones</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">Horario de atención</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lunes - Viernes</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábados</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingos</span>
                      <span className="font-medium">Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* FAQ Section */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">¿Cómo puedo adoptar un perrito?</h3>
                  <p className="text-sm text-muted-foreground">
                    Puedes llenar una solicitud de adopción en el perfil del perrito que te interese, o contactarnos
                    directamente por WhatsApp. Realizaremos una entrevista y visita domiciliaria para asegurar que sea
                    un buen match.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">¿Cuál es el costo de adopción?</h3>
                  <p className="text-sm text-muted-foreground">
                    No cobramos por las adopciones, pero pedimos una donación sugerida de $500-1000 MXN para ayudar a
                    cubrir los gastos médicos del perrito (vacunas, esterilización, desparasitación).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">¿Puedo ser voluntario?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sí, siempre necesitamos voluntarios para pasear perritos, ayudar en eventos, transportar a
                    veterinaria, o ser hogar temporal. Contáctanos por WhatsApp para más información.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">¿Aceptan donaciones en especie?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sí, aceptamos alimento, medicamentos, cobijas, juguetes, correas y cualquier cosa que pueda ayudar a
                    nuestros perritos. Contáctanos para coordinar la entrega.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
