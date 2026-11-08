"use client";

import { useMemo, useState } from "react";
import { allPracticeQuestions, themes } from "@/data/themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PracticeQuiz({ themeId }: { themeId?: number }) {
  const pool = useMemo(() => {
    const base = themeId
      ? allPracticeQuestions.filter((q) => q.themeId === themeId)
      : allPracticeQuestions;
    // Mix in some cross-theme if filtering one theme: add 2 from others
    if (themeId) {
      const others = allPracticeQuestions
        .filter((q) => q.themeId !== themeId)
        .sort(() => Math.random() - 0.5)
        .slice(0, 2)
        .map((q) => ({ ...q, cross: true as const }));
      return [
        ...base.map((q) => ({ ...q, cross: false as const })),
        ...others,
      ];
    }
    return base
      .map((q) => ({ ...q, cross: false as const }))
      .sort(() => Math.random() - 0.5);
  }, [themeId]);

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [seed, setSeed] = useState(0);

  const questions = useMemo(
    () => [...pool].sort(() => Math.random() - 0.5),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pool, seed]
  );

  const current = questions[index];
  if (!current) {
    return <p className="text-sm text-muted-foreground">Ingen spørgsmål endnu.</p>;
  }

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">
          {index + 1} / {questions.length}
        </Badge>
        <Badge
          variant="outline"
          className={
            current.cross
              ? "border-[hsl(var(--coral))] text-[hsl(var(--coral))]"
              : ""
          }
        >
          {current.cross ? "Uden for tema" : themes.find((t) => t.id === current.themeId)?.shortTitle}
        </Badge>
      </div>
      <h3 className="font-display text-xl text-[hsl(var(--ink))]">{current.q}</h3>
      {revealed ? (
        <p className="mt-4 rounded-md bg-[hsl(199_40%_94%)] p-3 text-sm leading-relaxed text-foreground/90">
          {current.a}
        </p>
      ) : (
        <p className="mt-4 text-sm text-muted-foreground">
          Svar mundtligt først — afslør derefter modelbesvarelsen.
        </p>
      )}
      <div className="mt-4 flex flex-wrap gap-2">
        {!revealed ? (
          <Button onClick={() => setRevealed(true)}>Vis svar</Button>
        ) : (
          <Button
            onClick={() => {
              setRevealed(false);
              setIndex((i) => (i + 1) % questions.length);
            }}
          >
            Næste
          </Button>
        )}
        <Button
          variant="outline"
          onClick={() => {
            setSeed((s) => s + 1);
            setIndex(0);
            setRevealed(false);
          }}
        >
          Bland igen
        </Button>
      </div>
    </div>
  );
}
