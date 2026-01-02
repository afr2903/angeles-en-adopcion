"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { MatchingResults } from "@/components/matching-results"
import { ArrowRight, ArrowLeft } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "¿Qué tamaño de perro prefieres?",
    type: "single" as const,
    options: [
      { value: "small", label: "Pequeño (hasta 10kg)" },
      { value: "medium", label: "Mediano (10-25kg)" },
      { value: "large", label: "Grande (más de 25kg)" },
      { value: "any", label: "No tengo preferencia" },
    ],
  },
  {
    id: 2,
    question: "¿Cuál es tu nivel de experiencia con perros?",
    type: "single" as const,
    options: [
      { value: "none", label: "Primera vez" },
      { value: "some", label: "Algo de experiencia" },
      { value: "experienced", label: "Mucha experiencia" },
    ],
  },
  {
    id: 3,
    question: "¿Cuánto tiempo puedes dedicarle al día?",
    type: "single" as const,
    options: [
      { value: "low", label: "1-2 horas" },
      { value: "medium", label: "3-4 horas" },
      { value: "high", label: "Más de 4 horas" },
    ],
  },
  {
    id: 4,
    question: "¿Qué nivel de energía buscas?",
    type: "single" as const,
    options: [
      { value: "low", label: "Tranquilo y relajado" },
      { value: "medium", label: "Moderadamente activo" },
      { value: "high", label: "Muy energético y juguetón" },
    ],
  },
  {
    id: 5,
    question: "¿Vives con...? (selecciona todos los que apliquen)",
    type: "multiple" as const,
    options: [
      { value: "kids", label: "Niños" },
      { value: "dogs", label: "Otros perros" },
      { value: "cats", label: "Gatos" },
      { value: "none", label: "Solo/a o con adultos" },
    ],
  },
  {
    id: 6,
    question: "¿Qué tipo de vivienda tienes?",
    type: "single" as const,
    options: [
      { value: "house-garden", label: "Casa con jardín" },
      { value: "house", label: "Casa sin jardín" },
      { value: "apartment", label: "Departamento" },
    ],
  },
  {
    id: 7,
    question: "¿Qué personalidad buscas?",
    type: "multiple" as const,
    options: [
      { value: "playful", label: "Juguetón" },
      { value: "calm", label: "Tranquilo" },
      { value: "affectionate", label: "Cariñoso" },
      { value: "independent", label: "Independiente" },
      { value: "protective", label: "Protector" },
    ],
  },
]

export function MatchingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({})
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const question = questions[currentQuestion]

  const handleSingleAnswer = (value: string) => {
    setAnswers({ ...answers, [question.id]: value })
  }

  const handleMultipleAnswer = (value: string, checked: boolean) => {
    const current = (answers[question.id] as string[]) || []
    if (checked) {
      setAnswers({ ...answers, [question.id]: [...current, value] })
    } else {
      setAnswers({ ...answers, [question.id]: current.filter((v) => v !== value) })
    }
  }

  const canProceed = () => {
    const answer = answers[question.id]
    if (!answer) return false
    if (Array.isArray(answer)) return answer.length > 0
    return true
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    return <MatchingResults answers={answers} onRestart={handleRestart} />
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card className="border-2">
        <CardContent className="p-8 space-y-6">
          <h2 className="text-balance text-2xl font-bold">{question.question}</h2>

          {question.type === "single" ? (
            <RadioGroup value={answers[question.id] as string} onValueChange={handleSingleAnswer}>
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer text-base">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          ) : (
            <div className="space-y-3">
              {question.options.map((option) => {
                const checked = ((answers[question.id] as string[]) || []).includes(option.value)
                return (
                  <div key={option.value} className="flex items-center space-x-3">
                    <Checkbox
                      id={option.value}
                      checked={checked}
                      onCheckedChange={(checked) => handleMultipleAnswer(option.value, checked as boolean)}
                    />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer text-base">
                      {option.label}
                    </Label>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentQuestion === 0}
          className="gap-2 bg-transparent"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </Button>
        <Button onClick={handleNext} disabled={!canProceed()} className="ml-auto gap-2">
          {currentQuestion === questions.length - 1 ? "Ver resultados" : "Siguiente"}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
