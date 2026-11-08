import Link from "next/link";
import { notFound } from "next/navigation";
import { getTheme, themes } from "@/data/themes";
import { ThemeQuiz } from "@/components/exam/theme-quiz";
import { ThemePrimer } from "@/components/exam/theme-primer";
import { Flashcards } from "@/components/exam/flashcards";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }));
}

export default async function ThemeTestPage({
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
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <Badge variant="secondary">Test · tema {theme.id}</Badge>
          <h1 className="font-display mt-2 text-3xl text-[hsl(var(--ink))]">
            {theme.shortTitle}
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Anbefalet rækkefølge når stoffet er rustent: opfriskning → flashcards
            → MC (8/12/alle) → åbne svar med egne ord.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline" size="sm">
            <Link href={`/tema/${theme.slug}`}>A4-ark</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/test">Alle tests</Link>
          </Button>
        </div>
      </div>

      <ThemePrimer themeId={theme.id} />
      <Flashcards themeId={theme.id} />
      <ThemeQuiz themeId={theme.id} themeTitle={theme.shortTitle} />

      <div className="flex flex-wrap gap-2">
        {prev ? (
          <Button asChild variant="outline" size="sm">
            <Link href={`/test/${prev.slug}`}>← {prev.shortTitle}</Link>
          </Button>
        ) : null}
        {next ? (
          <Button asChild variant="outline" size="sm">
            <Link href={`/test/${next.slug}`}>{next.shortTitle} →</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
