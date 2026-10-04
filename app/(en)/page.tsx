import type { Metadata } from "next"
import { HomePage } from "@/components/site/home-page"
import { en } from "@/lib/i18n/en"

export const metadata: Metadata = {
  alternates: { canonical: "/", languages: { en: "/", sr: "/sr", "x-default": "/" } },
}

export default function Home() {
  return <HomePage t={en} />
}
