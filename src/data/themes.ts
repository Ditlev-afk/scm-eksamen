export type Theme = {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  agenda: string[];
  talkTrack: { heading: string; bullets: string[] }[];
  formulas: { name: string; formula: string; note?: string }[];
  teacherAngles: string[];
  examAnswers: { q: string; a: string }[];
  crossLinks: string[];
};

export const themes: Theme[] = [
  {
    id: 1,
    slug: "strategic-fit",
    title: "Strategic fit (supply chain and strategy)",
    shortTitle: "Strategic fit",
    agenda: [
      "1. Competitive vs supply chain strategy",
      "2. Hvad er strategic fit?",
      "3. Implied demand uncertainty",
      "4. Fig. 2-5 Zone of strategic fit",
      "5. Fig. 2-6 Roller & allokering",
      "6. Dell-eksempel (fit der skifter)",
    ],
    talkTrack: [
      {
        heading: "Competitive vs SC strategy",
        bullets: [
          "Competitive strategy = hvilke kundebehov vi vil vinde på (pris, hastighed, variety, innovation) — primært marketing/sales.",
          "SC strategy = hvordan operations, distribution og service leverer det — in-house eller outsourcet.",
          "De skal være koordinerede: CS først, så SC — men SC er ikke noget man 'lige fikser bagefter'.",
        ],
      },
      {
        heading: "Strategic fit",
        bullets: [
          "Fit = kundens prioriteter fra CS matcher de capabilities SC-strategien bygger.",
          "Mål: maksimér supply chain surplus = opfyld kundebehov til lavest mulige samlede omkostning.",
        ],
      },
      {
        heading: "3 trin til fit",
        bullets: [
          "1) Forstå kundebehov + demand/supply uncertainty.",
          "2) Forstå SC capabilities på effektiv ↔ responsiv-spektret.",
          "3) Match SC-responsiveness med implied demand uncertainty.",
        ],
      },
      {
        heading: "Implied demand uncertainty (IDU)",
        bullets: [
          "Demand uncertainty = hvor meget efterspørgslen svinger statistisk.",
          "Implied demand uncertainty = den usikkerhed SC faktisk skal håndtere givet servicegrad, lead time, variety, innovation, customization, supply risk.",
          "Samme marked → forskellig IDU: få varianter/1–2 uger vs mange varianter/next-day + høj SL.",
          "Lav IDU: salt i supermarked. Høj IDU: nyt IT-produkt / fashion (Zara).",
        ],
      },
      {
        heading: "Fig. 2-5 Zone of strategic fit",
        bullets: [
          "X: implied uncertainty lav→høj. Y: SC responsiveness lav→høj.",
          "IU↑ ⇒ SC skal være mere responsiv.",
          "Under zonen: høj IU + lav R → stockouts, tabt salg, dårlig service.",
          "Over zonen: lav IU + høj R → unødvendigt dyrt, lavere profit.",
        ],
      },
      {
        heading: "Fig. 2-6 & Dell",
        bullets: [
          "Samme totale IU kan fordeles forskelligt: SC1 retailer absorberer mest; SC2 manufacturer absorberer mest.",
          "Dell 93–06: custom PC → build-to-order, høj R. Efter 07: retail/pris → mere effektiv, BTS, kontraktproducenter.",
          "Point: fit er dynamisk — markedsskift kræver SC-skift.",
        ],
      },
    ],
    formulas: [],
    teacherAngles: [
      'Explain Figure 2-5 "Finding the Zone of Strategic Fit". Include Implied Uncertainty',
      'Explain Figure 2-6 "Different roles and Allocations…". Include Implied Uncertainty',
    ],
    examAnswers: [
      {
        q: "Hvad er forskellen på demand uncertainty og implied demand uncertainty?",
        a: "Demand uncertainty er den statistiske usikkerhed i efterspørgslen. Implied demand uncertainty er den usikkerhed SC reelt skal håndtere givet de kundeløfter man har givet (CSL, lead time, variety, innovation). Samme marked kan give forskellig IDU afhængigt af løfterne.",
      },
      {
        q: "Hvad sker der hvis man ligger uden for zonen af strategic fit?",
        a: "Under zonen: for træg til usikkert produkt → stockouts og tabt salg. Over zonen: for dyr/responsiv til stabilt produkt → unødvendige omkostninger og lavere profit.",
      },
    ],
    crossLinks: [
      "Drivers (tema 2) er håndtagene der flytter dig på E/R-spektret",
      "Distribution network (tema 3) vælges ud fra samme fit-logik",
    ],
  },
  {
    id: 2,
    slug: "drivers-metrics",
    title: "Supply chain drivers and metrics",
    shortTitle: "Drivers & metrics",
    agenda: [
      "1. Fig. 3-1 Decision framework",
      "2. De 6 drivers (logistiske + cross-functional)",
      "3. Efficient vs responsive pr. driver",
      "4. DuPont / ROA-kobling",
      "5. Case A: fabrik i Kina → ROA",
      "6. Case B: fordoblet safety stock → ROA",
    ],
    talkTrack: [
      {
        heading: "Fig. 3-1 Decision framework",
        bullets: [
          "Competitive strategy → SC strategy (hvor på E↔R) → SC structure.",
          "Seks drivers designes til at matche strategien.",
          "Metrics på hver driver måler performance og kobler tilbage til finansielle mål (fx ROA).",
        ],
      },
      {
        heading: "De 6 drivers",
        bullets: [
          "Logistiske: Facilities, Inventory, Transportation.",
          "Cross-functional: Information, Sourcing, Pricing.",
          "Hver driver kan drejes mod høj E eller høj R.",
        ],
      },
      {
        heading: "Eksempler på E vs R",
        bullets: [
          "Facilities: få store = effektiv; mange tæt på kunde = responsiv.",
          "Inventory: lavt/centraliseret = E; højt safety stock tæt på kunde = R.",
          "Transport: billig/langsom = E; hurtig/fleksibel = R.",
        ],
      },
      {
        heading: "DuPont / ROA",
        bullets: [
          "ROA = Profit Margin × Asset Turnover.",
          "Margin: hvor stor del af salg der bliver overskud. Turnover: hvor effektivt aktiver genererer salg.",
          "SC-beslutninger rammer både nettoresultat og aktivbase (lager, anlæg, tilgodehavender).",
        ],
      },
      {
        heading: "Fabrik i Kina",
        bullets: [
          "Fixed assets ↑ → total assets ↑ → asset turnover ↓.",
          "COGS ↓ (billigere labour/input) → margin ↑. Transport til asiatiske kunder ↓.",
          "Sales kan ↑ (kortere LT, lokal tilstedeværelse).",
          "ROA↑ kun hvis bedre margin + sales > ekstra kapital i assets.",
        ],
      },
      {
        heading: "Fordoblet safety stock",
        bullets: [
          "FG inventory ↑ → assets ↑ → turnover ↓. Holding cost/obsolescence ↑ → margin ↓.",
          "Færre stockouts → sales ↑ (og måske vundet fra konkurrenter).",
          "Kort sigt: typisk pres ned på ROA. Lang sigt: ROA kan ↑ hvis ekstra salg opvejer kapital + costs.",
        ],
      },
    ],
    formulas: [
      {
        name: "ROA (DuPont)",
        formula: "ROA = Profit Margin × Asset Turnover",
        note: "Margin = Net Profit / Sales. Turnover = Sales / Total Assets.",
      },
    ],
    teacherAngles: [
      "Dupont: ROA ved fabrik i Kina i stedet for transport fra Europa",
      "Dupont: ROA ved fordobling af safety inventories",
      'Figure 3-1 "Supply Chain Decision Making Framework"',
    ],
    examAnswers: [
      {
        q: "Hvordan påvirker en Kina-fabrik ROA?",
        a: "Assets stiger (ny fabrik) → turnover falder. Margin kan stige via lavere COGS og kortere lokal transport. ROA stiger kun hvis margin- og salgsgevinsten er større end den ekstra kapitalbinding.",
      },
      {
        q: "Nævn de 6 drivers og deres to grupper.",
        a: "Logistiske: facilities, inventory, transportation. Cross-functional: information, sourcing, pricing.",
      },
    ],
    crossLinks: [
      "Strategic fit (tema 1) bestemmer hvor drivers skal lande på E/R",
      "Inventory-temaer (6–8) er konkrete inventory-driver beslutninger",
    ],
  },
  {
    id: 3,
    slug: "distribution-network",
    title: "Distribution network design",
    shortTitle: "Distribution network",
    agenda: [
      "1. Formål: maksimér SC-surplus",
      "2. Servicefaktorer vs cost-drivere",
      "3. Manufacturer storage + direct shipping",
      "4. Distributor storage + last-mile",
      "5. Valg af netværksoption",
      "6. Antal faciliteter → RT, inventory, transport",
    ],
    talkTrack: [
      {
        heading: "Formål",
        bullets: [
          "Distribution = fragte + lagre fra producent til slutbruger.",
          "Vælg netværk der maksimerer SC-surplus: kundebehov til lavest mulige samlede omkostning.",
          "Trade-off mellem cost og responsiveness (strategic fit).",
        ],
      },
      {
        heading: "Service vs cost",
        bullets: [
          "Service: response time, variety, availability, experience, order visibility, returnability, time-to-market.",
          "Cost påvirkes af: inventories, transport, facilities, information.",
          "Behøver ikke maksimere alle — Amazon: længere RT men højere udvalg end boghandel.",
        ],
      },
      {
        heading: "Manufacturer storage with direct shipping",
        bullets: [
          "Producent → kunde direkte; retailer tager kun ordre (intet lager).",
          "Styrker: lav inventory (aggregation), høj variety/availability, god time-to-market, få facilities.",
          "Svagheder: lang RT, høj transport (mange små/lange forsendelser), kræver stærk information, dyr retur.",
          "Bedst til: high-value, low-demand/uncertain varer hvor kunden vil vente.",
        ],
      },
      {
        heading: "Distributor storage + last-mile (fx nemlig.dk)",
        bullets: [
          "Lokale lagre → distributør leverer last mile.",
          "Styrker: kort RT, høj experience (én levering), relativt god returnability.",
          "Svagheder: højere inventory, dyr last-mile, flere facilities, lavere variety end hos producent.",
          "Bedst til: fast-moving varer, hastighed/convenience, høj kundetæthed.",
        ],
      },
      {
        heading: "Når antal faciliteter stiger",
        bullets: [
          "Response time ↓ (tættere på kunden).",
          "Inventory costs ↑ (mindre risk pooling, duplikeret safety stock).",
          "Outbound transport ↓, inbound ↑. Samlet transport ofte U-formet.",
        ],
      },
    ],
    formulas: [],
    teacherAngles: [
      "Forskelle: Manufacturer Storage with Direct Shipping vs Distributor storage with last-mile delivery",
      "Hvordan vælger man passende network design option?",
      "Hvordan påvirker antal faciliteter response time, inventory costs og transportation costs?",
    ],
    examAnswers: [
      {
        q: "Hvornår vælger man direct shipping fra manufacturer?",
        a: "Når variety og lav inventory er vigtigere end hurtig levering/retur og lav transportomkostning — typisk high-value, usikker efterspørgsel hvor kunden accepterer længere RT.",
      },
      {
        q: "Hvad sker der med inventory når antal DC'er stiger?",
        a: "Inventory costs stiger, fordi risk pooling falder og safety stock/sortiment duplikeres på flere steder.",
      },
    ],
    crossLinks: [
      "Network design (tema 4) er den bredere facilitets-/regionbeslutning",
      "Transport (tema 9) er outbound/inbound-delen af trade-offen",
    ],
  },
  {
    id: 4,
    slug: "network-design",
    title: "Network design",
    shortTitle: "Network design",
    agenda: [
      "1. Mål: after-tax profit + responstid",
      "2. Fig. 5.2 — 4 faser",
      "3. Tre faktorer der påvirker design",
      "4. Capacitated Plant Location Model",
      "5. Gravity Model (formel)",
      "6. Output: hvor, hvor store, hvem servicerer",
    ],
    talkTrack: [
      {
        heading: "Mål",
        bullets: [
          "Design globalt SC-netværk der maksimerer profit efter skat og møder demand + ønsket responstid.",
          "Beslutninger: hvor faciliteter, hvilken rolle/kapacitet, hvilke markeder de servicerer.",
        ],
      },
      {
        heading: "4 faser (Fig. 5.2)",
        bullets: [
          "Fase 1: SC strategi/design — CS → E/R, EOS, kapital, byg/køb/partner → grov arkitektur.",
          "Fase 2: Regioner — demand, skala, tariffer/skat/valuta, konkurrenter → hvilke regioner + ca. antal/rolle.",
          "Fase 3: Potentielle byer/sites — hard/soft infra → shortlist.",
          "Fase 4: Endeligt valg + kapacitet/allokering — modeller (Gravity, CPLM) → konkret netværk.",
        ],
      },
      {
        heading: "Tre faktorer",
        bullets: [
          "Strategic: netværket skal passe til CS (pris vs hurtig levering/variety).",
          "Macroeconomic: løn, transport, tariffer, skat, valuta → after-tax profit, lokal vs eksport.",
          "Competitive: konkurrenters placering + positive externalities (fx tankstationer ved samme afkørsel / Hotelling).",
        ],
      },
      {
        heading: "CPLM",
        bullets: [
          "0/1: åbn/luk facilitet. Allokér flow fra åbne faciliteter til markeder.",
          "Minimer total årlig cost (produktion + transport + fixed facility).",
          "Constraints: kapacitet pr. fabrik; hvert marked skal dækkes.",
        ],
      },
      {
        heading: "Gravity Model",
        bullets: [
          "Find (x*, y*) der minimerer vægtede transportomkostninger til markeder.",
          "Bruges til at foreslå geografisk midtpunkt givet volumen og distance.",
        ],
      },
    ],
    formulas: [
      {
        name: "Gravity (koordinater)",
        formula: "x* = Σ(x_i · d_i) / Σ d_i ,  y* = Σ(y_i · d_i) / Σ d_i",
        note: "d_i = efterspørgsel/volumen til marked i. I bogen også med cost-faktorer (5.5/5.6).",
      },
    ],
    teacherAngles: [
      "Figure 5.2 Framework for Network Design Decisions",
      "Gravity Model inkl. formel 5.5 og 5.6",
      "Tre faktorer der påvirker network design",
      "Capacitated Plant Location Model",
    ],
    examAnswers: [
      {
        q: "Hvad er output af de 4 faser?",
        a: "Fase 1: grov SC-arkitektur. Fase 2: regioner + ca. antal/rolle. Fase 3: shortlist af sites. Fase 4: endelige sites, kapaciteter og markedsallokering.",
      },
      {
        q: "Hvad minimerer CPLM?",
        a: "Total årlig cost = produktion + transport + fixed facility cost, under kapacitets- og demand-constraints.",
      },
    ],
    crossLinks: [
      "Location decisions (tema 5) giver konkrete metoder: break-even, factor rating, CoG",
      "Faulkswagon bruger CoG + service-radius til fabrikker/DW",
    ],
  },
  {
    id: 5,
    slug: "location-decisions",
    title: "Location decisions",
    shortTitle: "Location decisions",
    agenda: [
      "1. Hvornår bruges hvilken metode?",
      "2. Locational break-even",
      "3. Factor rating method",
      "4. Center-of-Gravity",
      "5. Styrker/svagheder",
      "6. Link til network design fase 4",
    ],
    talkTrack: [
      {
        heading: "Break-even",
        bullets: [
          "Få forudbestemte lokationer, cost er vigtigste kriterium.",
          "Total cost = F + v·Q for hver lokation.",
          "Find Q_BE ved at sætte to cost-funktioner lig hinanden.",
          "Q < Q_BE → typisk lavest fixed cost. Q > Q_BE → lavest variable cost. Vælg lavest total cost ved forventet volumen.",
          "Styrke: enkel. Svaghed: ignorerer kvalitative faktorer, skat, risiko; antager lineær cost.",
        ],
      },
      {
        heading: "Factor rating",
        bullets: [
          "Når flere hårde + bløde faktorer betyder noget.",
          "1) Key success factors 2) vægte 3) skala 4) score lokationer 5) vægtet sum.",
          "Eks: Dublin vs Amsterdam på talent (0,4) og taxes (0,6).",
          "Styrke: transparent, kombinerer soft/hard. Svaghed: subjektiv vægtning/rating.",
        ],
      },
      {
        heading: "Center-of-Gravity",
        bullets: [
          "Find geografisk punkt der minimerer samlet transportafstand/-omkostning til flere markeder givet volumen.",
          "x* = Σ(x·vol)/Σvol , y* = Σ(y·vol)/Σvol.",
          "Eks: A(60,120)=2000, B(30,90)=1000 → (50,110).",
          "Bruges ofte som startpunkt — justér herefter for infrastruktur, kapacitet, grænser.",
        ],
      },
    ],
    formulas: [
      {
        name: "Break-even volumen",
        formula: "Q_BE = (F2 − F1) / (v1 − v2)",
      },
      {
        name: "Center of Gravity",
        formula: "x* = Σ(x_i V_i)/ΣV_i ,  y* = Σ(y_i V_i)/ΣV_i",
      },
      {
        name: "Factor rating score",
        formula: "Score = Σ (vægt_j × rating_j)",
      },
    ],
    teacherAngles: [
      "Locational Break-Even method",
      "Factor Rating method",
      "Center-of-Gravity model (readings + Faulkswagon factories)",
    ],
    examAnswers: [
      {
        q: "Hvornår vælger du factor rating frem for break-even?",
        a: "Når beslutningen ikke kun handler om cost ved et volumen, men om flere kvalitative/kvantitative faktorer (talent, skat, infrastruktur, risiko) der skal vægtes samlet.",
      },
      {
        q: "Hvad gør CoG — og hvad gør den ikke?",
        a: "Den finder et vægtet geografisk midtpunkt der minimerer transport. Den tager ikke automatisk højde for veje, grænser, kapacitet, løn eller skat — det justeres efter.",
      },
    ],
    crossLinks: [
      "Network design fase 4 (tema 4)",
      "Faulkswagon: CoG til fabrikker, 24/48h-cirkler til DW",
    ],
  },
  {
    id: 6,
    slug: "cycle-inventory",
    title: "Inventory management I – cycle inventory",
    shortTitle: "Cycle inventory",
    agenda: [
      "1. Hvad er cycle inventory? (Q/2)",
      "2. Trade-off: S vs h → EOQ-logik",
      "3. All-unit quantity discounts (4 steps)",
      "4. Marginal unit quantity discounts",
      "5. Joint ordering / aggregation (11-4, 11-5)",
      "6. Designe passende quantity discount",
    ],
    talkTrack: [
      {
        heading: "Cycle inventory",
        bullets: [
          "Cycle inventory = gennemsnitligt lager = Q/2, fordi vi bestiller/producerer i lot size Q i stedet for én ad gangen.",
          "Vi accepterer højere lager for at udnytte EOS i indkøb, produktion og transport.",
        ],
      },
      {
        heading: "S og h",
        bullets: [
          "S (ordering): indkøbstid, fixed transport, receiving/handling, admin/told.",
          "h (holding): cost of capital, plads, håndtering, skade/forældelse, forsikring/skat.",
          "Høj S → større Q. Høj h → mindre Q.",
        ],
      },
      {
        heading: "All-unit quantity discount",
        bullets: [
          "Hele ordren får lavere enhedspris over cutoff (c0 ≥ c1 ≥ c2).",
          "Step 1: EOQ pr. prisniveau. Step 2: justér Q til rabatinterval. Step 3: total annual cost (order+hold+material). Step 4: vælg lavest total cost — ikke nødvendigvis lavest enhedspris.",
        ],
      },
      {
        heading: "Marginal unit discount",
        bullets: [
          "Kun enhederne 'ovenpå' cutoff får den lavere pris; de første enheder beholder højere pris.",
          "Anderledes cost-kurve end all-unit — vigtig at skelne til eksamen.",
        ],
      },
      {
        heading: "Aggregation",
        bullets: [
          "11-4 Products ordered and delivered jointly: fælles ordre/levering sænker fixed cost pr. produkt → lavere cycle inventory samlet.",
          "11-5 Aggregation with capacity constraint: truck/kapacitet begrænser hvor meget man kan aggregere — find bedste feasible kombination.",
          "11-9/11-10: design discount så køberens optimale Q også er god for leverandørens EOS/produktion.",
        ],
      },
    ],
    formulas: [
      {
        name: "Cycle inventory",
        formula: "Cycle inventory = Q / 2",
      },
      {
        name: "EOQ (Chopra 11.5)",
        formula: "Q* = √(2DS / hC)",
        note: "D = årlig demand, S = fixed order cost, h = holding cost rate, C = unit cost. Holding cost pr. enhed = hC. Højere S → større Q; højere hC → mindre Q.",
      },
    ],
    teacherAngles: [
      'Example 11-4 "Products ordered and Delivered Jointly"',
      'Example 11-5 "Aggregation with Capacity Constraint"',
      "Two types of quantity discounts + Example 11-7 all-unit",
      "Design suitable quantity discount (11-9, 11-10)",
    ],
    examAnswers: [
      {
        q: "Hvorfor er lavest enhedspris ikke altid bedst ved all-unit discount?",
        a: "Fordi større Q øger holding cost. Man vælger den Q og det prisniveau med lavest total annual cost (ordering + holding + material).",
      },
      {
        q: "Hvad er forskellen på all-unit og marginal unit discount?",
        a: "All-unit: hele ordren får den lavere pris. Marginal: kun enheder over cutoff får den lavere pris; de første beholder højere pris.",
      },
    ],
    crossLinks: [
      "Safety inventory (tema 7) er bufferen oven på cycle inventory",
      "Transport (tema 9): større lots ↔ færre/dyrere shipments",
    ],
  },
  {
    id: 7,
    slug: "safety-inventory",
    title: "Inventory management I – safety inventory",
    shortTitle: "Safety inventory",
    agenda: [
      "1. Hvorfor safety inventory? 3 spørgsmål",
      "2. CSL, Fill Rate, Order Fill Rate",
      "3. Continuous vs periodic review",
      "4. Safety inventory = z · σ_L",
      "5. Example 12-3",
      "6. Hvordan sænke safety uden at skade service",
    ],
    talkTrack: [
      {
        heading: "3 spørgsmål",
        bullets: [
          "Hvilket niveau af product availability er passende?",
          "Hvor stort safety inventory kræves for det niveau?",
          "Hvad kan sænke safety inventory uden at skade availability? (kortere LT, bedre forecast, aggregation, information sharing)",
        ],
      },
      {
        heading: "Service metrics",
        bullets: [
          "Cycle Service Level (CSL): sandsynlighed for ikke at løbe tør i en replenishment-cyklus.",
          "Fill Rate: % af efterspurgte enheder leveret fra lager.",
          "Order Fill Rate: % af ordrer der leveres komplet — typisk lavere end fill rate.",
        ],
      },
      {
        heading: "Continuous vs periodic review",
        bullets: [
          "Continuous: overvåg løbende; bestil når ROP = DL + safety. Mere responsiv, typisk lavere safety for samme service; kræver IT.",
          "Periodic: tjek med fast interval; bestil op til S. Nemmere admin, men kræver mere safety (dækker LT + review interval).",
        ],
      },
      {
        heading: "Example 12-3",
        bullets: [
          "Givet ønsket CSL (fx 90%): find z fra normalfordeling.",
          "Safety inventory = z · σ_L hvor σ_L er std.afv. for demand i lead time.",
          "Jo højere CSL, jo større z og buffer.",
          "Relevant for standardprodukter (mælk, medicin) med løbende replenishment.",
        ],
      },
    ],
    formulas: [
      {
        name: "Safety inventory",
        formula: "ss = z · σ_L",
        note: "z fra ønsket CSL; σ_L = usikkerhed i demand over lead time.",
      },
      {
        name: "Reorder point (continuous)",
        formula: "ROP = demand during LT + safety inventory",
      },
    ],
    teacherAngles: [
      'Example 12-3 "Evaluating safety inventory given desired CSL"',
      "CSL, Fill Rate, Order Fill Rate + continuous vs periodic review",
    ],
    examAnswers: [
      {
        q: "Hvorfor kræver periodic review typisk mere safety inventory?",
        a: "Fordi usikkerheden dækker både lead time og review-intervallet — man kan ikke reagere mellem reviews.",
      },
      {
        q: "Hvordan beregnes safety inventory givet CSL?",
        a: "Oversæt CSL til z-værdi. Gang med σ for demand i lead time: ss = z · σ_L.",
      },
    ],
    crossLinks: [
      "Product availability (tema 8) vælger optimal CSL via Co/Cu for sæsonvarer",
      "Coordination (tema 10): information sharing sænker σ og dermed ss",
    ],
  },
  {
    id: 8,
    slug: "product-availability",
    title: "Inventory management II – product availability",
    shortTitle: "Product availability",
    agenda: [
      "1. Hvornår relevant? (sæson / one-shot)",
      "2. Cost of overstocking Co",
      "3. Cost of understocking Cu",
      "4. Optimal CSL* = Cu/(Cu+Co)",
      "5. Example 13-1 (uden expected profit calc)",
      "6. Effekt af salvage value",
    ],
    talkTrack: [
      {
        heading: "Kontekst",
        bullets: [
          "Relevant for sæsonprodukter (fashion/elektronik): én ordre/replenishment til sæsonen.",
          "Mål: vælg Q der maksimerer forventet profit (newsvendor).",
          "Fill rate / order fill rate / CSL bruges stadig, men beslutningen er one-shot.",
        ],
      },
      {
        heading: "Co og Cu",
        bullets: [
          "Co = cost of overstocking by one unit = c − s (indkøbspris minus salvage/restværdi).",
          "Cu = cost of understocking by one unit = p − c (tabt margin).",
          "Eks: p=1000, c=600, s=300 → Co=300, Cu=400.",
        ],
      },
      {
        heading: "Optimal service level",
        bullets: [
          "Bestil ekstra enhed så længe forventet marginal gevinst > forventet marginal omkostning.",
          "CSL* = Cu / (Cu + Co) = 400/(400+300) = 0,57.",
          "Q* = F⁻¹(CSL*). Med μ=350, σ=100 ligger Q* lidt over mean (~370).",
          "Højere salvage → lavere Co → højere CSL* → tør bestille mere.",
        ],
      },
    ],
    formulas: [
      {
        name: "Over-/understocking",
        formula: "Co = c − s ,  Cu = p − c",
      },
      {
        name: "Optimal CSL",
        formula: "CSL* = Cu / (Cu + Co)",
        note: "Q* = F⁻¹(CSL*).",
      },
    ],
    teacherAngles: [
      "Cost of Overstocking og Cost of Understocking",
      'Example 13-1 "Evaluating the Optimal Service Level for Seasonal Items" (uden expected profits)',
    ],
    examAnswers: [
      {
        q: "Hvad er Co og Cu?",
        a: "Co = c−s (tab ved én for meget). Cu = p−c (tabt margin ved én for lidt). Optimal CSL* = Cu/(Cu+Co).",
      },
      {
        q: "Hvad sker der hvis restværdien stiger?",
        a: "Co falder → CSL* stiger → optimal ordrestørrelse stiger, fordi det er billigere at risikere overstock.",
      },
    ],
    crossLinks: [
      "Safety inventory (tema 7) er til kontinuerlig replenishment; dette er newsvendor/sæson",
      "Strategic fit: høj IDU-produkter har ofte høj Cu → højere ønsket service",
    ],
  },
  {
    id: 9,
    slug: "transportation",
    title: "Transportation and transport modelling",
    shortTitle: "Transportation",
    agenda: [
      "1. Transportens rolle + trade-offs",
      "2. Direct shipping vs milk runs (14-1)",
      "3. TL vs LTL (+ Faulkswagon)",
      "4. Stepping Stone procedure",
      "5. Høj vs lav demand — hvilken netværkstype?",
      "6. Link til inventory & response time",
    ],
    talkTrack: [
      {
        heading: "Rolle",
        bullets: [
          "Transport flytter varer mellem lokationer — sjældent produceret og forbrugt samme sted.",
          "Påvirker response time, inventory (pipeline + batch) og total cost.",
          "Langsom transport ⇒ mere pipeline/safety inventory.",
        ],
      },
      {
        heading: "Direct vs milk runs (Ex 14-1)",
        bullets: [
          "Direct: 1 supplier → 1 store pr. tur. Transport pr. levering højere pr. stop, men færre ture ved høj demand.",
          "Milk run: samme truck til flere stores — deler load cost, mindre batch pr. butik → lavere inventory.",
          "Høj demand → direct billigst. Lav demand → milk runs billigst (inventory-besparelse dominerer).",
        ],
      },
      {
        heading: "TL vs LTL + Faulkswagon",
        bullets: [
          "TL: fylder (næsten) hele lastbilen, direkte, lav cost/enhed — store stabile volumener.",
          "LTL: deler lastbil, flere stops/håndtering, højere cost/enhed — små fragmenterede leverancer.",
          "Faulkswagon: Factory→DW = TL (billig). DW→CREP = LTL (dyr). Derfor er DW-placering vigtigere end fabriksplacering for total cost.",
        ],
      },
      {
        heading: "Stepping Stone",
        bullets: [
          "Givet fabrikker og DC'er: hvilken fabrik skal levere til hvilken DC?",
          "Start fra initial løsning (fx Northwest Corner). Evaluér tomme celler for omkostningsforbedring.",
          "Find forbedrende cyklus indtil ingen negativ opportunity cost → optimal transportplan.",
        ],
      },
    ],
    formulas: [],
    teacherAngles: [
      'Direct Shipment Network vs Direct Shipping with Milk runs (Example 14-1)',
      "Stepping Stone procedure",
      "TL og LTL inkl. Faulkswagon",
      "Transport costs vs production costs i Faulkswagon",
    ],
    examAnswers: [
      {
        q: "Hvornår er milk runs billigere end direct shipping?",
        a: "Ved lav demand pr. destination, hvor inventory-besparelsen fra mindre batches opvejer ekstra transport/stop-omkostninger.",
      },
      {
        q: "Hvorfor er DW-placering kritisk i Faulkswagon?",
        a: "Fordi DW→CREP er LTL (~3× dyrere pr. del/km end TL). At forkorte LTL-distancen reducerer den største cost-driver mere end at flytte fabrikker.",
      },
    ],
    crossLinks: [
      "Distribution network (tema 3): milk runs/last-mile er designvalg",
      "Cycle inventory (tema 6): shipment size = Q",
    ],
  },
  {
    id: 10,
    slug: "coordination",
    title: "Supply chain coordination",
    shortTitle: "Coordination",
    agenda: [
      "1. Hvad er coordination? (SC-surplus)",
      "2. Bullwhip-effekten",
      "3. Cost-konsekvenser af manglende koordination",
      "4. Information sharing → mindre bullwhip",
      "5. VMI og CRP",
      "6. Obstacles til coordination",
    ],
    talkTrack: [
      {
        heading: "Definition",
        bullets: [
          "Coordination = information og beslutninger aligned, så hvert led maksimerer total SC-surplus — ikke kun lokal profit.",
          "Ukoordineret: lokal optimering → højere lager, kapacitetsspild, flere stockouts.",
        ],
      },
      {
        heading: "Bullwhip",
        bullets: [
          "Små udsving i kundesalg bliver til store udsving i ordrer upstream.",
          "Hvert led ser ordrer (ikke faktisk demand) og laver eget forecast → variation forstærkes.",
        ],
      },
      {
        heading: "Cost-effekter",
        bullets: [
          "Manufacturing ↑ (over/underkapacitet, hasteordrer).",
          "Inventory holding ↑ (duplikeret safety + større cycle upstream).",
          "Transport ↑ (rush, mindre batches, dårligere konsolidering).",
          "Labor shipping/receiving ↑ (peak/trough bemanding).",
        ],
      },
      {
        heading: "Information sharing",
        bullets: [
          "Mål: alle ser samme demand-signal.",
          "Del POS-data (ikke kun ordrer), fælles forecast, lager/kapacitet/kampagner.",
          "Effekt: mindre usikkerhed → jævnere ordrer → lavere ss + stabil produktion.",
        ],
      },
      {
        heading: "VMI & CRP",
        bullets: [
          "VMI: leverandør ser retailer's salg/lager og styrer replenishment — fjerner et forecast-lag.",
          "CRP: hyppig genopfyldning baseret på faktisk salg/mållager — små stabile leverancer i stedet for ordrebølger.",
          "Obstacles: dårlige IT-systemer, lange LT, priskampagner, lokal optimering, manglende tillid.",
        ],
      },
    ],
    formulas: [],
    teacherAngles: [
      "Hvordan information sharing reducerer bullwhip",
      "Hvordan VMI og CRP reducerer bullwhip",
    ],
    examAnswers: [
      {
        q: "Hvordan reducerer information sharing bullwhip?",
        a: "Ved at erstatte forvrængede ordresignaler med fælles syn på POS/demand, lager og kampagner, så upstream ikke overreagerer på støj.",
      },
      {
        q: "Hvad er forskellen på VMI og CRP?",
        a: "VMI flytter replenishment-beslutningen til leverandøren med direkte salgs-/lagerdata. CRP fokuserer på kontinuerlig, hyppig genopfyldning baseret på faktisk salg — ofte med faste intervaller. Begge jævner flowet.",
      },
    ],
    crossLinks: [
      "Safety inventory falder når σ falder via bedre info",
      "Pricing-kampagner (driver) kan skabe bullwhip hvis ikke koordineret",
    ],
  },
  {
    id: 11,
    slug: "sustainability",
    title: "Sustainability and circular supply chains",
    shortTitle: "Sustainability",
    agenda: [
      "1. Fra affald til værdiskabelse",
      "2. Reverse SC: 5 processer",
      "3. 7 deadly sins (Stock)",
      "4. Revenue streams (Larsen & Jacobsen)",
      "5. Cradle-to-cradle",
      "6. CopyMagic recovery hierarchy",
    ],
    talkTrack: [
      {
        heading: "Kerneidé",
        bullets: [
          "Flyt tankegang fra 'affaldssortering' til retur som værdiskabelse.",
          "Cirkulær SC holder produkter/materialer i kredsløb længst muligt.",
        ],
      },
      {
        heading: "5 RSC-processer",
        bullets: [
          "1) Core/product acquisition 2) Reverse logistics (ofte mest uforudsigelige costs)",
          "3) Inspection/sorting/testing 4) Recovery (repair/refurbish/remanufacture/recycle)",
          "5) Remarketing",
        ],
      },
      {
        heading: "7 deadly sins",
        bullets: [
          "Overser business potential; ignorerer EOL-ansvar; mangler systemintegration;",
          "Kun deltidsressourcer; RL som andenprioritet; tror problemer løser sig selv;",
          "Kobler ikke omkostning, aktivværdi og indtægter (kræv: recovered value + revenue > cost to recover).",
        ],
      },
      {
        heading: "Revenue streams & C2C",
        bullets: [
          "A) Salg af cores/råmateriale B) Salg af recovered items C) Added sales af virgin via service-/brand-augmentation.",
          "Cradle-to-cradle: design så materialer kan genindgå i tekniske/biologiske kredsløb uden værditab — ikke bare 'mindre skade'.",
          "CopyMagic: remanufacture → cannibalize → recycle (+ repair-loop). Højest værdi først.",
        ],
      },
    ],
    formulas: [],
    teacherAngles: [
      "Revenue streams i reverse SC (Larsen & Jacobsen 2016)",
      "Cradle-to-cradle concept",
      "CopyMagic's circular supply chain (Thierry et al.)",
      "Reverse logistics inkl. seven deadly sins",
    ],
    examAnswers: [
      {
        q: "Hvad er de tre grupper af revenue streams?",
        a: "A) Salg af cores/råmateriale uden forbedring. B) Salg af recovered/refurbished/remanufactured items. C) Extra salg af nye produkter via service- og brand-augmentation.",
      },
      {
        q: "Hvorfor er reverse logistics ofte den svære process?",
        a: "Fordi timing, kvalitet og volumen af returns er usikre — det skaber høje og uforudsigelige omkostninger hvis processen ikke er designet og ejet.",
      },
    ],
    crossLinks: [
      "Remanufacturing (tema 12) er den højeste recovery-option",
      "Network design: reverse flows kræver egne faciliteter/flows",
    ],
  },
  {
    id: 12,
    slug: "remanufacturing",
    title: "Remanufacturing",
    shortTitle: "Remanufacturing",
    agenda: [
      "1. Remanufacturing vs repair/refurbish/recycle",
      "2. Product recovery value hierarchy",
      "3. CopyMagic som eksempel",
      "4. Design for remanufacturing",
      "5. Markeds- og brandrisici",
      "6. Link til circular SC & revenue",
    ],
    talkTrack: [
      {
        heading: "Hvad er remanufacturing?",
        bullets: [
          "Brugt produkt skilles ad, inspiceres, kritiske dele udskiftes/opgraderes, og produktet bringes tilbage til (næsten) as-new stand med garanti.",
          "Skeln: Repair = fikse specifik fejl. Refurbish = kosmetisk/funktionsopfriskning. Recycle = nedbrydes til materiale (lavest værdi).",
        ],
      },
      {
        heading: "Value hierarchy (Thierry / CopyMagic)",
        bullets: [
          "Maksimér værdi i faldende orden: remanufacture → cannibalize (organdonation af komponenter) → recycle.",
          "Repair-loop kører parallelt for garanti/defekte dele.",
          "CopyMagic holder kopimaskiner i kredsløb længst muligt — cradle-to-cradle-logik i praksis.",
        ],
      },
      {
        heading: "Forudsætninger & risici",
        bullets: [
          "Kræver: stabil core acquisition, inspektionsevne, reservedelslager, remarketing-kanal.",
          "Produktdesign afgør genbrugbarhed (standardisering vs specialisering).",
          "Brand risk: 3. part sælger dårlig 'reman' med dit navn.",
          "Profit er ikke one-size-fits-all — afhænger af design, kundeadfærd, segment og distributionsnet.",
        ],
      },
      {
        heading: "Eksamensbro til tema 11",
        bullets: [
          "Remanufacturing er den recovery-option med højest værdi i cirkulær SC.",
          "Revenue: recovered items (gruppe B) + brand-/service-augmentation (gruppe C).",
          "Hvis reman ikke kan betale sig: cannibalize/recycle — men forsøg altid højest værdi først.",
        ],
      },
    ],
    formulas: [],
    teacherAngles: [
      "CopyMagic circular supply chain / recovery hierarchy",
      "Cradle-to-cradle vs remanufacturing i praksis",
      "Hvornår vælger man remanufacture frem for recycle?",
    ],
    examAnswers: [
      {
        q: "Hvordan adskiller remanufacturing sig fra recycling?",
        a: "Remanufacturing bevarer produktets form og det meste af den indlejrede værdi/arbejde og sælger det som as-new. Recycling ødelægger produktformen og beholder kun materiale-værdien — langt lavere recovery.",
      },
      {
        q: "Hvad skal være på plads for at remanufacturing er profitabelt?",
        a: "Pålidelig tilgang af cores, inspektion/sorting, design der tillader genbrug, remarketing-kanal, og at recovered value + revenue > cost to recover — ellers falder man ned i hierarchy'et.",
      },
    ],
    crossLinks: [
      "Sustainability (tema 11): 5 processer + revenue streams",
      "Inventory: cores og reman-parts er egen inventory-udfordring med høj usikkerhed",
    ],
  },
];

export const faulkswagonCase = {
  title: "Faulkswagon-casen (tværgående)",
  agenda: [
    "1. Case-setup: factories → DWs → CREPs",
    "2. Servicekrav 24h/48h",
    "3. Factory location = Center of Gravity",
    "4. DW location = 390 km-regel",
    "5. TL vs LTL cost-struktur",
    "6. Hvordan sænke total cost?",
  ],
  talkTrack: [
    {
      heading: "Setup",
      bullets: [
        "Centraliser produktion af 15 standardmotor-reservedele til 4 bilmærker.",
        "Kæde: Material suppliers → Factories → DWs → CREPs → lokale værksteder.",
        "Mål: minimér total cost (produktion + transport + DW-investering + lager).",
      ],
    },
    {
      heading: "Service & DW",
      bullets: [
        "85% inden 24t (~390 km), 15% inden 48t (~1170 km).",
        "DW-kapacitet 800.000 → min 16 DWs, men geografi + 390 km ⇒ ca. 19 DWs.",
        "DW på fastland nær infrastruktur — ikke på øer.",
      ],
    },
    {
      heading: "Cost-indsigt",
      bullets: [
        "Factory→DW = TL (~0,01 €/del/km). DW→CREP = LTL (~0,03 €/del/km).",
        "DW→CREP ~34%, produktion ~28%, Factory→DW ~27% ≈ 89% af cost.",
        "DW-placering vigtigere end fabriksplacering.",
        "Sænk cost: flere/bedre DW'er tættere på CREPs, omfordel produktion, vælg fabrikstype 3 (lavest unit cost).",
      ],
    },
  ],
  teacherAngles: [
    "Factory location med Center-of-Gravity",
    "Hvordan DW locations vælges",
    "Transport costs vs production costs",
    "Hvordan Faulkswagon kan reducere costs (sheet 1.10)",
  ],
};

export const examFlow = [
  {
    step: "1. Træk tema",
    detail: "Du trækker ét af 12 temaer — ikke et konkret spørgsmål.",
  },
  {
    step: "2. 60 sekunder",
    detail:
      "Orientér dig i dit A4-ark. Afskriv agendaen til venstre på tavlen. Vend papiret — No-Go bagefter.",
  },
  {
    step: "3. 5 min præsentation",
    detail:
      "Du vælger selv vinklen. Brug tavlen. Følg agendaen. Hold øje med tiden.",
  },
  {
    step: "4. Dialog",
    detail:
      "Først spørgsmål til det du fortalte → så resten af temaet → til sidst andre temaer (fairness + bredde).",
  },
  {
    step: "5. Votering",
    detail: "Du går ud. Karakter + kort feedback. Alt inkl. ca. 20 min.",
  },
];

export function getTheme(slugOrId: string | number) {
  if (typeof slugOrId === "number") {
    return themes.find((t) => t.id === slugOrId);
  }
  return (
    themes.find((t) => t.slug === slugOrId) ||
    themes.find((t) => String(t.id) === slugOrId)
  );
}

export const allPracticeQuestions = themes.flatMap((t) =>
  t.examAnswers.map((qa) => ({
    themeId: t.id,
    themeTitle: t.shortTitle,
    ...qa,
  }))
);
