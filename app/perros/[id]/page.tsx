import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, MapPin, Calendar, Ruler, Users, Stethoscope, MessageCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ShareButton } from "@/components/share-button"
import { AdoptionForm } from "@/components/adoption-form"

// Mock data - will be replaced with database
const mockDogs = [
  {
    id: "1",
    name: "Romeo",
    age: "2 años",
    size: "Mediano",
    gender: "Macho",
    weight: "15 kg",
    temperament: ["Juguetón", "Cariñoso", "Sociable"],
    image: "/placeholder.svg?height=600&width=600",
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    location: "El Salto, Jalisco",
    urgent: false,
    story:
      "Romeo llegó a nosotros hace 6 meses después de ser rescatado de la calle. A pesar de su pasado difícil, es un perrito increíblemente amoroso que adora jugar con otros perros y recibir cariño de las personas. Le encanta correr en el jardín y es muy obediente.",
    goodWith: {
      kids: true,
      dogs: true,
      cats: false,
    },
    medicalInfo: {
      vaccinated: true,
      sterilized: true,
      dewormed: true,
      microchipped: false,
      specialNeeds: "Ninguna",
    },
    adoptionRequirements: [
      "Hogar con jardín o espacio para ejercitarse",
      "Compromiso de tiempo para juego y ejercicio diario",
      "Experiencia previa con perros (preferible)",
      "Disposición para entrenamiento continuo",
    ],
  },
]

export default async function DogProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const dog = mockDogs.find((d) => d.id === id)

  if (!dog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Back button */}
        <Button variant="ghost" className="mb-6 gap-2" asChild>
          <Link href="/#perros">
            <ArrowLeft className="h-4 w-4" />
            Volver a perritos
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={dog.image || "/placeholder.svg"} alt={dog.name} fill className="object-cover" />
              {dog.urgent && <Badge className="absolute right-4 top-4 bg-destructive text-lg">Adopción Urgente</Badge>}
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {dog.images.map((img, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image src={img || "/placeholder.svg"} alt={`${dog.name} ${idx + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Dog Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-balance text-4xl font-bold">{dog.name}</h1>
                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{dog.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <ShareButton dogName={dog.name} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {dog.temperament.map((trait) => (
                  <Badge key={trait} variant="secondary" className="text-sm">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Edad</div>
                    <div className="font-semibold">{dog.age}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Ruler className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Tamaño</div>
                    <div className="font-semibold">{dog.size}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Género</div>
                    <div className="font-semibold">{dog.gender}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Peso</div>
                    <div className="font-semibold">{dog.weight}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full gap-2">
                <Heart className="h-5 w-5" />
                Solicitar adopción
              </Button>
              <Button size="lg" variant="outline" className="w-full gap-2 bg-transparent" asChild>
                <a href="https://wa.me/526532850961" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Story */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">La historia de {dog.name}</h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">{dog.story}</p>
              </CardContent>
            </Card>

            {/* Good With */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Compatibilidad</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${dog.goodWith.kids ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Niños</div>
                      <div className="text-sm text-muted-foreground">{dog.goodWith.kids ? "Sí" : "No"}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${dog.goodWith.dogs ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Otros perros</div>
                      <div className="text-sm text-muted-foreground">{dog.goodWith.dogs ? "Sí" : "No"}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${dog.goodWith.cats ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Gatos</div>
                      <div className="text-sm text-muted-foreground">{dog.goodWith.cats ? "Sí" : "No"}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Info */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Información médica</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${dog.medicalInfo.vaccinated ? "bg-primary" : "bg-muted"}`} />
                    <span className={dog.medicalInfo.vaccinated ? "" : "text-muted-foreground"}>
                      {dog.medicalInfo.vaccinated ? "Vacunado" : "No vacunado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${dog.medicalInfo.sterilized ? "bg-primary" : "bg-muted"}`} />
                    <span className={dog.medicalInfo.sterilized ? "" : "text-muted-foreground"}>
                      {dog.medicalInfo.sterilized ? "Esterilizado" : "No esterilizado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${dog.medicalInfo.dewormed ? "bg-primary" : "bg-muted"}`} />
                    <span className={dog.medicalInfo.dewormed ? "" : "text-muted-foreground"}>
                      {dog.medicalInfo.dewormed ? "Desparasitado" : "No desparasitado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className={`h-2 w-2 rounded-full ${dog.medicalInfo.microchipped ? "bg-primary" : "bg-muted"}`}
                    />
                    <span className={dog.medicalInfo.microchipped ? "" : "text-muted-foreground"}>
                      {dog.medicalInfo.microchipped ? "Con microchip" : "Sin microchip"}
                    </span>
                  </div>
                </div>
                {dog.medicalInfo.specialNeeds !== "Ninguna" && (
                  <>
                    <Separator />
                    <div>
                      <div className="font-semibold">Necesidades especiales:</div>
                      <div className="text-muted-foreground">{dog.medicalInfo.specialNeeds}</div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Adoption Requirements */}
          <div className="space-y-6">
            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Requisitos de adopción</h2>
                <ul className="space-y-3">
                  {dog.adoptionRequirements.map((req, idx) => (
                    <li key={idx} className="flex gap-3">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <AdoptionForm dogName={dog.name} dogId={dog.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
