"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"
import { SectionHeader } from "@/components/ui/primitives"
import { Reveal } from "@/components/ui/reveal"
import type { Dict } from "@/lib/i18n/en"

export function VideoSection({ t }: { t: Dict["video"] }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function play() {
    setPlaying(true)
    ref.current?.play()
  }

  return (
    <section id="video" aria-labelledby="video-title" className="container-page py-16 md:py-24">
      <SectionHeader
        align="center"
        eyebrow={t.eyebrow}
        titleId="video-title"
        title={t.title}
        lead={t.lead}
      />

      <Reveal className="relative mx-auto mt-12 max-w-[980px]">
        <div aria-hidden className="absolute inset-x-[10%] -bottom-6 h-24 rounded-full bg-green/25 blur-3xl" />
        <div className="relative overflow-hidden rounded-[1.25rem] bg-ink shadow-[0_30px_80px_-30px_rgb(14_20_18/0.55)] ring-1 ring-ink/10 md:rounded-[1.75rem]">
          <video
            ref={ref}
            controls={playing}
            controlsList="nodownload"
            playsInline
            preload="none"
            poster="/videos/monx-pitch-cover.jpg"
            width={1920}
            height={1080}
            onPause={(e) => e.currentTarget.ended && setPlaying(false)}
            className="block aspect-video w-full"
            aria-label={t.label}
          >
            <source src="/videos/monx-pitch-en.mp4" type="video/mp4" />
          </video>

          {playing ? null : (
            <button
              type="button"
              onClick={play}
              className="group absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/70 via-transparent to-transparent pb-[6%]"
              aria-label={t.playLabel}
            >
              <span className="flex items-center gap-3 rounded-full bg-white py-2 pr-5 pl-2 text-ink shadow-xl transition-transform duration-300 group-hover:scale-[1.04]">
                <span className="grid size-10 place-items-center rounded-full bg-green">
                  <Play className="ml-0.5 size-4 fill-current" />
                </span>
                <span className="text-[0.9375rem] font-medium">{t.play}</span>
                <span className="font-mono text-xs text-mute">1:29</span>
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  )
}
