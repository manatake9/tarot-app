import { drawDailyCard, type SpreadType } from "@/lib/draw"

const DAILY_DRAW_TYPES = ["main", "advice"] as const satisfies readonly SpreadType[]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("userId")
  const dateKey = searchParams.get("dateKey")

  if (!userId || !dateKey) {
    return Response.json(
      { error: "userId and dateKey are required" },
      { status: 400 },
    )
  }

  const draws = Object.fromEntries(
    DAILY_DRAW_TYPES.map((spreadType) => [
      spreadType,
      drawDailyCard({
        userId,
        dateKey,
        spreadType,
      }),
    ]),
  )

  return Response.json({ draws })
}
