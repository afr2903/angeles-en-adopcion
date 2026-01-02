"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit, Trash2 } from "lucide-react"
import Image from "next/image"

// Mock data
const mockDogs = [
  {
    id: 1,
    name: "Romeo",
    age: "2 años",
    size: "Mediano",
    status: "Disponible",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Luna",
    age: "1 año",
    size: "Pequeño",
    status: "En adopción",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Max",
    age: "3 años",
    size: "Grande",
    status: "Disponible",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Bella",
    age: "6 meses",
    size: "Pequeño",
    status: "Disponible",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function DogManagement() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDogs = mockDogs.filter((dog) => dog.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Gestión de Perritos</CardTitle>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Agregar perrito
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>

          {/* Dog List */}
          <div className="space-y-3">
            {filteredDogs.map((dog) => (
              <div key={dog.id} className="flex items-center gap-4 rounded-lg border p-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                  <Image src={dog.image || "/placeholder.svg"} alt={dog.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{dog.name}</h3>
                    <Badge variant={dog.status === "Disponible" ? "default" : "secondary"}>{dog.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {dog.age} • {dog.size}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button size="icon" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
