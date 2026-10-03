import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "MonX | Product Overview",
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
    <main className="min-h-screen bg-background px-4 py-8 font-sans text-foreground sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <a href="/" aria-label="MonX home" className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <img src="/monx-logo.png" alt="MonX" className="h-7 w-auto" />
          </a>
          <span className="text-sm text-muted-foreground">Product overview · 1:29</span>
        </header>

        <section aria-labelledby="pitch-title" className="mt-12 sm:mt-16">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">Meet MonX</p>
          <h1 id="pitch-title" className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            See your operations clearly.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Watch how MonX brings real-time visibility to your business.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-black shadow-xl">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/videos/monx-pitch-poster.jpg"
              width={1920}
              height={1080}
              aria-label="MonX product overview in English"
              className="aspect-video block w-full"
            >
              <source src="/videos/monx-pitch-en.mp4" type="video/mp4" />
              Your browser does not support embedded video. <a href="/videos/monx-pitch-en.mp4">Open the video</a>.
            </video>
          </div>

          <div className="mt-6 text-sm">
            <a href="/" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              Explore MonX →
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
