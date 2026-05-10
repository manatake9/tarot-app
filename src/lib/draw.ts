import { cards, type SpreadType } from "./tarot"

export function drawCard(spread: SpreadType = "daily") {
  const randomIndex = Math.floor(
    Math.random() * cards.length
  )

  return {
    spread,
    card: cards[randomIndex],
  }
}
