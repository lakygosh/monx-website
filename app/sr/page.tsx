import type { Metadata } from "next"
import { HomePage } from "@/components/site/home-page"
import { sr } from "@/lib/i18n/sr"

export const metadata: Metadata = {
  alternates: { canonical: "/sr", languages: { en: "/", sr: "/sr", "x-default": "/" } },
}

export default function Pocetna() {
  return <HomePage t={sr} />
}
