"use client"

import { useState } from "react"

import TarotCard from "@/components/TarotCard"
import { cards } from "@/lib/tarot"

export default function Home() {
  const [card, setCard] = useState(cards[0])

  const [isOpen, setIsOpen] = useState(false)

  const drawCard = () => {
    const randomIndex = Math.floor(
      Math.random() * cards.length
    )

    setCard(cards[randomIndex])

    setIsOpen(false)
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-zinc-900">
      <TarotCard
        name={card.name}
        image={card.image}
        isOpen={isOpen}
      />

      <div className="flex gap-4">
        <button
          onClick={drawCard}
          className="bg-white px-4 py-2 rounded-lg"
        >
          引き直す
        </button>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-white px-4 py-2 rounded-lg"
        >
          めくる
        </button>
      </div>
    </main>
  )
}