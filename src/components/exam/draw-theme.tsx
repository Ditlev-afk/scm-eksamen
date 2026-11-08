"use client";

import { useState } from "react";
import Link from "next/link";
import { themes } from "@/data/themes";
import { Button } from "@/components/ui/button";
import { PresentationTimer } from "@/components/exam/presentation-timer";

export function DrawTheme() {
  const [drawn, setDrawn] = useState<number | null>(null);
  const [spinning, setSpinning] = useState(false);

  const theme = themes.find((t) => t.id === drawn);

  function draw() {
    setSpinning(true);
    setDrawn(null);
    let ticks = 0;
    const id = window.setInterval(() => {
      setDrawn(themes[Math.floor(Math.random() * themes.length)].id);
      ticks += 1;
      if (ticks > 12) {
        window.clearInterval(id);
        setDrawn(themes[Math.floor(Math.random() * themes.length)].id);
        setSpinning(false);
      }
    }, 80);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6 text-center shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(var(--coral))]">
          Simuler eksamen
        </p>
        <h2 className="font-display mt-2 text-3xl text-[hsl(var(--ink))]">
          {theme && !spinning ? theme.title : "Træk et tema"}
        </h2>
        {theme && !spinning ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Du har 60 sekunder til at afskrive agendaen — papiret væk derefter.
          </p>
        ) : (
          <p className="mt-2 text-sm text-muted-foreground">
            Samme setup som til eksamen: tilfældigt tema blandt de 12.
          </p>
        )}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <Button onClick={draw} disabled={spinning}>
            {spinning ? "Trækker…" : drawn ? "Træk igen" : "Træk tema"}
          </Button>
          {theme && !spinning ? (
            <Button asChild variant="outline">
              <Link href={`/tema/${theme.slug}`}>Åbn A4-ark</Link>
            </Button>
          ) : null}
        </div>
      </div>

      {theme && !spinning ? (
        <>
          <PresentationTimer />
          <div className="rounded-xl border border-dashed border-[hsl(var(--sea))] bg-[hsl(199_40%_94%)] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
              Agenda til tavlen
            </p>
            <ol className="mt-2 space-y-1 font-medium">
              {theme.agenda.map((a) => (
                <li key={a} className="text-sm">
                  {a}
                </li>
              ))}
            </ol>
          </div>
        </>
      ) : null}
    </div>
  );
}
