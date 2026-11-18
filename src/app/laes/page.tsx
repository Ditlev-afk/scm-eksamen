import Link from "next/link";
import { readings, readingStats, getGeneralReadings } from "@/data/study/readings";
import { themes } from "@/data/themes";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function LaesPage() {
  const stats = readingStats();
  const general = getGeneralReadings();

  return (
    <div className="space-y-10">
      <div>
        <Badge variant="secondary">Læsebibliotek</Badge>
        <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          Læs pensum på siden
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {stats.count} tekster bygget af dit DTU Learn-materiale: teori,
          4xExplanation, slides, øvelser/løsninger og OCR af scannede kapitler.
          Åbn et tema for at læse i kontekst — eller gå direkte hertil.
        </p>
      </div>

      {general.length ? (
        <section className="space-y-3">
          <h2 className="font-display text-xl text-[hsl(var(--ink))]">Generelt / eksamen</h2>
          {general.map((r) => (
            <div key={r.id} className="rounded-xl border border-border bg-card p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
                {r.kind}
              </p>
              <p className="font-display mt-1 text-lg">{r.title}</p>
              <p className="text-xs text-muted-foreground">{r.source}</p>
              <p className="mt-2 line-clamp-3 text-sm text-foreground/80">{r.body}</p>
              <Button asChild size="sm" variant="outline" className="mt-3">
                <Link href="/eksamen">Se eksamensoverblik</Link>
              </Button>
            </div>
          ))}
        </section>
      ) : null}

      <section>
        <h2 className="font-display text-xl text-[hsl(var(--ink))]">Læs pr. tema</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t) => {
            const count = readings.filter((r) => r.themeId === t.id).length;
            return (
              <Link
                key={t.id}
                href={`/tema/${t.slug}#laesestof`}
                className="rounded-xl border border-border bg-card p-4 transition hover:border-[hsl(var(--sea))] hover:shadow-md"
              >
                <Badge variant="secondary">Tema {t.id}</Badge>
                <p className="font-display mt-2 text-lg text-[hsl(var(--ink))]">
                  {t.shortTitle}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {count} {count === 1 ? "tekst" : "tekster"}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
