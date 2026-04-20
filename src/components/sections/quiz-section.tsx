import { useState } from "react"

const questions = [
  {
    question: "В каком году началась Великая Отечественная война?",
    options: ["1939", "1941", "1942", "1940"],
    correct: 1,
    fact: "22 июня 1941 года Германия без объявления войны напала на СССР.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/2ceffb15-c0d4-4608-ab33-c45ac8b33ebf.jpg",
    imageAlt: "Начало Великой Отечественной войны, 1941 год",
  },
  {
    question: "Сколько дней длилась блокада Ленинграда?",
    options: ["500 дней", "700 дней", "872 дня", "1000 дней"],
    correct: 2,
    fact: "Блокада Ленинграда длилась 872 дня — с 8 сентября 1941 по 27 января 1944 года.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/ea884541-2067-4f3a-84bb-11206ef01189.jpg",
    imageAlt: "Блокада Ленинграда",
  },
  {
    question: "Как называлась операция по разгрому немецких войск под Сталинградом?",
    options: ["Операция «Багратион»", "Операция «Уран»", "Операция «Тайфун»", "Операция «Искра»"],
    correct: 1,
    fact: "Операция «Уран» (ноябрь 1942) окружила 330-тысячную армию Паулюса под Сталинградом.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/c3b9fe66-6ccc-4ce9-b2f3-9e3ca056c535.jpg",
    imageAlt: "Сталинградская битва, операция Уран",
  },
  {
    question: "Какое сражение называют «Огненной дугой»?",
    options: ["Битва за Москву", "Курская битва", "Битва за Берлин", "Сталинградская битва"],
    correct: 1,
    fact: "Курская битва (июль–август 1943) — крупнейшее танковое сражение в истории.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/4fdccb74-53d3-43f4-8b57-754a6419f247.jpg",
    imageAlt: "Курская битва, танковое сражение",
  },
  {
    question: "Когда советские войска водрузили Знамя Победы над Рейхстагом?",
    options: ["1 мая 1945", "30 апреля 1945", "9 мая 1945", "8 мая 1945"],
    correct: 1,
    fact: "Знамя Победы было водружено над Рейхстагом 30 апреля 1945 года бойцами 150-й стрелковой дивизии.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/7f923761-c749-41df-b29a-8da0bfc87bd4.jpg",
    imageAlt: "Знамя Победы над Рейхстагом",
  },
  {
    question: "Как звали маршала, командовавшего штурмом Берлина?",
    options: ["К.К. Рокоссовский", "А.М. Василевский", "Г.К. Жуков", "И.С. Конев"],
    correct: 2,
    fact: "Георгий Константинович Жуков — четырежды Герой Советского Союза, маршал Победы.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/4f654100-1baf-4d61-9757-889f9c4094b7.jpg",
    imageAlt: "Маршал Георгий Жуков",
  },
  {
    question: "Сколько советских граждан погибло в годы Великой Отечественной войны?",
    options: ["Около 7 миллионов", "Около 14 миллионов", "Около 27 миллионов", "Около 20 миллионов"],
    correct: 2,
    fact: "Потери СССР составили около 27 миллионов человек — самые большие потери среди всех стран-участниц войны.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/07d06f0e-99c7-4eae-9e40-ccaa9767d207.jpg",
    imageAlt: "Память жертв Великой Отечественной войны",
  },
  {
    question: "Когда был подписан Акт о безоговорочной капитуляции Германии?",
    options: ["7 мая 1945", "8 мая 1945", "9 мая 1945", "10 мая 1945"],
    correct: 1,
    fact: "Акт о безоговорочной капитуляции Германии подписан 8 мая 1945 года в Карлсхорсте (Берлин). В СССР праздник — 9 мая из-за разницы во времени.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/417d3590-0e68-47bf-bb13-d5004a8625be.jpg",
    imageAlt: "Подписание акта о капитуляции Германии",
  },
  {
    question: "Какой город первым получил звание «Город-герой»?",
    options: ["Москва", "Киев", "Одесса и Севастополь", "Ленинград"],
    correct: 2,
    fact: "Первыми звание «Город-герой» в 1945 году получили Одесса и Севастополь.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/d81c873b-8722-46bf-9dc9-18698038641a.jpg",
    imageAlt: "Оборона Одессы и Севастополя",
  },
  {
    question: "Какое советское оружие немцы прозвали «Сталинский орган»?",
    options: ["Танк Т-34", "Реактивная артиллерия БМ-13 «Катюша»", "Штурмовик Ил-2", "Пистолет-пулемёт ППШ"],
    correct: 1,
    fact: "«Катюша» (БМ-13) — реактивная система залпового огня, наводившая ужас на врага своим характерным звуком.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/05d2c080-c9ad-4ce2-9236-867ad6867a3b.jpg",
    imageAlt: "Катюша БМ-13, реактивная артиллерия",
  },
]

const socials = [
  { label: "Max", short: "MAX", href: "https://max.ru/id5404105079_gos6" },
  { label: "Telegram", short: "TG", href: "https://t.me/Youth_Center_Culture" },
  { label: "ВКонтакте", short: "VK", href: "https://vk.com/mckit_sgugit" },
]

export function QuizSection() {
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
    if (idx === question.correct) setScore((s) => s + 1)
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
  }

  const getResultText = () => {
    const pct = score / questions.length
    if (pct === 1) return { title: "Отлично! Знаток истории!", desc: "Вы ответили верно на все вопросы. Память о подвиге жива!" }
    if (pct >= 0.7) return { title: "Хороший результат!", desc: "Вы хорошо знаете историю Великой Отечественной войны." }
    if (pct >= 0.4) return { title: "Неплохо!", desc: "Есть что узнать ещё. История помнит каждого героя." }
    return { title: "Стоит повторить историю", desc: "Знание подвига наших предков — наш долг перед ними." }
  }

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-lg px-5 pb-20 pt-4">

        {/* ВОПРОС */}
        {!finished && (
          <div className="flex flex-col gap-5">
            {/* Прогресс */}
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-foreground/50">
                Вопрос {current + 1} из {questions.length}
              </span>
              <span className="font-mono text-xs text-foreground/50">★ {score}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-foreground/10">
              <div
                className="h-1.5 rounded-full bg-foreground/60 transition-all duration-500"
                style={{ width: `${(current / questions.length) * 100}%` }}
              />
            </div>

            {/* Картинка */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                key={question.image}
                src={question.image}
                alt={question.imageAlt}
                className="h-56 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            {/* Вопрос */}
            <h3 className="text-xl font-light leading-snug text-foreground">
              {question.question}
            </h3>

            {/* Варианты */}
            <div className="flex flex-col gap-3">
              {question.options.map((option, idx) => {
                let cls = "border-foreground/25 bg-foreground/8 text-foreground"
                if (selected !== null) {
                  if (idx === question.correct) cls = "border-green-400/70 bg-green-400/15 text-green-300"
                  else if (idx === selected) cls = "border-red-400/70 bg-red-400/15 text-red-300"
                  else cls = "border-foreground/10 bg-foreground/5 text-foreground/35"
                }
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selected !== null}
                    className={`w-full rounded-2xl border px-5 py-4 text-left text-base leading-snug transition-all duration-200 active:scale-[0.97] disabled:cursor-default ${cls}`}
                  >
                    <span className="mr-3 font-mono text-xs opacity-40">{String.fromCharCode(65 + idx)}.</span>
                    {option}
                  </button>
                )
              })}
            </div>

            {/* Факт после ответа */}
            {showFact && (
              <div className="rounded-2xl border border-foreground/15 bg-black/30 px-5 py-5 backdrop-blur-sm">
                <p className="mb-2 font-mono text-xs text-foreground/45">/ Исторический факт</p>
                <p className="mb-5 text-sm leading-relaxed text-foreground/85">{question.fact}</p>
                <button
                  onClick={handleNext}
                  className="w-full rounded-2xl bg-foreground/90 py-4 text-base font-semibold text-background transition-all active:scale-[0.97]"
                >
                  {current + 1 >= questions.length ? "Посмотреть результат →" : "Следующий вопрос →"}
                </button>
              </div>
            )}
          </div>
        )}

        {/* РЕЗУЛЬТАТ */}
        {finished && (
          <div className="flex flex-col items-center pt-8 text-center">
            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full border border-foreground/20 bg-foreground/10 backdrop-blur-md">
              <span className="font-sans text-3xl font-light text-foreground">
                {score}/{questions.length}
              </span>
            </div>
            <h2 className="mb-3 font-sans text-3xl font-light tracking-tight text-foreground">
              {getResultText().title}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-foreground/75">
              {getResultText().desc}
            </p>

            <button
              onClick={handleRestart}
              className="w-full rounded-2xl bg-foreground/90 py-4 text-base font-semibold text-background transition-all active:scale-[0.97]"
            >
              Пройти снова
            </button>

            {/* Соцсети */}
            <div className="mt-10 w-full border-t border-foreground/10 pt-8">
              <p className="mb-4 font-mono text-xs text-foreground/45">/ Подписывайтесь на наши соцсети</p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-foreground/20 bg-foreground/5 px-5 py-4 text-base text-foreground/80 transition-all active:scale-[0.97] hover:bg-foreground/10 hover:text-foreground"
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-sm text-foreground/40">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}