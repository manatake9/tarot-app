import Image from "next/image"

import type { TarotCard as TarotCardData } from "@/lib/tarot"

type Props = {
  card: TarotCardData
  isOpen: boolean
}

export default function TarotCard({
  card,
  isOpen,
}: Props) {
  return (
    <article
      className={`tarot-card-shell ${isOpen ? "is-open" : ""}`}
      aria-live="polite"
    >
      <div className="tarot-card-aura" aria-hidden="true" />

      <div className="tarot-card-scene" aria-label="タロットカード">
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

          <div className="tarot-card-face tarot-card-face-front">
            <Image
              src={card.image}
              alt={`${card.name}のタロットカード`}
              width={256}
              height={400}
              priority
              className="tarot-card-image"
            />
          </div>
        </div>
      </div>

      <div className="tarot-card-caption">
        <p className="text-[0.68rem] uppercase tracking-[0.42em] text-violet-100/45">
          {isOpen ? "drawn card" : "before reading"}
        </p>
        <h2 className="mt-2 text-center text-2xl font-medium text-violet-50/95">
          {isOpen ? card.name : "まだ開かれていない象徴"}
        </h2>
      </div>
    </article>
  )
}
