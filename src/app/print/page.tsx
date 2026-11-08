import { themes, faulkswagonCase } from "@/data/themes";
import { A4Sheet } from "@/components/exam/a4-sheet";
import { PrintButton } from "@/components/exam/print-button";

export default function PrintPage() {
  return (
    <div className="space-y-8">
      <div className="no-print flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-[hsl(var(--ink))]">
            Print A4-ark
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Ét ark pr. tema — som tilladt til eksamen. Brug browserens print
            (Ctrl/Cmd+P). Hvert ark starter på ny side.
          </p>
        </div>
        <PrintButton />
      </div>

      <div id="print-root" className="space-y-10">
        {themes.map((theme) => (
          <A4Sheet key={theme.id} theme={theme} />
        ))}

        <article className="a4-sheet relative overflow-hidden rounded-lg border border-[hsl(35_25%_78%)] p-6 sm:p-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[hsl(var(--coral))]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[hsl(var(--coral))]">
            Bonus · Faulkswagon
          </p>
          <h2 className="font-display mt-1 text-2xl text-[hsl(var(--ink))]">
            {faulkswagonCase.title}
          </h2>
          <ol className="mt-4 space-y-1 rounded-md bg-[hsl(16_50%_95%)] p-3 font-medium">
            {faulkswagonCase.agenda.map((a) => (
              <li key={a} className="text-sm">
                {a}
              </li>
            ))}
          </ol>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {faulkswagonCase.talkTrack.map((block) => (
              <section key={block.heading}>
                <h4 className="font-display text-base">{block.heading}</h4>
                <ul className="mt-1 space-y-1 text-[13px]">
                  {block.bullets.map((b) => (
                    <li key={b}>· {b}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
