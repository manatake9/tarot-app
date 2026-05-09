import Image from "next/image"

type Props = {
  name: string
  image: string
  isOpen: boolean
}

export default function TarotCard({
  name,
  image,
  isOpen
}: Props) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-xl">
      <Image
        src={isOpen ? image : "/cards/back.jpg"}
        alt={name}
        width={256}
        height={400}
        className="rounded-lg"
      />

      {isOpen && (
        <h2 className="text-center mt-4 text-xl font-bold">
          {name}
        </h2>
      )}
    </div>
  )
}