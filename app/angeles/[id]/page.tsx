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
import { createClient } from "@supabase/supabase-js"
import type { Database, Animal } from "@/types/database"
import { formatAge, translateSize, translateGender } from "@/lib/animals"

async function getAnimal(id: string): Promise<Animal | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('Supabase environment variables not configured')
    return null
  }

  const supabase = createClient<Database>(supabaseUrl, supabaseKey)
  
  const { data, error } = await supabase
    .from("animals")
    .select("*")
    .eq("id", id)
    .single()

  if (error || !data) {
    return null
  }

  return data as Animal
}

export default async function DogProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const animal = await getAnimal(id)

  if (!animal) {
    notFound()
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "525532850961"
  const whatsappMessage = encodeURIComponent(`Hola! Me interesa adoptar a ${animal.name}`)

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-8">
        {/* Back button */}
        <Button variant="ghost" className="mb-6 gap-2" asChild>
          <Link href="/#angeles">
            <ArrowLeft className="h-4 w-4" />
            Volver a ángeles
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image 
                src={animal.primary_image_url || "/placeholder.svg?height=600&width=600"} 
                alt={animal.name} 
                fill 
                className="object-cover" 
              />
              {animal.is_urgent && (
                <Badge className="absolute right-4 top-4 bg-destructive text-lg">Adopción Urgente</Badge>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {animal.additional_images && animal.additional_images.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {animal.additional_images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square overflow-hidden rounded-lg">
                    <Image 
                      src={img || "/placeholder.svg"} 
                      alt={`${animal.name} ${idx + 1}`} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dog Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-balance text-4xl font-bold">{animal.name}</h1>
                  <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{animal.location}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <ShareButton dogName={animal.name} />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {animal.temperament_tags.map((trait) => (
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
                    <div className="font-semibold">{formatAge(animal.age_years, animal.age_months)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Ruler className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Tamaño</div>
                    <div className="font-semibold">{translateSize(animal.size)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Género</div>
                    <div className="font-semibold">{translateGender(animal.gender)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-center gap-3 p-4">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Peso</div>
                    <div className="font-semibold">{animal.weight_kg ? `${animal.weight_kg} kg` : 'No registrado'}</div>
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
                <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
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
            {(animal.story || animal.description) && (
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">La historia de {animal.name}</h2>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {animal.story || animal.description}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Good With */}
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-bold">Compatibilidad</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${animal.good_with_kids ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Niños</div>
                      <div className="text-sm text-muted-foreground">
                        {animal.good_with_kids === null ? "No evaluado" : animal.good_with_kids ? "Sí" : "No"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${animal.good_with_dogs ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Otros perros</div>
                      <div className="text-sm text-muted-foreground">
                        {animal.good_with_dogs === null ? "No evaluado" : animal.good_with_dogs ? "Sí" : "No"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${animal.good_with_cats ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}
                    >
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Gatos</div>
                      <div className="text-sm text-muted-foreground">
                        {animal.good_with_cats === null ? "No evaluado" : animal.good_with_cats ? "Sí" : "No"}
                      </div>
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
                    <div className={`h-2 w-2 rounded-full ${animal.is_vaccinated ? "bg-primary" : "bg-muted"}`} />
                    <span className={animal.is_vaccinated ? "" : "text-muted-foreground"}>
                      {animal.is_vaccinated ? "Vacunado" : "No vacunado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${animal.is_sterilized ? "bg-primary" : "bg-muted"}`} />
                    <span className={animal.is_sterilized ? "" : "text-muted-foreground"}>
                      {animal.is_sterilized ? "Esterilizado" : "No esterilizado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${animal.is_dewormed ? "bg-primary" : "bg-muted"}`} />
                    <span className={animal.is_dewormed ? "" : "text-muted-foreground"}>
                      {animal.is_dewormed ? "Desparasitado" : "No desparasitado"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`h-2 w-2 rounded-full ${animal.is_microchipped ? "bg-primary" : "bg-muted"}`} />
                    <span className={animal.is_microchipped ? "" : "text-muted-foreground"}>
                      {animal.is_microchipped ? "Con microchip" : "Sin microchip"}
                    </span>
                  </div>
                </div>
                {animal.special_needs && (
                  <>
                    <Separator />
                    <div>
                      <div className="font-semibold">Necesidades especiales:</div>
                      <div className="text-muted-foreground">{animal.special_needs}</div>
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
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">Ser mayor de edad</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">Enviar video de tu casa/departamento</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">Compromiso de esterilización (si aplica)</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-sm text-muted-foreground">Seguimiento post-adopción</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <AdoptionForm dogName={animal.name} dogId={animal.id} />
          </div>
        </div>
      </div>
    </div>
  )
}
