import Link from "next/link";
import { faulkswagonCase } from "@/data/themes";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PresentationTimer } from "@/components/exam/presentation-timer";

export default function FaulkswagonPage() {
  return (
    <div className="space-y-8">
      <div className="no-print">
        <Badge className="bg-[hsl(var(--coral))]">Tværgående case</Badge>
        <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          {faulkswagonCase.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Kan dukke op under transport, location og network design — og i dialogen
          uden for dit trukne tema.
        </p>
        <Button asChild variant="outline" size="sm" className="mt-4">
          <Link href="/">← Tilbage</Link>
        </Button>
      </div>

      <div className="no-print">
        <PresentationTimer />
      </div>

      <article className="a4-sheet relative overflow-hidden rounded-lg border border-[hsl(35_25%_78%)] p-6 sm:p-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[hsl(var(--coral))]" />
        <header className="mb-4 border-b border-dashed border-[hsl(35_25%_78%)] pb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--coral))]">
            Case-ark · A4
          </p>
          <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
            Faulkswagon
          </h2>
        </header>

        <section className="mb-5">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
            Agenda
          </h3>
          <ol className="space-y-1 rounded-md bg-[hsl(16_50%_95%)] p-3 font-medium">
            {faulkswagonCase.agenda.map((line) => (
              <li key={line} className="text-sm">
                {line}
              </li>
            ))}
          </ol>
        </section>

        <div className="grid gap-4 md:grid-cols-2">
          {faulkswagonCase.talkTrack.map((block) => (
            <section key={block.heading}>
              <h4 className="mb-1.5 font-display text-base text-[hsl(var(--ink))]">
                {block.heading}
              </h4>
              <ul className="space-y-1 text-[13px] leading-snug">
                {block.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--coral))]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-5 border-t border-dashed border-[hsl(35_25%_78%)] pt-3">
          <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
            Lærerens vinkler
          </h3>
          <ul className="grid gap-1 sm:grid-cols-2">
            {faulkswagonCase.teacherAngles.map((a) => (
              <li
                key={a}
                className="rounded bg-secondary/60 px-2 py-1 text-[12px]"
              >
                {a}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
