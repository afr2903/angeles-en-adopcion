"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, MessageCircle } from "lucide-react"

// Mock data
const mockRequests = [
  {
    id: 1,
    applicant: "María González",
    dog: "Romeo",
    date: "2025-01-15",
    status: "Pendiente",
    phone: "6531234567",
    email: "maria@example.com",
  },
  {
    id: 2,
    applicant: "Juan Pérez",
    dog: "Luna",
    date: "2025-01-14",
    status: "En revisión",
    phone: "6537654321",
    email: "juan@example.com",
  },
  {
    id: 3,
    applicant: "Ana Martínez",
    dog: "Max",
    date: "2025-01-13",
    status: "Pendiente",
    phone: "6539876543",
    email: "ana@example.com",
  },
]

export function AdoptionRequests() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solicitudes de Adopción</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockRequests.map((request) => (
            <div key={request.id} className="rounded-lg border p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{request.applicant}</h3>
                  <p className="text-sm text-muted-foreground">
                    Interesado en: <span className="font-medium text-foreground">{request.dog}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{new Date(request.date).toLocaleDateString("es-MX")}</p>
                </div>
                <Badge variant={request.status === "Pendiente" ? "secondary" : "default"}>{request.status}</Badge>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>{request.phone}</span>
                <span>•</span>
                <span>{request.email}</span>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="gap-2">
                  <Check className="h-4 w-4" />
                  Aprobar
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                  <X className="h-4 w-4" />
                  Rechazar
                </Button>
                <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                  <a href={`https://wa.me/52${request.phone}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
