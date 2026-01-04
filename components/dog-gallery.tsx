"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MapPin, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - will be replaced with database
const mockDogs = [
  {
    id: 1,
    name: "Romeo",
    age: "2 años",
    size: "Mediano",
    gender: "Macho",
    temperament: ["Juguetón", "Cariñoso"],
    image: "/placeholder.svg?height=400&width=400",
    location: "El Salto, Jalisco",
    urgent: false,
  },
  {
    id: 2,
    name: "Luna",
    age: "1 año",
    size: "Pequeño",
    gender: "Hembra",
    temperament: ["Tranquila", "Dulce"],
    image: "/placeholder.svg?height=400&width=400",
    location: "El Salto, Jalisco",
    urgent: true,
  },
  {
    id: 3,
    name: "Max",
    age: "3 años",
    size: "Grande",
    gender: "Macho",
    temperament: ["Protector", "Leal"],
    image: "/placeholder.svg?height=400&width=400",
    location: "El Salto, Jalisco",
    urgent: false,
  },
  {
    id: 4,
    name: "Bella",
    age: "6 meses",
    size: "Mini",
    gender: "Hembra",
    temperament: ["Energética", "Juguetona"],
    image: "/placeholder.svg?height=400&width=400",
    location: "El Salto, Jalisco",
    urgent: false,
  },
  {
    id: 5,
    name: "Rocky",
    age: "4 años",
    size: "Mediano",
    gender: "Macho",
    temperament: ["Tranquilo", "Amigable"],
    image: "/placeholder.svg?height=400&width=400",
    location: "El Salto, Jalisco",
    urgent: true,
  },
  {
    id: 6,
    name: "Mia",
    age: "2 años",
    size: "Pequeño",
    gender: "Hembra",
    temperament: ["Cariñosa", "Sociable"],
    image: "/placeholder.svg?height=400&width=400",
    location: "El Salto, Jalisco",
    urgent: false,
  },
]

export function DogGallery() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sizeFilter, setSizeFilter] = useState("all")
  const [genderFilter, setGenderFilter] = useState("all")

  const filteredDogs = mockDogs.filter((dog) => {
    const matchesSearch = dog.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSize = sizeFilter === "all" || dog.size === sizeFilter
    const matchesGender = genderFilter === "all" || dog.gender === genderFilter
    return matchesSearch && matchesSize && matchesGender
  })

  return (
    <div className="space-y-8">
      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Tamaño" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tamaños</SelectItem>
                <SelectItem value="Mini">Mini</SelectItem>
                <SelectItem value="Pequeño">Pequeño</SelectItem>
                <SelectItem value="Mediano">Mediano</SelectItem>
                <SelectItem value="Grande">Grande</SelectItem>
              </SelectContent>
            </Select>

            <Select value={genderFilter} onValueChange={setGenderFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Género" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Macho">Macho</SelectItem>
                <SelectItem value="Hembra">Hembra</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Mostrando {filteredDogs.length} de {mockDogs.length} ángeles
      </div>

      {/* Dog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDogs.map((dog) => (
          <Card key={dog.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={dog.image || "/placeholder.svg"}
                alt={dog.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              {dog.urgent && <Badge className="absolute right-2 top-2 bg-destructive">Urgente</Badge>}
              <Badge
                className={`absolute left-2 top-2 ${
                  dog.gender === "Macho" ? "bg-blue-500 hover:bg-blue-600" : "bg-pink-500 hover:bg-pink-600"
                }`}
              >
                {dog.gender}
              </Badge>
            </div>

            <CardContent className="space-y-3 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{dog.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {dog.age} • {dog.size}
                  </p>
                </div>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {dog.temperament.map((trait) => (
                  <Badge key={trait} variant="secondary">
                    {trait}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{dog.location}</span>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/perros/${dog.id}`}>Conocer a {dog.name}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredDogs.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No encontramos ángeles con esos criterios. Prueba con otros filtros.
          </p>
        </div>
      )}
    </div>
  )
}
