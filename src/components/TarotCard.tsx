import Image from "next/image"

type Props = {
  name: string
  image: string
  isOpen: boolean
}

export default function TarotCard({
  name,
  image,
  isOpen,
}: Props) {
  return (
    <article
      className={`tarot-card-shell ${isOpen ? "is-open" : ""}`}
      aria-live="polite"
    >
      <div className="tarot-card-aura" aria-hidden="true" />

      <div className="tarot-card-scene">
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
              src={image}
              alt={`${name}のタロットカード`}
              width={256}
              height={400}
              priority
              className="tarot-card-image"
            />
          </div>
        </div>
      </div>

      <div className="tarot-card-caption">
        <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
          {isOpen ? "Your card" : "Tap to reveal"}
        </p>
        <h2 className="mt-2 text-center text-2xl font-semibold text-white drop-shadow-[0_0_18px_rgba(251,191,36,0.45)]">
          {isOpen ? name : "運命の一枚"}
        </h2>
      </div>
    </article>
  )
}
