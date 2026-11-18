import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DiagramShellProps = {
  title: string;
  caption: string;
  children: ReactNode;
  className?: string;
};

function DiagramShell({ title, caption, children, className }: DiagramShellProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-[hsl(var(--paper))] p-4 shadow-sm",
        className,
      )}
    >
      <figcaption className="mb-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--sea))]">
          Model
        </p>
        <h3 className="font-display mt-1 text-lg font-bold text-[hsl(var(--ink))]">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{caption}</p>
      </figcaption>
      <div className="rounded-lg border border-border/70 bg-card/80 p-3">{children}</div>
    </figure>
  );
}

/** Fig 2-3: Cost-responsiveness efficient frontier */
export function CostResponsivenessFrontier() {
  return (
    <DiagramShell
      title="Fig. 2-3 · Cost–responsiveness efficient frontier"
      caption="Kanten viser det bedste trade-off: højere responsiveness koster mere. Punkter inde i kurven er ineffektive — man kan få mere R til samme cost (eller samme R billigere)."
    >
      <svg viewBox="0 0 420 260" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Efficient frontier">
        <defs>
          <linearGradient id="frontierFill" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(199 78% 28%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(16 72% 48%)" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {/* axes */}
        <line x1="48" y1="220" x2="390" y2="220" stroke="hsl(210 40% 10%)" strokeWidth="1.5" />
        <line x1="48" y1="220" x2="48" y2="28" stroke="hsl(210 40% 10%)" strokeWidth="1.5" />
        <text x="215" y="248" textAnchor="middle" className="fill-[hsl(var(--ink))]" fontSize="12" fontWeight="600">
          Cost →
        </text>
        <text
          x="16"
          y="124"
          textAnchor="middle"
          className="fill-[hsl(var(--ink))]"
          fontSize="12"
          fontWeight="600"
          transform="rotate(-90 16 124)"
        >
          Responsiveness →
        </text>
        {/* inefficient region hint */}
        <path
          d="M 60 200 C 120 195, 180 160, 240 110 C 290 70, 330 45, 370 35 L 370 200 Z"
          fill="url(#frontierFill)"
        />
        {/* frontier curve */}
        <path
          d="M 60 200 C 120 195, 180 160, 240 110 C 290 70, 330 45, 370 35"
          fill="none"
          stroke="hsl(199 78% 28%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* points */}
        <circle cx="95" cy="188" r="6" fill="hsl(199 78% 28%)" />
        <text x="95" y="175" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-[hsl(var(--ink))]">
          A
        </text>
        <circle cx="210" cy="128" r="6" fill="hsl(16 72% 48%)" />
        <text x="210" y="115" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-[hsl(var(--ink))]">
          B
        </text>
        <circle cx="155" cy="175" r="5" fill="hsl(210 12% 55%)" />
        <text x="168" y="190" fontSize="10" className="fill-muted-foreground">
          Ineffektiv
        </text>
        <text x="300" y="55" fontSize="11" fontWeight="600" fill="hsl(199 78% 28%)">
          Efficient frontier
        </text>
      </svg>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
        <strong>Mundtligt:</strong> A er billig/effektiv; B er dyrere men mere responsiv. Begge på
        frontieren er &quot;bedst mulige&quot; — valget afhænger af IDU/fit, ikke af at &quot;R er bedre&quot;.
      </p>
    </DiagramShell>
  );
}

/** Fig 2-4: Responsiveness spectrum */
export function ResponsivenessSpectrum() {
  const marks = [
    { label: "Meget\neffektiv", x: 8 },
    { label: "Effektiv", x: 28 },
    { label: "Balanced", x: 50 },
    { label: "Responsiv", x: 72 },
    { label: "Meget\nresponsiv", x: 92 },
  ];
  return (
    <DiagramShell
      title="Fig. 2-4 · Responsiveness spectrum"
      caption="Supply chain capabilities ligger på et kontinuum fra høj effektivitet (lav cost, stiv) til høj responsiveness (hurtig, fleksibel, dyr)."
    >
      <div className="space-y-4 py-2">
        <div className="relative mx-auto h-16 max-w-xl">
          <div
            className="absolute left-0 right-0 top-1/2 h-3 -translate-y-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, hsl(199 78% 28%), hsl(42 40% 70%), hsl(16 72% 48%))",
            }}
          />
          {marks.map((m) => (
            <div
              key={m.label}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${m.x}%` }}
            >
              <div className="mx-auto h-4 w-4 rounded-full border-2 border-[hsl(var(--paper))] bg-[hsl(var(--ink))]" />
            </div>
          ))}
        </div>
        <div className="mx-auto grid max-w-xl grid-cols-5 gap-1 text-center text-[11px] font-semibold leading-snug text-[hsl(var(--ink))] sm:text-xs">
          {marks.map((m) => (
            <span key={m.label} className="whitespace-pre-line">
              {m.label}
            </span>
          ))}
        </div>
        <div className="mx-auto flex max-w-xl justify-between text-xs font-bold uppercase tracking-wide text-muted-foreground">
          <span>Lav cost · stiv</span>
          <span>Høj cost · fleksibel</span>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/85">
        <strong>Mundtligt:</strong> Spektret er SC-strategien. Drivers (inventory, transport,
        facilities, information …) er håndtagene der flytter dig langs aksen.
      </p>
    </DiagramShell>
  );
}

/** Fig 2-5: Zone of strategic fit */
export function ZoneOfStrategicFit() {
  return (
    <DiagramShell
      title="Fig. 2-5 · Zone of strategic fit"
      caption="X = implied uncertainty (forudsigelig → usikker). Y = responsiveness (effektiv → responsiv). Diagonal bånd = zone of strategic fit."
    >
      <svg viewBox="0 0 440 300" className="mx-auto h-auto w-full max-w-lg" role="img" aria-label="Zone of strategic fit">
        {/* axes */}
        <line x1="56" y1="250" x2="410" y2="250" stroke="hsl(210 40% 10%)" strokeWidth="1.5" />
        <line x1="56" y1="250" x2="56" y2="28" stroke="hsl(210 40% 10%)" strokeWidth="1.5" />
        <text x="233" y="282" textAnchor="middle" fontSize="12" fontWeight="600" className="fill-[hsl(var(--ink))]">
          Implied uncertainty →
        </text>
        <text
          x="18"
          y="140"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          className="fill-[hsl(var(--ink))]"
          transform="rotate(-90 18 140)"
        >
          Responsiveness →
        </text>
        {/* zone band (diagonal) */}
        <path
          d="M 70 210 L 160 210 L 380 55 L 380 95 L 160 250 L 70 250 Z"
          fill="hsl(199 60% 70% / 0.35)"
          stroke="hsl(199 78% 28%)"
          strokeWidth="1.5"
        />
        <text x="210" y="168" textAnchor="middle" fontSize="12" fontWeight="700" fill="hsl(199 78% 28%)">
          Zone of strategic fit
        </text>
        {/* above zone */}
        <text x="120" y="70" fontSize="11" fontWeight="600" fill="hsl(16 72% 42%)">
          Over zonen
        </text>
        <text x="120" y="86" fontSize="10" className="fill-muted-foreground">
          for dyr/responsiv
        </text>
        {/* below zone */}
        <text x="290" y="230" fontSize="11" fontWeight="600" fill="hsl(16 72% 42%)">
          Under zonen
        </text>
        <text x="290" y="246" fontSize="10" className="fill-muted-foreground">
          for træg → stockouts
        </text>
        {/* example points */}
        <circle cx="110" cy="200" r="7" fill="hsl(199 78% 28%)" />
        <text x="110" y="188" textAnchor="middle" fontSize="10" fontWeight="700">
          Salt
        </text>
        <circle cx="340" cy="80" r="7" fill="hsl(16 72% 48%)" />
        <text x="340" y="68" textAnchor="middle" fontSize="10" fontWeight="700">
          Fashion
        </text>
        <text x="70" y="266" fontSize="10" className="fill-muted-foreground">
          Forudsigelig
        </text>
        <text x="360" y="266" fontSize="10" className="fill-muted-foreground">
          Usikker
        </text>
      </svg>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
        <strong>Mundtligt:</strong> Højere IDU kræver højere R. Under zonen: tabt salg. Over zonen:
        unødvendig cost. Fit er dynamisk (Dell skiftede da markedet skiftede).
      </p>
    </DiagramShell>
  );
}

/** Table 2-1 style: attributes → implied uncertainty */
export function ImpliedUncertaintyTable() {
  const rows: { need: string; effect: string; direction: "↑" | "↓" }[] = [
    { need: "Høj produktvariety", effect: "Sværere forecast pr. SKU", direction: "↑" },
    { need: "Kort lead time / next-day", effect: "Mindre buffer-tid", direction: "↑" },
    { need: "Høj service level (CSL)", effect: "Flere outliers skal dækkes", direction: "↑" },
    { need: "Høj innovation / nyhed", effect: "Ingen historik, mode-risiko", direction: "↑" },
    { need: "Lav pris / bulk / staples", effect: "Stabil efterspørgsel", direction: "↓" },
    { need: "Lav variety / få SKU", effect: "Aggregeret forecast bedre", direction: "↓" },
  ];
  return (
    <DiagramShell
      title="Tabel 2-1 · Kundekrav → implied demand uncertainty"
      caption="Samme marked kan give forskellig IDU afhængigt af de løfter competitive strategy giver. IDU ≠ ren demand variance."
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[320px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="px-2 py-2 font-bold text-[hsl(var(--ink))]">Kundebehov / attribut</th>
              <th className="px-2 py-2 font-bold text-[hsl(var(--ink))]">Effekt på SC</th>
              <th className="px-2 py-2 text-center font-bold text-[hsl(var(--ink))]">IDU</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.need} className="border-b border-border/70">
                <td className="px-2 py-2.5 font-medium text-[hsl(var(--ink))]">{r.need}</td>
                <td className="px-2 py-2.5 text-foreground/80">{r.effect}</td>
                <td
                  className={cn(
                    "px-2 py-2.5 text-center text-lg font-bold",
                    r.direction === "↑" ? "text-[hsl(var(--coral))]" : "text-[hsl(var(--sea))]",
                  )}
                >
                  {r.direction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/85">
        <strong>Mundtligt:</strong> Demand uncertainty er statistik. Implied demand uncertainty er
        den usikkerhed SC faktisk skal håndtere givet variety, lead time, CSL og innovation.
      </p>
    </DiagramShell>
  );
}

/** EOQ cost trade-off (theme 6) */
export function EoqTradeoff() {
  return (
    <DiagramShell
      title="EOQ · Ordering vs. holding cost"
      caption="Total cost er U-formet. EOQ er minimum hvor annual ordering cost = annual holding cost."
    >
      <svg viewBox="0 0 420 250" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="EOQ trade-off">
        <line x1="48" y1="210" x2="390" y2="210" stroke="hsl(210 40% 10%)" strokeWidth="1.5" />
        <line x1="48" y1="210" x2="48" y2="24" stroke="hsl(210 40% 10%)" strokeWidth="1.5" />
        <text x="220" y="238" textAnchor="middle" fontSize="12" fontWeight="600">
          Order quantity Q →
        </text>
        <text
          x="16"
          y="118"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          transform="rotate(-90 16 118)"
        >
          Annual cost →
        </text>
        {/* holding rising */}
        <path d="M 60 190 L 360 50" fill="none" stroke="hsl(16 72% 48%)" strokeWidth="2.5" />
        <text x="300" y="48" fontSize="11" fontWeight="600" fill="hsl(16 72% 48%)">
          Holding (Q/2)·hC
        </text>
        {/* ordering falling */}
        <path
          d="M 60 40 C 100 50, 140 90, 200 140 C 260 180, 320 195, 360 200"
          fill="none"
          stroke="hsl(199 78% 28%)"
          strokeWidth="2.5"
        />
        <text x="70" y="36" fontSize="11" fontWeight="600" fill="hsl(199 78% 28%)">
          Ordering (D/Q)·S
        </text>
        {/* total U */}
        <path
          d="M 60 55 C 100 70, 140 100, 200 125 C 250 140, 300 130, 360 95"
          fill="none"
          stroke="hsl(210 40% 10%)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="250" y="155" fontSize="11" fontWeight="700">
          Total cost
        </text>
        <line x1="200" y1="125" x2="200" y2="210" stroke="hsl(210 40% 10%)" strokeDasharray="4 3" />
        <circle cx="200" cy="125" r="6" fill="hsl(210 40% 10%)" />
        <text x="200" y="112" textAnchor="middle" fontSize="12" fontWeight="700">
          Q*
        </text>
      </svg>
      <p className="mt-2 text-sm leading-relaxed text-foreground/85">
        <strong>Formel:</strong> Q* = √(2DS / hC). Høj S → større lot; høj hC → mindre lot.
      </p>
    </DiagramShell>
  );
}

/** Newsvendor Cu/Co (theme 8) */
export function NewsvendorBalance() {
  return (
    <DiagramShell
      title="Newsvendor · Cu vs. Co → CSL*"
      caption="One-shot sæson: afvej underage (Cu) og overage (Co). Optimal critical ratio = Cu/(Cu+Co)."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div
          className="rounded-lg border p-4"
          style={{
            borderColor: "hsl(16 72% 48% / 0.35)",
            background: "hsl(16 72% 48% / 0.08)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--coral))]">
            Cost of understocking Cu
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-[hsl(var(--ink))]">p − c</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Tabt margin pr. enhed du <em>ikke</em> havde da kunden ville købe.
          </p>
        </div>
        <div
          className="rounded-lg border p-4"
          style={{
            borderColor: "hsl(199 78% 28% / 0.35)",
            background: "hsl(199 78% 28% / 0.08)",
          }}
        >
          <p className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--sea))]">
            Cost of overstocking Co
          </p>
          <p className="mt-2 font-display text-2xl font-bold text-[hsl(var(--ink))]">c − s</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/80">
            Netto-tab pr. enhed du købte for meget (salvage s).
          </p>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-border bg-secondary/40 px-4 py-3 text-center">
        <p className="font-display text-xl font-bold text-[hsl(var(--ink))]">
          CSL* = Cu / (Cu + Co)
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Q* = F⁻¹(CSL*). Højere salvage → lavere Co → højere CSL*.
        </p>
      </div>
    </DiagramShell>
  );
}

/** Center of Gravity sketch (theme 5) */
export function CenterOfGravitySketch() {
  const pts = [
    { x: 80, y: 70, v: "V₁", label: "A" },
    { x: 280, y: 60, v: "V₂", label: "B" },
    { x: 120, y: 180, v: "V₃", label: "C" },
    { x: 300, y: 170, v: "V₄", label: "D" },
  ];
  return (
    <DiagramShell
      title="Center of Gravity · transport-midtpunkt"
      caption="Vægtet midtpunkt minimerer Σ(afstand × volumen). Justér bagefter for infrastruktur, grænser og kapacitet."
    >
      <svg viewBox="0 0 400 240" className="mx-auto h-auto w-full max-w-md" role="img" aria-label="Center of gravity">
        {pts.map((p) => (
          <g key={p.label}>
            <circle cx={p.x} cy={p.y} r="14" fill="hsl(199 78% 28% / 0.15)" stroke="hsl(199 78% 28%)" strokeWidth="2" />
            <text x={p.x} y={p.y + 4} textAnchor="middle" fontSize="12" fontWeight="700">
              {p.label}
            </text>
            <text x={p.x} y={p.y + 28} textAnchor="middle" fontSize="10" className="fill-muted-foreground">
              {p.v}
            </text>
          </g>
        ))}
        {/* CoG */}
        <circle cx="195" cy="120" r="10" fill="hsl(16 72% 48%)" />
        <text x="195" y="124" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">
          *
        </text>
        <text x="215" y="116" fontSize="12" fontWeight="700" fill="hsl(16 72% 42%)">
          (x*, y*)
        </text>
        <text x="200" y="220" textAnchor="middle" fontSize="12" fontWeight="600">
          x* = Σ(xᵢ·Vᵢ)/ΣVᵢ · y* = Σ(yᵢ·Vᵢ)/ΣVᵢ
        </text>
      </svg>
    </DiagramShell>
  );
}

/** Distribution archetypes mini-sketch (theme 3) */
export function DistributionArchetypes() {
  return (
    <DiagramShell
      title="Distribution · central vs. lokal (arketyper)"
      caption="Flere lagre tæt på kunden → kortere responstid, højere inventory. Færre/centrale → lavere inventory, længere lead time. Vælg ud fra fit."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--sea))]">
            Centraliseret
          </p>
          <svg viewBox="0 0 200 120" className="mt-2 h-auto w-full" aria-hidden>
            <rect x="85" y="20" width="30" height="24" rx="3" fill="hsl(199 78% 28%)" />
            <text x="100" y="36" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">
              DC
            </text>
            {[40, 100, 160].map((x) => (
              <g key={x}>
                <line x1="100" y1="44" x2={x} y2="85" stroke="hsl(210 20% 55%)" strokeWidth="1.5" />
                <circle cx={x} cy="95" r="10" fill="hsl(42 33% 88%)" stroke="hsl(210 40% 10%)" />
                <text x={x} y="98" textAnchor="middle" fontSize="8" fontWeight="600">
                  C
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-1 text-sm text-foreground/80">Lav inventory · længere lead time</p>
        </div>
        <div className="rounded-lg border border-border p-3">
          <p className="text-xs font-bold uppercase tracking-wide text-[hsl(var(--coral))]">
            Decentraliseret
          </p>
          <svg viewBox="0 0 200 120" className="mt-2 h-auto w-full" aria-hidden>
            {[45, 100, 155].map((x) => (
              <g key={x}>
                <rect x={x - 14} y="28" width="28" height="20" rx="3" fill="hsl(16 72% 48%)" />
                <text x={x} y="42" textAnchor="middle" fontSize="8" fill="white" fontWeight="700">
                  DC
                </text>
                <line x1={x} y1="48" x2={x} y2="78" stroke="hsl(210 20% 55%)" strokeWidth="1.5" />
                <circle cx={x} cy="92" r="10" fill="hsl(42 33% 88%)" stroke="hsl(210 40% 10%)" />
                <text x={x} y="95" textAnchor="middle" fontSize="8" fontWeight="600">
                  C
                </text>
              </g>
            ))}
          </svg>
          <p className="mt-1 text-sm text-foreground/80">Høj inventory · hurtig response</p>
        </div>
      </div>
    </DiagramShell>
  );
}

const THEME_DIAGRAMS: Record<number, ReactNode[]> = {
  1: [
    <CostResponsivenessFrontier key="f23" />,
    <ResponsivenessSpectrum key="f24" />,
    <ZoneOfStrategicFit key="f25" />,
    <ImpliedUncertaintyTable key="t21" />,
  ],
  3: [<DistributionArchetypes key="dist" />],
  5: [<CenterOfGravitySketch key="cog" />],
  6: [<EoqTradeoff key="eoq" />],
  8: [<NewsvendorBalance key="nv" />],
};

export function ThemeDiagramsPanel({ themeId }: { themeId: number }) {
  const diagrams = THEME_DIAGRAMS[themeId];
  if (!diagrams?.length) return null;

  return (
    <section className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--coral))]">
          Visuelle modeller
        </p>
        <h2 className="font-display mt-1 text-2xl font-bold text-[hsl(var(--ink))]">
          Nøglefigurer du skal kunne tegne
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Korte forklaringer til mundtlig eksamen — tegn dem selv på tavlen.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">{diagrams}</div>
    </section>
  );
}
