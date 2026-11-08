"use client";

import { useMemo, useState } from "react";
import { getFlashcards } from "@/data/study";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Flashcards({ themeId }: { themeId: number }) {
  const cards = useMemo(() => getFlashcards(themeId), [themeId]);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Record<string, boolean>>({});

  const card = cards[index];
  if (!card) return null;

  const knownCount = Object.values(known).filter(Boolean).length;

  return (
    <section className="space-y-4 rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[hsl(var(--sea))]">
            Flashcards
          </p>
          <h3 className="font-display mt-1 text-xl text-[hsl(var(--ink))]">
            Bank begreberne ind
          </h3>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary">
            {index + 1}/{cards.length}
          </Badge>
          <Badge variant="outline">Kan: {knownCount}</Badge>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        className="a4-sheet relative min-h-[180px] w-full rounded-lg border border-[hsl(35_25%_78%)] p-6 text-left transition hover:border-[hsl(var(--sea))]"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {flipped ? "Svar" : "Spørgsmål"} · klik for at vende
        </p>
        <p className="font-display mt-3 text-xl leading-snug text-[hsl(var(--ink))] sm:text-2xl">
          {flipped ? card.back : card.front}
        </p>
      </button>

      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => {
            setFlipped(false);
            setIndex((i) => (i - 1 + cards.length) % cards.length);
          }}
        >
          Forrige
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setFlipped(false);
            setIndex((i) => (i + 1) % cards.length);
          }}
        >
          Næste
        </Button>
        <Button
          onClick={() => {
            setKnown((k) => ({ ...k, [card.id]: true }));
            setFlipped(false);
            setIndex((i) => (i + 1) % cards.length);
          }}
        >
          Kan den
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setKnown((k) => ({ ...k, [card.id]: false }));
            setFlipped(false);
            setIndex((i) => (i + 1) % cards.length);
          }}
        >
          Øv igen
        </Button>
      </div>
    </section>
  );
}
