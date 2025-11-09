import { Marquee } from "@/components/magicui/marquee"

const colors = ["#729ADF", "#22B854", "#7D7891"] // Blue, Green, Purple-gray

const usecases = [
  {
    title: "Easy identification of incident root causes",
  },
  {
    title: "Real-time identification of service disruptions",
  },
  {
    title: "Assessment of system failures and maintenance impact on client services",
  },
  {
    title: "Easy identification of logical connections between system components",
  },
  {
    title: "Assessment of scope required for performance testing",
  },
  {
    title: "Easy assessment of incident impact on users and clients",
  },
  {
    title: "Easy identification of system capacity limits",
  },
  {
    title: "Monitoring of expected service quality",
  },
  {
    title: "Tracking service usage growth and decline trends",
  },
  {
    title: "Real-time business metrics monitoring",
  },
  {
    title: "Easy verification of service delivery after infrastructure work",
  },
  {
    title: "IT transparency towards business, enhancing IT's image",
  },
]

const firstColumn = usecases.slice(0, 4)
const secondColumn = usecases.slice(4, 8)
const thirdColumn = usecases.slice(8, 12)

// Convert hex to rgba for opacity
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const UseCaseCard = ({ title, index }: { title: string; index: number }) => {
  const color = colors[index % colors.length]
  
  return (
    <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-8 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] min-h-[160px] flex items-center">
      <div 
        className="absolute -top-5 -left-5 -z-10 h-40 w-40 rounded-full bg-gradient-to-b to-transparent blur-md"
        style={{ background: `linear-gradient(to bottom, ${hexToRgba(color, 0.15)}, transparent)` }}
      ></div>
      <div 
        className="absolute top-0 left-0 right-0 h-1 opacity-60"
        style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)` }}
      ></div>

      <p className="text-white/90 leading-relaxed text-base font-medium">{title}</p>
    </div>
  )
}

export function UseCaseSection() {
  return (
    <section id="usecases" data-section="usecases" className="mb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[540px]">
          <div className="flex justify-center">
            <button
              type="button"
              className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
            >
              <div 
                className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"
                style={{ background: `linear-gradient(to right, transparent, ${colors[0]}, transparent)` }}
              ></div>
              <div 
                className="absolute inset-x-0 -bottom-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent to-transparent shadow-2xl transition-all duration-500 group-hover:h-px"
                style={{ background: `linear-gradient(to right, transparent, ${colors[1]}, transparent)` }}
              ></div>
              <span className="relative text-white">Use cases</span>
            </button>
          </div>
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] __className_bb4e88 relative z-10">
            Use Cases
          </h2>

          <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
            MonX provides a comprehensive solution for monitoring and managing IT systems in real-time.
          </p>
        </div>

        <div className="my-16 flex max-h-[800px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <div>
            <Marquee pauseOnHover vertical className="[--duration:20s] [--gap:1rem]">
              {firstColumn.map((usecase, index) => (
                <UseCaseCard key={`usecase-${index}`} title={usecase.title} index={index} />
              ))}
            </Marquee>
          </div>

          <div className="hidden md:block">
            <Marquee reverse pauseOnHover vertical className="[--duration:25s] [--gap:1rem]">
              {secondColumn.map((usecase, index) => (
                <UseCaseCard key={`usecase-${index + 4}`} title={usecase.title} index={index + 4} />
              ))}
            </Marquee>
          </div>

          <div className="hidden lg:block">
            <Marquee pauseOnHover vertical className="[--duration:30s] [--gap:1rem]">
              {thirdColumn.map((usecase, index) => (
                <UseCaseCard key={`usecase-${index + 8}`} title={usecase.title} index={index + 8} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}
