"use client"

import { useState } from "react"

import TarotCard from "@/components/TarotCard"
import { drawCard } from "@/lib/draw"

export default function Page() {
  const [drawnCard, setDrawnCard] =
    useState(() => drawCard())

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-zinc-900">
      <TarotCard
        name={drawnCard.card.name}
        image={drawnCard.card.image}
        isOpen={isOpen}
      />

      <div className="flex gap-4">
        <button
          onClick={() => {
            setDrawnCard(drawCard())
            setIsOpen(false)
          }}
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