"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { HandHeart } from "lucide-react"

const presetAmounts = [
  { value: "200", label: "$200" },
  { value: "500", label: "$500" },
  { value: "1000", label: "$1,000" },
  { value: "1500", label: "$1,500" },
]

export function DonationOptions() {
  const [amount, setAmount] = useState("500")
  const [customAmount, setCustomAmount] = useState("")
  const [frequency, setFrequency] = useState<"once" | "monthly">("once")
  const [showThankYou, setShowThankYou] = useState(false)

  const handleDonate = () => {
    // In a real app, this would integrate with Stripe or payment processor
    // For now, redirect to WhatsApp with donation info
    const donationAmount = customAmount || amount
    const message = `Hola! Me gustaría hacer una donación de $${donationAmount} MXN ${frequency === "monthly" ? "mensual" : "única"} para ayudar a los perritos.`
    window.open(`https://wa.me/526532850961?text=${encodeURIComponent(message)}`, "_blank")
    setShowThankYou(true)
  }

  if (showThankYou) {
    return (
      <Card className="border-2 border-primary bg-primary/5">
        <CardContent className="p-12 text-center space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
            <HandHeart className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Gracias por tu generosidad</h2>
          <p className="text-muted-foreground">
            Te redireccionamos a WhatsApp para completar tu donación. Tu apoyo hace una diferencia real en la vida de
            nuestros perritos.
          </p>
          <Button onClick={() => setShowThankYou(false)}>Hacer otra donación</Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="text-2xl">Hacer una donación</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Frequency */}
        <div className="space-y-3">
          <Label>Frecuencia</Label>
          <RadioGroup value={frequency} onValueChange={(v) => setFrequency(v as "once" | "monthly")}>
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`flex items-center space-x-2 rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                  frequency === "once" ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <RadioGroupItem value="once" id="once" />
                <Label htmlFor="once" className="flex-1 cursor-pointer">
                  Donación única
                </Label>
              </div>
              <div
                className={`flex items-center space-x-2 rounded-lg border-2 p-4 cursor-pointer transition-colors ${
                  frequency === "monthly" ? "border-primary bg-primary/5" : "border-border"
                }`}
              >
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly" className="flex-1 cursor-pointer">
                  Mensual
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {/* Amount */}
        <div className="space-y-3">
          <Label>Cantidad (MXN)</Label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {presetAmounts.map((preset) => (
              <Button
                key={preset.value}
                variant={amount === preset.value && !customAmount ? "default" : "outline"}
                onClick={() => {
                  setAmount(preset.value)
                  setCustomAmount("")
                }}
                className="h-12"
              >
                {preset.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="space-y-2">
          <Label htmlFor="custom">Otra cantidad</Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
            <Input
              id="custom"
              type="number"
              placeholder="Ingresa cantidad"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="pl-7"
            />
          </div>
        </div>

        {/* Donate Button */}
        <Button onClick={handleDonate} size="lg" className="w-full gap-2">
          <HandHeart className="h-5 w-5" />
          Donar ${customAmount || amount} MXN {frequency === "monthly" ? "al mes" : ""}
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Al hacer clic, serás redirigido a WhatsApp para completar tu donación de forma segura
        </p>
      </CardContent>
    </Card>
  )
}
