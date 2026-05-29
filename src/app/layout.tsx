import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Daily Tarot",
  description: "今日の運勢を占うアプリ",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
