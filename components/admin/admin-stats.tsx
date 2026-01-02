import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, HandHeart, TrendingUp } from "lucide-react"

export function AdminStats() {
  // Mock data - would come from database
  const stats = [
    {
      title: "Perritos disponibles",
      value: "65",
      icon: Heart,
      trend: "+3 este mes",
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "Solicitudes pendientes",
      value: "12",
      icon: Users,
      trend: "8 nuevas",
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Adopciones exitosas",
      value: "123",
      icon: TrendingUp,
      trend: "+5 este mes",
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Donaciones del mes",
      value: "$12,500",
      icon: HandHeart,
      trend: "+20% vs anterior",
      color: "text-accent",
      bg: "bg-accent/10",
    },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.trend}</p>
                </div>
                <div className={`rounded-full p-3 ${stat.bg}`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
