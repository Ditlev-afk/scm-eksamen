import type { ThemeMaterials } from "./types";

/** Official Fall 2026 prep map from the instructor's DTU Learn guidance. */
export const courseMeta = {
  code: "62133",
  title: "Supply Chain Management",
  term: "Fall 2026",
  instructor: "SBLA",
  textbook:
    "Chopra, Supply Chain Management — Strategy, Planning, and Operation (kursusplanen peger på 7. udgave; 6./8. udgave bruges også — tjek sidetal)",
  bringAlong: [
    "Ét A4-ark pr. tema (kun den ene side)",
    "Dit eget A3-kort fra Faulkswagen-casen (med dine markeringer)",
    "Ved remanufacturing: din egen workshop-oplevelse (produkt, spor, læring)",
  ],
  generalAdvice: [
    "Arbejd med 4xExplanation-øvelserne — de er eksamensrettede, og temaet er typisk tydeligt.",
    "Temaerne følger i store træk undervisningsplanen.",
    "Du trækker ét tema uden færdigspørgsmål — du vælger selv 5-minutters vinkel.",
    "Derefter spørgsmål til din præsentation, resten af temaet, og andre dele af curriculum.",
    "A4-skabelon: agenda → problem → figur/model → lille eksempel → afvejning → antagelser.",
    "Bemærk: Excel-arket har Faulkswagon som tema 12; underviserens liste/billede har Remanufacturing — forbered begge.",
  ],
};

export const materialsByTheme: Record<number, ThemeMaterials> = {
  1: {
    themeId: 1,
    summary:
      "Bredt tema: saml trådene mellem virksomhedens strategi og dens supply chain. Materiale fra de første tre uger.",
    textbook: [
      "Chopra kap. 1–2 (strategic fit, IDU, zone of fit)",
      "Fisher (1997): What Is the Right Supply Chain for Your Product? (Readings in addition to the textbook)",
    ],
    slidesAndFolders: [
      "PowerPoint: Strategy, Finance and Supply Chain",
      "Warm-up: The Nature of Supply Chains / Walmart (Friedman-uddrag)",
    ],
    exercises: [
      "Warm-up-øvelse om nature of supply chains (uge 1, uden fysisk undervisning)",
      "4xExplanation-øvelser der tydeligt hører til strategi/fit",
    ],
    casesAndReadings: [
      "Walmart supply chain: Samuel's Top 5 (logistics tech, inventory→information, standards, total cost, coordinating supply/demand)",
      "Case exercise on supply chain network design decisions (kan også bruges strategisk til tema 1)",
    ],
    teacherTips: [
      "Fortæl historien: kundebehov → IDU → E/R → zone of fit.",
      "Brug Fisher: funktionelle vs innovative produkter → efficient vs responsive SC.",
      "Dell/Walmart som levende fit-eksempler.",
    ],
  },
  2: {
    themeId: 2,
    summary:
      "Tag udgangspunkt i kap. 3. Kobl customer priorities og DuPont til SC-beslutninger.",
    textbook: ["Chopra kap. 3 — Supply Chain Drivers and Metrics"],
    slidesAndFolders: [
      "PowerPoint: Strategy, Finance and Supply Chain (customer priorities + DuPont)",
    ],
    exercises: ["4xExplanation til drivers/metrics hvis uploadet på Learn"],
    casesAndReadings: [
      "Case exercise on supply chain network design decisions (også relevant for tema 1–2)",
    ],
    teacherTips: [
      "Præsenter gerne DuPont-modellen — mange gør det til dette tema, og underviseren synes det er en god idé.",
      "Forklar hvad virksomheden konkurrerer på, og hvad det betyder for SC.",
      "Kør Kina-fabrik og/eller fordoblet safety stock gennem ROA = margin × asset turnover.",
    ],
  },
  3: {
    themeId: 3,
    summary:
      "De seks arketyper for distributionsnetværk. Vigtigt også hvis du har 8. udgave (kun ~1½ side dér).",
    textbook: [
      "Chopra: distribution network archetypes — i Golden Gate-udgaven typisk kap. 4",
      "Har du 8. udgave: download de ~16 sider fra 7. udgave på DTU Learn",
    ],
    slidesAndFolders: [
      "Supply Chain Network Design 1 → Exercise – Distribution Network Design (6 archetypes)",
      "Uploadede sider fra tidligere bogudgave",
    ],
    exercises: [
      "Exercise – Distribution Network Design: vælg 1 arketype blandt #1–3 og 1 blandt #4–6; vurder inventory, transport, response time, product variety",
      "4xExplanation – Supply Chain Network Design (arketyper + netværksfaktorer)",
    ],
    casesAndReadings: [
      "TL vs LTL forklaring i øvelsen (aggregation upstream = mere TL; last-mile = LTL)",
    ],
    teacherTips: [
      "Nævn alle seks arketyper, men gå i dybden med to (som i øvelsen).",
      "Dropshipping = Manufacturer storage with direct shipping.",
      "Kobling til strategic fit: hvilken arketype passer til response time vs variety?",
    ],
  },
  4: {
    themeId: 4,
    summary:
      "Kvantitative modeller fra Supply Chain Network Design 2 — CPLM og udvidet gravity.",
    textbook: [
      "Chopra kap. om network design decisions / framework (Fig. 5.2 / tilsvarende)",
      "Capacitated Plant Location Model",
      "Udvidet gravity location-model (adskil fra ren Center of Gravity)",
    ],
    slidesAndFolders: ["Supply Chain Network Design 2 (kvantitative modeller)"],
    exercises: [
      "4xExplanation – Network Design (faser, capacity allocation, market/supply allocation, faktorer)",
    ],
    casesAndReadings: [
      "Faulkswagen-casen: kobl modellerne til jeres arbejde",
      "Case exercise on supply chain network design decisions",
    ],
    teacherTips: [
      "CPLM er den centrale model — forklar beslutningsvariable, objective og constraints.",
      "Forklar forskellen: Center of Gravity (transport-midtpunkt) vs udvidet gravity (flere cost-led).",
      "Medbring gerne A3-kortet fra Faulkswagen.",
    ],
  },
  5: {
    themeId: 5,
    summary:
      "Svarer i store træk til undervisningen i Supply Chain Network Design 1 — lokalisering.",
    textbook: [
      "Readings: Location decisions (filsharing / readings in addition to the textbook)",
      "Center of Gravity, Locational Break-Even, Factor Rating",
    ],
    slidesAndFolders: [
      "PowerPoint til Supply Chain Network Design 1 (stor del handler om lokalisering)",
      "Location problems (Excel) + China map / Tyskland-øvelser",
    ],
    exercises: [
      "Location problems / Extra Location problems 8A–8C",
      "4xExplanation knyttet til lokaliseringsmodeller",
    ],
    casesAndReadings: [
      "Faulkswagen: hvordan brugte I Center of Gravity til fabrikker?",
      "Case exercise on supply chain network design decisions",
    ],
    teacherTips: [
      "Start med generelle overvejelser: hvad er vigtigt i et SC-netværk?",
      "Præsenter derefter lokaliseringsmodellerne.",
      "Slut gerne med CoG + Faulkswagen-kobling.",
    ],
  },
  6: {
    themeId: 6,
    summary: "Eget kapitel + egen 4xExplanation om cycle inventory.",
    textbook: ["Chopra kap. 11 (7. udg. i semesterplanen) — Cycle Inventory"],
    slidesAndFolders: ["Slides til Inventory management: Cycle Inventory"],
    exercises: ["4xExplanation – Cycle inventory"],
    casesAndReadings: [
      "Ex 11-4 joint ordering, 11-5 capacity constraint, quantity discount-eksempler",
    ],
    teacherTips: [
      "Kapittel + 4xExplanation + slides er det anbefalede udgangspunkt.",
      "Hold skarpt skel mellem cycle inventory (Q/2) og safety inventory.",
    ],
  },
  7: {
    themeId: 7,
    summary: "Eget kapitel + egen 4xExplanation om safety inventory.",
    textbook: ["Chopra kap. 12 — Safety Inventory"],
    slidesAndFolders: ["Slides til Safety inventory"],
    exercises: ["4xExplanation – Safety inventory"],
    casesAndReadings: [
      "Ex 12-3 safety inventory given CSL; continuous vs periodic review",
    ],
    teacherTips: [
      "Definér CSL, fill rate og order fill rate præcist.",
      "Vis ss = z·σ_L og hvordan LT/forecasting/pooling sænker ss.",
    ],
  },
  8: {
    themeId: 8,
    summary: "Eget kapitel + egen 4xExplanation om product availability / newsvendor.",
    textbook: ["Chopra kap. 13 — Product Availability"],
    slidesAndFolders: ["Slides til Product availability"],
    exercises: ["4xExplanation – Product availability"],
    casesAndReadings: [
      "Ex 13-1 optimal service level for seasonal items (Co/Cu)",
    ],
    teacherTips: [
      "Gør det tydeligt at dette er one-shot/sæson — ikke løbende safety stock.",
      "Co, Cu, CSL* = Cu/(Cu+Co) skal kunne stå på tavlen.",
    ],
  },
  9: {
    themeId: 9,
    summary:
      "Materiale under 12 Transportation på DTU Learn + transportmodellering (kan være sent i semesteret).",
    textbook: [
      "Chopra kap. 14 — Transportation",
      "Heizer & Render, Module C (filsharing) — transportmodellering / Stepping Stone",
    ],
    slidesAndFolders: ["DTU Learn: 12 Transportation (4xExplanation + video)"],
    exercises: ["4xExplanation – Transportation", "Transport modelling-øvelser"],
    casesAndReadings: [
      "Faulkswagen: TL Factory→DW vs LTL DW→CREP",
      "Ex 14-1 direct shipping vs milk runs",
    ],
    teacherTips: [
      "Hvis transportmodellering ikke er gennemgået endnu: lær Stepping Stone principielt alligevel.",
      "Brug Faulkswagen til at konkretisere TL/LTL.",
    ],
  },
  10: {
    themeId: 10,
    summary:
      "Kapitel om coordination + erfaringer fra The Beer Game (når I har spillet det).",
    textbook: ["Chopra kap. 10 — Supply Chain Coordination / Bullwhip"],
    slidesAndFolders: ["Slides/materiale til coordination"],
    exercises: ["4xExplanation til coordination hvis tilgængelig", "The Beer Game"],
    casesAndReadings: [
      "Beer Game: brug spillet til at konkretisere bullwhip og info sharing",
    ],
    teacherTips: [
      "Start med bullwhip → omkostninger → levers (POS, VMI, CRP, CPFR).",
      "Fortæl konkret hvad I oplevede i Beer Game.",
    ],
  },
  11: {
    themeId: 11,
    summary:
      "Forelæsning + materiale under 11 Sustainability og Circular Supply Chains.",
    textbook: [
      "Green supply chain management / Thierry et al. (2004)",
      "Larsen & Jacobsen (2016), Larsen et al. (2018)",
    ],
    slidesAndFolders: [
      "DTU Learn: 11 Sustainability og Circular Supply Chains",
    ],
    exercises: ["4xExplanation / øvelser i sustainability-folderen"],
    casesAndReadings: [
      "CopyMagic (Thierry)",
      "Revenue streams A/B/C (Larsen & Jacobsen)",
      "Cradle-to-cradle + seven deadly sins",
    ],
    teacherTips: [
      "Gå fra reverse processes → værdiskabelse → eksempel (CopyMagic).",
      "Bro til remanufacturing (tema 12).",
    ],
  },
  12: {
    themeId: 12,
    summary:
      "Forklar remanufacturing, kobl til circular SC, og fold jeres egen workshop ud.",
    textbook: [
      "Kobling til sustainability/circular materialet",
      "Remanufacturing_Introduction / Workshop_Introduction (DTU Learn)",
    ],
    slidesAndFolders: [
      "The Theory and Practice of Remanufacturing — training + company workshop",
    ],
    exercises: [
      "Workshop tracks: (1) Remanufacturing Potential / SC readiness, (2) Repairability & Design Barriers, (3) Circular Value Opportunities",
    ],
    casesAndReadings: [
      "Jeres eget produkt/case fra workshoppen med virksomheder",
    ],
    teacherTips: [
      "Forventning: forklar temaet OG inddrag den workshop I selv deltog i — ikke de andres.",
      "Struktur: Hvad er remanufacturing? → Hvilket produkt? → Hvad gjorde I? → Hvad lærte I?",
      "Nævn de tre tracks og hvilket I fulgte.",
    ],
  },
};

export function getMaterials(themeId: number) {
  return materialsByTheme[themeId];
}
