import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DogGallery } from "@/components/dog-gallery"
import { Heart, Sparkles, HandHeart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full bg-gradient-to-br from-primary/20 via-accent/10 to-background">
            {/* Video or emotional image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <div className="text-center space-y-2">
                <p className="text-muted-foreground text-sm">Espacio para video o imagen emocional</p>
                <p className="text-xs text-muted-foreground/60">Video de rescates o perros en el refugio</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Heart className="h-4 w-4 fill-current" />
              <span>Rescate y rehabilitación desde 2020</span>
            </div>

            <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Adopta un ángel,
              <span className="text-primary"> cambia una vida</span>
            </h1>

            <p className="text-pretty mx-auto max-w-2xl text-lg text-foreground/70 sm:text-xl md:text-2xl leading-relaxed">
              Más de 80 ángeles rescatados esperan encontrar un hogar lleno de amor. Cada adopción es una segunda
              oportunidad para ellos y una bendición para ti.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center sm:items-center">
              <Button size="lg" className="gap-2 text-lg bg-primary hover:bg-primary/90" asChild>
                <Link href="#angeles">
                  <Heart className="h-5 w-5" />
                  Ver ángeles disponibles
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-lg border-primary text-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <Link href="/matching">
                  <Sparkles className="h-5 w-5" />
                  Encuentra tu match perfecto
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 mx-auto max-w-3xl">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">80+</div>
                <div className="text-sm text-foreground/60">Ángeles rescatados</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">321</div>
                <div className="text-sm text-foreground/60">Adopciones exitosas</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/60">Años rescatando</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
              Nuestra misión es rescatar, rehabilitar y encontrar hogares
            </h2>
            <p className="text-pretty mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              En El Salto, Jalisco, trabajamos día a día para darles una segunda oportunidad a los perritos que más lo
              necesitan.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rescate</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Salvamos perritos en situación de calle, abandono o maltrato
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rehabilitación</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Brindamos atención médica, vacunas, esterilización y amor
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <HandHeart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Adopción</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Conectamos a cada perrito con la familia perfecta para ellos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dog Gallery Section */}
      <section id="angeles" className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">Conoce a nuestros ángeles</h2>
            <p className="text-pretty mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
              Cada uno tiene una historia única y está esperando conocerte
            </p>
          </div>

          <DogGallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border-2 border-accent/30 bg-accent/5">
            <CardContent className="flex flex-col items-center gap-8 p-12 text-center">
              <HandHeart className="h-16 w-16 text-accent" />
              <div className="space-y-4">
                <h2 className="text-balance text-3xl font-bold sm:text-4xl">
                  ¿No puedes adoptar ahora? Todavía puedes ayudar
                </h2>
                <p className="text-pretty mx-auto max-w-2xl text-lg text-foreground/70 leading-relaxed">
                  Cada donación nos ayuda a alimentar, cuidar y dar atención médica a nuestros rescatados
                </p>
              </div>
              <Button size="lg" className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                <Link href="/donaciones">
                  <HandHeart className="h-5 w-5" />
                  Hacer una donación
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
