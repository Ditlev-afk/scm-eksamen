export type KeyPoint = {
  id: string;
  label: string;
  /** Any of these phrases/stems count as covering the point (Danish/English). */
  stems: string[];
};

export type OpenScore = {
  covered: KeyPoint[];
  missing: KeyPoint[];
  percent: number;
  grade: "stærkt" | "ok" | "tyndt" | "mangelfuldt";
  feedback: string;
};

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9æøå\s]/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function includesStem(haystack: string, stem: string) {
  const s = normalize(stem);
  if (!s) return false;
  // Allow multi-word stems
  return haystack.includes(s);
}

export function scoreOpenAnswer(
  answer: string,
  keyPoints: KeyPoint[]
): OpenScore {
  const norm = normalize(answer);
  const covered: KeyPoint[] = [];
  const missing: KeyPoint[] = [];

  for (const kp of keyPoints) {
    const hit = kp.stems.some((stem) => includesStem(norm, stem));
    if (hit) covered.push(kp);
    else missing.push(kp);
  }

  const percent =
    keyPoints.length === 0
      ? 0
      : Math.round((covered.length / keyPoints.length) * 100);

  let grade: OpenScore["grade"] = "mangelfuldt";
  if (percent >= 80) grade = "stærkt";
  else if (percent >= 55) grade = "ok";
  else if (percent >= 30) grade = "tyndt";

  const feedback =
    grade === "stærkt"
      ? "Du rammer de fleste kernepunkter. Fin eksamensstruktur — øv at sige det højt uden papir."
      : grade === "ok"
        ? "Grundstammen er der. Læg de manglende punkter ind, så censor hører den fulde model."
        : grade === "tyndt"
          ? "Du er i gang, men flere centrale begreber mangler. Brug modelbesvarelsen som checklist."
          : "Svaret dækker for få kernepunkter endnu. Læs nøglepunkterne, luk arket, og prøv igen med egne ord.";

  return { covered, missing, percent, grade, feedback };
}
