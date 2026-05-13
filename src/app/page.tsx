"use client"

import { useEffect, useRef, useState } from "react"

import TarotCard from "@/components/TarotCard"
import {
  getUserId,
  hasDrawnToday,
  markDrawnToday,
} from "@/lib/anonymous-user"
import { drawDailyCard, getLocalDateKey, type DrawResult } from "@/lib/draw"

const DRAW_SPREAD_TYPE = "simple"
const DRAW_REVEAL_DELAY_MS = 1300

export default function Page() {
  const [drawResult, setDrawResult] = useState<DrawResult | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showReading, setShowReading] = useState(false)
  const revealTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const dateKey = getLocalDateKey()
      const userId = getUserId()
      const alreadyDrawn = hasDrawnToday(dateKey, DRAW_SPREAD_TYPE)

      setDrawResult(
        drawDailyCard({ userId, dateKey, spreadType: DRAW_SPREAD_TYPE }),
      )
      setHasDrawn(alreadyDrawn)
      setIsDrawing(false)
      setIsOpen(alreadyDrawn)
      setShowReading(false)
      setIsReady(true)
    }, 0)

    return () => {
      window.clearTimeout(timeoutId)

      if (revealTimeoutRef.current !== null) {
        window.clearTimeout(revealTimeoutRef.current)
      }
    }
  }, [])

  const handleOpen = () => {
    if (!drawResult || hasDrawn || isDrawing) {
      return
    }

    markDrawnToday(drawResult.dateKey, drawResult.spreadType)
    setHasDrawn(true)
    setIsDrawing(true)
    setShowReading(false)

    revealTimeoutRef.current = window.setTimeout(() => {
      setIsDrawing(false)
      setIsOpen(true)
      revealTimeoutRef.current = null
    }, DRAW_REVEAL_DELAY_MS)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_top,#241638_0%,#100b18_48%,#050407_100%)] px-5 py-10 text-violet-50 sm:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="quiet-stars" />
      </div>

      <section className="relative z-10 flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-9 text-center">
        <div className="max-w-2xl space-y-4 animate-slow-fade">
          <p className="text-[0.7rem] uppercase tracking-[0.46em] text-violet-100/45">
            Daily Draw / Anonymous Seed
          </p>
          <h1 className="text-4xl font-light tracking-normal text-violet-50 sm:text-5xl">
            今日の一枚を観察する
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-8 text-violet-100/62 sm:text-base">
            ログインなしで、あなたの端末に匿名IDを保存します。同じ日は同じカードになり、解説はカードをめくったあとに開けます。
          </p>
        </div>

        <div className="grid w-full items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:text-left">
          <div className="flex flex-col items-center gap-5">
            <TarotCard
              card={drawResult?.card}
              isDrawing={isDrawing}
              isOpen={isOpen}
              reversed={drawResult?.reversed}
            />

            <div className="flex flex-wrap items-center justify-center gap-3 animate-slow-fade [animation-delay:220ms]">
              <button
                onClick={handleOpen}
                disabled={!isReady || hasDrawn || isDrawing || !drawResult}
                className="rounded-full border border-violet-100/20 bg-violet-100/90 px-7 py-3 text-sm font-medium text-zinc-950 shadow-[0_0_28px_rgba(167,139,250,0.16)] transition duration-700 hover:bg-white hover:shadow-[0_0_36px_rgba(196,181,253,0.2)] focus:outline-none focus:ring-1 focus:ring-violet-100 disabled:cursor-default disabled:bg-violet-100/35 disabled:text-violet-950/70 disabled:shadow-none"
              >
                {!isReady
                  ? "準備中"
                  : hasDrawn
                    ? "今日の一枚は引き終わりました"
                    : "今日のカードを引く"}
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

            {drawResult ? (
              <p className="max-w-sm text-center text-xs leading-6 text-violet-100/38">
                {drawResult.dateKey} の一枚です。日付が変わるまで引き直しはできません。
              </p>
            ) : null}
          </div>

          <aside
            className={`reading-panel ${showReading ? "is-visible" : ""}`}
            aria-hidden={!showReading}
          >
            {drawResult && showReading ? (
              <>
                <p className="text-[0.68rem] uppercase tracking-[0.38em] text-violet-100/38">
                  reading note
                </p>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    keyword
                  </p>
                  <h2 className="mt-3 text-5xl font-semibold tracking-normal text-violet-50 sm:text-6xl">
                    {drawResult.keyword}
                  </h2>
                  <p className="mt-3 text-sm text-violet-100/48">
                    {drawResult.card.name} /{" "}
                    {drawResult.reversed ? "逆位置" : "正位置"}
                  </p>
                </div>

                <div className="mt-8 border-t border-violet-100/10 pt-6">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    今日の観察
                  </h3>
                  <p className="mt-4 text-base leading-8 text-violet-50/72">
                    {drawResult.observation}
                  </p>
                </div>

                <div className="mt-7 border-t border-violet-100/10 pt-6">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    問い
                  </h3>
                  <p className="mt-4 text-base leading-8 text-violet-50/72">
                    {drawResult.question}
                  </p>
                </div>

                <div className="mt-7 border-t border-violet-100/10 pt-6">
                  <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                    読みのメモ
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
