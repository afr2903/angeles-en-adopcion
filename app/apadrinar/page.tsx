import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const godparentTiers = [
  {
    name: "Bronce",
    amount: 100,
    color: "bg-orange-100 text-orange-900 border-orange-300",
    benefits: [
      "Actualizaciones mensuales con fotos",
      "Certificado digital de padrino",
      "Reconocimiento en redes sociales",
    ],
  },
  {
    name: "Plata",
    amount: 250,
    color: "bg-gray-100 text-gray-900 border-gray-300",
    benefits: [
      "Todo lo del nivel Bronce",
      "Video mensual personalizado",
      "Visita presencial al refugio (1 vez al mes)",
      "Tarjeta de agradecimiento física",
    ],
  },
  {
    name: "Oro",
    amount: 500,
    color: "bg-yellow-100 text-yellow-900 border-yellow-300",
    benefits: [
      "Todo lo del nivel Plata",
      "Videollamada mensual con tu ahijado",
      "Visitas ilimitadas al refugio",
      "Placa con tu nombre en el área del perrito",
      "Kit de bienvenida con foto y paw print",
    ],
  },
]

// Mock data
const availableDogs = [
  {
    id: 1,
    name: "Romeo",
    age: "2 años",
    image: "/placeholder.svg?height=300&width=300",
    story: "Romeo necesita medicamentos especiales para su tratamiento",
    monthlyNeed: 250,
  },
  {
    id: 2,
    name: "Luna",
    age: "1 año",
    image: "/placeholder.svg?height=300&width=300",
    story: "Luna está en recuperación y requiere alimento especial",
    monthlyNeed: 150,
  },
  {
    id: 3,
    name: "Max",
    age: "3 años",
    image: "/placeholder.svg?height=300&width=300",
    story: "Max es adulto mayor y necesita cuidados continuos",
    monthlyNeed: 300,
  },
]

export default function ApadrinarPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <Heart className="h-8 w-8 text-accent fill-current" />
            </div>
            <h1 className="text-balance text-4xl font-bold sm:text-5xl">Apadrina un ángel</h1>
            <p className="text-pretty text-lg text-muted-foreground max-w-2xl mx-auto">
              No puedes adoptar ahora pero quieres ayudar? Conviértete en padrino o madrina de un perrito específico y
              apoya sus cuidados mensuales mientras encuentra su hogar definitivo.
            </p>
          </div>

          {/* How it works */}
          <Card className="border-2">
            <CardContent className="p-8 space-y-6">
              <h2 className="text-2xl font-bold text-center">¿Cómo funciona?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    1
                  </div>
                  <h3 className="font-semibold">Elige tu ángel</h3>
                  <p className="text-sm text-muted-foreground">
                    Selecciona al perrito que quieras apadrinar de nuestra lista
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    2
                  </div>
                  <h3 className="font-semibold">Elige tu plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Selecciona el monto mensual que quieres aportar (desde $100 MXN)
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                    3
                  </div>
                  <h3 className="font-semibold">Recibe actualizaciones</h3>
                  <p className="text-sm text-muted-foreground">
                    Te enviaremos fotos, videos y noticias de tu ahijado cada mes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tiers */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-center">Niveles de padrinazgo</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {godparentTiers.map((tier) => (
                <Card key={tier.name} className={`border-2 ${tier.color}`}>
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="space-y-2">
                        <div className="text-2xl">{tier.name}</div>
                        <div className="text-3xl font-bold">${tier.amount}</div>
                        <div className="text-sm font-normal">MXN / mes</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Available Dogs */}
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold">Ángeles disponibles para apadrinar</h2>
              <p className="text-muted-foreground">
                Estos ángeles necesitan apoyo especial mientras encuentran su hogar
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {availableDogs.map((dog) => (
                <Card key={dog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-square">
                    <Image src={dog.image || "/placeholder.svg"} alt={dog.name} fill className="object-cover" />
                    <Badge className="absolute top-2 right-2 bg-accent">Necesita ${dog.monthlyNeed}/mes</Badge>
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold">{dog.name}</h3>
                      <p className="text-sm text-muted-foreground">{dog.age}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{dog.story}</p>
                    <Button className="w-full" asChild>
                      <a
                        href={`https://wa.me/525532850961?text=${encodeURIComponent(
                          `Hola! Me gustaría apadrinar a ${dog.name}`,
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apadrinar a {dog.name}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/#angeles">Ver todos los ángeles</Link>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <Card className="border-2 bg-primary/5">
            <CardContent className="p-8 text-center space-y-4">
              <Heart className="mx-auto h-12 w-12 text-primary fill-current" />
              <h2 className="text-2xl font-bold">¿Listo para ser padrino/madrina?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Contáctanos por WhatsApp y te ayudaremos a configurar tu padrinazgo mensual
              </p>
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/525532850961?text=Hola!%20Quiero%20información%20sobre%20apadrinar%20un%20perrito"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contactar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
