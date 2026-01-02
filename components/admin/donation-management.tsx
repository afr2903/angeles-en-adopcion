import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HandHeart } from "lucide-react"

// Mock data
const mockDonations = [
  { id: 1, donor: "Carlos Ramírez", amount: 500, date: "2025-01-16", type: "Única", method: "Transferencia" },
  { id: 2, donor: "Laura Sánchez", amount: 1000, date: "2025-01-15", type: "Mensual", method: "Transferencia" },
  { id: 3, donor: "Pedro Torres", amount: 200, date: "2025-01-14", type: "Única", method: "Efectivo" },
  { id: 4, donor: "Sofia López", amount: 1500, date: "2025-01-13", type: "Única", method: "Transferencia" },
]

export function DonationManagement() {
  const totalMonth = mockDonations.reduce((sum, d) => sum + d.amount, 0)

  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="border-2 border-accent/20 bg-accent/5">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="rounded-full bg-accent/10 p-4">
            <HandHeart className="h-8 w-8 text-accent" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total recaudado en enero</p>
            <p className="text-3xl font-bold">${totalMonth.toLocaleString()} MXN</p>
          </div>
        </CardContent>
      </Card>

      {/* Donations List */}
      <Card>
        <CardHeader>
          <CardTitle>Historial de Donaciones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockDonations.map((donation) => (
              <div key={donation.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <h3 className="font-semibold">{donation.donor}</h3>
                  <p className="text-sm text-muted-foreground">
                    {new Date(donation.date).toLocaleDateString("es-MX")} • {donation.method}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={donation.type === "Mensual" ? "default" : "secondary"}>{donation.type}</Badge>
                  <div className="text-right">
                    <p className="font-bold">${donation.amount.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">MXN</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
