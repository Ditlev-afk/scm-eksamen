import Link from "next/link";
import { curriculumStory, connections } from "@/data/study";
import { themes } from "@/data/themes";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ConnectionsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl text-[hsl(var(--ink))] sm:text-4xl">
          {curriculumStory.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          Brug dette som mental model: strategi → drivers → struktur →
          inventory/transport → coordination → cirkulær SC.
        </p>
      </div>

      <section className="space-y-3 rounded-xl border border-border bg-card p-5 shadow-sm">
        {curriculumStory.paragraphs.map((p) => (
          <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-foreground/90">
            {p}
          </p>
        ))}
      </section>

      <section>
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          De 12 temaer i rækkefølge
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((theme, i) => (
            <Link key={theme.id} href={`/tema/${theme.slug}`}>
              <Card className="h-full transition hover:border-[hsl(var(--sea))]">
                <CardHeader className="pb-2">
                  <Badge variant="secondary">
                    {i + 1 < themes.length
                      ? `Trin ${theme.id}`
                      : `Trin ${theme.id}`}
                  </Badge>
                  <CardTitle className="font-display text-lg">
                    {theme.shortTitle}
                  </CardTitle>
                  <CardDescription>{theme.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    Åbn for teori, ordbogsbegreber, A4 og test →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          Direkte koblinger mellem temaer
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Når censor hopper uden for dit tema, følg en af disse pile.
        </p>
        <ul className="mt-4 space-y-2">
          {connections.map((c) => {
            const from = themes.find((t) => t.id === c.from);
            const to = themes.find((t) => t.id === c.to);
            return (
              <li
                key={`${c.from}-${c.to}-${c.label}`}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm shadow-sm"
              >
                <span className="font-semibold text-[hsl(var(--sea))]">
                  {from?.shortTitle}
                </span>
                <span className="mx-2 text-muted-foreground">→</span>
                <span className="font-semibold text-[hsl(var(--coral))]">
                  {to?.shortTitle}
                </span>
                <p className="mt-1 text-foreground/80">{c.label}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
