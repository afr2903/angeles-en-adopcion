"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MapPin, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock matching algorithm
const matchDogs = (answers: Record<number, string | string[]>) => {
  // In a real app, this would use AI to match based on answers
  const mockResults = [
    {
      id: "1",
      name: "Romeo",
      matchPercentage: 95,
      age: "2 años",
      size: "Mediano",
      temperament: ["Juguetón", "Cariñoso"],
      image: "/placeholder.svg?height=400&width=400",
      location: "Saltillo, Jalisco",
      matchReasons: [
        "Energía compatible con tu estilo de vida",
        "Bueno con niños y otros perros",
        "Tamaño ideal para tu hogar",
      ],
    },
    {
      id: "2",
      name: "Luna",
      matchPercentage: 88,
      age: "1 año",
      size: "Pequeño",
      temperament: ["Tranquila", "Dulce"],
      image: "/placeholder.svg?height=400&width=400",
      location: "Saltillo, Jalisco",
      matchReasons: [
        "Personalidad tranquila perfecta para ti",
        "Tamaño ideal para tu espacio",
        "Fácil de entrenar para principiantes",
      ],
    },
    {
      id: "4",
      name: "Bella",
      matchPercentage: 82,
      age: "6 meses",
      size: "Pequeño",
      temperament: ["Energética", "Juguetona"],
      image: "/placeholder.svg?height=400&width=400",
      location: "Saltillo, Jalisco",
      matchReasons: ["Joven y adaptable", "Personalidad juguetona", "Compatible con tu experiencia"],
    },
  ]

  return mockResults
}

export function MatchingResults({
  answers,
  onRestart,
}: {
  answers: Record<number, string | string[]>
  onRestart: () => void
}) {
  const matches = matchDogs(answers)

  return (
    <div className="space-y-8">
      {/* Header */}
      <Card className="border-2 border-primary bg-primary/5">
        <CardContent className="p-8 text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-balance text-3xl font-bold">Tus mejores matches</h2>
          <p className="text-pretty text-muted-foreground">
            Basado en tus respuestas, estos perritos son perfectos para ti. El porcentaje indica qué tan compatible eres
            con cada uno.
          </p>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="space-y-6">
        {matches.map((dog) => (
          <Card key={dog.id} className="overflow-hidden border-2 transition-shadow hover:shadow-lg">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="relative aspect-square md:aspect-auto">
                <Image src={dog.image || "/placeholder.svg"} alt={dog.name} fill className="object-cover" />
                <Badge className="absolute right-2 top-2 bg-primary text-base">{dog.matchPercentage}% Match</Badge>
              </div>

              <div className="p-6 md:col-span-2 md:p-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold">{dog.name}</h3>
                    <p className="text-muted-foreground">
                      {dog.age} • {dog.size}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {dog.temperament.map((trait) => (
                      <Badge key={trait} variant="secondary">
                        {trait}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold">Por qué son compatibles:</p>
                    <ul className="space-y-1">
                      {dog.matchReasons.map((reason, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">✓</span>
                          <span>{reason}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{dog.location}</span>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button className="gap-2" asChild>
                      <Link href={`/perros/${dog.id}`}>
                        <Heart className="h-4 w-4" />
                        Ver perfil completo
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://wa.me/526532850961" target="_blank" rel="noopener noreferrer">
                        Contactar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button variant="outline" onClick={onRestart}>
          Reintentar cuestionario
        </Button>
        <Button asChild>
          <Link href="/#perros">Ver todos los perritos</Link>
        </Button>
      </div>
    </div>
  )
}
