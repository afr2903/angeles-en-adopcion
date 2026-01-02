"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Create WhatsApp message
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const whatsappMessage = `Hola! Mi nombre es ${name}.

Asunto: ${subject}
Email: ${email}
Teléfono: ${phone}

Mensaje: ${message}`

    // Open WhatsApp
    window.open(`https://wa.me/526532850961?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <Card className="border-2 border-primary bg-primary/5">
        <CardContent className="p-12 text-center space-y-4">
          <MessageCircle className="mx-auto h-16 w-16 text-primary" />
          <h3 className="text-2xl font-bold">Mensaje enviado</h3>
          <p className="text-muted-foreground">
            Te redireccionamos a WhatsApp para continuar la conversación. Responderemos lo antes posible.
          </p>
          <Button onClick={() => setSubmitted(false)}>Enviar otro mensaje</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>Envíanos un mensaje</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Asunto</Label>
            <Select name="subject" required>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un tema..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Adopción">Información sobre adopción</SelectItem>
                <SelectItem value="Donación">Hacer una donación</SelectItem>
                <SelectItem value="Voluntariado">Quiero ser voluntario</SelectItem>
                <SelectItem value="Rescate">Reportar perrito en peligro</SelectItem>
                <SelectItem value="Otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" name="message" placeholder="Cuéntanos cómo podemos ayudarte..." rows={5} required />
          </div>

          <Button type="submit" className="w-full gap-2">
            <MessageCircle className="h-5 w-5" />
            Enviar mensaje por WhatsApp
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Al enviar, serás redirigido a WhatsApp para continuar la conversación
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
