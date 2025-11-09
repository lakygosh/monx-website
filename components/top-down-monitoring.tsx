"use client"

import { useEffect, useState } from "react"

export function TopDownMonitoring() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNodes, setAnimatedNodes] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("topdown-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timeline = [500, 700, 900, 1100, 1300, 1500, 1700, 1900, 2100, 2300, 2500, 2700, 2900, 3100, 3300, 3500]

    const timers = timeline.map((delay, index) => {
      return setTimeout(() => {
        setAnimatedNodes((prev) => new Set(prev).add(`node-${index}`))
      }, delay)
    })

    return () => timers.forEach(clearTimeout)
  }, [isVisible])

  return (
    <section
      id="topdown-section"
      data-section="topdown"
      className="relative w-full py-20 px-4 md:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(34, 197, 94, 0.05), transparent 70%), #0a0a0a",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-balance">
              Top-Down Monitoring:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Start from the Customer
              </span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instead of checking thousands of micro-services to find problems, MonX monitors your system from the
            customer's perspective down to the root cause.
          </p>
        </div>

        {/* Main Visualization Container */}
        <div className="relative mb-16 md:mb-24">
          <svg
            viewBox="0 0 1200 600"
            className="w-full max-w-4xl mx-auto"
            style={{ filter: "drop-shadow(0 0 30px rgba(34, 197, 94, 0.1))" }}
          >
            {/* Define gradients and filters */}
            <defs>
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#16a34a" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowWarning">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connection Lines - animated */}
            <g stroke="#22c55e" strokeWidth="2" opacity="0.6">
              {/* Top connections */}
              <line x1="600" y1="80" x2="350" y2="180" className="animate-pulse" />
              <line x1="600" y1="80" x2="850" y2="180" className="animate-pulse" />

              {/* Middle connections - left */}
              <line x1="350" y1="180" x2="200" y2="280" className="animate-pulse" />
              <line x1="350" y1="180" x2="350" y2="280" className="animate-pulse" />
              <line x1="350" y1="180" x2="500" y2="280" className="animate-pulse" />

              {/* Middle connections - right */}
              <line x1="850" y1="180" x2="700" y2="280" className="animate-pulse" />
              <line x1="850" y1="180" x2="850" y2="280" className="animate-pulse" />
              <line x1="850" y1="180" x2="1000" y2="280" className="animate-pulse" />

              {/* Bottom connections */}
              <line x1="200" y1="280" x2="100" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="200" y1="280" x2="200" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="200" y1="280" x2="300" y2="400" className="animate-pulse" opacity="0.4" />

              <line x1="350" y1="280" x2="250" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="350" y1="280" x2="350" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="350" y1="280" x2="450" y2="400" className="animate-pulse" opacity="0.4" />

              <line x1="500" y1="280" x2="400" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="500" y1="280" x2="500" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="500" y1="280" x2="600" y2="400" className="animate-pulse" opacity="0.4" />

              <line x1="700" y1="280" x2="600" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="700" y1="280" x2="700" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="700" y1="280" x2="800" y2="400" className="animate-pulse" opacity="0.4" />

              <line x1="850" y1="280" x2="750" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="850" y1="280" x2="850" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="850" y1="280" x2="950" y2="400" className="animate-pulse" opacity="0.4" />

              <line x1="1000" y1="280" x2="900" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="1000" y1="280" x2="1000" y2="400" className="animate-pulse" opacity="0.4" />
              <line x1="1000" y1="280" x2="1100" y2="400" className="animate-pulse" opacity="0.4" />
            </g>

            {/* Nodes with animation */}
            {/* Top Node - Client Perspective */}
            <g
              className={`transform-gpu transition-all duration-500 ${
                animatedNodes.has("node-0") ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transformOrigin: "600px 80px" }}
            >
              <circle cx="600" cy="80" r="30" fill="#fbbf24" opacity="0.3" />
              <circle cx="600" cy="80" r="24" stroke="#fbbf24" strokeWidth="3" fill="none" filter="url(#glow)" />
              <circle cx="600" cy="80" r="20" fill="#22c55e" opacity="0.6" />
              <style>{`
                @keyframes pulse-node {
                  0%, 100% { r: 24; }
                  50% { r: 28; }
                }
              `}</style>
            </g>

            {/* Layer 2 - Left Node */}
            <g
              className={`transform-gpu transition-all duration-500 ${
                animatedNodes.has("node-1") ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transformOrigin: "350px 180px" }}
            >
              <circle cx="350" cy="180" r="24" stroke="#22c55e" strokeWidth="3" fill="none" filter="url(#glow)" />
              <circle cx="350" cy="180" r="20" fill="#22c55e" opacity="0.4" />
            </g>

            {/* Layer 2 - Right Node */}
            <g
              className={`transform-gpu transition-all duration-500 ${
                animatedNodes.has("node-2") ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transformOrigin: "850px 180px" }}
            >
              <circle
                cx="850"
                cy="180"
                r="24"
                stroke="#fbbf24"
                strokeWidth="3"
                fill="none"
                filter="url(#glowWarning)"
              />
              <circle cx="850" cy="180" r="20" fill="#22c55e" opacity="0.4" />
            </g>

            {/* Layer 3 - Left branch */}
            {[
              { x: 200, index: 3 },
              { x: 350, index: 4 },
              { x: 500, index: 5 },
            ].map((item) => (
              <g
                key={`layer3-left-${item.index}`}
                className={`transform-gpu transition-all duration-500 ${
                  animatedNodes.has(`node-${item.index}`) ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transformOrigin: `${item.x}px 280px` }}
              >
                <circle cx={item.x} cy="280" r="20" stroke="#22c55e" strokeWidth="2.5" fill="none" />
                <circle cx={item.x} cy="280" r="16" fill="#22c55e" opacity="0.3" />
              </g>
            ))}

            {/* Layer 3 - Right branch */}
            {[
              { x: 700, index: 6 },
              { x: 850, index: 7 },
              { x: 1000, index: 8 },
            ].map((item) => (
              <g
                key={`layer3-right-${item.index}`}
                className={`transform-gpu transition-all duration-500 ${
                  animatedNodes.has(`node-${item.index}`) ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transformOrigin: `${item.x}px 280px` }}
              >
                <circle
                  cx={item.x}
                  cy="280"
                  r="20"
                  stroke={item.index === 7 ? "#fbbf24" : "#22c55e"}
                  strokeWidth="2.5"
                  fill="none"
                />
                <circle cx={item.x} cy="280" r="16" fill="#22c55e" opacity="0.3" />
              </g>
            ))}

            {/* Layer 4 - Leaf nodes */}
            {[
              { x: 100, index: 9 },
              { x: 200, index: 10 },
              { x: 300, index: 11 },
              { x: 250, index: 12 },
              { x: 350, index: 13 },
              { x: 400, index: 14 },
              { x: 450, index: 15 },
              { x: 500, index: 15, isWarning: true },
            ].map((item) => (
              <g
                key={`layer4-${item.index}`}
                className={`transform-gpu transition-all duration-500 ${
                  animatedNodes.has(`node-${item.index}`) ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`}
                style={{ transformOrigin: `${item.x}px 400px` }}
              >
                <circle
                  cx={item.x}
                  cy="400"
                  r="16"
                  stroke={item.isWarning ? "#fbbf24" : "#22c55e"}
                  strokeWidth="2"
                  fill="none"
                  opacity="0.7"
                />
                <circle
                  cx={item.x}
                  cy="400"
                  r="12"
                  fill={item.isWarning ? "#fbbf24" : "#22c55e"}
                  opacity={item.isWarning ? "0.4" : "0.2"}
                />
              </g>
            ))}

            {/* Right side leaf nodes */}
            {[
              { x: 600, index: 9 },
              { x: 700, index: 10 },
              { x: 800, index: 11 },
              { x: 750, index: 12 },
              { x: 850, index: 13 },
              { x: 950, index: 14 },
              { x: 900, index: 15 },
              { x: 1000, index: 15, isWarning: true },
              { x: 1100, index: 15, isWarning: true },
            ].map((item) => (
              <g
              key={`layer4-${item.index}`}
              className={`transform-gpu transition-all duration-500 ${
                animatedNodes.has(`node-${item.index}`) ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transformOrigin: `${item.x}px 400px` }}
            >
              <circle
                cx={item.x}
                cy="400"
                r="16"
                stroke={item.isWarning ? "#fbbf24" : "#22c55e"}
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
              <circle
                cx={item.x}
                cy="400"
                r="12"
                fill={item.isWarning ? "#fbbf24" : "#22c55e"}
                opacity={item.isWarning ? "0.4" : "0.2"}
              />
            </g>
            ))}
          </svg>
        </div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Approach - Bottom Up */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-background/40 backdrop-blur border border-red-500/20 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✕</span>
                </div>
                <h3 className="text-lg font-bold">Bottom-Up Approach</h3>
              </div>
              <p className="text-muted-foreground mb-4">Traditional monitoring</p>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">→</span>
                  <span>Monitor thousands of micro-components</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">→</span>
                  <span>Alerts can be noisy and meaningless</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">→</span>
                  <span>Hard to connect alerts to business impact</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">→</span>
                  <span>Slow root cause analysis</span>
                </p>
              </div>
            </div>
          </div>

          {/* New Approach - Top Down */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-background/40 backdrop-blur border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <h3 className="text-lg font-bold">Top-Down Approach (MonX)</h3>
              </div>
              <p className="text-muted-foreground mb-4">Smart monitoring from customer perspective</p>
              <div className="space-y-3 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>Start monitoring from customer experience</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>Only monitor what impacts your business</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>Drill down to find exact root cause</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>Faster incident resolution</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Validated Badge */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-full bg-background/40 backdrop-blur border border-green-500/20">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Validated methodology with 15+ years of enterprise practice</span>
          </div>
        </div>
      </div>
    </section>
  )
}
