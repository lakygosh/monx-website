import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MonX - Real-time Agent Monitoring",
  description: "Monitor your agents in real-time with MonX",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable}`}>
      <body className="dark">{children}</body>
    </html>
  )
}
