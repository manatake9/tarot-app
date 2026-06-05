import { majorArcanaCards } from "./tarot/major-arcana"
import { cupMinorCards } from "./tarot/minor-cups"
import { pentacleMinorCards } from "./tarot/minor-pentacles"
import { swordMinorCards } from "./tarot/minor-swords"
import { wandMinorCards } from "./tarot/minor-wands"
import { suitTransform, type SuitTransform, type TarotSuit } from "./tarot-card-display"
import type { TarotCard } from "./tarot/types"

export { suitTransform, type SuitTransform, type TarotSuit }

export type GalleryCard = TarotCard & {
  suit: TarotSuit
}

export type GallerySection = {
  suit: TarotSuit
  title: string
  cards: GalleryCard[]
}

const withSuit = (cards: TarotCard[], suit: TarotSuit): GalleryCard[] =>
  cards.map((card) => ({ ...card, suit }))

export const tarotGallerySections: GallerySection[] = [
  {
    suit: "major",
    title: "Major Arcana",
    cards: withSuit(majorArcanaCards, "major"),
  },
  {
    suit: "wands",
    title: "Wands",
    cards: withSuit(wandMinorCards, "wands"),
  },
  {
    suit: "cups",
    title: "Cups",
    cards: withSuit(cupMinorCards, "cups"),
  },
  {
    suit: "swords",
    title: "Swords",
    cards: withSuit(swordMinorCards, "swords"),
  },
  {
    suit: "pentacles",
    title: "Pentacles",
    cards: withSuit(pentacleMinorCards, "pentacles"),
  },
]

export const tarotGalleryCards = tarotGallerySections.flatMap(
  (section) => section.cards,
)
