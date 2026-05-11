"use client"

import { useEffect, useState } from "react"

import TarotCard from "@/components/TarotCard"
import { drawCard, type DrawResult } from "@/lib/draw"

export default function Page() {
  const [drawResult, setDrawResult] = useState<DrawResult | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [showReading, setShowReading] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDrawResult(drawCard())
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [])

  const handleDraw = () => {
    setIsOpen(false)
    setShowReading(false)
    setDrawResult(drawCard())
  }

  const handleOpen = () => {
    if (!drawResult) {
      setDrawResult(drawCard())
    }

    setIsOpen(true)
    setShowReading(false)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_top,#211433_0%,#100b18_48%,#050407_100%)] px-5 py-10 text-violet-50 sm:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-24 right-[-3rem] h-64 w-64 rounded-full bg-indigo-300/8 blur-3xl" />
        <div className="quiet-stars" />
      </div>

      <section className="relative z-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-9 text-center">
        <div className="max-w-2xl space-y-4 animate-slow-fade">
          <p className="text-[0.7rem] uppercase tracking-[0.46em] text-violet-100/45">
            Daily Draw / Observation
          </p>
          <h1 className="text-4xl font-light tracking-[0.06em] text-violet-50 sm:text-5xl">
            今日の一枚を観察する
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-8 text-violet-100/62 sm:text-base">
            まずカードだけを見て、自分の中に浮かぶ言葉を拾ってください。解説はその後の答え合わせとして開けます。
          </p>
        </div>

        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:text-left">
          <div className="flex flex-col items-center gap-5">
            <TarotCard
              card={drawResult?.card}
              isOpen={isOpen}
              reversed={drawResult?.reversed}
            />

            <div className="flex flex-wrap items-center justify-center gap-3 animate-slow-fade [animation-delay:220ms]">
              <button
                onClick={handleDraw}
                className="rounded-full border border-violet-100/12 bg-white/[0.04] px-5 py-3 text-sm text-violet-50/75 backdrop-blur transition duration-500 hover:border-violet-100/25 hover:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-violet-100/45"
              >
                引き直す
              </button>

              <button
                onClick={handleOpen}
                disabled={isOpen || !drawResult}
                className="rounded-full border border-violet-100/20 bg-violet-100/90 px-7 py-3 text-sm font-medium text-zinc-950 shadow-[0_0_28px_rgba(167,139,250,0.16)] transition duration-700 hover:bg-white hover:shadow-[0_0_36px_rgba(196,181,253,0.2)] focus:outline-none focus:ring-1 focus:ring-violet-100 disabled:cursor-default disabled:bg-violet-100/35 disabled:text-violet-950/70 disabled:shadow-none"
              >
                {isOpen ? "開かれました" : "静かに開く"}
              </button>

              {isOpen ? (
                <button
                  onClick={() => setShowReading((current) => !current)}
                  className="rounded-full border border-violet-100/15 bg-white/[0.045] px-5 py-3 text-sm text-violet-50/72 backdrop-blur transition duration-500 hover:border-violet-100/28 hover:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-violet-100/45"
                >
                  {showReading ? "解説を閉じる" : "解説を見る"}
                </button>
              ) : null}
            </div>
          </div>

          <aside
            className={`reading-panel ${showReading ? "is-visible" : ""}`}
            aria-hidden={!showReading}
          >
            {drawResult && showReading ? (
              <>
                <p className="text-[0.68rem] uppercase tracking-[0.38em] text-violet-100/38">
                  answer check
                </p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    keyword
                  </p>
                  <h2 className="mt-3 text-5xl font-semibold tracking-[0.03em] text-violet-50 sm:text-6xl">
                    {drawResult.keyword}
                  </h2>
                  <p className="mt-3 text-sm text-violet-100/48">
                    {drawResult.card.name} / {drawResult.reversed ? "逆位置" : "正位置"}
                  </p>
                </div>

                <div className="mt-8 border-t border-violet-100/10 pt-6">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    今日の観察点
                  </h3>
                  <p className="mt-4 text-base leading-8 text-violet-50/72">
                    {drawResult.observation}
                  </p>
                </div>

                <div className="mt-7 border-t border-violet-100/10 pt-6">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    QUESTION
                  </h3>
                  <p className="mt-4 text-base leading-8 text-violet-50/72">
                    {drawResult.question}
                  </p>
                </div>

                <div className="mt-7 border-t border-violet-100/10 pt-6">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    answer note
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-violet-50/62">
                    {drawResult.answerNote}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex min-h-[24rem] items-center justify-center text-center">
                <p className="max-w-sm text-sm leading-7 text-violet-50/48">
                  カードを開いたあと、自分なりに読んでから解説を開けます。
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  )
}
