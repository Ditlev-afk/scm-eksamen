import type { KeyPoint } from "@/lib/score-open-answer";

export type Mcq = {
  id: string;
  themeId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type OpenQ = {
  id: string;
  themeId: number;
  question: string;
  modelAnswer: string;
  keyPoints: KeyPoint[];
};

export const mcqs: Mcq[] = [
  // 1 Strategic fit
  {
    id: "1-m1",
    themeId: 1,
    question: "Hvad betyder strategic fit ifølge Chopra?",
    options: [
      "At SC altid er så responsiv som muligt",
      "At kundens prioriteter matcher SC-capabilities",
      "At man minimerer lager uanset servicekrav",
      "At alle led i kæden har samme EBIT-mål",
    ],
    correctIndex: 1,
    explanation:
      "Fit = konsistens mellem competitive strategy (kundebehov) og SC strategy (capabilities på E↔R).",
  },
  {
    id: "1-m2",
    themeId: 1,
    question: "Hvad er implied demand uncertainty?",
    options: [
      "Kun statistisk variation i markedets totale efterspørgsel",
      "Usikkerheden SC skal håndtere givet de kundeløfter man har givet",
      "Usikkerhed i råvarepriser alene",
      "Fejl i forecast-modellen målt som MAPE",
    ],
    correctIndex: 1,
    explanation:
      "IDU afhænger af servicegrad, lead time, variety, innovation m.m. — ikke kun rå demand uncertainty.",
  },
  {
    id: "1-m3",
    themeId: 1,
    question: "Hvis IDU er høj, men SC er meget effektiv, hvor ligger man ift. zone of strategic fit?",
    options: [
      "I zonen",
      "Over zonen (for dyr)",
      "Under zonen (for træg) → stockouts/tabt salg",
      "Uden for figuren, fordi IDU ikke påvirker fit",
    ],
    correctIndex: 2,
    explanation:
      "Høj usikkerhed kræver højere responsiveness. For lav R → under zonen.",
  },
  {
    id: "1-m4",
    themeId: 1,
    question: "Fig. 2-6 viser primært at…",
    options: [
      "Alle led altid skal være lige responsive",
      "Samme totale IU kan fordeles forskelligt mellem retailer/manufacturer/supplier",
      "Kun leverandøren kan absorbere usikkerhed",
      "Implied uncertainty altid er nul i retail",
    ],
    correctIndex: 1,
    explanation:
      "Kæden kan allokere usikkerhed forskelligt og stadig ramme samme overordnede responsiveness.",
  },
  {
    id: "1-m5",
    themeId: 1,
    question: "Hvilket produkt har typisk lavest implied demand uncertainty?",
    options: [
      "Ny smartphone med next-day levering og høj CSL",
      "Salt i et supermarked",
      "Zara fast-fashion",
      "Custom-bygget PC med mange varianter",
    ],
    correctIndex: 1,
    explanation: "Stabil demand, få varianter, lavere servicekrav → lav IDU → effektiv SC.",
  },

  // 2 Drivers
  {
    id: "2-m1",
    themeId: 2,
    question: "Hvilke er de tre logistiske drivers?",
    options: [
      "Information, sourcing, pricing",
      "Facilities, inventory, transportation",
      "Marketing, finance, HR",
      "Forecast, S&OP, MRP",
    ],
    correctIndex: 1,
    explanation: "Logistiske: facilities, inventory, transportation. Cross-functional: information, sourcing, pricing.",
  },
  {
    id: "2-m2",
    themeId: 2,
    question: "DuPont-ROA er…",
    options: [
      "ROA = Profit Margin × Asset Turnover",
      "ROA = Gross Margin − Holding Cost",
      "ROA = Sales / Inventory only",
      "ROA = CSL × Fill Rate",
    ],
    correctIndex: 0,
    explanation: "Klassisk DuPont: margin × asset turnover = net profit / assets.",
  },
  {
    id: "2-m3",
    themeId: 2,
    question: "Fordobling af safety stock påvirker typisk ROA på kort sigt ved at…",
    options: [
      "Sænke assets og hæve turnover",
      "Hæve assets (lager) → lavere turnover, og holding cost kan presse margin",
      "Kun påvirke transportomkostninger",
      "Altid øge ROA med det samme",
    ],
    correctIndex: 1,
    explanation:
      "Mere lager binder kapital. Sales kan stige via færre stockouts, men kort sigt presses ROA ofte ned.",
  },
  {
    id: "2-m4",
    themeId: 2,
    question: "En fabrik i Kina i stedet for eksport fra Europa…",
    options: [
      "Sænker altid ROA",
      "Hæver fixed assets (turnover↓) men kan hæve margin via lavere COGS/lokal transport",
      "Påvirker kun information-driveren",
      "Eliminerer behovet for strategic fit",
    ],
    correctIndex: 1,
    explanation: "Trade-off mellem ekstra kapital og bedre margin/sales — ROA afhænger af nettot.",
  },
  {
    id: "2-m5",
    themeId: 2,
    question: "Fig. 3-1 kobler competitive strategy til…",
    options: [
      "Kun transportpriser",
      "SC strategy → structure → design af de 6 drivers + metrics",
      "Kun DuPont uden drivers",
      "Kun remanufacturing",
    ],
    correctIndex: 1,
    explanation: "Decision framework: CS → SC strategy → drivers designes til E eller R.",
  },

  // 3 Distribution
  {
    id: "3-m1",
    themeId: 3,
    question: "Manufacturer storage with direct shipping er bedst når…",
    options: [
      "Hurtig last-mile og høj returfrekvens er vigtigst",
      "Variety/lav inventory er vigtigere end kort response time",
      "Man altid vil minimere transportomkostninger",
      "Kundetætheden er ekstremt høj for dagligvarer",
    ],
    correctIndex: 1,
    explanation:
      "Direct shipping: lav inventory via aggregation, høj variety, men længere RT og dyrere små shipments.",
  },
  {
    id: "3-m2",
    themeId: 3,
    question: "Når antal faciliteter stiger, hvad sker der typisk med inventory costs?",
    options: [
      "De falder pga. risk pooling",
      "De stiger (mindre aggregation / mere safety stock)",
      "De er uændrede",
      "De bliver nul",
    ],
    correctIndex: 1,
    explanation: "Flere lagre → mindre risk pooling → højere inventory.",
  },
  {
    id: "3-m3",
    themeId: 3,
    question: "Distributor storage med last-mile (fx nemlig.dk) giver typisk…",
    options: [
      "Lavest mulige inventory og længst RT",
      "Kort RT og høj experience, men dyr last-mile og højere inventory",
      "Ingen facilities",
      "Kun TL-transport end-to-end",
    ],
    correctIndex: 1,
    explanation: "Lokale lagre + last-mile = responsivt og dyrt.",
  },
  {
    id: "3-m4",
    themeId: 3,
    question: "Outbound transportomkostninger til kunder falder typisk når antal DC'er stiger, mens inbound…",
    options: [
      "Også altid falder",
      "Ofte stiger (flere små leverancer til flere sites)",
      "Er irrelevant",
      "Bliver negativ",
    ],
    correctIndex: 1,
    explanation: "Samlet transport er ofte U-formet i antal faciliteter.",
  },
  {
    id: "3-m5",
    themeId: 3,
    question: "Målet med distribution network design er at…",
    options: [
      "Maksimere antal lagre",
      "Maksimere SC-surplus (værdi til lavest mulige samlede omkostning)",
      "Minimere kun facility cost",
      "Fjerne information flows",
    ],
    correctIndex: 1,
    explanation: "Samme surplus-logik som strategic fit.",
  },

  // 4 Network design
  {
    id: "4-m1",
    themeId: 4,
    question: "Hvad er output af fase 2 i network design-frameworket?",
    options: [
      "Endelige GPS-koordinater for hvert site",
      "Hvilke regioner får faciliteter, ca. antal og rolle",
      "Kun EOQ for alle SKU'er",
      "Kun TL vs LTL-valg",
    ],
    correctIndex: 1,
    explanation: "Fase 2 = regional configuration. Fase 4 = konkrete sites/kapaciteter.",
  },
  {
    id: "4-m2",
    themeId: 4,
    question: "Capacitated Plant Location Model minimerer…",
    options: [
      "Kun fixed cost",
      "Total årlig cost (produktion + transport + fixed facility) under kapacitet og demand",
      "Kun fill rate",
      "Kun toldsatser",
    ],
    correctIndex: 1,
    explanation: "0/1 åbn/luk + flow-allokering med kapacitetsconstraints.",
  },
  {
    id: "4-m3",
    themeId: 4,
    question: "Positive externalities i network design betyder fx…",
    options: [
      "At konkurrenter altid skader hinanden",
      "At samlokalisering kan øge samlet efterspørgsel (fx tankstationer ved samme afkørsel)",
      "At tariffer er nul",
      "At CoG altid er optimal",
    ],
    correctIndex: 1,
    explanation: "Competitive factors inkluderer positive externalities og Hotelling-lignende placering.",
  },
  {
    id: "4-m4",
    themeId: 4,
    question: "Gravity-modellen finder primært…",
    options: [
      "Optimal lot size",
      "Et vægtet geografisk midtpunkt der minimerer transport til markeder",
      "Optimal CSL*",
      "Bullwhip-amplituden",
    ],
    correctIndex: 1,
    explanation: "x*, y* vægtet med volumen (og evt. cost-faktorer).",
  },
  {
    id: "4-m5",
    themeId: 4,
    question: "Macroeconomic factors i network design inkluderer…",
    options: [
      "Kun produktfarve",
      "Løn, tariffer, skat, valuta, transportpriser",
      "Kun fill rate",
      "Kun remanufacturing yield",
    ],
    correctIndex: 1,
    explanation: "De påvirker after-tax profit og lokal vs eksport.",
  },

  // 5 Location
  {
    id: "5-m1",
    themeId: 5,
    question: "Locational break-even bruges bedst når…",
    options: [
      "Mange bløde faktorer skal vægtes",
      "Få lokationer sammenlignes, og cost ved et forventet volumen er afgørende",
      "Man skal designe reverse logistics",
      "Man kun har kvalitativ data",
    ],
    correctIndex: 1,
    explanation: "TC = F + vQ; find crossover; vælg lavest cost ved forventet Q.",
  },
  {
    id: "5-m2",
    themeId: 5,
    question: "Factor rating metodens største svaghed er…",
    options: [
      "At den ikke kan inkludere soft factors",
      "Subjektivitet i vægte og ratings",
      "At den kræver EOQ",
      "At den ignorerer alle hårde faktorer",
    ],
    correctIndex: 1,
    explanation: "Transparent, men følsom over for ledelsens vægtning.",
  },
  {
    id: "5-m3",
    themeId: 5,
    question: "Center of Gravity med A(60,120)=2000 og B(30,90)=1000 giver…",
    options: [
      "(45,105)",
      "(50,110)",
      "(60,90)",
      "(30,120)",
    ],
    correctIndex: 1,
    explanation: "x=(60·2000+30·1000)/3000=50; y=(120·2000+90·1000)/3000=110.",
  },
  {
    id: "5-m4",
    themeId: 5,
    question: "CoG tager automatisk højde for…",
    options: [
      "Veje, grænser, skat og kapacitet",
      "Primært vægtet afstand/volumen — resten justeres efter",
      "Kun told",
      "Kun CSL",
    ],
    correctIndex: 1,
    explanation: "CoG er startpunkt; praksis justerer for infra, politik, kapacitet.",
  },
  {
    id: "5-m5",
    themeId: 5,
    question: "Ved break-even: hvis Q > Q_BE, vælger man typisk lokationen med…",
    options: [
      "Lavest fixed cost",
      "Lavest variable cost",
      "Højest fixed cost uanset v",
      "Tilfældig lokation",
    ],
    correctIndex: 1,
    explanation: "Ved højt volumen vinder lav variabel enhedsomkostning.",
  },

  // 6 Cycle inventory
  {
    id: "6-m1",
    themeId: 6,
    question: "Cycle inventory er…",
    options: [
      "z · σ_L",
      "Q/2",
      "Cu/(Cu+Co)",
      "POS − forecast",
    ],
    correctIndex: 1,
    explanation: "Gennemsnitligt lager fordi man bestiller i lots Q.",
  },
  {
    id: "6-m2",
    themeId: 6,
    question: "EOQ i Chopra (11.5) er…",
    options: [
      "Q* = √(2DS / hC)",
      "Q* = D · S · hC",
      "Q* = z · σ_L",
      "Q* = Cu / (Cu+Co)",
    ],
    correctIndex: 0,
    explanation: "Balancerer order cost og holding cost (hC pr. enhed).",
  },
  {
    id: "6-m3",
    themeId: 6,
    question: "Ved all-unit quantity discount…",
    options: [
      "Kun enheder over cutoff får lavere pris",
      "Hele ordren får den lavere enhedspris over cutoff",
      "Prisen stiger med Q",
      "Holding cost er irrelevant",
    ],
    correctIndex: 1,
    explanation: "All-unit ≠ marginal unit. Vælg Q med lavest total annual cost.",
  },
  {
    id: "6-m4",
    themeId: 6,
    question: "Hvorfor er lavest enhedspris ikke altid bedst?",
    options: [
      "Fordi større Q øger holding cost — total cost kan stige",
      "Fordi EOQ ignorerer S",
      "Fordi fill rate falder automatisk",
      "Fordi transport altid er gratis",
    ],
    correctIndex: 0,
    explanation: "Material + order + holding skal minimeres samlet.",
  },
  {
    id: "6-m5",
    themeId: 6,
    question: "Joint ordering/aggregation sænker typisk…",
    options: [
      "Fixed order cost pr. produkt → lavere samlet cycle inventory",
      "Cu til nul",
      "Implied uncertainty til uendelig",
      "Behovet for strategic fit",
    ],
    correctIndex: 0,
    explanation: "Ex 11-4/11-5: fælles ordre/levering vs kapacitetsbegrænsning.",
  },

  // 7 Safety
  {
    id: "7-m1",
    themeId: 7,
    question: "Safety inventory givet ønsket CSL er…",
    options: [
      "ss = z · σ_L",
      "ss = Q/2",
      "ss = Cu − Co",
      "ss = EOQ",
    ],
    correctIndex: 0,
    explanation: "z fra CSL; σ_L = demand uncertainty over lead time.",
  },
  {
    id: "7-m2",
    themeId: 7,
    question: "Cycle Service Level måler…",
    options: [
      "% af enheder leveret fra lager",
      "Sandsynlighed for ikke at løbe tør i en replenishment-cyklus",
      "% af ordrer komplet leveret",
      "ROA",
    ],
    correctIndex: 1,
    explanation: "Fill rate = enheder; order fill rate = komplette ordrer; CSL = cyklus-sandsynlighed.",
  },
  {
    id: "7-m3",
    themeId: 7,
    question: "Periodic review kræver typisk mere safety inventory fordi…",
    options: [
      "Man dækker både lead time og review-interval",
      "EOQ er større",
      "Co altid er nul",
      "Transport er TL",
    ],
    correctIndex: 0,
    explanation: "Continuous kan reagere løbende; periodic kan ikke mellem reviews.",
  },
  {
    id: "7-m4",
    themeId: 7,
    question: "Reorder point under continuous review er…",
    options: [
      "Kun Q",
      "Demand during LT + safety inventory",
      "Cu/(Cu+Co)",
      "Fixed cost S",
    ],
    correctIndex: 1,
    explanation: "ROP = DL + ss.",
  },
  {
    id: "7-m5",
    themeId: 7,
    question: "Hvordan sænkes safety inventory uden at skade service?",
    options: [
      "Længere lead times",
      "Kortere LT, bedre forecast, aggregation, information sharing",
      "Flere isolerede lagre uden pooling",
      "Ignorere σ",
    ],
    correctIndex: 1,
    explanation: "Reducer usikkerhed eller lead time — ikke bare sænk z blindt.",
  },

  // 8 Product availability
  {
    id: "8-m1",
    themeId: 8,
    question: "Cost of overstocking Co er…",
    options: [
      "p − c",
      "c − s",
      "Q/2",
      "z · σ_L",
    ],
    correctIndex: 1,
    explanation: "Indkøbspris minus salvage/restværdi.",
  },
  {
    id: "8-m2",
    themeId: 8,
    question: "Optimal CSL* i newsvendor er…",
    options: [
      "Cu / (Cu + Co)",
      "Co / Cu",
      "Q/2",
      "σ / μ",
    ],
    correctIndex: 0,
    explanation: "Bestil op til den fraktil. Q* = F⁻¹(CSL*).",
  },
  {
    id: "8-m3",
    themeId: 8,
    question: "Med p=1000, c=600, s=300 er CSL*…",
    options: [
      "0,30",
      "0,57",
      "0,90",
      "1,00",
    ],
    correctIndex: 1,
    explanation: "Cu=400, Co=300 → 400/700 ≈ 0,57.",
  },
  {
    id: "8-m4",
    themeId: 8,
    question: "Højere salvage value medfører…",
    options: [
      "Højere Co og lavere CSL*",
      "Lavere Co og højere CSL* (tør bestille mere)",
      "Ingen effekt",
      "At EOQ forsvinder",
    ],
    correctIndex: 1,
    explanation: "Billigere at risikere overstock → højere optimal service/ordre.",
  },
  {
    id: "8-m5",
    themeId: 8,
    question: "Product availability / newsvendor er særligt relevant for…",
    options: [
      "Kontinuerlig replenishment af mælk uden sæson",
      "Sæson-/one-shot produkter (fashion, elektronik)",
      "Kun TL-ruter",
      "Kun DuPont",
    ],
    correctIndex: 1,
    explanation: "Én ordre til sæsonen vs løbende safety stock-politik.",
  },

  // 9 Transportation
  {
    id: "9-m1",
    themeId: 9,
    question: "Ifølge Ex 14-1 er milk runs typisk billigst når…",
    options: [
      "Demand pr. destination er meget høj",
      "Demand pr. destination er lav (inventory-besparelse dominerer)",
      "Der kun findes én butik",
      "LTL er forbudt",
    ],
    correctIndex: 1,
    explanation: "Høj demand → direct; lav demand → milk runs.",
  },
  {
    id: "9-m2",
    themeId: 9,
    question: "TL vs LTL: TL er…",
    options: [
      "Delt lastbil med mange stops, høj cost/enhed",
      "Næsten fuld lastbil, direkte, lav cost/enhed ved store volumener",
      "Altid langsommere end LTL",
      "Kun til reverse logistics",
    ],
    correctIndex: 1,
    explanation: "Faulkswagon: Factory→DW = TL; DW→CREP = LTL.",
  },
  {
    id: "9-m3",
    themeId: 9,
    question: "Stepping Stone bruges til at…",
    options: [
      "Beregne EOQ",
      "Forbedre en initial transportallokering indtil ingen negativ opportunity cost",
      "Vælge CSL*",
      "Designe remanufacturing hierarchy",
    ],
    correctIndex: 1,
    explanation: "Transport modelling: evaluér tomme celler/cyklusser.",
  },
  {
    id: "9-m4",
    themeId: 9,
    question: "I Faulkswagon er DW-placering kritisk fordi…",
    options: [
      "LTL DW→CREP er dyrere pr. del/km end TL Factory→DW",
      "Produktion er 90% af cost",
      "Der ikke findes servicekrav",
      "CoG er forbudt",
    ],
    correctIndex: 0,
    explanation: "Kortere LTL-distance slår ofte fabriksflytning.",
  },
  {
    id: "9-m5",
    themeId: 9,
    question: "Langsommere transport øger typisk…",
    options: [
      "Kun facility cost",
      "Pipeline inventory og ofte behov for safety inventory",
      "CSL* direkte via Cu",
      "Ingenting",
    ],
    correctIndex: 1,
    explanation: "Transport ↔ inventory trade-off.",
  },

  // 10 Coordination
  {
    id: "10-m1",
    themeId: 10,
    question: "Bullwhip-effekten er…",
    options: [
      "At variation i ordrer dæmpes upstream",
      "At små udsving i kundesalg forstærkes op gennem kæden",
      "At EOQ falder",
      "At IDU bliver nul",
    ],
    correctIndex: 1,
    explanation: "Hvert led ser ordrer — ikke faktisk demand — og overreagerer.",
  },
  {
    id: "10-m2",
    themeId: 10,
    question: "Information sharing reducerer bullwhip ved at…",
    options: [
      "Skjule POS-data",
      "Give fælles syn på faktisk demand (POS), lager og kampagner",
      "Øge priskampagner ukoordineret",
      "Forlænge lead times",
    ],
    correctIndex: 1,
    explanation: "Samme demand-signal → jævnere ordrer.",
  },
  {
    id: "10-m3",
    themeId: 10,
    question: "VMI betyder at…",
    options: [
      "Retailer skjuler salgsdata",
      "Leverandøren styrer replenishment ud fra retailer's lager/salg",
      "Kun kunden forecast'er",
      "Safety inventory fordobles automatisk",
    ],
    correctIndex: 1,
    explanation: "Fjerner et forecast-lag i kæden.",
  },
  {
    id: "10-m4",
    themeId: 10,
    question: "CRP reducerer bullwhip primært via…",
    options: [
      "Sjældne, store ordrebølger",
      "Hyppig genopfyldning baseret på faktisk salg/mållager",
      "Fjernelse af alle trucks",
      "Højere Co",
    ],
    correctIndex: 1,
    explanation: "Små stabile leverancer i stedet for batch-ordrer.",
  },
  {
    id: "10-m5",
    themeId: 10,
    question: "Manglende koordination øger typisk IKKE…",
    options: [
      "Manufacturing costs",
      "Inventory holding",
      "Transport rush costs",
      "SC-surplus",
    ],
    correctIndex: 3,
    explanation: "Ukoordination sænker total surplus; costs stiger.",
  },

  // 11 Sustainability
  {
    id: "11-m1",
    themeId: 11,
    question: "Hvilken RSC-proces har ofte de mest uforudsigelige omkostninger?",
    options: [
      "Remarketing",
      "Reverse logistics",
      "Pricing",
      "EOQ",
    ],
    correctIndex: 1,
    explanation: "Usikker timing/kvalitet/volumen af returns.",
  },
  {
    id: "11-m2",
    themeId: 11,
    question: "En af Stock's seven deadly sins er…",
    options: [
      "At se returflow som value driver",
      "At overse business potential og behandle RL som ren cost",
      "At koble cost og recovered value",
      "At have procesejerskab og KPI'er",
    ],
    correctIndex: 1,
    explanation: "Flere synder handler om manglende ejerskab, integration og værdi-syn.",
  },
  {
    id: "11-m3",
    themeId: 11,
    question: "Larsen & Jacobsen's revenue streams gruppe C er…",
    options: [
      "Kun salg af cores uden forbedring",
      "Added sales af virgin products via service-/brand-augmentation",
      "Kun recycling-metal",
      "Kun TL-fragt",
    ],
    correctIndex: 1,
    explanation: "A cores, B recovered items, C ekstra ny-salg via grøn service/brand.",
  },
  {
    id: "11-m4",
    themeId: 11,
    question: "Cradle-to-cradle handler om…",
    options: [
      "Kun at minimere skade en smule",
      "Design så materialer kan genindgå i kredsløb uden værditab",
      "Kun EOL-skrald",
      "Kun bullwhip",
    ],
    correctIndex: 1,
    explanation: "Cirkulært design — ikke bare 'mindre lineært spild'.",
  },
  {
    id: "11-m5",
    themeId: 11,
    question: "CopyMagic recovery hierarchy prioriterer…",
    options: [
      "Recycle før remanufacture",
      "Remanufacture → cannibalize → recycle (+ repair-loop)",
      "Kun landfill",
      "Kun newsvendor",
    ],
    correctIndex: 1,
    explanation: "Højest indlejret værdi først.",
  },

  // 12 Remanufacturing
  {
    id: "12-m1",
    themeId: 12,
    question: "Remanufacturing adskiller sig fra recycling ved at…",
    options: [
      "Kun udvinde råmateriale",
      "Bevare produktform og indlejret værdi og bringe produktet nær as-new",
      "Kun fikse én fejl uden demontering",
      "Være det samme som TL",
    ],
    correctIndex: 1,
    explanation: "Recycle = materialeværdi; reman = produktværdi.",
  },
  {
    id: "12-m2",
    themeId: 12,
    question: "Repair betyder typisk…",
    options: [
      "Fuld as-new genfremstilling",
      "At fikse en specifik fejl",
      "Kun materialegenbrug",
      "Center of Gravity",
    ],
    correctIndex: 1,
    explanation: "Repair-loop ≠ fuld remanufacture.",
  },
  {
    id: "12-m3",
    themeId: 12,
    question: "En forudsætning for profitabel remanufacturing er…",
    options: [
      "At recovered value + revenue < cost to recover",
      "Stabil core acquisition, inspektion, design for genbrug, remarketing",
      "At ignorere brand risk",
      "At undgå alle reverse flows",
    ],
    correctIndex: 1,
    explanation: "Ellers falder man ned i hierarchy'et til cannibalize/recycle.",
  },
  {
    id: "12-m4",
    themeId: 12,
    question: "Brand risk ved remanufacturing kan opstå når…",
    options: [
      "3. part sælger dårlig kvalitet under dit navn",
      "Cu er høj",
      "EOQ stiger",
      "TL bruges",
    ],
    correctIndex: 0,
    explanation: "Kvalitets- og omdømmerisiko i secondary markets.",
  },
  {
    id: "12-m5",
    themeId: 12,
    question: "Cannibalization i recovery hierarchy betyder…",
    options: [
      "At smide hele produktet ud",
      "At bruge brugbare komponenter som 'organdonation' til andre enheder",
      "At øge bullwhip",
      "At beregne CSL*",
    ],
    correctIndex: 1,
    explanation: "Mellem remanufacture og recycle i værditrappen.",
  },
];

export const openQuestions: OpenQ[] = [
  {
    id: "1-o1",
    themeId: 1,
    question:
      "Forklar forskellen på demand uncertainty og implied demand uncertainty. Giv et eksempel.",
    modelAnswer:
      "Demand uncertainty er den statistiske variation i efterspørgslen. Implied demand uncertainty er den usikkerhed SC faktisk skal håndtere givet kundeløfter (CSL, lead time, variety, innovation). Samme marked kan have forskellig IDU — fx få t-shirt-varianter med 2 ugers levering vs mange varianter med next-day og høj service.",
    keyPoints: [
      { id: "a", label: "Demand uncertainty = statistisk sving", stems: ["demand uncertainty", "statistisk", "svinger", "variation"] },
      { id: "b", label: "IDU afhænger af kundeløfter", stems: ["implied", "service", "lead time", "variety", "innovation", "kundelofte", "kundekrav"] },
      { id: "c", label: "Samme marked → forskellig IDU / eksempel", stems: ["samme marked", "eksempel", "variant", "next-day", "salt", "zara", "t-shirt"] },
    ],
  },
  {
    id: "1-o2",
    themeId: 1,
    question: "Forklar Fig. 2-5 Zone of strategic fit og mismatch-konsekvenserne.",
    modelAnswer:
      "X-aksen er implied uncertainty, Y-aksen SC responsiveness. Højere IU kræver højere R. Under zonen: for træg → stockouts/tabt salg. Over zonen: for dyr → unødvendige omkostninger.",
    keyPoints: [
      { id: "a", label: "Akser IU vs responsiveness", stems: ["implied", "responsiv", "responsive", "x-akse", "y-akse", "usikker"] },
      { id: "b", label: "Under zonen", stems: ["under", "stockout", "tabt salg", "træg"] },
      { id: "c", label: "Over zonen", stems: ["over", "dyr", "omkost", "profit"] },
    ],
  },
  {
    id: "1-o3",
    themeId: 1,
    question: "Hvad viser Fig. 2-6 om fordeling af usikkerhed i kæden?",
    modelAnswer:
      "Samme totale implied uncertainty kan fordeles forskelligt: fx retailer absorberer mest (SC1) eller manufacturer absorberer mest (SC2). Det ændrer hvem der skal være responsiv vs effektiv.",
    keyPoints: [
      { id: "a", label: "Samme totale IU", stems: ["samme", "total", "implied", "usikker"] },
      { id: "b", label: "Forskellig allokering retailer/manufacturer", stems: ["retailer", "manufacturer", "fordel", "absorber", "alloker"] },
      { id: "c", label: "Nogle led effektive, andre responsive", stems: ["effektiv", "responsiv", "responsive"] },
    ],
  },

  {
    id: "2-o1",
    themeId: 2,
    question: "Nævn de 6 drivers i to grupper og giv ét E vs R-eksempel.",
    modelAnswer:
      "Logistiske: facilities, inventory, transportation. Cross-functional: information, sourcing, pricing. Eks: mange lagre tæt på kunde = responsiv; få centrale = effektiv.",
    keyPoints: [
      { id: "a", label: "3 logistiske", stems: ["facilit", "inventory", "lager", "transport"] },
      { id: "b", label: "3 cross-functional", stems: ["information", "sourcing", "pricing", "pris"] },
      { id: "c", label: "E vs R eksempel", stems: ["effektiv", "responsiv", "responsive", "central", "tæt pa kunde"] },
    ],
  },
  {
    id: "2-o2",
    themeId: 2,
    question: "Forklar hvordan fordobling af safety stock påvirker DuPont/ROA.",
    modelAnswer:
      "Lager ↑ → assets ↑ → asset turnover ↓. Holding cost kan presse margin. Færre stockouts kan øge sales/margin. Kort sigt typisk pres ned på ROA; lang sigt kan ekstra salg opveje.",
    keyPoints: [
      { id: "a", label: "Assets/turnover", stems: ["asset", "turnover", "lager", "kapital"] },
      { id: "b", label: "Margin / holding / sales", stems: ["margin", "holding", "stockout", "salg", "sales"] },
      { id: "c", label: "ROA nettot / tidshorisont", stems: ["roa", "kort sigt", "lang sigt", "opvej"] },
    ],
  },
  {
    id: "2-o3",
    themeId: 2,
    question: "Forklar Fig. 3-1 Supply Chain Decision Making Framework kort.",
    modelAnswer:
      "Competitive strategy sætter kundebehov → SC strategy vælger placering på E↔R → structure/drivers (6 stk.) designes derefter → metrics kobler tilbage til finansielle mål som ROA.",
    keyPoints: [
      { id: "a", label: "CS → SC strategy", stems: ["competitive", "sc strategy", "supply chain strategy", "kunde"] },
      { id: "b", label: "Drivers designes", stems: ["driver", "facilit", "inventory", "transport", "information"] },
      { id: "c", label: "Metrics/ROA", stems: ["metric", "roa", "finans"] },
    ],
  },

  {
    id: "3-o1",
    themeId: 3,
    question:
      "Sammenlign manufacturer storage with direct shipping og distributor storage with last-mile delivery.",
    modelAnswer:
      "Direct shipping: lav inventory, høj variety, lang RT, høj transport, svær retur. Last-mile: kort RT, høj experience, højere inventory, dyr last-mile, flere facilities. Vælg ud fra hvad kunden vægter vs cost.",
    keyPoints: [
      { id: "a", label: "Direct: lav inventory/høj variety/lang RT", stems: ["direct", "aggregation", "variety", "lang", "response", "inventory"] },
      { id: "b", label: "Last-mile: kort RT/dyr/højere lager", stems: ["last-mile", "last mile", "kort", "dyr", "experience", "nemlig"] },
      { id: "c", label: "Trade-off / hvornår", stems: ["trade", "nar", "bedst", "fit", "cost", "service"] },
    ],
  },
  {
    id: "3-o2",
    themeId: 3,
    question: "Hvordan påvirker flere faciliteter response time, inventory og transport?",
    modelAnswer:
      "RT falder. Inventory stiger (mindre pooling). Outbound falder, inbound stiger; total transport ofte U-formet.",
    keyPoints: [
      { id: "a", label: "RT ↓", stems: ["response", "responstid", "kortere", "falder"] },
      { id: "b", label: "Inventory ↑", stems: ["inventory", "lager", "pooling", "stiger"] },
      { id: "c", label: "Transport U-form / inbound-outbound", stems: ["transport", "inbound", "outbound", "u-form", "u form"] },
    ],
  },
  {
    id: "3-o3",
    themeId: 3,
    question: "Hvad er målet når man vælger distributionsnetværk?",
    modelAnswer:
      "Maksimér SC-surplus: opfyld kundebehov (servicefaktorer) til lavest mulige samlede omkostning (inventory, transport, facilities, information).",
    keyPoints: [
      { id: "a", label: "SC-surplus", stems: ["surplus", "vaerdi", "maksim"] },
      { id: "b", label: "Servicefaktorer", stems: ["response", "variety", "availability", "service", "retur"] },
      { id: "c", label: "Cost-drivere", stems: ["inventory", "transport", "facilit", "omkost", "cost"] },
    ],
  },

  {
    id: "4-o1",
    themeId: 4,
    question: "Beskriv de 4 faser i network design (Fig. 5.2) kort.",
    modelAnswer:
      "1) SC strategi/arkitektur. 2) Regioner + ca. antal/rolle. 3) Shortlist af byer/sites. 4) Endeligt valg af sites, kapacitet og markedsallokering (modeller).",
    keyPoints: [
      { id: "a", label: "Fase 1 strategi", stems: ["strategi", "fase 1", "arkitektur", "competitive"] },
      { id: "b", label: "Fase 2 regioner", stems: ["region", "fase 2"] },
      { id: "c", label: "Fase 3–4 sites/kapacitet", stems: ["fase 3", "fase 4", "site", "kapacitet", "shortlist", "allok"] },
    ],
  },
  {
    id: "4-o2",
    themeId: 4,
    question: "Forklar Capacitated Plant Location Model.",
    modelAnswer:
      "Vælg hvilke faciliteter der åbnes (0/1) og hvor meget der sendes til hvert marked. Minimer produktion+transport+fixed cost under kapacitet og at demand dækkes.",
    keyPoints: [
      { id: "a", label: "Åbn/luk 0/1", stems: ["abn", "luk", "0/1", "binary", "facilitet"] },
      { id: "b", label: "Minimer total cost", stems: ["minimer", "cost", "omkost", "transport", "fixed"] },
      { id: "c", label: "Kapacitet + demand constraints", stems: ["kapacitet", "demand", "eftersporg", "constraint", "begrans"] },
    ],
  },
  {
    id: "4-o3",
    themeId: 4,
    question: "Nævn tre faktorkategorier der påvirker network design og giv én sætning pr. stk.",
    modelAnswer:
      "Strategic: netværk skal matche CS (pris vs service). Macroeconomic: løn/told/skat/valuta påvirker after-tax profit. Competitive: konkurrenters placering og positive externalities.",
    keyPoints: [
      { id: "a", label: "Strategic", stems: ["strategic", "strategisk", "competitive strategy", "fit"] },
      { id: "b", label: "Macroeconomic", stems: ["macro", "told", "tarif", "skat", "valuta", "lon"] },
      { id: "c", label: "Competitive / externalities", stems: ["competitiv", "konkurrent", "externalit", "hotelling"] },
    ],
  },

  {
    id: "5-o1",
    themeId: 5,
    question: "Forklar locational break-even metoden trin for trin.",
    modelAnswer:
      "Find F og v for hver lokation. TC=F+vQ. Sæt to funktioner lig hinanden → Q_BE. Under Q_BE vinder typisk lav F; over Q_BE lav v. Vælg lavest TC ved forventet volumen.",
    keyPoints: [
      { id: "a", label: "TC = F + vQ", stems: ["fixed", "variable", "f +", "total cost", "omkost"] },
      { id: "b", label: "Find Q_BE", stems: ["break", "crossover", "q_be", "saet lig"] },
      { id: "c", label: "Vælg ved forventet Q", stems: ["forvent", "volumen", "vaelg", "lavest"] },
    ],
  },
  {
    id: "5-o2",
    themeId: 5,
    question: "Hvordan virker factor rating — og hvad er svagheden?",
    modelAnswer:
      "Vælg faktorer, sæt vægte, score lokationer, summer vægt×score. Styrke: soft+hard. Svaghed: subjektive vægte/ratings.",
    keyPoints: [
      { id: "a", label: "Vægte + scores", stems: ["vaegt", "score", "rating", "faktor"] },
      { id: "b", label: "Soft + hard", stems: ["soft", "hard", "kvalitativ", "talent", "skat"] },
      { id: "c", label: "Subjektivitet", stems: ["subjektiv", "svaghed", "folsom"] },
    ],
  },
  {
    id: "5-o3",
    themeId: 5,
    question: "Forklar Center of Gravity og begrænsningen.",
    modelAnswer:
      "x*=Σ(xV)/ΣV, y*=Σ(yV)/ΣV — vægtet midtpunkt der minimerer transport. Tager ikke automatisk højde for veje, grænser, kapacitet, skat — justeres efter.",
    keyPoints: [
      { id: "a", label: "Vægtet midtpunkt / formelidé", stems: ["vaegt", "midtpunkt", "volumen", "koordinat", "x*", "gravity"] },
      { id: "b", label: "Minimerer transport", stems: ["transport", "minimer", "afstand"] },
      { id: "c", label: "Begrænsning / justering", stems: ["vej", "graense", "kapacitet", "skat", "juster", "begrans"] },
    ],
  },

  {
    id: "6-o1",
    themeId: 6,
    question: "Hvad er cycle inventory, og hvordan balancerer EOQ S og hC?",
    modelAnswer:
      "Cycle inventory = Q/2 fordi man køber i lots. EOQ Q*=√(2DS/hC) finder den Q der balancerer fixed order cost S mod holding cost hC.",
    keyPoints: [
      { id: "a", label: "Q/2", stems: ["q/2", "cycle", "gennemsnit", "lot"] },
      { id: "b", label: "EOQ-formel / S vs holding", stems: ["eoq", "sqrt", "order cost", "holding", "s ", "hc"] },
      { id: "c", label: "Høj S→større Q / høj h→mindre Q", stems: ["stor", "lille", "hojere s", "hojere h", "balancer"] },
    ],
  },
  {
    id: "6-o2",
    themeId: 6,
    question: "Forklar forskellen på all-unit og marginal unit quantity discount.",
    modelAnswer:
      "All-unit: hele ordren får den lavere pris over cutoff. Marginal: kun enhederne over cutoff får lavere pris. I begge tilfælde vælges Q ud fra lavest total annual cost — ikke kun lavest enhedspris.",
    keyPoints: [
      { id: "a", label: "All-unit hele ordren", stems: ["all-unit", "all unit", "hele ordren", "hele ordren"] },
      { id: "b", label: "Marginal kun ovenpå", stems: ["marginal", "ovenpa", "cutoff", "kun enheder"] },
      { id: "c", label: "Total cost ikke kun unit price", stems: ["total", "holding", "ikke kun", "enhedspris"] },
    ],
  },
  {
    id: "6-o3",
    themeId: 6,
    question: "Hvorfor kan joint ordering sænke cycle inventory?",
    modelAnswer:
      "Fælles ordre/levering spreder/fixed cost S ud på flere produkter → lavere effektiv S pr. produkt → mindre optimal Q og dermed lavere cycle inventory (med forbehold for kapacitet, ex 11-5).",
    keyPoints: [
      { id: "a", label: "Fælles ordre / aggregation", stems: ["faelles", "joint", "aggreg"] },
      { id: "b", label: "Lavere fixed cost pr. produkt", stems: ["fixed", "order cost", "s ", "pr. produkt"] },
      { id: "c", label: "Lavere Q / cycle inventory", stems: ["cycle", "lavere q", "inventory", "kapacitet"] },
    ],
  },

  {
    id: "7-o1",
    themeId: 7,
    question: "Forklar CSL, fill rate og order fill rate.",
    modelAnswer:
      "CSL: sandsynlighed for ikke stockout i en cyklus. Fill rate: % enheder leveret fra lager. Order fill rate: % ordrer leveret komplet (typisk lavere).",
    keyPoints: [
      { id: "a", label: "CSL", stems: ["cycle service", "csl", "cyklus", "sandsyn"] },
      { id: "b", label: "Fill rate", stems: ["fill rate", "enheder", "units"] },
      { id: "c", label: "Order fill rate", stems: ["order fill", "komplet", "hele ordren"] },
    ],
  },
  {
    id: "7-o2",
    themeId: 7,
    question: "Continuous vs periodic review — forskelle og effekt på safety inventory.",
    modelAnswer:
      "Continuous: bestil ved ROP=DL+ss, mere responsiv, typisk lavere ss. Periodic: tjek med interval, bestil op til S; skal dække LT+review → mere ss.",
    keyPoints: [
      { id: "a", label: "Continuous / ROP", stems: ["continuous", "kontinuer", "rop", "reorder"] },
      { id: "b", label: "Periodic / review interval", stems: ["periodic", "periodisk", "interval", "review", "order up"] },
      { id: "c", label: "Mere ss ved periodic", stems: ["mere safety", "mere sikkerhed", "hojere ss", "lead time +"] },
    ],
  },
  {
    id: "7-o3",
    themeId: 7,
    question: "Hvordan finder du safety inventory givet ønsket CSL (Ex 12-3-logik)?",
    modelAnswer:
      "Oversæt CSL til z. Estimer σ_L for demand i lead time. ss = z·σ_L. Højere CSL → højere z → mere buffer.",
    keyPoints: [
      { id: "a", label: "z fra CSL", stems: ["z", "csl", "normal", "service"] },
      { id: "b", label: "σ_L", stems: ["sigma", "std", "lead time", "usikker"] },
      { id: "c", label: "ss = z·σ_L", stems: ["safety", "ss =", "z *", "buffer"] },
    ],
  },

  {
    id: "8-o1",
    themeId: 8,
    question: "Definer Co og Cu, og udled CSL*.",
    modelAnswer:
      "Co=c−s (tab ved én for meget). Cu=p−c (tabt margin ved én for lidt). CSL*=Cu/(Cu+Co). Q*=F⁻¹(CSL*).",
    keyPoints: [
      { id: "a", label: "Co = c−s", stems: ["co", "c-s", "c − s", "overstock", "salvage", "restvaerdi"] },
      { id: "b", label: "Cu = p−c", stems: ["cu", "p-c", "p − c", "understock", "margin"] },
      { id: "c", label: "CSL* = Cu/(Cu+Co)", stems: ["cu/(cu", "csl*", "optimal", "fraktil"] },
    ],
  },
  {
    id: "8-o2",
    themeId: 8,
    question: "Hvad sker der med optimal ordre hvis salvage stiger? Hvorfor?",
    modelAnswer:
      "Co falder → CSL* stiger → Q* stiger, fordi det er billigere at risikere overstock.",
    keyPoints: [
      { id: "a", label: "Co falder", stems: ["co", "falder", "lavere overstock"] },
      { id: "b", label: "CSL* stiger", stems: ["csl", "stiger", "hojere service"] },
      { id: "c", label: "Bestiller mere", stems: ["bestil", "q*", "mere", "tor"] },
    ],
  },
  {
    id: "8-o3",
    themeId: 8,
    question: "Hvornår bruger du newsvendor frem for safety inventory-politik?",
    modelAnswer:
      "Ved sæson/one-shot (fashion/elektronik) med én ordre til perioden. Safety inventory/CSL via z·σ_L er til løbende replenishment af standardvarer.",
    keyPoints: [
      { id: "a", label: "Sæson / one-shot", stems: ["saison", "sæson", "one-shot", "en ordre", "fashion"] },
      { id: "b", label: "Newsvendor / Co Cu", stems: ["newsvendor", "co", "cu", "optimal csl"] },
      { id: "c", label: "Vs continuous safety stock", stems: ["safety", "lobende", "continuous", "standard"] },
    ],
  },

  {
    id: "9-o1",
    themeId: 9,
    question: "Direct shipping vs milk runs — hvornår hvad (Ex 14-1)?",
    modelAnswer:
      "Direct: én destination pr. tur — godt ved høj demand. Milk runs: flere stops, deler load cost, mindre batch pr. butik — godt ved lav demand hvor inventory-besparelse vinder.",
    keyPoints: [
      { id: "a", label: "Direct ved høj demand", stems: ["direct", "hoj demand", "hoj eftersporg"] },
      { id: "b", label: "Milk runs ved lav demand", stems: ["milk", "lav demand", "lav eftersporg"] },
      { id: "c", label: "Inventory vs transport trade-off", stems: ["inventory", "lager", "transport", "trade"] },
    ],
  },
  {
    id: "9-o2",
    themeId: 9,
    question: "Forklar TL vs LTL med Faulkswagon.",
    modelAnswer:
      "TL: fuld lastbil, direkte, lav cost/enhed (Factory→DW). LTL: delt last, flere stops, dyrere (DW→CREP). Derfor er DW-placering vigtig for total cost.",
    keyPoints: [
      { id: "a", label: "TL karakteristika", stems: ["tl", "fuld", "lav cost", "factory"] },
      { id: "b", label: "LTL karakteristika", stems: ["ltl", "delt", "dyr", "crep"] },
      { id: "c", label: "DW-placering kritisk", stems: ["dw", "placering", "vigtig", "distance"] },
    ],
  },
  {
    id: "9-o3",
    themeId: 9,
    question: "Hvad er Stepping Stone-proceduren kort?",
    modelAnswer:
      "Givet initial transportløsning evalueres tomme celler for omkostningsforbedring via cyklusser, indtil ingen negativ opportunity cost — så er planen optimal.",
    keyPoints: [
      { id: "a", label: "Initial løsning", stems: ["initial", "northwest", "start"] },
      { id: "b", label: "Tomme celler / cyklus", stems: ["tom", "celle", "cyklus", "opportunity"] },
      { id: "c", label: "Indtil optimal", stems: ["optimal", "forbedr", "ingen negativ"] },
    ],
  },

  {
    id: "10-o1",
    themeId: 10,
    question: "Hvad er bullwhip, og hvilke costs stiger ved manglende koordination?",
    modelAnswer:
      "Små demand-udsving forstærkes upstream fordi led ser ordrer, ikke POS. Manufacturing, inventory, transport og labor costs stiger; SC-surplus falder.",
    keyPoints: [
      { id: "a", label: "Forstærket variation upstream", stems: ["bullwhip", "forstaerk", "upstream", "ordrer"] },
      { id: "b", label: "Ser ordrer ikke demand", stems: ["pos", "ikke faktisk", "forecast", "ordre"] },
      { id: "c", label: "Costs stiger", stems: ["manufactur", "inventory", "transport", "cost", "omkost"] },
    ],
  },
  {
    id: "10-o2",
    themeId: 10,
    question: "Hvordan reducerer information sharing bullwhip?",
    modelAnswer:
      "Del POS, fælles forecast, lager/kapacitet/kampagner, så alle ser samme demand-signal → mindre overreaktion og lavere safety stock.",
    keyPoints: [
      { id: "a", label: "POS / fælles signal", stems: ["pos", "faelles", "demand", "signal"] },
      { id: "b", label: "Forecast/lager/kampagner", stems: ["forecast", "lager", "kampagne", "kapacitet"] },
      { id: "c", label: "Jævnere ordrer / lavere ss", stems: ["jaevn", "safety", "mindre variation", "overreaktion"] },
    ],
  },
  {
    id: "10-o3",
    themeId: 10,
    question: "Forklar VMI og CRP som koordinationsværktøjer.",
    modelAnswer:
      "VMI: leverandør styrer replenishment med retail data — fjerner forecast-lag. CRP: hyppig genopfyldning på faktisk salg — erstatter store ordrebølger med stabilt flow.",
    keyPoints: [
      { id: "a", label: "VMI", stems: ["vmi", "vendor", "leverandor styrer", "replenish"] },
      { id: "b", label: "CRP", stems: ["crp", "continuous replenish", "hyppig"] },
      { id: "c", label: "Reducer bullwhip / stabilt flow", stems: ["bullwhip", "stabil", "jaevn", "bølge"] },
    ],
  },

  {
    id: "11-o1",
    themeId: 11,
    question: "Beskriv de 5 processer i en reverse supply chain.",
    modelAnswer:
      "1) Core/product acquisition 2) Reverse logistics 3) Inspection/sorting/testing 4) Recovery 5) Remarketing. Reverse logistics er ofte mest usikker cost-mæssigt.",
    keyPoints: [
      { id: "a", label: "Acquisition", stems: ["acquisition", "core", "retur", "indsamling"] },
      { id: "b", label: "Reverse logistics + inspection", stems: ["reverse", "inspection", "sorting", "test"] },
      { id: "c", label: "Recovery + remarketing", stems: ["recovery", "repair", "reman", "recycle", "remarket"] },
    ],
  },
  {
    id: "11-o2",
    themeId: 11,
    question: "Nævn mindst tre af seven deadly sins og pointen bag dem.",
    modelAnswer:
      "Fx: overser business potential; ignorerer EOL; mangler systemintegration; ingen procesejer/KPI; RL som andenprioritet; tror problemer løser sig; kobler ikke cost/value. Point: RL skal ejes som value process.",
    keyPoints: [
      { id: "a", label: "Mindst én synd om cost vs value", stems: ["potential", "cost", "value", "vaerdi"] },
      { id: "b", label: "Mindst én om ejerskab/system", stems: ["ejer", "kpi", "integration", "system", "deltid"] },
      { id: "c", label: "Point: recovered value > cost", stems: ["recovered", "cost to recover", "vaerdi", "profit"] },
    ],
  },
  {
    id: "11-o3",
    themeId: 11,
    question: "Forklar de tre grupper af revenue streams (Larsen & Jacobsen).",
    modelAnswer:
      "A) Salg af cores/råmateriale. B) Salg af recovered items. C) Extra virgin sales via service-/brand-augmentation.",
    keyPoints: [
      { id: "a", label: "A cores", stems: ["core", "råmateriale", "raamateriale", "uden forbedring"] },
      { id: "b", label: "B recovered", stems: ["recovered", "refurbish", "reman", "istandsat"] },
      { id: "c", label: "C brand/service augmentation", stems: ["brand", "service", "augmentation", "garanti", "gron"] },
    ],
  },

  {
    id: "12-o1",
    themeId: 12,
    question: "Hvad er remanufacturing vs repair vs recycle?",
    modelAnswer:
      "Repair: fikser specifik fejl. Remanufacturing: demontering/inspektion/udskiftning til nær as-new med garanti. Recycle: nedbrydes til materiale — lavest værdi.",
    keyPoints: [
      { id: "a", label: "Repair", stems: ["repair", "reparation", "specifik fejl"] },
      { id: "b", label: "Reman as-new", stems: ["reman", "as-new", "as new", "genfremstil", "garanti"] },
      { id: "c", label: "Recycle lav værdi", stems: ["recycl", "materiale", "lavest", "nedbryd"] },
    ],
  },
  {
    id: "12-o2",
    themeId: 12,
    question: "Forklar CopyMagic / product recovery value hierarchy.",
    modelAnswer:
      "Prioritér højest værdi: remanufacture → cannibalize (komponentgenbrug) → recycle, plus parallel repair-loop. Hold produktet i kredsløb længst muligt.",
    keyPoints: [
      { id: "a", label: "Reman først", stems: ["reman", "hojest", "forst"] },
      { id: "b", label: "Cannibalize", stems: ["cannibal", "komponent", "organdon"] },
      { id: "c", label: "Recycle sidst / cirkulær logik", stems: ["recycl", "cirkul", "cradle", "kredslob"] },
    ],
  },
  {
    id: "12-o3",
    themeId: 12,
    question: "Hvornår er remanufacturing profitabelt — og hvilke risici?",
    modelAnswer:
      "Når recovered value + revenue > cost to recover, med stabil core-flow, inspektion, design for genbrug og remarketing. Risici: brand/kvalitet, komponent-specialisering, segment/fit.",
    keyPoints: [
      { id: "a", label: "Value > cost", stems: ["value", "cost to recover", "profit", "vaerdi"] },
      { id: "b", label: "Forudsætninger", stems: ["core", "inspection", "design", "remarket", "indsamling"] },
      { id: "c", label: "Risici", stems: ["brand", "risiko", "kvalitet", "specialisering"] },
    ],
  },
];

export function getMcqsForTheme(themeId: number) {
  return mcqs.filter((q) => q.themeId === themeId);
}

export function getOpenForTheme(themeId: number) {
  return openQuestions.filter((q) => q.themeId === themeId);
}
