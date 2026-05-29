"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"

import TarotCard from "@/components/TarotCard"
import {
  cleanupOldDailyDrawKeys,
  getUserId,
  hasDrawnToday,
  markDrawnToday,
} from "@/lib/anonymous-user"
import {
  getLocalDateKey,
  type DrawResult,
  type SpreadType,
} from "@/lib/draw"

const DRAW_REVEAL_DELAY_MS = 1300

type DailyDrawType = Extract<SpreadType, "main" | "advice">

const DRAW_TYPES = ["main", "advice"] as const satisfies readonly DailyDrawType[]

const DRAW_SLOT_LABELS = {
  main: {
    cardLabel: "main theme",
    deckLabel: "大アルカナ / 今日の運勢",
    buttonIdle: "今日の運勢を引く",
    buttonDone: "今日の運勢は引き終わりました",
    readingLabel: "今日の主題",
  },
  advice: {
    cardLabel: "full deck advice",
    deckLabel: "全カード / 今日のアドバイス",
    buttonIdle: "アドバイスを引く",
    buttonDone: "今日のアドバイスは引き終わりました",
    readingLabel: "今日のアドバイス",
  },
} satisfies Record<
  DailyDrawType,
  {
    buttonDone: string
    buttonIdle: string
    cardLabel: string
    deckLabel: string
    readingLabel: string
  }
>

function createDrawState<T>(value: T) {
  return {
    main: value,
    advice: value,
  } satisfies Record<DailyDrawType, T>
}

export default function Page() {
  const [drawResults, setDrawResults] = useState<
    Record<DailyDrawType, DrawResult | null>
  >(createDrawState<DrawResult | null>(null))
  const [isReady, setIsReady] = useState(false)
  const [hasDrawn, setHasDrawn] = useState(createDrawState(false))
  const [isDrawing, setIsDrawing] = useState(createDrawState(false))
  const [isOpen, setIsOpen] = useState(createDrawState(false))
  const [showReading, setShowReading] = useState(false)
  const revealTimeoutRefs = useRef<Partial<Record<DailyDrawType, number>>>({})

  useEffect(() => {
    const revealTimeouts = revealTimeoutRefs.current
    const abortController = new AbortController()

    const loadDailyDraws = async () => {
      const dateKey = getLocalDateKey()
      const userId = getUserId()

      cleanupOldDailyDrawKeys(dateKey)

      try {
        const params = new URLSearchParams({ dateKey, userId })
        const response = await fetch(`/api/daily-draw?${params}`, {
          cache: "no-store",
          signal: abortController.signal,
        })

        if (!response.ok) {
          throw new Error("Failed to load daily draws")
        }

        const payload = (await response.json()) as {
          draws: Record<DailyDrawType, DrawResult>
        }
        const nextResults = DRAW_TYPES.reduce(
          (results, drawType) => ({
            ...results,
            [drawType]: payload.draws[drawType] ?? null,
          }),
          createDrawState<DrawResult | null>(null),
        )
        const nextHasDrawn = DRAW_TYPES.reduce(
          (results, drawType) => ({
            ...results,
            [drawType]: hasDrawnToday(dateKey, drawType),
          }),
          createDrawState(false),
        )

        setDrawResults(nextResults)
        setHasDrawn(nextHasDrawn)
        setIsDrawing(createDrawState(false))
        setIsOpen(nextHasDrawn)
        setShowReading(false)
      } catch (error) {
        if (abortController.signal.aborted) {
          return
        }

        console.error(error)
        setDrawResults(createDrawState<DrawResult | null>(null))
        setHasDrawn(createDrawState(false))
        setIsDrawing(createDrawState(false))
        setIsOpen(createDrawState(false))
        setShowReading(false)
      } finally {
        if (!abortController.signal.aborted) {
          setIsReady(true)
        }
      }
    }

    void loadDailyDraws()

    return () => {
      abortController.abort()

      Object.values(revealTimeouts).forEach((revealTimeout) => {
        if (revealTimeout !== undefined) {
          window.clearTimeout(revealTimeout)
        }
      })
    }
  }, [])

  const handleOpen = (drawType: DailyDrawType) => {
    const drawResult = drawResults[drawType]

    if (!drawResult || hasDrawn[drawType] || isDrawing[drawType]) {
      return
    }

    markDrawnToday(drawResult.dateKey, drawResult.spreadType)
    setHasDrawn((current) => ({ ...current, [drawType]: true }))
    setIsDrawing((current) => ({ ...current, [drawType]: true }))
    setShowReading(false)

    revealTimeoutRefs.current[drawType] = window.setTimeout(() => {
      setIsDrawing((current) => ({ ...current, [drawType]: false }))
      setIsOpen((current) => ({ ...current, [drawType]: true }))
      delete revealTimeoutRefs.current[drawType]
    }, DRAW_REVEAL_DELAY_MS)
  }

  const openedDrawTypes = DRAW_TYPES.filter(
    (drawType) => isOpen[drawType] && drawResults[drawType],
  )
  const hasAnyOpenCard = openedDrawTypes.length > 0
  const dateKey = drawResults.main?.dateKey ?? drawResults.advice?.dateKey

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[radial-gradient(circle_at_top,#241638_0%,#100b18_48%,#050407_100%)] px-5 py-10 text-violet-50 sm:px-8">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="quiet-stars" />
      </div>

      <section className="relative z-10 flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-9 text-center">
        <div className="max-w-2xl space-y-4 animate-slow-fade">
          <p className="text-[0.7rem] uppercase tracking-[0.46em] text-violet-100/45">
            Tarot card reading
          </p>
          <h1 className="text-4xl font-light tracking-normal text-violet-50 sm:text-5xl">
            今日の一枚と、もう一枚のアドバイス
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-8 text-violet-100/62 sm:text-base">
            大アルカナは一日の主題を、全カードはその主題に向き合うためのアドバイスを映します。
          </p>
        </div>

        <div className="grid w-full items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] lg:text-left">
          <div className="flex flex-col items-center gap-5">
            <div className="grid w-full max-w-2xl gap-6 sm:grid-cols-2">
              {DRAW_TYPES.map((drawType) => {
                const drawResult = drawResults[drawType]
                const labels = DRAW_SLOT_LABELS[drawType]

                return (
                  <div
                    key={drawType}
                    className="flex min-w-0 flex-col items-center gap-4"
                  >
                    <p className="min-h-10 text-center text-xs uppercase tracking-[0.28em] text-violet-100/45">
                      {labels.deckLabel}
                    </p>
                    <TarotCard
                      card={drawResult?.card}
                      isDrawing={isDrawing[drawType]}
                      isOpen={isOpen[drawType]}
                      label={labels.cardLabel}
                      reversed={drawResult?.reversed}
                    />

                    <button
                      onClick={() => handleOpen(drawType)}
                      disabled={
                        !isReady ||
                        hasDrawn[drawType] ||
                        isDrawing[drawType] ||
                        !drawResult
                      }
                      className="rounded-full border border-violet-100/20 bg-violet-100/90 px-6 py-3 text-sm font-medium text-zinc-950 shadow-[0_0_28px_rgba(167,139,250,0.16)] transition duration-700 hover:bg-white hover:shadow-[0_0_36px_rgba(196,181,253,0.2)] focus:outline-none focus:ring-1 focus:ring-violet-100 disabled:cursor-default disabled:bg-violet-100/35 disabled:text-violet-950/70 disabled:shadow-none"
                    >
                      {!isReady
                        ? "準備中"
                        : hasDrawn[drawType]
                          ? labels.buttonDone
                          : labels.buttonIdle}
                    </button>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 animate-slow-fade [animation-delay:220ms]">
              {hasAnyOpenCard ? (
                <button
                  onClick={() => setShowReading((current) => !current)}
                  className="rounded-full border border-violet-100/15 bg-white/[0.045] px-5 py-3 text-sm text-violet-50/72 backdrop-blur transition duration-500 hover:border-violet-100/28 hover:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-violet-100/45"
                >
                  {showReading ? "解説を閉じる" : "解説を見る"}
                </button>
              ) : null}
            </div>

            {dateKey ? (
              <p className="max-w-md text-center text-xs leading-6 text-violet-100/38">
                {dateKey}
                の結果です。日付が変わるまで、カードは引き直せません。
              </p>
            ) : null}
          </div>

          <aside
            className={`reading-panel ${showReading ? "is-visible" : ""}`}
            aria-hidden={!showReading}
          >
            {showReading && hasAnyOpenCard ? (
              <div className="space-y-8">
                <p className="reading-kicker text-[0.68rem] uppercase tracking-[0.38em] text-violet-100/38">
                  reading note
                </p>

                {openedDrawTypes.map((drawType, index) => {
                  const drawResult = drawResults[drawType]

                  if (!drawResult) {
                    return null
                  }

                  const labels = DRAW_SLOT_LABELS[drawType]

                  return (
                    <section
                      key={drawType}
                      className="reading-item border-t border-violet-100/10 pt-6 first:border-t-0 first:pt-0"
                      style={
                        {
                          "--reading-delay": `${1160 + index * 180}ms`,
                        } as CSSProperties
                      }
                    >
                      <p className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                        {labels.readingLabel}
                      </p>
                      <h2 className="mt-3 text-4xl font-semibold tracking-normal text-violet-50 sm:text-5xl">
                        {drawResult.keyword}
                      </h2>
                      <p className="mt-3 text-sm text-violet-100/48">
                        {drawResult.card.name} /{" "}
                        {drawResult.reversed ? "逆位置" : "正位置"}
                      </p>

                      <div className="reading-detail mt-7 border-t border-violet-100/10 pt-6">
                        <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                          観察
                        </h3>
                        <p className="mt-4 text-base leading-8 text-violet-50/72">
                          {drawResult.observation}
                        </p>
                      </div>

                      <div className="reading-detail mt-7 border-t border-violet-100/10 pt-6">
                        <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                          問い
                        </h3>
                        <p className="mt-4 text-base leading-8 text-violet-50/72">
                          {drawResult.question}
                        </p>
                      </div>

                      <div className="reading-detail mt-7 border-t border-violet-100/10 pt-6">
                        <h3 className="text-xs uppercase tracking-[0.32em] text-violet-100/38">
                          リーディングのメモ
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-violet-50/62">
                          {drawResult.answerNote}
                        </p>
                      </div>
                    </section>
                  )
                })}
              </div>
            ) : (
              <div className="flex min-h-[24rem] items-center justify-center text-center">
                <p className="max-w-sm text-sm leading-7 text-violet-50/48">
                  カードを開くと、ここに読みが表示されます。
                </p>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  )
}
