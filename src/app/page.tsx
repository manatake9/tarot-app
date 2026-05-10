"use client"

import { useState } from "react"

import TarotCard from "@/components/TarotCard"
import { drawCard } from "@/lib/draw"

export default function Page() {
  const [drawnCard, setDrawnCard] =
    useState(() => drawCard("daily"))

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_top,#211433_0%,#100b18_48%,#050407_100%)] px-5 py-10 text-violet-50 sm:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-24 right-[-3rem] h-64 w-64 rounded-full bg-indigo-300/8 blur-3xl" />
        <div className="quiet-stars" />
      </div>

      <section className="relative z-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-9 text-center">
        <div className="max-w-2xl space-y-4 animate-slow-fade">
          <p className="text-[0.7rem] uppercase tracking-[0.52em] text-violet-100/45">
            Daily Draw / Observation
          </p>
          <h1 className="text-4xl font-light tracking-[0.08em] text-violet-50 sm:text-5xl">
            今日の一枚を観察する
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-8 text-violet-100/62 sm:text-base">
            これは未来を決めるための占いではありません。カードという象徴を置き、そこに向かう自分の視線や思考の変化を静かに見るための時間です。
          </p>
        </div>

        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:text-left">
          <div className="flex flex-col items-center gap-5">
            <TarotCard card={drawnCard.card} isOpen={isOpen} />

            <div className="flex flex-wrap items-center justify-center gap-3 animate-slow-fade [animation-delay:220ms]">
              <button
                onClick={() => {
                  setDrawnCard(drawCard("daily"))
                  setIsOpen(false)
                }}
                className="rounded-full border border-violet-100/12 bg-white/[0.04] px-5 py-3 text-sm text-violet-50/75 backdrop-blur transition duration-500 hover:border-violet-100/25 hover:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-violet-100/45"
              >
                引き直す
              </button>

              <button
                onClick={() => setIsOpen(true)}
                disabled={isOpen}
                className="rounded-full border border-violet-100/20 bg-violet-100/90 px-7 py-3 text-sm font-medium text-zinc-950 shadow-[0_0_28px_rgba(167,139,250,0.16)] transition duration-700 hover:bg-white hover:shadow-[0_0_36px_rgba(196,181,253,0.2)] focus:outline-none focus:ring-1 focus:ring-violet-100 disabled:cursor-default disabled:bg-violet-100/35 disabled:text-violet-950/70 disabled:shadow-none"
              >
                {isOpen ? "開かれました" : "静かに開く"}
              </button>
            </div>
          </div>

          <aside
            className={`reading-panel ${isOpen ? "is-visible" : ""}`}
            aria-hidden={!isOpen}
          >
            <p className="text-[0.68rem] uppercase tracking-[0.46em] text-violet-100/38">
              symbolic reading
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-[0.06em] text-violet-50">
              {drawnCard.card.name}
            </h2>

            <p className="mt-6 text-sm leading-8 text-violet-50/68">
              {drawnCard.card.observation}
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                  symbols
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {drawnCard.card.symbolism.map((symbol) => (
                    <li
                      key={symbol}
                      className="rounded-full border border-violet-100/10 bg-white/[0.035] px-3 py-1 text-xs text-violet-50/62"
                    >
                      {symbol}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                  atmosphere
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {drawnCard.card.atmosphere.map((word) => (
                    <li
                      key={word}
                      className="rounded-full border border-violet-100/10 bg-violet-100/[0.06] px-3 py-1 text-xs text-violet-50/62"
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 border-t border-violet-100/10 pt-6">
              <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                questions
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-violet-50/66">
                {drawnCard.card.reflectionPrompts.map((prompt) => (
                  <li key={prompt}>— {prompt}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
