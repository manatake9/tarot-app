import type { TarotCard } from "./tarot/types"

export type TarotSuit = "major" | "wands" | "cups" | "swords" | "pentacles"

export type SuitTransform = {
  scale: number
  offsetY: number
}

export const suitTransform: Record<TarotSuit, SuitTransform> = {
  major: { scale: 1.08, offsetY: 0 },
  wands: { scale: 1.02, offsetY: 0 },
  cups: { scale: 1, offsetY: 0 },
  swords: { scale: 1, offsetY: 0 },
  pentacles: { scale: 1, offsetY: 0 },
}

export function getTarotSuit(card: TarotCard): TarotSuit {
  if (card.image.startsWith("/cards/major-arcana/")) {
    return "major"
  }

  if (card.image.startsWith("/cards/wands/")) {
    return "wands"
  }

  if (card.image.startsWith("/cards/cups/")) {
    return "cups"
  }

  if (card.image.startsWith("/cards/sords/")) {
    return "swords"
  }

  if (card.image.startsWith("/cards/Pentacles/")) {
    return "pentacles"
  }

  return "major"
}

export function getSuitTransform(card: TarotCard): SuitTransform {
  return suitTransform[getTarotSuit(card)]
}
