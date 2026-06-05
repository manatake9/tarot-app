"use client"

import { useCallback, useMemo, useState } from "react"
import Image from "next/image"

import {
  suitTransform,
  tarotGalleryCards,
  tarotGallerySections,
  type GalleryCard,
  type SuitTransform,
  type TarotSuit,
} from "@/lib/tarot-gallery"

type AnalysisBox = {
  x: number
  y: number
  width: number
  height: number
}

type CardAnalysis = {
  box: AnalysisBox | null
  contentAreaRatio: number
  contentHeightRatio: number
  contentWidthRatio: number
  offsetFromCenterX: number
  offsetFromCenterY: number
  naturalHeight: number
  naturalWidth: number
}

type AnalysisState = Record<string, CardAnalysis | undefined>

const suitOrder: TarotSuit[] = ["major", "wands", "cups", "swords", "pentacles"]

const suitLabels: Record<TarotSuit, string> = {
  major: "Major Arcana",
  wands: "Wands",
  cups: "Cups",
  swords: "Swords",
  pentacles: "Pentacles",
}

const alphaThreshold = 8

function analyzeImage(card: GalleryCard): Promise<[string, CardAnalysis]> {
  return new Promise((resolve, reject) => {
    const image = new window.Image()
    image.crossOrigin = "anonymous"
    image.decoding = "async"

    image.onload = () => {
      const canvas = document.createElement("canvas")
      const width = image.naturalWidth
      const height = image.naturalHeight
      canvas.width = width
      canvas.height = height

      const context = canvas.getContext("2d", { willReadFrequently: true })
      if (!context) {
        reject(new Error(`Canvas context is unavailable for ${card.id}`))
        return
      }

      context.drawImage(image, 0, 0)
      const pixels = context.getImageData(0, 0, width, height).data
      let minX = width
      let minY = height
      let maxX = -1
      let maxY = -1
      let paintedPixels = 0

      for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {
          const alpha = pixels[(y * width + x) * 4 + 3]
          if (alpha <= alphaThreshold) {
            continue
          }

          paintedPixels += 1
          minX = Math.min(minX, x)
          minY = Math.min(minY, y)
          maxX = Math.max(maxX, x)
          maxY = Math.max(maxY, y)
        }
      }

      const box =
        maxX >= 0
          ? {
              x: minX,
              y: minY,
              width: maxX - minX + 1,
              height: maxY - minY + 1,
            }
          : null

      const boxCenterX = box ? box.x + box.width / 2 : width / 2
      const boxCenterY = box ? box.y + box.height / 2 : height / 2

      resolve([
        card.id,
        {
          box,
          contentAreaRatio: paintedPixels / (width * height),
          contentHeightRatio: box ? box.height / height : 0,
          contentWidthRatio: box ? box.width / width : 0,
          offsetFromCenterX: (boxCenterX - width / 2) / width,
          offsetFromCenterY: (boxCenterY - height / 2) / height,
          naturalHeight: height,
          naturalWidth: width,
        },
      ])
    }

    image.onerror = () => reject(new Error(`Failed to load ${card.image}`))
    image.src = card.image
  })
}

function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`
}

function formatSignedPercent(value: number) {
  const percent = value * 100
  return `${percent >= 0 ? "+" : ""}${percent.toFixed(1)}%`
}

function getSuitAverages(cards: GalleryCard[], analysis: AnalysisState) {
  const rows = cards
    .map((card) => analysis[card.id])
    .filter((row): row is CardAnalysis => Boolean(row))

  if (rows.length === 0) {
    return null
  }

  return {
    count: rows.length,
    contentHeightRatio:
      rows.reduce((total, row) => total + row.contentHeightRatio, 0) / rows.length,
    contentWidthRatio:
      rows.reduce((total, row) => total + row.contentWidthRatio, 0) / rows.length,
    offsetFromCenterY:
      rows.reduce((total, row) => total + row.offsetFromCenterY, 0) / rows.length,
  }
}

export default function CardGalleryClient() {
  const [transforms, setTransforms] =
    useState<Record<TarotSuit, SuitTransform>>(suitTransform)
  const [analysis, setAnalysis] = useState<AnalysisState>({})
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisError, setAnalysisError] = useState<string | null>(null)
  const [showBounds, setShowBounds] = useState(true)

  const transformCode = useMemo(
    () => JSON.stringify(transforms, null, 2),
    [transforms],
  )

  const updateSuitTransform = useCallback(
    (suit: TarotSuit, key: keyof SuitTransform, value: number) => {
      setTransforms((current) => ({
        ...current,
        [suit]: {
          ...current[suit],
          [key]: value,
        },
      }))
    },
    [],
  )

  const resetTransforms = useCallback(() => {
    setTransforms(suitTransform)
  }, [])

  const runAnalysis = useCallback(async () => {
    setIsAnalyzing(true)
    setAnalysisError(null)

    try {
      const entries = await Promise.all(tarotGalleryCards.map(analyzeImage))
      setAnalysis(Object.fromEntries(entries))
    } catch (error) {
      setAnalysisError(
        error instanceof Error ? error.message : "画像解析に失敗しました。",
      )
    } finally {
      setIsAnalyzing(false)
    }
  }, [])

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex w-full max-w-[1800px] gap-5 px-4 py-5 lg:px-6">
        <aside className="sticky top-5 hidden h-[calc(100vh-2.5rem)] w-80 shrink-0 overflow-auto border-r border-zinc-800 pr-5 lg:block">
          <DebugPanel
            analysis={analysis}
            analysisError={analysisError}
            isAnalyzing={isAnalyzing}
            onAnalyze={runAnalysis}
            onReset={resetTransforms}
            onShowBoundsChange={setShowBounds}
            onTransformChange={updateSuitTransform}
            showBounds={showBounds}
            transformCode={transformCode}
            transforms={transforms}
          />
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-5 border-b border-zinc-800 pb-4 lg:hidden">
            <DebugPanel
              analysis={analysis}
              analysisError={analysisError}
              isAnalyzing={isAnalyzing}
              onAnalyze={runAnalysis}
              onReset={resetTransforms}
              onShowBoundsChange={setShowBounds}
              onTransformChange={updateSuitTransform}
              showBounds={showBounds}
              transformCode={transformCode}
              transforms={transforms}
            />
          </div>

          <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase text-amber-300">
                Development Gallery
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-zinc-50">
                Tarot Card Alignment
              </h1>
            </div>
            <div className="text-sm text-zinc-400">
              {tarotGalleryCards.length} cards / CSS transform only
            </div>
          </header>

          <div className="space-y-10">
            {tarotGallerySections.map((section) => {
              const averages = getSuitAverages(section.cards, analysis)

              return (
                <section key={section.suit}>
                  <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h2 className="text-xl font-semibold text-zinc-100">
                      {section.title}
                    </h2>
                    <p className="text-sm text-zinc-500">
                      scale {transforms[section.suit].scale.toFixed(2)} / offsetY{" "}
                      {transforms[section.suit].offsetY}px
                    </p>
                    {averages ? (
                      <p className="text-sm text-zinc-500">
                        bbox H {formatPercent(averages.contentHeightRatio)} / Y{" "}
                        {formatSignedPercent(averages.offsetFromCenterY)}
                      </p>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
                    {section.cards.map((card) => (
                      <GalleryCardTile
                        analysis={analysis[card.id]}
                        card={card}
                        key={card.id}
                        showBounds={showBounds}
                        transform={transforms[card.suit]}
                      />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

function DebugPanel({
  analysis,
  analysisError,
  isAnalyzing,
  onAnalyze,
  onReset,
  onShowBoundsChange,
  onTransformChange,
  showBounds,
  transformCode,
  transforms,
}: {
  analysis: AnalysisState
  analysisError: string | null
  isAnalyzing: boolean
  onAnalyze: () => void
  onReset: () => void
  onShowBoundsChange: (value: boolean) => void
  onTransformChange: (
    suit: TarotSuit,
    key: keyof SuitTransform,
    value: number,
  ) => void
  showBounds: boolean
  transformCode: string
  transforms: Record<TarotSuit, SuitTransform>
}) {
  const analyzedCount = Object.keys(analysis).length

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-zinc-50">Debug Controls</h2>
        <p className="mt-1 text-sm text-zinc-400">
          スートごとの表示補正と透明領域 bbox を確認できます。
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          className="rounded-md border border-amber-300/40 bg-amber-300 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
          disabled={isAnalyzing}
          onClick={onAnalyze}
          type="button"
        >
          {isAnalyzing ? "解析中..." : "透明領域を解析"}
        </button>
        <button
          className="rounded-md border border-zinc-700 px-3 py-2 text-sm text-zinc-200 transition hover:border-zinc-500"
          onClick={onReset}
          type="button"
        >
          Reset
        </button>
      </div>

      <label className="flex items-center gap-2 text-sm text-zinc-300">
        <input
          checked={showBounds}
          className="size-4 accent-amber-300"
          onChange={(event) => onShowBoundsChange(event.target.checked)}
          type="checkbox"
        />
        bbox overlay
      </label>

      <div className="space-y-4">
        {suitOrder.map((suit) => (
          <fieldset className="border-t border-zinc-800 pt-4" key={suit}>
            <legend className="mb-3 text-sm font-semibold text-zinc-100">
              {suitLabels[suit]}
            </legend>

            <SliderRow
              label="scale"
              max={1.25}
              min={0.8}
              onChange={(value) => onTransformChange(suit, "scale", value)}
              step={0.01}
              value={transforms[suit].scale}
            />
            <SliderRow
              label="offsetY"
              max={80}
              min={-80}
              onChange={(value) => onTransformChange(suit, "offsetY", value)}
              step={1}
              suffix="px"
              value={transforms[suit].offsetY}
            />
          </fieldset>
        ))}
      </div>

      <div className="rounded-md border border-zinc-800 bg-zinc-900/70 p-3">
        <div className="mb-2 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-zinc-200">Current config</p>
          <p className="text-xs text-zinc-500">{analyzedCount}/78 analyzed</p>
        </div>
        <pre className="max-h-56 overflow-auto text-xs leading-relaxed text-zinc-300">
          {transformCode}
        </pre>
        {analysisError ? (
          <p className="mt-2 text-sm text-red-300">{analysisError}</p>
        ) : null}
      </div>
    </div>
  )
}

function SliderRow({
  label,
  max,
  min,
  onChange,
  step,
  suffix = "",
  value,
}: {
  label: string
  max: number
  min: number
  onChange: (value: number) => void
  step: number
  suffix?: string
  value: number
}) {
  return (
    <label className="mb-3 grid grid-cols-[4.25rem_1fr_4.5rem] items-center gap-3 text-sm text-zinc-300">
      <span>{label}</span>
      <input
        className="w-full accent-amber-300"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        type="range"
        value={value}
      />
      <input
        className="h-8 rounded-md border border-zinc-700 bg-zinc-950 px-2 text-right text-sm text-zinc-100"
        max={max}
        min={min}
        onChange={(event) => onChange(Number(event.target.value))}
        step={step}
        type="number"
        value={value}
      />
      {suffix ? <span className="sr-only">{suffix}</span> : null}
    </label>
  )
}

function GalleryCardTile({
  analysis,
  card,
  showBounds,
  transform,
}: {
  analysis?: CardAnalysis
  card: GalleryCard
  showBounds: boolean
  transform: SuitTransform
}) {
  const box = analysis?.box
  const boxStyle =
    box && analysis
      ? {
          height: `${(box.height / analysis.naturalHeight) * 100}%`,
          left: `${(box.x / analysis.naturalWidth) * 100}%`,
          top: `${(box.y / analysis.naturalHeight) * 100}%`,
          width: `${(box.width / analysis.naturalWidth) * 100}%`,
        }
      : undefined

  return (
    <article className="min-w-0">
      <div className="relative aspect-[1024/1792] overflow-hidden bg-zinc-900 shadow-[0_18px_40px_rgba(0,0,0,0.35)] ring-1 ring-zinc-800">
        <Image
          alt={`${card.name} tarot card`}
          className="absolute inset-0 h-full w-full object-contain"
          fill
          sizes="(min-width: 1536px) 12vw, (min-width: 1280px) 16vw, (min-width: 768px) 25vw, 50vw"
          src={card.image}
          style={{
            transform: `translateY(${transform.offsetY}px) scale(${transform.scale})`,
            transformOrigin: "center center",
          }}
          unoptimized
        />
        {showBounds && boxStyle ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute border border-cyan-300/90 bg-cyan-300/10"
            style={boxStyle}
          />
        ) : null}
      </div>
      <div className="mt-2 min-h-16">
        <p className="truncate text-sm font-medium text-zinc-100">{card.name}</p>
        <p className="truncate text-xs text-zinc-500">{card.id}</p>
        {analysis ? (
          <p className="mt-1 text-xs text-zinc-500">
            {analysis.naturalWidth}x{analysis.naturalHeight} / H{" "}
            {formatPercent(analysis.contentHeightRatio)}
          </p>
        ) : null}
      </div>
    </article>
  )
}
