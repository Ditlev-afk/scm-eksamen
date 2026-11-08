"use client";

import { useMemo, useState } from "react";
import {
  getMcqsForTheme,
  getOpenForTheme,
  type Mcq,
  type OpenQ,
} from "@/data/quizzes";
import { scoreOpenAnswer } from "@/lib/score-open-answer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Mode = "mcq" | "open";
type Size = 8 | 12 | "all";

export function ThemeQuiz({
  themeId,
  themeTitle,
}: {
  themeId: number;
  themeTitle: string;
}) {
  const [mode, setMode] = useState<Mode>("mcq");
  const [size, setSize] = useState<Size>(12);
  const [seed, setSeed] = useState(0);

  const allMcq = useMemo(() => getMcqsForTheme(themeId), [themeId]);
  const allOpen = useMemo(() => getOpenForTheme(themeId), [themeId]);

  const mcqList = useMemo(() => {
    const shuffled = [...allMcq].sort(() => Math.random() - 0.5);
    if (size === "all") return shuffled;
    return shuffled.slice(0, size);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMcq, size, seed]);

  const openList = useMemo(() => {
    const shuffled = [...allOpen].sort(() => Math.random() - 0.5);
    return shuffled;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allOpen, seed]);

  return (
    <div className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--coral))]">
            Test · {themeTitle}
          </p>
          <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
            {allMcq.length} MC · {allOpen.length} åbne i banken
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Træn i bidder eller kør hele banken. Åbne svar = egne ord +
            begrebsvurdering.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant={mode === "mcq" ? "default" : "outline"}
            onClick={() => setMode("mcq")}
          >
            Multiple choice
          </Button>
          <Button
            size="sm"
            variant={mode === "open" ? "default" : "outline"}
            onClick={() => setMode("open")}
          >
            Egne ord
          </Button>
        </div>
      </div>

      {mode === "mcq" ? (
        <div className="flex flex-wrap gap-2">
          {([8, 12, "all"] as Size[]).map((s) => (
            <Button
              key={String(s)}
              size="sm"
              variant={size === s ? "secondary" : "outline"}
              onClick={() => {
                setSize(s);
                setSeed((x) => x + 1);
              }}
            >
              {s === "all" ? `Alle ${allMcq.length}` : `${s} spørgsmål`}
            </Button>
          ))}
          <Button size="sm" variant="ghost" onClick={() => setSeed((x) => x + 1)}>
            Bland igen
          </Button>
        </div>
      ) : null}

      {mode === "mcq" ? (
        <McqRunner key={`m-${seed}-${size}`} questions={mcqList} />
      ) : (
        <OpenRunner key={`o-${seed}`} questions={openList} />
      )}
    </div>
  );
}

function McqRunner({ questions }: { questions: Mcq[] }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState({ right: 0, answered: 0 });
  const [missed, setMissed] = useState<Mcq[]>([]);
  const [done, setDone] = useState(false);

  const q = questions[index];
  if (!q) {
    return <p className="text-sm text-muted-foreground">Ingen MC-spørgsmål.</p>;
  }

  if (done) {
    const pct = Math.round((score.right / Math.max(score.answered, 1)) * 100);
    return (
      <div className="space-y-4 rounded-lg bg-[hsl(199_40%_94%)] p-4">
        <p className="font-display text-2xl text-[hsl(var(--ink))]">
          Resultat: {score.right}/{score.answered} ({pct}%)
        </p>
        <p className="text-sm text-foreground/80">
          {pct >= 85
            ? "Stærkt — skift til åbne spørgsmål og sig det højt."
            : pct >= 65
              ? "OK — kør de missede begreber som flashcards, og prøv alle MC bagefter."
              : "Rustent lag. Læs opfriskningen + flashcards, før du tester igen."}
        </p>
        {missed.length > 0 ? (
          <div>
            <p className="text-xs font-bold uppercase tracking-wide">Missede emner</p>
            <ul className="mt-2 space-y-1 text-sm">
              {missed.slice(0, 8).map((m) => (
                <li key={m.id}>· {m.question}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <Button
          onClick={() => {
            setIndex(0);
            setPicked(null);
            setScore({ right: 0, answered: 0 });
            setMissed([]);
            setDone(false);
          }}
        >
          Prøv samme sæt igen
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">
          {index + 1} / {questions.length}
        </Badge>
        <Badge variant="outline">
          Score {score.right}/{score.answered}
        </Badge>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-[hsl(var(--sea))] transition-all"
          style={{ width: `${(index / questions.length) * 100}%` }}
        />
      </div>
      <p className="font-display text-lg text-[hsl(var(--ink))]">{q.question}</p>
      <ul className="space-y-2">
        {q.options.map((opt, i) => {
          const show = picked !== null;
          const isCorrect = i === q.correctIndex;
          const isPicked = picked === i;
          return (
            <li key={`${q.id}-${i}`}>
              <button
                type="button"
                disabled={picked !== null}
                onClick={() => {
                  setPicked(i);
                  const ok = i === q.correctIndex;
                  setScore((s) => ({
                    right: s.right + (ok ? 1 : 0),
                    answered: s.answered + 1,
                  }));
                  if (!ok) setMissed((m) => [...m, q]);
                }}
                className={cn(
                  "w-full rounded-md border px-3 py-2.5 text-left text-sm transition",
                  !show && "hover:border-[hsl(var(--sea))] hover:bg-secondary/60",
                  show && isCorrect && "border-emerald-600 bg-emerald-50",
                  show && isPicked && !isCorrect && "border-red-500 bg-red-50",
                  !show && "border-border bg-background"
                )}
              >
                <span className="mr-2 font-semibold text-muted-foreground">
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </button>
            </li>
          );
        })}
      </ul>
      {picked !== null ? (
        <div className="space-y-3">
          <p className="rounded-md bg-secondary/70 p-3 text-sm leading-relaxed">
            {q.explanation}
          </p>
          <Button
            onClick={() => {
              if (index + 1 >= questions.length) setDone(true);
              else {
                setIndex((i) => i + 1);
                setPicked(null);
              }
            }}
          >
            {index + 1 >= questions.length ? "Se resultat" : "Næste"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}

function OpenRunner({ questions }: { questions: OpenQ[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [result, setResult] = useState<ReturnType<typeof scoreOpenAnswer> | null>(
    null
  );

  const q = questions[index];
  if (!q) {
    return <p className="text-sm text-muted-foreground">Ingen åbne spørgsmål.</p>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">
          {index + 1} / {questions.length}
        </Badge>
        <Badge variant="outline">Skriv med egne ord</Badge>
      </div>
      <p className="font-display text-lg text-[hsl(var(--ink))]">{q.question}</p>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setResult(null);
        }}
        rows={8}
        placeholder="Skriv som til mundtlig: korte sætninger, begreber, gerne et eksempel."
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm leading-relaxed outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => setResult(scoreOpenAnswer(text, q.keyPoints))}
          disabled={text.trim().length < 12}
        >
          Vurder mit svar
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setIndex((i) => (i + 1) % questions.length);
            setText("");
            setResult(null);
          }}
        >
          Næste spørgsmål
        </Button>
      </div>

      {result ? (
        <div className="space-y-3 rounded-lg border border-border bg-[hsl(42_30%_95%)] p-4">
          <Badge
            className={
              result.grade === "stærkt"
                ? "bg-emerald-700"
                : result.grade === "ok"
                  ? "bg-[hsl(var(--sea))]"
                  : result.grade === "tyndt"
                    ? "bg-amber-600"
                    : "bg-red-700"
            }
          >
            {result.percent}% · {result.grade}
          </Badge>
          <p className="text-sm">{result.feedback}</p>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-800">
                Dækket
              </p>
              <ul className="mt-1 space-y-1 text-sm">
                {result.covered.length ? (
                  result.covered.map((k) => <li key={k.id}>✓ {k.label}</li>)
                ) : (
                  <li className="text-muted-foreground">Ingen endnu</li>
                )}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-red-800">
                Mangler
              </p>
              <ul className="mt-1 space-y-1 text-sm">
                {result.missing.length ? (
                  result.missing.map((k) => <li key={k.id}>· {k.label}</li>)
                ) : (
                  <li className="text-muted-foreground">Ingen — flot</li>
                )}
              </ul>
            </div>
          </div>
          <details className="rounded-md bg-white/70 p-3 text-sm">
            <summary className="cursor-pointer font-semibold">
              Vis modelbesvarelse
            </summary>
            <p className="mt-2 leading-relaxed text-foreground/85">
              {q.modelAnswer}
            </p>
          </details>
          <p className="text-xs text-muted-foreground">
            Appen scorer begreber. Paste gerne dit svar i chatten for mundtlig
            feedback fra mig.
          </p>
        </div>
      ) : null}
    </div>
  );
}
