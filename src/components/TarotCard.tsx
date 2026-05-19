import Image from "next/image"

import type { TarotCard as TarotCardData } from "@/lib/tarot"

type Props = {
  card?: TarotCardData
  isDrawing?: boolean
  isOpen: boolean
  label?: string
  reversed?: boolean
}

export default function TarotCard({
  card,
  isDrawing = false,
  isOpen,
  label,
  reversed = false,
}: Props) {
  const frontAlt = card
    ? `${card.name}${reversed ? " reversed" : ""} tarot card`
    : "Tarot card"

  return (
    <article
      className={`tarot-card-shell ${isDrawing ? "is-drawing" : ""} ${
        isOpen ? "is-open" : ""
      }`}
      aria-live="polite"
    >
      <div className="tarot-card-aura" aria-hidden="true" />

      <div className="tarot-card-scene" aria-label="Tarot card">
        <div className="tarot-card-inner">
          <div className="tarot-card-face tarot-card-face-back">
            <Image
              src="/cards/back.png"
              alt="裏向きのタロットカード"
              width={256}
              height={400}
              priority
              className="tarot-card-image"
            />
          </div>

          {card ? (
            <div className="tarot-card-face tarot-card-face-front">
              <Image
                src={card.image}
                alt={frontAlt}
                width={256}
                height={400}
                priority
                className={`tarot-card-image ${reversed ? "is-reversed" : ""}`}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className="tarot-card-caption">
        <p className="text-[0.68rem] uppercase tracking-[0.32em] text-violet-100/45">
          {label ?? (isOpen ? "drawn card" : "before reading")}
        </p>
        <h2 className="mt-2 text-center text-2xl font-medium text-violet-50/95">
          {isOpen && card ? card.name : "まだ開かれていない象徴"}
        </h2>
        {isOpen && card ? (
          <p className="mt-1 text-sm text-violet-100/48">
            {reversed ? "逆位置" : "正位置"}
          </p>
        ) : null}
      </div>
    </article>
  )
}
