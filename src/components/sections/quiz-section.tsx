import { useState } from "react"

const questions = [
  {
    question: "В каком году началась Великая Отечественная война?",
    options: ["1939", "1941", "1942", "1940"],
    correct: 1,
    fact: "22 июня 1941 года Германия без объявления войны напала на СССР.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/2ceffb15-c0d4-4608-ab33-c45ac8b33ebf.jpg",
  },
  {
    question: "Сколько дней длилась блокада Ленинграда?",
    options: ["500 дней", "700 дней", "872 дня", "1000 дней"],
    correct: 2,
    fact: "Блокада Ленинграда длилась 872 дня — с 8 сентября 1941 по 27 января 1944 года.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/ea884541-2067-4f3a-84bb-11206ef01189.jpg",
  },
  {
    question: "Как называлась операция по разгрому немецких войск под Сталинградом?",
    options: ["Операция «Багратион»", "Операция «Уран»", "Операция «Тайфун»", "Операция «Искра»"],
    correct: 1,
    fact: "Операция «Уран» (ноябрь 1942) окружила 330-тысячную армию Паулюса под Сталинградом.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/c3b9fe66-6ccc-4ce9-b2f3-9e3ca056c535.jpg",
  },
  {
    question: "Какое сражение называют «Огненной дугой»?",
    options: ["Битва за Москву", "Курская битва", "Битва за Берлин", "Сталинградская битва"],
    correct: 1,
    fact: "Курская битва (июль–август 1943) — крупнейшее танковое сражение в истории.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/4fdccb74-53d3-43f4-8b57-754a6419f247.jpg",
  },
  {
    question: "Когда советские войска водрузили Знамя Победы над Рейхстагом?",
    options: ["1 мая 1945", "30 апреля 1945", "9 мая 1945", "8 мая 1945"],
    correct: 1,
    fact: "Знамя Победы водружено 30 апреля 1945 года бойцами 150-й стрелковой дивизии.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/7f923761-c749-41df-b29a-8da0bfc87bd4.jpg",
  },
  {
    question: "Как звали маршала, командовавшего штурмом Берлина?",
    options: ["К.К. Рокоссовский", "А.М. Василевский", "Г.К. Жуков", "И.С. Конев"],
    correct: 2,
    fact: "Георгий Константинович Жуков — четырежды Герой Советского Союза, маршал Победы.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/4f654100-1baf-4d61-9757-889f9c4094b7.jpg",
  },
  {
    question: "Сколько советских граждан погибло в годы Великой Отечественной войны?",
    options: ["Около 7 млн", "Около 14 млн", "Около 27 млн", "Около 20 млн"],
    correct: 2,
    fact: "Потери СССР составили около 27 миллионов человек — больше всех стран-участниц.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/07d06f0e-99c7-4eae-9e40-ccaa9767d207.jpg",
  },
  {
    question: "Когда был подписан Акт о капитуляции Германии?",
    options: ["7 мая 1945", "8 мая 1945", "9 мая 1945", "10 мая 1945"],
    correct: 1,
    fact: "Акт подписан 8 мая 1945 года в Карлсхорсте. В СССР праздник — 9 мая из-за разницы во времени.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/417d3590-0e68-47bf-bb13-d5004a8625be.jpg",
  },
  {
    question: "Какой город первым получил звание «Город-герой»?",
    options: ["Москва", "Киев", "Одесса и Севастополь", "Ленинград"],
    correct: 2,
    fact: "Первыми звание «Город-герой» в 1945 году получили Одесса и Севастополь.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/d81c873b-8722-46bf-9dc9-18698038641a.jpg",
  },
  {
    question: "Какое оружие немцы прозвали «Сталинский орган»?",
    options: ["Танк Т-34", "«Катюша» БМ-13", "Штурмовик Ил-2", "ППШ"],
    correct: 1,
    fact: "«Катюша» (БМ-13) — реактивная система залпового огня, наводившая ужас своим звуком.",
    image: "https://cdn.poehali.dev/projects/4264b56d-3cf4-4b2d-8a1e-5420eefe986d/files/05d2c080-c9ad-4ce2-9236-867ad6867a3b.jpg",
  },
]

const socials = [
  { label: "Max", emoji: "🌐", href: "https://max.ru/id5404105079_gos6" },
  { label: "Telegram", emoji: "✈️", href: "https://t.me/Youth_Center_Culture" },
  { label: "ВКонтакте", emoji: "💙", href: "https://vk.com/mckit_sgugit" },
]

export function QuizSection() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [showFact, setShowFact] = useState(false)

  const q = questions[current]

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    setShowFact(true)
    if (idx === q.correct) setScore((s) => s + 1)
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

  const getResult = () => {
    const pct = score / questions.length
    if (pct === 1) return { title: "Отлично! Знаток истории!", desc: "Вы ответили верно на все вопросы." }
    if (pct >= 0.7) return { title: "Хороший результат!", desc: "Вы хорошо знаете историю ВОВ." }
    if (pct >= 0.4) return { title: "Неплохо!", desc: "Есть что узнать ещё." }
    return { title: "Стоит повторить историю", desc: "Знание подвига предков — наш долг." }
  }

  if (finished) {
    const result = getResult()
    return (
      <div className="px-4 pb-10">
        {/* Результат */}
        <div className="mb-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="mb-4 text-6xl font-light text-white">
            {score}<span className="text-white/30">/{questions.length}</span>
          </div>
          <h2 className="mb-2 text-xl font-semibold text-white">{result.title}</h2>
          <p className="text-sm text-white/60">{result.desc}</p>
        </div>

        <button
          onClick={handleRestart}
          className="mb-8 w-full rounded-2xl py-4 text-base font-semibold text-white active:scale-[0.97]"
          style={{ background: "linear-gradient(135deg, #8B0000, #cc2200)" }}
        >
          Пройти снова
        </button>

        {/* Соцсети */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-4 text-center text-xs text-white/40">Подписывайтесь на наши соцсети</p>
          <div className="flex flex-col gap-3">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white active:scale-[0.97]"
              >
                <span className="text-xl">{s.emoji}</span>
                <span className="text-sm font-medium">{s.label}</span>
                <span className="ml-auto text-white/30">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-10">
      {/* Прогресс-бар */}
      <div className="px-4 pb-3">
        <div className="mb-1.5 flex justify-between">
          <span className="text-xs text-white/40">Вопрос {current + 1} из {questions.length}</span>
          <span className="text-xs text-white/40">★ {score}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: `${(current / questions.length) * 100}%`,
              background: "linear-gradient(90deg, #8B0000, #cc4400)",
            }}
          />
        </div>
      </div>

      {/* Картинка — во всю ширину */}
      <div className="relative mb-4 overflow-hidden" style={{ height: "42vw", minHeight: 160, maxHeight: 260 }}>
        <img
          key={q.image}
          src={q.image}
          alt=""
          className="h-full w-full object-cover"
          style={{ display: "block" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(13,7,7,0.95) 100%)" }}
        />
        {/* Вопрос поверх картинки (снизу) */}
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-3">
          <h3 className="text-base font-semibold leading-snug text-white drop-shadow-lg">
            {q.question}
          </h3>
        </div>
      </div>

      {/* Варианты ответов */}
      <div className="flex flex-col gap-2.5 px-4">
        {q.options.map((option, idx) => {
          let style: React.CSSProperties = { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.9)" }
          if (selected !== null) {
            if (idx === q.correct) style = { background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.5)", color: "#86efac" }
            else if (idx === selected) style = { background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.5)", color: "#fca5a5" }
            else style = { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.25)" }
          }
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
              className="w-full rounded-2xl px-4 py-3.5 text-left text-sm font-medium leading-snug transition-transform active:scale-[0.97] disabled:cursor-default"
              style={style}
            >
              <span className="mr-2 opacity-40">{String.fromCharCode(65 + idx)}.</span>
              {option}
            </button>
          )
        })}
      </div>

      {/* Факт */}
      {showFact && (
        <div className="mx-4 mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <p className="mb-1 text-xs text-white/35">/ Исторический факт</p>
          <p className="mb-4 text-sm leading-relaxed text-white/80">{q.fact}</p>
          <button
            onClick={handleNext}
            className="w-full rounded-xl py-3.5 text-sm font-semibold text-white active:scale-[0.97]"
            style={{ background: "linear-gradient(135deg, #8B0000, #cc2200)" }}
          >
            {current + 1 >= questions.length ? "Посмотреть результат →" : "Следующий вопрос →"}
          </button>
        </div>
      )}
    </div>
  )
}
