"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"

export function AdoptionForm({ dogName, dogId }: { dogName: string; dogId: string }) {
  return (
    <Card className="border-2 border-primary">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          Adoptar a {dogName}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Para adoptar a {dogName}, primero lee nuestros requisitos y luego completa el formulario de adopción.
        </p>

        <div className="space-y-3">
          <Button className="w-full gap-2" asChild>
            <Link href="/requisitos">
              <FileText className="h-4 w-4" />
              Ver requisitos de adopción
            </Link>
          </Button>

          <Button className="w-full gap-2 bg-transparent" variant="outline" asChild>
            <a
              href={`https://forms.google.com/adoptionform-placeholder?dog=${dogName}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Llenar formulario
            </a>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          El formulario incluye carga de video del hogar (obligatorio)
        </p>
      </CardContent>
    </Card>
  )
}
