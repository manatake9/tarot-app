import { getCardsForDeck, type DeckType, type TarotCard } from "./tarot"

export type SpreadType = "main" | "advice" | "simple" | "detailed"

export type DrawResult = {
  id: string
  dateKey: string
  spreadType: SpreadType
  deckType: DeckType
  card: TarotCard
  reversed: boolean
  keyword: string
  observation: string
  question: string
  answerNote: string
  createdAt: string
}

type DailyDrawInput = {
  userId: string
  dateKey?: string
  spreadType?: SpreadType
}

function hashString(value: string) {
  let hash = 2166136261

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }

  return hash >>> 0
}

function createSeededRandom(seed: string) {
  let state = hashString(seed)

  return () => {
    state += 0x6d2b79f5
    let value = state
    value = Math.imul(value ^ (value >>> 15), value | 1)
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61)
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296
  }
}

function pickSeeded<T>(items: T[], random: () => number) {
  return items[Math.floor(random() * items.length)]
}

function getDeckTypeForSpread(spreadType: SpreadType): DeckType {
  if (spreadType === "advice") {
    return "minor"
  }

  if (spreadType === "detailed") {
    return "full"
  }

  return "major"
}

export function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear()
  const month = `${date.getMonth() + 1}`.padStart(2, "0")
  const day = `${date.getDate()}`.padStart(2, "0")
  return `${year}-${month}-${day}`
}

export function drawDailyCard({
  userId,
  dateKey = getLocalDateKey(),
  spreadType = "simple",
}: DailyDrawInput): DrawResult {
  const seed = `${userId}:${dateKey}:${spreadType}`
  const random = createSeededRandom(seed)
  const deckType = getDeckTypeForSpread(spreadType)
  const card = pickSeeded(getCardsForDeck(deckType), random)
  const reversed = random() < 0.5
  const tensionWords = reversed ? card.tensions.restrictive : card.tensions.expansive

  return {
    id: seed,
    dateKey,
    spreadType,
    deckType,
    card,
    reversed,
    keyword: pickSeeded([...card.keywords, ...tensionWords], random),
    observation: pickSeeded(card.observationAxes, random),
    question: pickSeeded(card.reflectionPrompts, random),
    answerNote: pickSeeded(card.answerNotes, random),
    createdAt: dateKey,
  }
}

export const drawCard = drawDailyCard
