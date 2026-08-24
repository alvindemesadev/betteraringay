import { useState } from 'react';
import { Link } from 'react-router';
import SEO from '../components/SEO';

type Q = { q: string; options: string[]; answer: number; fact: string };

const QUESTIONS: Q[] = [
  {
    q: 'How many barangays does Aringay have?',
    options: ['22', '24', '26', '28'],
    answer: 1,
    fact: 'Aringay has 24 barangays — 13% urban, 87% rural — from coastal Dulao/Samara to upland Basca/Gallano.',
  },
  {
    q: 'When was Aringay formally founded as a municipality?',
    options: ['1741', '1850', '1903', '1913'],
    answer: 0,
    fact: 'Aringay was organized in 1741 under Pangasinan; it became a founding town of La Union in 1850.',
  },
  {
    q: 'What is Aringay’s festival?',
    options: [
      'Panagbenga Festival',
      'Kilawen Festival',
      'Sinulog Festival',
      'Ati-Atihan',
    ],
    answer: 1,
    fact: 'Kilawen Festival celebrates Aringay’s Lingayen Gulf catch — kilawen/kinilaw — with street dancing and food fairs.',
  },
  {
    q: 'Which river gives Aringay its name (folk tale “Aring, ay!”)?',
    options: [
      'Agno River',
      'Aringay River (Carayan Lucsin)',
      'Bued River',
      'Amburayan River',
    ],
    answer: 1,
    fact: 'Aringay River (formerly Carayan Lucsin) — folk tale of datu’s daughter Aring rescued at the river mouth.',
  },
  {
    q: 'What is Aringay’s ZIP code and land area?',
    options: [
      '2503 / 84.54 km²',
      '2500 / 162 km²',
      '2503 / 13.98 km²',
      '2511 / 84.54 km²',
    ],
    answer: 0,
    fact: 'ZIP 2503 for all 24 barangays; land area 84.54 km² (5.64% of La Union).',
  },
  {
    q: 'What historic 500-meter tunnel is in Barangay Salapak, Poblacion?',
    options: [
      'Bintawan Tunnel',
      'Centennial (Sallapak) Tunnel',
      'Aringay Gold Tunnel',
      'Baguio Railway Tunnel',
    ],
    answer: 1,
    fact: 'Centennial (Sallapak) Tunnel — PNR Baguio line, built 1913, abandoned in WWII, now landmark.',
  },
  {
    q: 'Who is the Municipal Mayor (2025–2028, re-elected)?',
    options: [
      'Charito C. Sibuma',
      'Benjamin O. Sibuma',
      'Eric O. Sibuma',
      'Dante S. Garcia',
    ],
    answer: 1,
    fact: 'Hon. Benjamin O. Sibuma (LAKAS, 25,068 votes 2025) — former merchant mariner, councilor, vice mayor.',
  },
  {
    q: 'Which gulf borders Aringay to the west?',
    options: [
      'Manila Bay',
      'Lingayen Gulf (South China Sea)',
      'Subic Bay',
      'Baler Bay',
    ],
    answer: 1,
    fact: 'Lingayen Gulf — Aringay is coastal; beach barangays Dulao/Samara/San Eugenio face the gulf.',
  },
];

export default function Quiz() {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [done, setDone] = useState(false);

  const cur = QUESTIONS[idx];
  const total = QUESTIONS.length;

  function choose(i: number) {
    if (showResult) return;
    setPicked(i);
    const correct = i === cur.answer;
    if (correct) setScore(s => s + 1);
    setShowResult(true);
  }

  function next() {
    if (idx + 1 >= total) {
      setDone(true);
    } else {
      setIdx(n => n + 1);
      setPicked(null);
      setShowResult(false);
    }
  }

  function restart() {
    setIdx(0);
    setPicked(null);
    setScore(0);
    setShowResult(false);
    setDone(false);
  }

  const pct = Math.round((score / total) * 100);
  const verdict =
    pct === 100
      ? 'Perfect! You’re a true Aringay expert — kilawen-level knowledge! 🏆'
      : pct >= 75
        ? 'Great! You know Aringay well — one more read and you’ll ace it!'
        : pct >= 50
          ? 'Good start — review Barangays + History pages and try again!'
          : 'Keep exploring — the answers are in Barangays + History & Culture!';

  return (
    <>
      <SEO
        title="Aringay Quiz — Municipality of Aringay"
        description="Test your knowledge of Aringay, La Union — 24 barangays, 1741 history, Kilawen Festival, Aringay River, Centennial Tunnel, and Lingayen Gulf."
        keywords="Aringay quiz, La Union, barangays, Kilawen Festival, Aringay River"
      />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link
            to="/"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            ← Back to Home
          </Link>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mt-4 overflow-hidden">
            <div className="bg-[#0a2a7a] text-white px-6 py-5 text-center">
              <div className="inline-flex items-center gap-2 bg-white/15 text-white text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
                🧩 ARINGAY QUIZ
              </div>
              <h1 className="text-2xl font-bold mt-2">
                How well do you know Aringay?
              </h1>
              <p className="text-blue-100 text-sm mt-1">
                24 barangays • 50,380 citizens • Coastal gateway to La Union
              </p>
            </div>

            {!done ? (
              <div className="p-6">
                <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                  <span>
                    Question {idx + 1} of {total}
                  </span>
                  <span>
                    Score {score}/{total}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                  <div
                    className="h-full bg-primary-600 transition-all"
                    style={{
                      width: `${((idx + (showResult ? 1 : 0)) / total) * 100}%`,
                    }}
                  />
                </div>

                <h2 className="font-semibold text-gray-900 text-lg">{cur.q}</h2>
                <div className="mt-4 grid gap-2">
                  {cur.options.map((opt, i) => {
                    const isPicked = picked === i;
                    const isCorrect = i === cur.answer;
                    let cls =
                      'border-gray-200 hover:border-primary-300 hover:bg-primary-50';
                    if (showResult) {
                      if (isCorrect)
                        cls = 'bg-green-50 border-green-300 text-green-900';
                      else if (isPicked && !isCorrect)
                        cls = 'bg-red-50 border-red-300 text-red-900';
                      else cls = 'border-gray-200 opacity-70';
                    } else if (isPicked) {
                      cls = 'border-primary-600 bg-primary-50';
                    }
                    return (
                      <button
                        key={opt}
                        onClick={() => choose(i)}
                        disabled={showResult}
                        className={`text-left w-full px-4 py-3 rounded-xl border font-medium transition ${cls}`}
                      >
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-xs font-bold mr-3">
                          {String.fromCharCode(65 + i)}
                        </span>
                        {opt}
                        {showResult && isCorrect && (
                          <span className="float-right text-green-700">✓</span>
                        )}
                        {showResult && isPicked && !isCorrect && (
                          <span className="float-right text-red-700">✗</span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {showResult && (
                  <div
                    className={`mt-4 rounded-xl p-4 text-sm border ${picked === cur.answer ? 'bg-green-50 border-green-200 text-green-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}
                  >
                    <strong>
                      {picked === cur.answer ? 'Correct!' : 'Not quite.'}
                    </strong>{' '}
                    {cur.fact}
                  </div>
                )}

                <div className="mt-6 flex justify-end">
                  {showResult && (
                    <button
                      onClick={next}
                      className="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition"
                    >
                      {idx + 1 >= total ? 'See Results →' : 'Next →'}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 text-center">
                <div className="text-5xl mb-3">
                  {pct === 100
                    ? '🏆'
                    : pct >= 75
                      ? '🎉'
                      : pct >= 50
                        ? '👍'
                        : '📚'}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  You scored {score}/{total} ({pct}%)
                </h2>
                <p className="text-gray-600 mt-2">{verdict}</p>

                <div className="mt-6 bg-gray-50 rounded-xl p-4 text-sm text-gray-700 border">
                  <strong>Review:</strong> All answers are in{' '}
                  <Link
                    to="/government/departments/barangays"
                    className="text-primary-600 hover:underline"
                  >
                    Barangays
                  </Link>{' '}
                  +{' '}
                  <Link
                    to="/government/departments/history-culture"
                    className="text-primary-600 hover:underline"
                  >
                    History & Culture
                  </Link>{' '}
                  — coastal Lingayen Gulf, Aringay River, Centennial Tunnel,
                  1741 founding.
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={restart}
                    className="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition"
                  >
                    Retake Quiz
                  </button>
                  <Link
                    to="/government/departments/history-culture"
                    className="bg-white border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Explore History & Culture
                  </Link>
                  <Link
                    to="/"
                    className="border border-gray-300 text-gray-700 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Back Home
                  </Link>
                </div>

                <p className="text-xs text-gray-400 mt-6">
                  Share your score:{' '}
                  <span className="font-mono">{`I scored ${score}/${total} on the BetterAringay Quiz! #Aringay #LaUnion`}</span>
                </p>
              </div>
            )}
          </div>

          <Section className="bg-transparent py-6">
            <div className="text-center text-xs text-gray-500">
              Quiz data from official LGU sources: PhilAtlas, PSA, Aringay MNAO,
              and LGU Aringay{' '}
              <a
                href="https://www.facebook.com/lgu.aringay.official"
                target="_blank"
                rel="noopener"
                className="text-primary-600 hover:underline"
              >
                facebook.com/lgu.aringay.official
              </a>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
