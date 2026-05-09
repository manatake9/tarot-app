"use client"

import { useState } from "react"

import TarotCard from "@/components/TarotCard"
import { drawCard } from "@/lib/draw"

export default function Page() {
  const [drawnCard, setDrawnCard] =
    useState(() => drawCard())

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#3b1d66_0%,#181024_45%,#050308_100%)] px-6 py-12 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="stars-field" />
      </div>

      <section className="relative z-10 flex w-full max-w-xl flex-col items-center gap-8 text-center">
        <div className="space-y-3 animate-fade-in-up">
          <p className="text-sm uppercase tracking-[0.45em] text-amber-200/75">
            Daily Tarot
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            今日のカードをめくる
          </h1>
          <p className="mx-auto max-w-md text-sm leading-7 text-zinc-200/75 sm:text-base">
            深呼吸してからカードを開いてください。光と余韻の中に、いま必要なメッセージが浮かび上がります。
          </p>
        </div>

        <TarotCard
          name={drawnCard.card.name}
          image={drawnCard.card.image}
          isOpen={isOpen}
        />

        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up [animation-delay:180ms]">
          <button
            onClick={() => {
              setDrawnCard(drawCard())
              setIsOpen(false)
            }}
            className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-amber-200/50 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-200/70"
          >
            引き直す
          </button>

          <button
            onClick={() => setIsOpen(true)}
            disabled={isOpen}
            className="rounded-full bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 px-7 py-3 text-sm font-bold text-zinc-950 shadow-[0_0_28px_rgba(251,191,36,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(251,191,36,0.55)] focus:outline-none focus:ring-2 focus:ring-amber-100 disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isOpen ? "開封済み" : "めくる"}
          </button>
        </div>
      </section>
    </main>
  )
}
