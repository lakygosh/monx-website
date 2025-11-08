"use client"

import { useEffect, useState } from "react"

export function VisionX() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"anomaly" | "correlation">("anomaly")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("visionx-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  // Anomaly detection data - shows spikes in metrics
  const anomalyData = [45, 48, 52, 51, 49, 120, 48, 50, 52, 51, 49, 135, 50]

  // Correlation detection data - shows connected metrics
  const correlationMetrics = [
    { id: 1, name: "CPU Usage", value: 75 },
    { id: 2, name: "Memory", value: 82 },
    { id: 3, name: "Disk I/O", value: 68 },
    { id: 4, name: "Network Latency", value: 92 },
    { id: 5, name: "Request Rate", value: 78 },
  ]

  return (
    <section
      id="visionx-section"
      data-section="visionx"
      className="relative w-full py-20 px-4 md:py-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(6, 182, 212, 0.05), transparent 70%), #0a0a0a",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-2xl rounded-full" />
              <img src="/visionx-logo.png" alt="VisionX" className="h-32 w-auto drop-shadow-lg relative" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-balance">
              AI-Powered Intelligence for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
                {" "}
                Incident Prevention
              </span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            VisionX analyzes vast amounts of interconnected data over extended periods to predict and prevent incidents
            before they impact your business.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
          {/* Left - Feature Cards */}
          <div className="space-y-6">
            {/* Anomaly Detection */}
            <div
              className={`group cursor-pointer transition-all duration-500 transform ${
                activeTab === "anomaly" ? "scale-105" : "scale-100 hover:scale-102"
              }`}
              onClick={() => setActiveTab("anomaly")}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border backdrop-blur p-8 transition-all duration-300 ${
                  activeTab === "anomaly"
                    ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                    : "border-cyan-500/20 bg-background/40 hover:border-cyan-500/40"
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0"
                    style={{
                      animation: "shimmer 3s infinite",
                    }}
                  />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-lg">
                        📊
                      </div>
                      <h3 className="text-xl font-bold">Anomaly Detection</h3>
                    </div>
                    {activeTab === "anomaly" && (
                      <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Compare your system behavior across time periods - same time last year, last month, or during
                    holidays.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Early incident detection</span>
                    <span className="text-cyan-500">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Correlation Detection */}
            <div
              className={`group cursor-pointer transition-all duration-500 transform ${
                activeTab === "correlation" ? "scale-105" : "scale-100 hover:scale-102"
              }`}
              onClick={() => setActiveTab("correlation")}
            >
              <div
                className={`relative overflow-hidden rounded-2xl border backdrop-blur p-8 transition-all duration-300 ${
                  activeTab === "correlation"
                    ? "border-cyan-500/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20"
                    : "border-cyan-500/20 bg-background/40 hover:border-cyan-500/40"
                }`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0"
                    style={{
                      animation: "shimmer 3s infinite",
                    }}
                  />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-lg">
                        🔗
                      </div>
                      <h3 className="text-xl font-bold">Correlation Detection</h3>
                    </div>
                    {activeTab === "correlation" && (
                      <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Discover hidden dependencies between seemingly unrelated metrics. Understand cause-and-effect
                    relationships that lead to incidents.
                  </p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                    <span>Faster root cause identification</span>
                    <span className="text-cyan-500">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Visual Representation */}
          <div className="relative">
            <div
              className={`relative h-full min-h-[500px] rounded-2xl border border-cyan-500/20 bg-background/40 backdrop-blur overflow-hidden flex items-center justify-center transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {activeTab === "anomaly" ? (
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full max-w-sm"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))",
                  }}
                >
                  <defs>
                    <linearGradient id="anomalyGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                    </linearGradient>
                    <filter id="anomalyGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={`gridh-${i}`}
                      x1="40"
                      y1={50 + i * 50}
                      x2="360"
                      y2={50 + i * 50}
                      stroke="#06b6d4"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  ))}
                  {anomalyData.map((_, i) => (
                    <line
                      key={`gridv-${i}`}
                      x1={40 + (i * 320) / (anomalyData.length - 1)}
                      y1="50"
                      x2={40 + (i * 320) / (anomalyData.length - 1)}
                      y2="250"
                      stroke="#06b6d4"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                  ))}

                  {/* Time series line */}
                  <polyline
                    points={anomalyData
                      .map((value, i) => {
                        const x = 40 + (i * 320) / (anomalyData.length - 1)
                        const y = 250 - (value / 150) * 180
                        return `${x},${y}`
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    filter="url(#anomalyGlow)"
                  />

                  {/* Area under curve */}
                  <polygon
                    points={`40,250 ${anomalyData
                      .map((value, i) => {
                        const x = 40 + (i * 320) / (anomalyData.length - 1)
                        const y = 250 - (value / 150) * 180
                        return `${x},${y}`
                      })
                      .join(" ")} 360,250`}
                    fill="url(#anomalyGradient)"
                  />

                  {/* Highlight anomaly points (spikes) */}
                  {anomalyData.map((value, i) => {
                    if (value > 100) {
                      const x = 40 + (i * 320) / (anomalyData.length - 1)
                      const y = 250 - (value / 150) * 180
                      return (
                        <g key={`anomaly-${i}`}>
                          <circle cx={x} cy={y} r="8" fill="none" stroke="#ff6b6b" strokeWidth="2" />
                          <circle cx={x} cy={y} r="4" fill="#ff6b6b" opacity="0.8" />
                          <circle
                            cx={x}
                            cy={y}
                            r="12"
                            fill="none"
                            stroke="#ff6b6b"
                            strokeWidth="1.5"
                            opacity="0.5"
                            className="animate-pulse"
                          />
                        </g>
                      )
                    }
                    return null
                  })}

                  {/* Axes */}
                  <line x1="40" y1="250" x2="360" y2="250" stroke="#06b6d4" strokeWidth="2" />
                  <line x1="40" y1="50" x2="40" y2="250" stroke="#06b6d4" strokeWidth="2" />

                  {/* Labels */}
                  <text x="200" y="280" textAnchor="middle" fill="#06b6d4" fontSize="12" opacity="0.7">
                    Time
                  </text>
                  <text x="15" y="150" textAnchor="middle" fill="#06b6d4" fontSize="12" opacity="0.7">
                    Value
                  </text>
                </svg>
              ) : (
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full max-w-sm"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.2))",
                  }}
                >
                  <defs>
                    <filter id="correlationGlow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Center node */}
                  <circle cx="200" cy="150" r="30" fill="#06b6d4" opacity="0.2" className="animate-pulse" />
                  <circle
                    cx="200"
                    cy="150"
                    r="24"
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    filter="url(#correlationGlow)"
                  />
                  <text x="200" y="155" textAnchor="middle" fill="#06b6d4" fontSize="14" fontWeight="bold">
                    Core
                  </text>

                  {/* Connected metrics arranged in circle */}
                  {correlationMetrics.map((metric, index) => {
                    const angle = (index / correlationMetrics.length) * Math.PI * 2
                    const radius = 110
                    const x = 200 + radius * Math.cos(angle)
                    const y = 150 + radius * Math.sin(angle)
                    const strengthColor = metric.value > 80 ? "#ff6b6b" : metric.value > 70 ? "#fbbf24" : "#06b6d4"

                    return (
                      <g key={`metric-${metric.id}`}>
                        {/* Connection line */}
                        <line
                          x1="200"
                          y1="150"
                          x2={x}
                          y2={y}
                          stroke={strengthColor}
                          strokeWidth="2"
                          opacity="0.4"
                          className="animate-pulse"
                        />
                        {/* Metric node */}
                        <circle cx={x} cy={y} r="20" fill="none" stroke={strengthColor} strokeWidth="2.5" />
                        <circle cx={x} cy={y} r="12" fill={strengthColor} opacity="0.6" />
                        {/* Value indicator */}
                        <text x={x} y={y + 35} textAnchor="middle" fill="#06b6d4" fontSize="11" opacity="0.8">
                          {metric.name}
                        </text>
                        <text x={x} y={y + 50} textAnchor="middle" fill={strengthColor} fontSize="10" fontWeight="bold">
                          {metric.value}%
                        </text>
                      </g>
                    )
                  })}
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="group rounded-xl border border-cyan-500/20 bg-background/40 backdrop-blur p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-4 text-2xl">🎯</div>
            <h3 className="font-bold text-lg mb-2">Prevention First</h3>
            <p className="text-sm text-muted-foreground">
              Predict incidents before they happen, reducing MTTR and preventing customer impact.
            </p>
          </div>
          <div className="group rounded-xl border border-cyan-500/20 bg-background/40 backdrop-blur p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-4 text-2xl">⚡</div>
            <h3 className="font-bold text-lg mb-2">Root Cause Insight</h3>
            <p className="text-sm text-muted-foreground">
              Automatically identify the relationship between metrics and find the real cause faster.
            </p>
          </div>
          <div className="group rounded-xl border border-cyan-500/20 bg-background/40 backdrop-blur p-6 hover:border-cyan-500/50 transition-all duration-300">
            <div className="mb-4 text-2xl">🧠</div>
            <h3 className="font-bold text-lg mb-2">Continuous Learning</h3>
            <p className="text-sm text-muted-foreground">
              VisionX learns your system's normal behavior and adapts as your infrastructure evolves.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
