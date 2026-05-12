export type TarotCard = {
  id: string
  name: string
  image: `/cards/${string}.png`
  number: number
  keywords: string[]
  symbolism: string[]
  atmosphere: string[]
  observationAxes: string[]
  reflectionPrompts: string[]
  answerNotes: string[]
  tensions: {
    expansive: string[]
    restrictive: string[]
  }
  imagePrompt: string
}

export type CardSeed = Omit<TarotCard, "id" | "image">
