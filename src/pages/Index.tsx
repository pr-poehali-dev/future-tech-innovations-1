import { Shader, ChromaFlow, Swirl } from "shaders/react"
import { GrainOverlay } from "@/components/grain-overlay"
import { QuizSection } from "@/components/sections/quiz-section"
import { MagneticButton } from "@/components/magnetic-button"
import { useRef, useEffect, useState } from "react"

export default function Index() {
  const [isLoaded, setIsLoaded] = useState(false)
  const shaderContainerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const quizRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkShaderReady = () => {
      if (shaderContainerRef.current) {
        const canvas = shaderContainerRef.current.querySelector("canvas")
        if (canvas && canvas.width > 0 && canvas.height > 0) {
          setIsLoaded(true)
          return true
        }
      }
      return false
    }

    if (checkShaderReady()) return

    const intervalId = setInterval(() => {
      if (checkShaderReady()) clearInterval(intervalId)
    }, 100)

    const fallbackTimer = setTimeout(() => setIsLoaded(true), 1500)

    return () => {
      clearInterval(intervalId)
      clearTimeout(fallbackTimer)
    }
  }, [])

  const scrollToHero = () => heroRef.current?.scrollIntoView({ behavior: "smooth" })
  const scrollToQuiz = () => quizRef.current?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="relative w-full bg-background">
      <GrainOverlay />

      {/* Фон — фиксированный */}
      <div
        ref={shaderContainerRef}
        className={`fixed inset-0 z-0 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ contain: "strict" }}
      >
        <Shader className="h-full w-full">
          <Swirl
            colorA="#8B0000"
            colorB="#1a1a2e"
            speed={0.5}
            detail={0.7}
            blend={50}
            coarseX={40}
            coarseY={40}
            mediumX={40}
            mediumY={40}
            fineX={40}
            fineY={40}
          />
          <ChromaFlow
            baseColor="#8B0000"
            upColor="#cc2200"
            downColor="#0a0a1a"
            leftColor="#c8860a"
            rightColor="#c8860a"
            intensity={0.85}
            radius={1.8}
            momentum={25}
            maskType="alpha"
            opacity={0.95}
          />
        </Shader>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Навигация */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ backdropFilter: "blur(12px)", background: "rgba(0,0,0,0.15)" }}
      >
        <button
          onClick={scrollToHero}
          className="flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/15 backdrop-blur-md">
            <span className="text-base font-bold text-foreground">★</span>
          </div>
          <span className="font-sans text-base font-semibold tracking-tight text-foreground">1941–1945</span>
        </button>

        <button
          onClick={scrollToQuiz}
          className="rounded-full border border-foreground/20 bg-foreground/10 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md active:scale-95"
        >
          Пройти квиз
        </button>
      </nav>

      {/* Контент — вертикальный скролл */}
      <div className={`relative z-10 transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>

        {/* Hero */}
        <div ref={heroRef} className="flex min-h-screen flex-col justify-end px-5 pb-16 pt-24">
          <div className="mx-auto w-full max-w-lg">
            <div className="mb-4 inline-block rounded-full border border-foreground/20 bg-foreground/15 px-4 py-1.5 backdrop-blur-md">
              <p className="font-mono text-xs text-foreground/90">1941 — 1945</p>
            </div>
            <h1 className="mb-5 font-sans text-5xl font-light leading-[1.1] tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 sm:text-6xl">
              Великая
              <br />
              Отечественная
              <br />
              <span className="text-foreground/40">война</span>
            </h1>
            <p className="mb-8 text-base leading-relaxed text-foreground/85 animate-in fade-in duration-1000 delay-200">
              Проверьте свои знания о самой трагической и героической странице отечественной истории.
            </p>
            <button
              onClick={scrollToQuiz}
              className="w-full rounded-2xl bg-foreground/90 py-4 text-base font-semibold text-background backdrop-blur-md transition-all active:scale-[0.97] sm:w-auto sm:px-10"
            >
              Начать квиз
            </button>
          </div>

          {/* Скролл-подсказка */}
          <div className="mt-12 flex items-center justify-center gap-2 opacity-60">
            <p className="font-mono text-xs text-foreground/80">Листайте вниз</p>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-foreground/30">
              <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/80" />
            </div>
          </div>
        </div>

        {/* Квиз */}
        <div ref={quizRef}>
          <QuizSection />
        </div>

      </div>
    </div>
  )
}
