export type OralDrill = {
  theme: string;
  question: string;
};

export const examOverview = {
  title: "Eksamensoverblik – 62133 Fall 2026",
  sourceNote:
    "Baseret på kursets Exam-side, underviserens 12-temaer-ark og den samlede DTU Learn-pakke (18. nov. 2026).",
  format: [
    "Du trækker ét af 12 temaer — ikke et konkret spørgsmål.",
    "5 minutters præsentation ved tavlen; du vælger selv vinklen.",
    "Derefter dialog: først din præsentation → resten af temaet → andre dele af pensum.",
    "Ca. 20 minutter inkl. votering, karakter og kort feedback.",
  ],
  rules: [
    "Ét A4-ark pr. tema (kun den ene side).",
    "60 sekunder til at orientere dig / afskrive agenda til tavlen — derefter No-Go.",
    "Tag gerne dit eget Faulkswagen A3-kort med.",
    "Ved remanufacturing: inddrag din egen workshop (ikke de andres).",
  ],
  a4Template: [
    "Agenda (5–6 linjer)",
    "Problem / beslutning teorien hjælper med",
    "Figur eller model",
    "Lille eksempel / beregning / case",
    "Vigtig afvejning",
    "Antagelser og begrænsninger",
  ],
  studySteps: [
    "Lav en kort forklaring af hvert temas centrale problem: hvilken beslutning hjælper teorien med at tage?",
    "Vælg én 5-minutters vinkel pr. tema. Skriv 5–6 punkter og vælg én central figur, beregning eller case.",
    "Løs øvelser uden løsningsark. Forklar variabler, enheder, antagelser og resultatets betydning højt.",
    "Besvar 4xExplanation-spørgsmålene — de afslører huller uden for din præsentation.",
    "Træn 60 sek + 5 min tavle. Øv derefter spørgsmål fra samme og andre temaer.",
  ],
  prioritizeFirst: [
    "Eksamensarket + relevante slides + 4xExplanation",
    "Derefter opgaver/løsninger til anvendelse",
    "Lokalisering + stepping stone: brug de supplerende kapitler",
    "Cirkulære SC: brug artiklerne, ikke kun slides",
    "Faulkswagen som gennemgående eksempel (placering, kapacitet, transport, lager, service)",
    "Walmart: nyttigt eksempel i præsentationer, ikke direkte eksamenspensum ifølge intro",
  ],
  themes: [
    { id: 1, title: "Strategic fit (supply chain and strategy)" },
    { id: 2, title: "Supply chain drivers and metrics" },
    { id: 3, title: "Distribution network design" },
    { id: 4, title: "Network design" },
    { id: 5, title: "Location decisions" },
    { id: 6, title: "Inventory management I – cycle inventory" },
    { id: 7, title: "Inventory management I – safety inventory" },
    { id: 8, title: "Inventory management II – product availability" },
    { id: 9, title: "Transportation and transport modelling" },
    { id: 10, title: "Supply chain coordination" },
    { id: 11, title: "Sustainability and circular supply chains" },
    { id: 12, title: "Remanufacturing" },
  ],
  theme12Note:
    "Tema 12 er Remanufacturing. Faulkswagen er en tværgående case (medbring A3) — ikke et trækkeligt tema.",
  oralDrills: [
    {
      theme: "Strategic fit",
      question:
        "Kan du skelne efterspørgselsusikkerhed fra den usikkerhed kundeløftet pålægger kæden (IDU), og begrunde behovet for responsiveness?",
    },
    {
      theme: "DuPont",
      question:
        "Kan du følge en beslutning gennem både resultat og kapitalbinding — uden automatisk at kalde mere lager godt eller dårligt?",
    },
    {
      theme: "Last-mile",
      question:
        "Kan du skelne den konkrete netværksmodel (distributor storage + last-mile) fra det generelle udtryk “last mile”?",
    },
    {
      theme: "Netværk vs lokalisering",
      question:
        "Kan du skelne valg af faciliteter/kapacitet fra fordeling af leverancer mellem allerede givne faciliteter?",
    },
    {
      theme: "Gravity-modeller",
      question:
        "Kan du skelne simpelt vægtet koordinatgennemsnit (CoG) fra bogens iterative/udvidede gravity-model?",
    },
    {
      theme: "Cycle inventory",
      question:
        "Kan du forklare, hvorfor større partier sænker antal bestillinger men øger gennemsnitslager — og hvorfor lav stykpris ikke alene afgør rabatvalget?",
    },
    {
      theme: "Safety inventory",
      question:
        "Kan du skelne CSL, fill rate og order fill rate — uden at behandle dem som samme procent?",
    },
    {
      theme: "Product availability",
      question:
        "Kan du afveje omkostningen ved én enhed for lidt (Cu) mod én enhed for meget (Co)?",
    },
    {
      theme: "Transportation",
      question:
        "Kan du forklare ændringer i både transport- og lageromkostninger ved TL, LTL, milk runs og aggregering?",
    },
    {
      theme: "Coordination",
      question:
        "Kan du vise, hvordan lokale beslutninger og informationsforsinkelse skaber bullwhip uden tilsvarende variation i slutkundernes køb?",
    },
    {
      theme: "Circular SC",
      question:
        "Kan du skelne repair, refurbishing, remanufacturing, cannibalization og recycling — inkl. indtægter og omkostninger?",
    },
    {
      theme: "Faulkswagen",
      question:
        "Kan du udfordre startløsningen (flere/mindre fabrikker, flere DW’er, bedre allokering, direkte TL til store CREP’er) og følgevirkningerne?",
    },
  ] as OralDrill[],
};
