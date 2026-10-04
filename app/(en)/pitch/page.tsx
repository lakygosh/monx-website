import type { Metadata } from "next"
import { Logo } from "@/components/ui/logo"
import { buttonClass } from "@/components/ui/primitives"

export const metadata: Metadata = {
  title: { absolute: "MonX | Product Overview" },
  description: "See how MonX brings real-time visibility to your operations in this 89-second product overview.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "MonX | Product Overview",
    description: "Real-time visibility. Faster decisions. Watch the MonX product overview.",
    images: [{ url: "https://www.mon-x.app/videos/monx-pitch-poster.jpg", width: 1280, height: 720 }],
  },
}

export default function PitchPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-ink px-4 py-8 text-white sm:px-8 sm:py-12">
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] -z-10 h-[560px] w-[760px] rounded-full bg-[radial-gradient(closest-side,rgb(34_197_94/0.22),transparent)] blur-2xl"
      />
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <a href="/" aria-label="MonX home">
            <Logo className="h-7" />
          </a>
          <span className="font-mono text-xs text-mute-dark">Product overview · 1:29</span>
        </header>

        <section aria-labelledby="pitch-title" className="mt-12 sm:mt-16">
          <p className="type-eyebrow text-green">Meet MonX</p>
          <h1 id="pitch-title" className="type-h2 mt-3 text-[clamp(2rem,4.5vw,3.25rem)]">
            See what your customers see.
          </h1>
          <p className="type-lead mt-4 max-w-2xl text-mute-dark">
            Other tools watch machines. MonX watches what your customers actually do, and tells you the moment they can&apos;t.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
            <video
              controls
              controlsList="nodownload"
              playsInline
              preload="metadata"
              poster="/videos/monx-pitch-poster.jpg"
              width={1920}
              height={1080}
              aria-label="MonX product overview in English"
              className="block aspect-video w-full"
            >
              <source src="/videos/monx-pitch-en.mp4" type="video/mp4" />
              Your browser does not support embedded video. <a href="/videos/monx-pitch-en.mp4">Open the video</a>.
            </video>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/#contact" className={buttonClass("primary")}>
              Book a demo
            </a>
            <a href="/" className={buttonClass("outline-dark")}>
              Explore MonX
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
