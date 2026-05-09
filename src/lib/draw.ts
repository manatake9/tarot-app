import { cards } from "./tarot"

export function drawCard() {
  const randomIndex = Math.floor(
    Math.random() * cards.length
  )

  return {
    card: cards[randomIndex],
    reversed: Math.random() < 0.5
  }
}