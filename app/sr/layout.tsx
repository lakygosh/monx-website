import type React from "react"
import type { Metadata, Viewport } from "next"
import { fontVariables } from "@/lib/fonts"
import { sr } from "@/lib/i18n/sr"
import "../globals.css"

// Serbian root layout (Latin script).

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mon-x.app"),
  title: { default: sr.meta.title, template: "%s · MonX" },
  description: sr.meta.description,
  openGraph: { type: "website", url: "/sr", siteName: "MonX", locale: "sr_RS", title: sr.meta.ogTitle, description: sr.meta.description },
  twitter: { card: "summary_large_image", title: sr.meta.ogTitle, description: sr.meta.description },
}

export const viewport: Viewport = { themeColor: "#0e1412" }

export default function SerbianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr-Latn" className={fontVariables}>
      <body>
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
