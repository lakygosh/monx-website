"use client"

import type React from "react"

import { useTheme } from "next-themes"
import { FollowerPointerCard } from "./ui/following-pointer"
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { geist } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { theme } = useTheme()
  const [isHovering, setIsHovering] = useState(false)
  const [isCliHovering, setIsCliHovering] = useState(false)
  const [isFeature3Hovering, setIsFeature3Hovering] = useState(false)
  const [isFeature4Hovering, setIsFeature4Hovering] = useState(false)
  const [inputValue, setInputValue] = useState("")

  const [baseColor, setBaseColor] = useState<[number, number, number]>([0.133, 0.773, 0.369]) // #22c55e in RGB normalized
  const [glowColor, setGlowColor] = useState<[number, number, number]>([0.133, 0.773, 0.369]) // #22c55e in RGB normalized

  const [dark, setDark] = useState<number>(theme === "dark" ? 1 : 0)

  useEffect(() => {
    setBaseColor([0.133, 0.773, 0.369]) // #22c55e
    setGlowColor([0.133, 0.773, 0.369]) // #22c55e
    setDark(theme === "dark" ? 1 : 0)
  }, [theme])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      setInputValue("")
    }
  }

  return (
    <section id="features" className="text-foreground relative overflow-hidden py-12 sm:py-24 md:py-32">
      {/* <div className="bg-primary absolute -top-10 left-1/2 h-16 w-44 -translate-x-1/2 rounded-full opacity-40 blur-3xl select-none"></div> */}
      {/* <div className="via-primary/50 absolute top-0 left-1/2 h-px w-3/5 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent transition-all ease-in-out"></div> */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="container mx-auto flex flex-col items-center gap-6 sm:gap-12"
      >
        <h2
          className={cn(
            "via-foreground mb-8 bg-gradient-to-b from-zinc-800 to-zinc-700 bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]",
            geist.className,
          )}
        >
          MonX Features
        </h2>
        <FollowerPointerCard
          title={
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Top-Down Monitoring in Action</span>
            </div>
          }
        >
          <div className="cursor-none">
            <div className="grid grid-cols-12 gap-4 justify-center">
              {/* System Status Overview */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsCliHovering(true)}
                onMouseLeave={() => setIsCliHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(34, 197, 94, 0.6)",
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">System Status Overview</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Get a complete picture of your information system at any moment. Monitor all services and their
                      health in real-time.
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none flex grow items-center justify-center select-none relative min-h-[350px] p-6">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 350"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    {/* Central healthy indicator */}
                    <g>
                      <motion.circle
                        cx="200"
                        cy="60"
                        r="30"
                        fill="rgba(34, 197, 94, 0.1)"
                        stroke="rgba(34, 197, 94, 0.5)"
                        strokeWidth="2"
                        animate={isCliHovering ? { r: [30, 35, 30], opacity: [0.5, 1, 0.5] } : { r: 30 }}
                        transition={{ duration: 1.5, repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0 }}
                      />
                      <text x="200" y="70" textAnchor="middle" fill="rgb(34, 197, 94)" fontSize="24" fontWeight="bold">
                        ✓
                      </text>
                    </g>

                    {/* Service branches */}
                    {[
                      { cx: 100, cy: 150, label: "API", index: 0 },
                      { cx: 200, cy: 150, label: "Database", index: 1 },
                      { cx: 300, cy: 150, label: "Cache", index: 2 },
                    ].map((service) => (
                      <g key={service.label}>
                        {/* Connection lines */}
                        <motion.line
                          x1="200"
                          y1="90"
                          x2={service.cx}
                          y2={service.cy - 30}
                          stroke="rgba(34, 197, 94, 0.3)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={
                            isCliHovering ? { pathLength: 1, stroke: "rgba(34, 197, 94, 0.6)" } : { pathLength: 0 }
                          }
                          transition={{ duration: 0.8, delay: service.index * 0.1 }}
                        />
                        {/* Service circles */}
                        <motion.circle
                          cx={service.cx}
                          cy={service.cy}
                          r="25"
                          fill="rgba(34, 197, 94, 0.05)"
                          stroke="rgba(34, 197, 94, 0.4)"
                          strokeWidth="2"
                          animate={isCliHovering ? { r: [25, 28, 25] } : { r: 25 }}
                          transition={{
                            duration: 1.2,
                            delay: service.index * 0.15,
                            repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                          }}
                        />
                        {/* Status dot */}
                        <motion.circle
                          cx={service.cx}
                          cy={service.cy}
                          r="6"
                          fill="rgb(34, 197, 94)"
                          animate={isCliHovering ? { r: [6, 8, 6], opacity: [1, 0.6, 1] } : { r: 6 }}
                          transition={{
                            duration: 0.8,
                            delay: service.index * 0.2,
                            repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                          }}
                        />
                        {/* Service label */}
                        <text
                          x={service.cx}
                          y={service.cy + 45}
                          textAnchor="middle"
                          fill="rgba(255, 255, 255, 0.8)"
                          fontSize="12"
                        >
                          {service.label}
                        </text>
                      </g>
                    ))}

                    {/* Sub-services */}
                    {[
                      { cx: 70, cy: 280, label: "REST" },
                      { cx: 130, cy: 280, label: "gRPC" },
                      { cx: 170, cy: 280, label: "Read" },
                      { cx: 230, cy: 280, label: "Write" },
                      { cx: 270, cy: 280, label: "Mem" },
                      { cx: 330, cy: 280, label: "Redis" },
                    ].map((sub, idx) => (
                      <g key={sub.label}>
                        <motion.line
                          x1={[100, 200, 300][idx < 2 ? 0 : idx < 4 ? 1 : 2]}
                          y1={150 + 25}
                          x2={sub.cx}
                          y2={sub.cy - 15}
                          stroke="rgba(34, 197, 94, 0.2)"
                          strokeWidth="1.5"
                          initial={{ pathLength: 0 }}
                          animate={isCliHovering ? { pathLength: 1 } : { pathLength: 0 }}
                          transition={{ duration: 0.6, delay: idx * 0.05 }}
                        />
                        <motion.circle
                          cx={sub.cx}
                          cy={sub.cy}
                          r="12"
                          fill="rgba(34, 197, 94, 0.1)"
                          stroke="rgba(34, 197, 94, 0.3)"
                          strokeWidth="1"
                          animate={isCliHovering ? { r: [12, 14, 12] } : { r: 12 }}
                          transition={{
                            duration: 0.9,
                            delay: idx * 0.1,
                            repeat: isCliHovering ? Number.POSITIVE_INFINITY : 0,
                          }}
                        />
                        <text
                          x={sub.cx}
                          y={sub.cy + 28}
                          textAnchor="middle"
                          fill="rgba(255, 255, 255, 0.6)"
                          fontSize="10"
                        >
                          {sub.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              </motion.div>

              {/* Customer Perspective Focus */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(34, 197, 94, 0.6)",
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Customer Perspective</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Focus on what matters most - how your customers experience your services. Top-Down monitoring
                      starts from the customer perspective.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[350px] p-4">
                  <div className="relative w-full max-w-sm">
                    <svg className="w-full" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
                      {/* Customer icon */}
                      <circle
                        cx="150"
                        cy="40"
                        r="20"
                        fill="rgba(34, 197, 94, 0.2)"
                        stroke="rgba(34, 197, 94, 0.6)"
                        strokeWidth="2"
                      />
                      <text x="150" y="48" textAnchor="middle" fill="rgb(34, 197, 94)" fontSize="16">
                        👤
                      </text>

                      {/* Transaction stages */}
                      {[
                        { y: 100, label: "Request", status: "sent" },
                        { y: 160, label: "Processing", status: "active" },
                        { y: 220, label: "Complete", status: "success" },
                      ].map((stage, idx) => (
                        <g key={stage.label}>
                          <motion.line
                            x1="150"
                            y1={40 + 20 + idx * 60}
                            x2="150"
                            y2={stage.y - 20}
                            stroke={stage.status === "active" ? "rgba(34, 197, 94, 0.6)" : "rgba(34, 197, 94, 0.3)"}
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={isHovering ? { pathLength: 1 } : { pathLength: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                          />
                          <motion.rect
                            x="80"
                            y={stage.y - 20}
                            width="140"
                            height="40"
                            rx="8"
                            fill={
                              stage.status === "success"
                                ? "rgba(34, 197, 94, 0.1)"
                                : stage.status === "active"
                                  ? "rgba(34, 197, 94, 0.15)"
                                  : "rgba(34, 197, 94, 0.05)"
                            }
                            stroke="rgba(34, 197, 94, 0.4)"
                            strokeWidth="1.5"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isHovering ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4, delay: idx * 0.15 }}
                          />
                          <text
                            x="150"
                            y={stage.y + 5}
                            textAnchor="middle"
                            fill="rgba(255, 255, 255, 0.9)"
                            fontSize="13"
                            fontWeight="600"
                          >
                            {stage.label}
                          </text>
                          {stage.status === "active" && (
                            <motion.circle
                              cx="200"
                              cy={stage.y}
                              r="8"
                              fill="rgb(34, 197, 94)"
                              animate={{ r: [8, 12, 8], opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                            />
                          )}
                          {stage.status === "success" && (
                            <text x="200" y={stage.y + 3} textAnchor="middle" fill="rgb(34, 197, 94)" fontSize="14">
                              ✓
                            </text>
                          )}
                        </g>
                      ))}

                      {/* Latency indicator */}
                      <motion.text
                        x="150"
                        y="280"
                        textAnchor="middle"
                        fill="rgba(34, 197, 94, 0.8)"
                        fontSize="12"
                        initial={{ opacity: 0 }}
                        animate={isHovering ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        Latency: 45ms
                      </motion.text>
                    </svg>
                  </div>
                </div>
              </motion.div>

              {/* Live Business Metrics */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-2"
                onMouseEnter={() => setIsFeature3Hovering(true)}
                onMouseLeave={() => setIsFeature3Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(34, 197, 94, 0.5)",
                  boxShadow: "0 0 30px rgba(34, 197, 94, 0.2)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Live Business Metrics</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Track important business metrics in real-time. Define indicators and agents to collect data from
                      any source.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[350px] p-6">
                  <div className="grid grid-cols-2 gap-4 w-full">
                    {[
                      { name: "Payments/min", value: 2847, trend: "+12%" },
                      { name: "Active Users", value: 5234, trend: "+8%" },
                      { name: "Throughput", value: 156.5, unit: "GB/s", trend: "+5%" },
                      { name: "Success Rate", value: 99.8, unit: "%", trend: "stable" },
                    ].map((metric, idx) => (
                      <motion.div
                        key={metric.name}
                        className="relative rounded-lg border border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent p-4 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isFeature3Hovering ? { opacity: 1, scale: 1 } : { opacity: 0.6, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{ scale: 1.05, borderColor: "rgba(34, 197, 94, 0.5)" }}
                      >
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-muted-foreground font-medium">{metric.name}</span>
                          <div className="flex items-baseline gap-2">
                            <span className="text-xl font-bold text-green-400">
                              {metric.value}
                              {metric.unit && metric.unit}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <motion.div
                              className="text-xs font-semibold"
                              animate={
                                isFeature3Hovering
                                  ? { color: "rgba(34, 197, 94, 1)" }
                                  : { color: "rgba(34, 197, 94, 0.5)" }
                              }
                            >
                              {metric.trend === "stable" ? "⚬ Stable" : metric.trend}
                            </motion.div>
                            {/* Animated bar indicator */}
                            <motion.div className="w-12 h-1 bg-green-500/20 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-green-500 to-green-400"
                                initial={{ width: 0 }}
                                animate={isFeature3Hovering ? { width: "100%" } : { width: "60%" }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Early Warning System */}
              <motion.div
                className="group border-secondary/40 text-card-foreground relative col-span-12 flex flex-col overflow-hidden rounded-xl border-2 p-6 shadow-xl transition-all ease-in-out md:col-span-6 xl:col-span-6 xl:col-start-8"
                onMouseEnter={() => setIsFeature4Hovering(true)}
                onMouseLeave={() => setIsFeature4Hovering(false)}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{
                  rotateY: 5,
                  rotateX: 2,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
                  borderColor: "rgba(34, 197, 94, 0.6)",
                }}
                style={{ transition: "all 0s ease-in-out" }}
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl leading-none font-semibold tracking-tight">Early Warning System</h3>
                  <div className="text-md text-muted-foreground flex flex-col gap-2 text-sm">
                    <p className="max-w-[460px]">
                      Detect slowdowns and quality degradation before they impact your customers. Get alerts early.
                    </p>
                  </div>
                </div>
                <div className="flex grow items-center justify-center select-none relative min-h-[350px]">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={isFeature4Hovering ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative">
                      {/* Larger warning icon with glow */}
                      {[1, 2, 3].map((wave) => (
                        <motion.div
                          key={`pulse-${wave}`}
                          className="absolute inset-0 rounded-full border-2 border-red-500/30"
                          animate={{ scale: [1, 1.4, 1.8], opacity: [0.8, 0.4, 0] }}
                          transition={{
                            duration: 2,
                            delay: wave * 0.4,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          style={{
                            width: "120px",
                            height: "120px",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        />
                      ))}
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10 border-2 border-red-500/40 flex items-center justify-center">
                        <span className="text-7xl drop-shadow-lg">⚠</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Alerts that appear on hover */}
                  <motion.div
                    className="space-y-3 w-full px-4 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={isFeature4Hovering ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Critical Alert */}
                    <motion.div
                      className="flex items-center gap-3 p-4 rounded-lg bg-red-500/15 border border-red-500/40 backdrop-blur-sm"
                      initial={{ x: -50, opacity: 0 }}
                      animate={isFeature4Hovering ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <motion.div
                        className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <span className="text-sm text-red-300 font-medium">Error rate spike: 25% on payment API</span>
                    </motion.div>

                    {/* Warning Alert */}
                    <motion.div
                      className="flex items-center gap-3 p-4 rounded-lg bg-yellow-500/15 border border-yellow-500/40 backdrop-blur-sm"
                      initial={{ x: -50, opacity: 0 }}
                      animate={isFeature4Hovering ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.15 }}
                    >
                      <motion.div
                        className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}
                      />
                      <span className="text-sm text-yellow-300 font-medium">Response time degradation: +15%</span>
                    </motion.div>

                    {/* Info Alert */}
                    <motion.div
                      className="flex items-center gap-3 p-4 rounded-lg bg-green-500/15 border border-green-500/40 backdrop-blur-sm"
                      initial={{ x: -50, opacity: 0 }}
                      animate={isFeature4Hovering ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-sm text-green-300 font-medium">Database performance: Normal</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </FollowerPointerCard>
      </motion.div>
    </section>
  )
}
