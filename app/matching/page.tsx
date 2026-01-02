import { MatchingQuiz } from "@/components/matching-quiz"
import { Sparkles } from "lucide-react"

export default function MatchingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 py-12">
        <div className="mx-auto max-w-4xl space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-balance text-4xl font-bold sm:text-5xl">Encuentra tu match perfecto</h1>
            <p className="text-pretty text-lg text-muted-foreground">
              Responde algunas preguntas y te ayudaremos a encontrar el perrito ideal para ti y tu familia
            </p>
          </div>

          {/* Quiz Component */}
          <MatchingQuiz />
        </div>
      </div>
    </div>
  )
}
