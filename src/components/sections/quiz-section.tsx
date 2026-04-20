import { useState } from "react"
import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"

const questions = [
  {
    question: "В каком году началась Великая Отечественная война?",
    options: ["1939", "1941", "1942", "1940"],
    correct: 1,
    fact: "22 июня 1941 года Германия без объявления войны напала на СССР.",
  },
  {
    question: "Сколько дней длилась блокада Ленинграда?",
    options: ["500 дней", "700 дней", "872 дня", "1000 дней"],
    correct: 2,
    fact: "Блокада Ленинграда длилась 872 дня — с 8 сентября 1941 по 27 января 1944 года.",
  },
  {
    question: "Как называлась операция по разгрому немецких войск под Сталинградом?",
    options: ["Операция «Багратион»", "Операция «Уран»", "Операция «Тайфун»", "Операция «Искра»"],
    correct: 1,
    fact: "Операция «Уран» (ноябрь 1942) окружила 330-тысячную армию Паулюса под Сталинградом.",
  },
  {
    question: "Какое сражение называют «Огненной дугой»?",
    options: ["Битва за Москву", "Курская битва", "Битва за Берлин", "Сталинградская битва"],
    correct: 1,
    fact: "Курская битва (июль–август 1943) — крупнейшее танковое сражение в истории.",
  },
  {
    question: "Когда советские войска водрузили Знамя Победы над Рейхстагом?",
    options: ["1 мая 1945", "30 апреля 1945", "9 мая 1945", "8 мая 1945"],
    correct: 1,
    fact: "Знамя Победы было водружено над Рейхстагом 30 апреля 1945 года бойцами 150-й стрелковой дивизии.",
  },
  {
    question: "Как звали маршала, командовавшего штурмом Берлина?",
    options: ["К.К. Рокоссовский", "А.М. Василевский", "Г.К. Жуков", "И.С. Конев"],
    correct: 2,
    fact: "Георгий Константинович Жуков — четырежды Герой Советского Союза, маршал Победы.",
  },
  {
    question: "Сколько советских граждан погибло в годы Великой Отечественной войны?",
    options: ["Около 7 миллионов", "Около 14 миллионов", "Около 27 миллионов", "Около 20 миллионов"],
    correct: 2,
    fact: "Потери СССР составили около 27 миллионов человек — самые большие потери среди всех стран-участниц войны.",
  },
  {
    question: "Когда был подписан Акт о безоговорочной капитуляции Германии?",
    options: ["7 мая 1945", "8 мая 1945", "9 мая 1945", "10 мая 1945"],
    correct: 1,
    fact: "Акт о безоговорочной капитуляции Германии подписан 8 мая 1945 года в Карлсхорсте (Берлин). В СССР праздник — 9 мая из-за разницы во времени.",
  },
  {
    question: "Какой город первым получил звание «Город-герой»?",
    options: ["Москва", "Киев", "Одесса и Севастополь", "Ленинград"],
    correct: 2,
    fact: "Первыми звание «Город-герой» в 1945 году получили Одесса и Севастополь.",
  },
  {
    question: "Какое советское оружие немцы прозвали «Сталинский орган»?",
    options: ["Танк Т-34", "Реактивная артиллерия БМ-13 «Катюша»", "Штурмовик Ил-2", "Пистолет-пулемёт ППШ"],
    correct: 1,
    fact: "«Катюша» (БМ-13) — реактивная система залпового огня, наводившая ужас на врага своим характерным звуком.",
  },
]

export function QuizSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [started, setStarted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showFact, setShowFact] = useState(false)

  const question = questions[current]

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    setShowFact(true)
    if (idx === question.correct) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setShowFact(false)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setFinished(false)
    setShowFact(false)
    setStarted(false)
  }

  const getResultText = () => {
    const pct = score / questions.length
    if (pct === 1) return { title: "Отлично! Знаток истории!", desc: "Вы ответили верно на все вопросы. Память о подвиге жива!" }
    if (pct >= 0.7) return { title: "Хороший результат!", desc: "Вы хорошо знаете историю Великой Отечественной войны." }
    if (pct >= 0.4) return { title: "Неплохо!", desc: "Есть что узнать ещё. История помнит каждого героя." }
    return { title: "Стоит повторить историю", desc: "Знание подвига наших предков — наш долг перед ними." }
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center justify-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-3xl">
        {!started ? (
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-4 inline-block rounded-full border border-foreground/20 bg-foreground/10 px-4 py-1.5 backdrop-blur-md">
              <p className="font-mono text-xs text-foreground/80">{questions.length} вопросов</p>
            </div>
            <h2 className="mb-4 font-sans text-5xl font-light leading-tight tracking-tight text-foreground md:text-7xl">
              Квиз
              <br />
              <span className="text-foreground/40">о войне</span>
            </h2>
            <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg">
              Проверьте, насколько хорошо вы знаете историю Великой Отечественной войны 1941–1945 годов.
            </p>
            <MagneticButton size="lg" variant="primary" onClick={() => setStarted(true)}>
              Начать квиз
            </MagneticButton>
          </div>
        ) : finished ? (
          <div
            className={`text-center transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md md:h-32 md:w-32">
              <span className="font-sans text-3xl font-light text-foreground md:text-4xl">
                {score}/{questions.length}
              </span>
            </div>
            <h2 className="mb-3 font-sans text-4xl font-light tracking-tight text-foreground md:text-6xl">
              {getResultText().title}
            </h2>
            <p className="mb-10 text-base leading-relaxed text-foreground/80 md:text-lg">
              {getResultText().desc}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton size="lg" variant="primary" onClick={handleRestart}>
                Пройти снова
              </MagneticButton>
            </div>
          </div>
        ) : (
          <div
            className={`transition-all duration-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs text-foreground/50">
                Вопрос {current + 1} / {questions.length}
              </span>
              <span className="font-mono text-xs text-foreground/50">Очки: {score}</span>
            </div>

            <div className="mb-2 h-px w-full bg-foreground/10">
              <div
                className="h-px bg-foreground/40 transition-all duration-500"
                style={{ width: `${((current) / questions.length) * 100}%` }}
              />
            </div>

            <h3 className="mb-8 mt-6 font-sans text-2xl font-light leading-snug text-foreground md:text-3xl">
              {question.question}
            </h3>

            <div className="space-y-3">
              {question.options.map((option, idx) => {
                let borderClass = "border-foreground/20 hover:border-foreground/50"
                let bgClass = "bg-foreground/5 hover:bg-foreground/10"
                let textClass = "text-foreground"

                if (selected !== null) {
                  if (idx === question.correct) {
                    borderClass = "border-green-400/60"
                    bgClass = "bg-green-400/10"
                    textClass = "text-green-300"
                  } else if (idx === selected && idx !== question.correct) {
                    borderClass = "border-red-400/60"
                    bgClass = "bg-red-400/10"
                    textClass = "text-red-300"
                  } else {
                    borderClass = "border-foreground/10"
                    bgClass = "bg-foreground/5"
                    textClass = "text-foreground/50"
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selected !== null}
                    className={`w-full rounded-lg border px-5 py-3.5 text-left text-sm font-light transition-all duration-300 backdrop-blur-sm disabled:cursor-default md:text-base ${borderClass} ${bgClass} ${textClass}`}
                  >
                    <span className="mr-3 font-mono text-xs opacity-50">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    {option}
                  </button>
                )
              })}
            </div>

            {showFact && (
              <div className="mt-5 rounded-lg border border-foreground/15 bg-foreground/8 px-5 py-4 backdrop-blur-sm">
                <p className="mb-3 font-mono text-xs text-foreground/50">/ Исторический факт</p>
                <p className="text-sm leading-relaxed text-foreground/85 md:text-base">{question.fact}</p>
                <div className="mt-4">
                  <MagneticButton variant="secondary" onClick={handleNext}>
                    {current + 1 >= questions.length ? "Посмотреть результат" : "Следующий вопрос →"}
                  </MagneticButton>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
