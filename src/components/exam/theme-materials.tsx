import { getMaterials } from "@/data/study";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
        {title}
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-sm leading-snug text-foreground/85">
            · {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ThemeMaterialsPanel({ themeId }: { themeId: number }) {
  const m = getMaterials(themeId);
  if (!m) return null;

  return (
    <section className="rounded-xl border border-[hsl(var(--sea)/0.35)] bg-[hsl(199_40%_97%)] p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--sea))]">
        Lærerens vejledning · Fall 2026
      </p>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">{m.summary}</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <ListBlock title="Lærebog / teori" items={m.textbook} />
        <ListBlock title="Slides & DTU Learn" items={m.slidesAndFolders} />
        <ListBlock title="Øvelser (inkl. 4xExplanation)" items={m.exercises} />
        <ListBlock title="Cases & ekstra readings" items={m.casesAndReadings} />
      </div>
      <div className="mt-4 rounded-lg border border-border/70 bg-white/80 p-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--coral))]">
          Eksamens-tips fra underviseren
        </p>
        <ul className="mt-2 space-y-1.5">
          {m.teacherTips.map((t) => (
            <li key={t} className="text-sm leading-snug text-foreground/85">
              · {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
