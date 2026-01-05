"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, MapPin, Search, Loader2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { getSupabaseClient } from "@/lib/supabase"
import type { Animal, AnimalSize, AnimalGender } from "@/types/database"
import { formatAge, translateSize, translateGender } from "@/lib/animals"

export function DogGallery() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [sizeFilter, setSizeFilter] = useState<AnimalSize | "all">("all")
  const [genderFilter, setGenderFilter] = useState<AnimalGender | "all">("all")
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    async function fetchAnimals() {
      setLoading(true)
      
      try {
        const supabase = getSupabaseClient()
        
        let query = supabase
          .from('animals')
          .select('*', { count: 'exact' })
          .eq('status', 'available')
          .order('is_urgent', { ascending: false })
          .order('created_at', { ascending: false })

        if (sizeFilter !== "all") {
          query = query.eq('size', sizeFilter)
        }

        if (genderFilter !== "all") {
          query = query.eq('gender', genderFilter)
        }

        if (searchQuery) {
          query = query.ilike('name', `%${searchQuery}%`)
        }

        const { data, count, error } = await query

        if (error) {
          console.error('Error fetching animals:', error)
          setAnimals([])
        } else {
          setAnimals(data || [])
          setTotalCount(count || 0)
        }
      } catch (err) {
        console.error('Supabase not configured:', err)
        setAnimals([])
      }
      
      setLoading(false)
    }

    fetchAnimals()
  }, [searchQuery, sizeFilter, genderFilter])

  // Debounce search
  const [debouncedSearch, setDebouncedSearch] = useState("")
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(debouncedSearch)
    }, 300)
    return () => clearTimeout(timer)
  }, [debouncedSearch])

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
                value={debouncedSearch}
                onChange={(e) => setDebouncedSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            <Select value={sizeFilter} onValueChange={(v) => setSizeFilter(v as AnimalSize | "all")}>
              <SelectTrigger>
                <SelectValue placeholder="Tamaño" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tamaños</SelectItem>
                <SelectItem value="mini">Mini</SelectItem>
                <SelectItem value="small">Pequeño</SelectItem>
                <SelectItem value="medium">Mediano</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
              </SelectContent>
            </Select>

            <Select value={genderFilter} onValueChange={(v) => setGenderFilter(v as AnimalGender | "all")}>
              <SelectTrigger>
                <SelectValue placeholder="Género" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="male">Macho</SelectItem>
                <SelectItem value="female">Hembra</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Cargando ángeles...
          </span>
        ) : (
          `Mostrando ${animals.length} de ${totalCount} ángeles`
        )}
      </div>

      {/* Dog Grid */}
      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden animate-pulse">
              <div className="aspect-square bg-muted" />
              <CardContent className="p-4 space-y-3">
                <div className="h-6 bg-muted rounded w-1/2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {animals.map((animal) => (
            <Card key={animal.id} className="group overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={animal.primary_image_url || "/placeholder.svg?height=400&width=400"}
                  alt={animal.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                {animal.is_urgent && (
                  <Badge className="absolute right-2 top-2 bg-destructive">Urgente</Badge>
                )}
                <Badge
                  className={`absolute left-2 top-2 ${
                    animal.gender === "male" ? "bg-blue-500 hover:bg-blue-600" : "bg-pink-500 hover:bg-pink-600"
                  }`}
                >
                  {translateGender(animal.gender)}
                </Badge>
              </div>

              <CardContent className="space-y-3 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{animal.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatAge(animal.age_years, animal.age_months)} • {translateSize(animal.size)}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {animal.temperament_tags.slice(0, 3).map((trait) => (
                    <Badge key={trait} variant="secondary">
                      {trait}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{animal.location}</span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full" asChild>
                  <Link href={`/angeles/${animal.id}`}>Conocer a {animal.name}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      {!loading && animals.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-lg text-muted-foreground">
            No encontramos ángeles con esos criterios. Prueba con otros filtros.
          </p>
        </div>
      )}
    </div>
  )
}
