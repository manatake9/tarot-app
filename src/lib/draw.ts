import { cards, type TarotCard } from "./tarot"

export type DrawResult = {
  id: string
  card: TarotCard
  reversed: boolean
  keyword: string
  observation: string
  question: string
  answerNote: string
  createdAt: string
}

function pickRandom<T>(items: T[]) {
  return items[Math.floor(Math.random() * items.length)]
}

export function drawCard(): DrawResult {
  const card = pickRandom(cards)
  const reversed = Math.random() < 0.5
  const tensionWords = reversed ? card.tensions.restrictive : card.tensions.expansive

  return {
    id: crypto.randomUUID(),
    card,
    reversed,
    keyword: pickRandom([...card.keywords, ...tensionWords]),
    observation: pickRandom(card.observationAxes),
    question: pickRandom(card.reflectionPrompts),
    answerNote: pickRandom(card.answerNotes),
    createdAt: new Date().toISOString(),
  }
}
