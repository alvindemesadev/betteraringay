import { useState } from 'react';
import { Link } from 'react-router';
import SEO from '../components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type Q = { q: string; options: string[]; answer: number; fact: string };

const QUESTIONS: Q[] = [
  { q: 'How many barangays does Aringay have?', options: ['22', '24', '26', '28'], answer: 1, fact: 'Aringay has 24 barangays — 13% urban, 87% rural — from coastal Dulao/Samara to upland Basca/Gallano.' },
  { q: 'When was Aringay formally founded as a municipality?', options: ['1741', '1850', '1903', '1913'], answer: 0, fact: 'Aringay was organized in 1741 under Pangasinan; it became a founding town of La Union in 1850.' },
  { q: 'What is Aringay’s festival?', options: ['Panagbenga Festival', 'Kilawen Festival', 'Sinulog Festival', 'Ati-Atihan'], answer: 1, fact: 'Kilawen Festival celebrates Aringay’s Lingayen Gulf catch — kilawen/kinilaw — with street dancing and food fairs.' },
  { q: 'Which river gives Aringay its name (folk tale “Aring, ay!”)?', options: ['Agno River', 'Aringay River (Carayan Lucsin)', 'Bued River', 'Amburayan River'], answer: 1, fact: 'Aringay River (formerly Carayan Lucsin) — folk tale of datu’s daughter Aring rescued at the river mouth.' },
  { q: 'What is Aringay’s ZIP code and land area?', options: ['2503 / 84.54 km²', '2500 / 162 km²', '2503 / 13.98 km²', '2511 / 84.54 km²'], answer: 0, fact: 'ZIP 2503 for all 24 barangays; land area 84.54 km² (5.64% of La Union).' },
  { q: 'What historic 500-meter tunnel is in Barangay Salapak, Poblacion?', options: ['Bintawan Tunnel', 'Centennial (Sallapak) Tunnel', 'Aringay Gold Tunnel', 'Baguio Railway Tunnel'], answer: 1, fact: 'Centennial (Sallapak) Tunnel — PNR Baguio line, built 1913, abandoned in WWII, now landmark.' },
  { q: 'Who is the Municipal Mayor (2025–2028, re-elected)?', options: ['Charito C. Sibuma', 'Benjamin O. Sibuma', 'Eric O. Sibuma', 'Dante S. Garcia'], answer: 1, fact: 'Hon. Benjamin O. Sibuma (LAKAS, 25,068 votes 2025) — former merchant mariner, councilor, vice mayor.' },
  { q: 'Which gulf borders Aringay to the west?', options: ['Manila Bay', 'Lingayen Gulf', 'Subic Bay', 'Baler Bay'], answer: 1, fact: 'Lingayen Gulf — Aringay is coastal; beach barangays Dulao/Samara/San Eugenio face the gulf.' },
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
    if (i === cur.answer) setScore(s => s + 1);
    setShowResult(true);
  }
  function next() {
    if (idx + 1 >= total) setDone(true);
    else {
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
      <SEO title="Aringay Quiz — Municipality of Aringay" description="Test your knowledge of Aringay, La Union — 24 barangays, 1741 history, Kilawen Festival, Aringay River, Centennial Tunnel, and Lingayen Gulf." keywords="Aringay quiz, La Union, barangays, Kilawen Festival, Aringay River" />
      <main className="flex-grow bg-muted/30 py-8">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">← Back to Home</Link>
          </Button>

          <Card className="mt-4 overflow-hidden">
            <div className="bg-primary text-primary-foreground px-6 py-5 text-center">
              <Badge variant="secondary" className="bg-white/15 text-white border-white/20 hover:bg-white/20">
                🧩 ARINGAY QUIZ
              </Badge>
              <h1 className="text-2xl font-bold tracking-tight mt-2">How well do you know Aringay?</h1>
              <p className="text-primary-foreground/80 text-sm mt-1">24 barangays • 50,380 citizens • Coastal gateway to La Union</p>
            </div>

            {!done ? (
              <CardContent className="p-6">
                <div className="flex justify-between items-center text-xs text-muted-foreground mb-3">
                  <span>Question {idx + 1} of {total}</span>
                  <Badge variant="outline">
                    Score {score}/{total}
                  </Badge>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-5">
                  <div className="h-full bg-primary transition-all" style={{ width: `${((idx + (showResult ? 1 : 0)) / total) * 100}%` }} />
                </div>

                <h2 className="font-semibold text-lg">{cur.q}</h2>
                <div className="mt-4 grid gap-2">
                  {cur.options.map((opt, i) => {
                    const isPicked = picked === i;
                    const isCorrect = i === cur.answer;
                    return (
                      <Button
                        key={opt}
                        variant={showResult ? (isCorrect ? 'default' : isPicked ? 'destructive' : 'outline') : 'outline'}
                        className={`justify-start h-auto py-3 text-left font-medium ${showResult && isCorrect ? 'bg-green-600 hover:bg-green-700 border-green-600' : ''}`}
                        onClick={() => choose(i)}
                        disabled={showResult}
                      >
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-muted text-xs font-bold mr-3 shrink-0">{String.fromCharCode(65 + i)}</span>
                        <span className="flex-1 text-left">{opt}</span>
                        {showResult && isCorrect && <span className="ml-2">✓</span>}
                        {showResult && isPicked && !isCorrect && <span className="ml-2">✗</span>}
                      </Button>
                    );
                  })}
                </div>

                {showResult && (
                  <div className={`mt-4 rounded-xl p-4 text-sm border ${picked === cur.answer ? 'bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:text-green-200' : 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30'}`}>
                    <strong>{picked === cur.answer ? 'Correct!' : 'Not quite.'}</strong> {cur.fact}
                  </div>
                )}

                <div className="mt-6 flex justify-end">
                  {showResult && (
                    <Button onClick={next}>{idx + 1 >= total ? 'See Results →' : 'Next →'}</Button>
                  )}
                </div>
              </CardContent>
            ) : (
              <CardContent className="p-6 text-center">
                <div className="text-5xl mb-3">{pct === 100 ? '🏆' : pct >= 75 ? '🎉' : pct >= 50 ? '👍' : '📚'}</div>
                <h2 className="text-2xl font-bold tracking-tight">You scored {score}/{total} ({pct}%)</h2>
                <p className="text-muted-foreground mt-2">{verdict}</p>

                <Card className="mt-6 bg-muted/50">
                  <CardContent className="p-4 text-sm">
                    <strong>Review:</strong> All answers are in{' '}
                    <Link to="/government/departments/barangays" className="text-primary hover:underline">
                      Barangays
                    </Link>{' '}
                    +{' '}
                    <Link to="/government/departments/history-culture" className="text-primary hover:underline">
                      History & Culture
                    </Link>{' '}
                    — coastal Lingayen Gulf, Aringay River, Centennial Tunnel, 1741 founding.
                  </CardContent>
                </Card>

                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Button onClick={restart}>Retake Quiz</Button>
                  <Button asChild variant="outline">
                    <Link to="/government/departments/history-culture">Explore History & Culture</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/">Back Home</Link>
                  </Button>
                </div>

                <Separator className="my-6" />
                <p className="text-xs text-muted-foreground">
                  Share your score: <span className="font-mono bg-muted px-2 py-1 rounded">I scored {score}/{total} on the BetterAringay Quiz! #Aringay #LaUnion</span>
                </p>
              </CardContent>
            )}
          </Card>

          <Card className="mt-6 bg-transparent border-dashed">
            <CardContent className="p-4 text-center text-xs text-muted-foreground">
              Quiz data from official LGU sources: PhilAtlas, PSA, Aringay MNAO, and LGU Aringay{' '}
              <a href="https://www.facebook.com/lgu.aringay.official" target="_blank" rel="noopener" className="text-primary hover:underline">
                facebook.com/lgu.aringay.official
              </a>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
