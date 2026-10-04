import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: "https://www.mon-x.app", sr: "https://www.mon-x.app/sr" }
  return [
    { url: languages.en, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: languages.sr, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ]
}
