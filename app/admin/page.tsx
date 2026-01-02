import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DogManagement } from "@/components/admin/dog-management"
import { AdoptionRequests } from "@/components/admin/adoption-requests"
import { DonationManagement } from "@/components/admin/donation-management"
import { AdminStats } from "@/components/admin/admin-stats"
import { LayoutDashboard } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container px-4 py-8">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
              <LayoutDashboard className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Panel de Administración</h1>
              <p className="text-muted-foreground">Gestiona perritos, adopciones y donaciones</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <AdminStats />

        {/* Main Content */}
        <Tabs defaultValue="dogs" className="mt-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="dogs">Perritos</TabsTrigger>
            <TabsTrigger value="adoptions">Solicitudes</TabsTrigger>
            <TabsTrigger value="donations">Donaciones</TabsTrigger>
          </TabsList>

          <TabsContent value="dogs" className="mt-6">
            <DogManagement />
          </TabsContent>

          <TabsContent value="adoptions" className="mt-6">
            <AdoptionRequests />
          </TabsContent>

          <TabsContent value="donations" className="mt-6">
            <DonationManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
