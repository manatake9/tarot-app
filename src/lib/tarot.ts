import { majorArcanaCards } from "./tarot/major-arcana"
import { cupMinorCards } from "./tarot/minor-cups"
import { pentacleMinorCards } from "./tarot/minor-pentacles"
import { swordMinorCards } from "./tarot/minor-swords"
import { wandMinorCards } from "./tarot/minor-wands"

export type { TarotCard } from "./tarot/types"

export type DeckType = "major" | "full"

export const minorArcanaCards = [
  ...wandMinorCards,
  ...pentacleMinorCards,
  ...cupMinorCards,
  ...swordMinorCards,
]

export const cards = majorArcanaCards

export const fullDeckCards = [...majorArcanaCards, ...minorArcanaCards]

export function getCardsForDeck(deckType: DeckType) {
  if (deckType === "full" && fullDeckCards.length > 0) {
    return fullDeckCards
  }

  return majorArcanaCards
}

export { majorArcanaCards }
