import Link from "next/link";
import { notFound } from "next/navigation";
import { getTheme, themes } from "@/data/themes";
import { A4Sheet } from "@/components/exam/a4-sheet";
import { PracticeQuiz } from "@/components/exam/practice-quiz";
import { PresentationTimer } from "@/components/exam/presentation-timer";
import { ThemeQuiz } from "@/components/exam/theme-quiz";
import { ThemePrimer } from "@/components/exam/theme-primer";
import { ThemeTheoryPanel } from "@/components/exam/theme-theory";
import { ThemeMaterialsPanel } from "@/components/exam/theme-materials";
import { FourXPanel } from "@/components/exam/four-x-panel";
import { Flashcards } from "@/components/exam/flashcards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }));
}

export default async function ThemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = getTheme(slug);
  if (!theme) notFound();

  const prev = themes.find((t) => t.id === theme.id - 1);
  const next = themes.find((t) => t.id === theme.id + 1);

  return (
    <div className="space-y-8">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <div>
          <Badge variant="secondary">Tema {theme.id} af 12</Badge>
          <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))] sm:text-4xl">
            {theme.shortTitle}
          </h1>
        </div>
        <div className="flex flex-wrap gap-2">
          {prev ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/tema/${prev.slug}`}>← {prev.shortTitle}</Link>
            </Button>
          ) : null}
          {next ? (
            <Button asChild variant="outline" size="sm">
              <Link href={`/tema/${next.slug}`}>{next.shortTitle} →</Link>
            </Button>
          ) : null}
        </div>
      </div>

      <div className="no-print grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <PresentationTimer />
        <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
            Broer til andre temaer
          </p>
          <ul className="mt-3 space-y-2">
            {theme.crossLinks.map((c) => (
              <li key={c} className="text-sm leading-snug text-foreground/85">
                · {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="no-print space-y-6">
        <ThemeMaterialsPanel themeId={theme.id} />
        <FourXPanel themeId={theme.id} />
        <ThemePrimer themeId={theme.id} />
        <ThemeTheoryPanel themeId={theme.id} />
        <Flashcards themeId={theme.id} />
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href="/ordbog">Åbn ordbog</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/sammenhaeng">Se sammenhænge</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={`/test/${theme.slug}`}>Test temaet</Link>
          </Button>
        </div>
      </div>

      <A4Sheet theme={theme} />

      <section className="no-print space-y-3">
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          Test dette tema
        </h2>
        <ThemeQuiz themeId={theme.id} themeTitle={theme.shortTitle} />
      </section>

      <section className="no-print space-y-3">
        <h2 className="font-display text-2xl text-[hsl(var(--ink))]">
          Hurtig dialogtræning
        </h2>
        <p className="text-sm text-muted-foreground">
          Første spørgsmål er inden for temaet. Et par er bevidst fra andre temaer
          — som til den rigtige eksamen.
        </p>
        <PracticeQuiz themeId={theme.id} />
      </section>

      <section className="no-print rounded-xl border border-border bg-card p-5">
        <h2 className="font-display text-xl text-[hsl(var(--ink))]">
          Modelbesvarelser
        </h2>
        <div className="mt-4 space-y-4">
          {theme.examAnswers.map((qa) => (
            <div key={qa.q}>
              <p className="font-semibold text-sm">{qa.q}</p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/80">
                {qa.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
