import type React from "react"
import type { Metadata, Viewport } from "next"
import { fontVariables } from "@/lib/fonts"
import { en } from "@/lib/i18n/en"
import "../globals.css"

// English root layout. The Serbian site has its own in app/sr, so each page gets the right <html lang>.

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mon-x.app"),
  title: { default: en.meta.title, template: "%s · MonX" },
  description: en.meta.description,
  openGraph: { type: "website", url: "/", siteName: "MonX", locale: "en_US", title: en.meta.ogTitle, description: en.meta.description },
  twitter: { card: "summary_large_image", title: en.meta.ogTitle, description: en.meta.description },
}

export const viewport: Viewport = { themeColor: "#0e1412" }

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        {/* Without JavaScript, content waiting to fade in would stay invisible. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  )
}
