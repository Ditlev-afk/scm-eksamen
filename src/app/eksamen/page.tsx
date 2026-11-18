import Link from "next/link";
import { examOverview } from "@/data/study/exam-overview";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ExamOverviewPage() {
  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary">62133 · Fall 2026</Badge>
        <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          {examOverview.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {examOverview.sourceNote}
        </p>
      </div>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-xl text-[hsl(var(--ink))]">Sådan foregår prøven</h2>
          <ul className="mt-3 space-y-2">
            {examOverview.format.map((item) => (
              <li key={item} className="text-sm leading-snug text-foreground/85">
                · {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-xl text-[hsl(var(--ink))]">Regler & medbring</h2>
          <ul className="mt-3 space-y-2">
            {examOverview.rules.map((item) => (
              <li key={item} className="text-sm leading-snug text-foreground/85">
                · {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[hsl(var(--coral)/0.35)] bg-[hsl(16_60%_97%)] p-5">
        <h2 className="font-display text-xl text-[hsl(var(--ink))]">Tema 12 — pas på listen</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85">
          {examOverview.theme12Note}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button asChild size="sm" variant="outline">
            <Link href="/tema/remanufacturing">Remanufacturing</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href="/tema/faulkswagon">Faulkswagen A3</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-xl text-[hsl(var(--ink))]">A4-skabelon</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5">
            {examOverview.a4Template.map((item) => (
              <li key={item} className="text-sm text-foreground/85">
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <h2 className="font-display text-xl text-[hsl(var(--ink))]">Arbejdsform</h2>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5">
            {examOverview.studySteps.map((item) => (
              <li key={item} className="text-sm text-foreground/85">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          Mundtlige skel at træne
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Træningsforslag fra materialepakken — ikke nye eksamenskrav.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {examOverview.oralDrills.map((d) => (
            <div key={d.theme} className="rounded-xl border border-border bg-card p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
                {d.theme}
              </p>
              <p className="mt-2 text-sm leading-snug text-foreground/85">{d.question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-5">
        <h2 className="font-display text-xl text-[hsl(var(--ink))]">Prioritér først</h2>
        <ul className="mt-3 space-y-2">
          {examOverview.prioritizeFirst.map((item) => (
            <li key={item} className="text-sm leading-snug text-foreground/85">
              · {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
