import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Daily Tarot",
  description: "光と余韻の中で今日のタロットカードをめくるアプリ",
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
