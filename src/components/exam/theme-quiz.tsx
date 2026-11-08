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

export function ThemeQuiz({
  themeId,
  themeTitle,
}: {
  themeId: number;
  themeTitle: string;
}) {
  const [mode, setMode] = useState<Mode>("mcq");
  const mcqList = useMemo(() => getMcqsForTheme(themeId), [themeId]);
  const openList = useMemo(() => getOpenForTheme(themeId), [themeId]);

  return (
    <div className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--coral))]">
            Test · {themeTitle}
          </p>
          <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
            Multiple choice & egne ord
          </h3>
        </div>
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={mode === "mcq" ? "default" : "outline"}
            onClick={() => setMode("mcq")}
          >
            Multiple choice ({mcqList.length})
          </Button>
          <Button
            size="sm"
            variant={mode === "open" ? "default" : "outline"}
            onClick={() => setMode("open")}
          >
            Egne ord ({openList.length})
          </Button>
        </div>
      </div>

      {mode === "mcq" ? (
        <McqRunner questions={mcqList} />
      ) : (
        <OpenRunner questions={openList} />
      )}
    </div>
  );
}

function McqRunner({ questions }: { questions: Mcq[] }) {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState({ right: 0, answered: 0 });
  const [done, setDone] = useState(false);

  const q = questions[index];
  if (!q) {
    return <p className="text-sm text-muted-foreground">Ingen MC-spørgsmål.</p>;
  }

  if (done) {
    const pct = Math.round((score.right / Math.max(score.answered, 1)) * 100);
    return (
      <div className="rounded-lg bg-[hsl(199_40%_94%)] p-4">
        <p className="font-display text-2xl text-[hsl(var(--ink))]">
          Resultat: {score.right}/{score.answered} ({pct}%)
        </p>
        <p className="mt-2 text-sm text-foreground/80">
          {pct >= 80
            ? "Stærkt — du rammer pensum-kernerne."
            : pct >= 55
              ? "OK — gå åbne spørgsmål igennem på de emner du missede."
              : "Læs A4-arket igen, og kør testen én gang til."}
        </p>
        <Button
          className="mt-4"
          onClick={() => {
            setIndex(0);
            setPicked(null);
            setScore({ right: 0, answered: 0 });
            setDone(false);
          }}
        >
          Prøv igen
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
      <p className="font-display text-lg text-[hsl(var(--ink))]">{q.question}</p>
      <ul className="space-y-2">
        {q.options.map((opt, i) => {
          const show = picked !== null;
          const isCorrect = i === q.correctIndex;
          const isPicked = picked === i;
          return (
            <li key={opt}>
              <button
                type="button"
                disabled={picked !== null}
                onClick={() => {
                  setPicked(i);
                  setScore((s) => ({
                    right: s.right + (i === q.correctIndex ? 1 : 0),
                    answered: s.answered + 1,
                  }));
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
        rows={7}
        placeholder="Svar som til mundtlig eksamen — korte, præcise sætninger er fine."
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm leading-relaxed outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
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
          <div className="flex flex-wrap items-center gap-2">
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
          </div>
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
            Vurderingen matcher nøglebegreber (ikke stil). Du kan også indsætte
            dit svar i chatten her, hvis du vil have en mundtlig-stil feedback
            fra mig.
          </p>
        </div>
      ) : null}
    </div>
  );
}
