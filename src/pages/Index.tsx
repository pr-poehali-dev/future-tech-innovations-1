import { QuizSection } from "@/components/sections/quiz-section"

export default function Index() {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(160deg, #1a0a0a 0%, #0d0d1a 50%, #1a1000 100%)",
      }}
    >
      {/* Шапка */}
      <header
        className="sticky top-0 z-50 flex items-center gap-3 border-b border-white/5 px-4 py-3"
        style={{ background: "rgba(10,5,5,0.9)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-900/60">
          <span className="text-sm font-bold text-white">★</span>
        </div>
        <span className="font-semibold tracking-tight text-white">1941–1945</span>
      </header>

      {/* Герой */}
      <div className="px-4 pb-6 pt-8 text-center">
        <div className="mb-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <p className="font-mono text-xs text-white/60">Проверь свои знания</p>
        </div>
        <h1 className="mb-3 text-4xl font-light leading-tight text-white">
          Великая
          <br />
          Отечественная
          <br />
          <span className="text-white/35">война</span>
        </h1>
        <p className="text-sm leading-relaxed text-white/60">
          10 вопросов о событиях 1941–1945 годов
        </p>
      </div>

      {/* Квиз */}
      <QuizSection />
    </div>
  )
}
