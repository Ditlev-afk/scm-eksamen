export type FourXAnswerBlock = {
  themeId: number;
  title: string;
  answers: { person: string; items: { q: string; a: string }[] }[];
};

/** Danske modelbesvarelser til 4xExplanation — selve indholdet, ikke tipstekst. */
export const fourXAnswers: FourXAnswerBlock[] = [
  {
    themeId: 1,
    title: "Strategic fit — modelbesvarelser",
    answers: [
      {
        person: "A",
        items: [
          {
            q: "Find four examples of customer priorities. How do they relate to competitive strategy?",
            a: "Eksempler: lav pris, kort leveringstid, høj produktvariation, høj service/tilgængelighed, innovation, pålidelighed. Competitive strategy vælger hvilke prioriteringer virksomheden konkurrerer på. Supply chain skal så dimensioneres til netop de valgte prioriteringer — ellers er der ikke strategic fit.",
          },
          {
            q: "Explain the three steps for achieving strategic fit.",
            a: "1) Forstå kundens usikkerhed/prioriteter (og den implied demand uncertainty, IDU). 2) Forstå supply chain capabilities på efficiency–responsiveness-spektret. 3) Sørg for at SC-strategi matcher den ønskede IDU (zone of strategic fit) — evt. ved at redesignе drivers.",
          },
          {
            q: "Explain the Responsiveness Spectrum (Fig. 2-4).",
            a: "Et kontinuum fra høj efficiency (lav cost, høj udnyttelse, langsommere reaktion) til høj responsiveness (hurtig, fleksibel, buffer, dyrere). Produkter med lav IDU hører typisk til den efficiente ende; høj IDU kræver mere responsivitet.",
          },
          {
            q: "How do environment and sustainability impact achieving/maintaining strategic fit?",
            a: "Miljøkrav, CO₂-mål og cirkulære flows ændrer både kundeprioriteter og cost-kurven (fx reverse logistics, materialvalg). Fit skal vedligeholdes: en kæde designet kun til forward efficiency kan miste fit, når sustainability bliver en del af competitive strategy.",
          },
        ],
      },
      {
        person: "B",
        items: [
          {
            q: "What are the three functional strategies, and how should they relate to competitive strategy?",
            a: "Product development, marketing & sales, og supply chain. Alle tre skal være konsistente med den overordnede competitive strategy. Hvis marketing lover 24-timers levering, mens SC er bygget til billig batch-produktion med lang LT, bryder fit sammen.",
          },
          {
            q: "Explain the six product attributes (quantity, response time, variety, service level, price, innovation).",
            a: "De seks attributter beskriver, hvad kunden efterspørger. Højere krav til response time, variety, service level og innovation øger typisk IDU. Større quantity og lavere price peger ofte mod efficiency. Attributterne oversættes til, hvor på responsiveness-spektret kæden skal ligge.",
          },
          {
            q: "Explain interfunctional scope vs intercompany scope.",
            a: "Interfunctional scope: fit på tværs af funktioner inden for virksomheden (salg, drift, udvikling). Intercompany scope: fit på tværs af virksomheder i kæden (leverandør–producent–retailer). Uden intercompany-alignment kan lokal optimum ødelægge kædens surplus.",
          },
          {
            q: "How do increasing product variety and shrinking life cycles impact strategic fit?",
            a: "Flere varianter og kortere life cycles øger IDU (sværere forecast, mere obsolescence). Det skubber zonen opad i responsiveness. En tidligere efficient kæde kan miste fit, medmindre drivers (inventory, information, fleksibel kapacitet) redesignes.",
          },
        ],
      },
      {
        person: "C",
        items: [
          {
            q: "Explain: strategic fit = consistency between customer priorities and the supply chain.",
            a: "Strategic fit betyder, at det kunden vægter (pris, hastighed, variation, service …) matcher det, supply chain faktisk kan levere til en omkostning, der stadig giver surplus. Inkonsistens = stockouts, overcost eller begge dele.",
          },
          {
            q: "How do customer needs impact Implied Demand Uncertainty (Table 2-1)? Define IDU first.",
            a: "IDU er den usikkerhed, kæden oplever som følge af de løfter/attributter, man tilbyder — ikke kun den rå markedsefterspørgsel. Kortere lead time, højere service level, flere varianter og mere innovation hæver IDU ifølge tabel 2-1.",
          },
          {
            q: "How does responsiveness impact the zone of strategic fit (Fig. 2-5)?",
            a: "Fig. 2-5 har IDU på x-aksen og responsiveness på y-aksen. Zonen er det bånd, hvor R matcher IDU. For lav R → dårlig service. For høj R → unødvendig cost. Responsiveness er altså den justerbare akse, der skal bringe kæden ind i zonen.",
          },
          {
            q: "How do globalization and increasing uncertainty impact strategic fit?",
            a: "Globalisering forlænger ofte LT, øger disruption-risiko og gør demand signaler støjende — IDU stiger. Fit kræver enten mere responsiveness (buffer, fleksibilitet, nærhed) eller aktiv reduktion af usikkerhed (lokal sourcing, bedre information, kortere kæder).",
          },
        ],
      },
      {
        person: "D",
        items: [
          {
            q: "What are the three requirements for achieving strategic fit?",
            a: "Forstå kunden (IDU/prioriteter), forstå SC-capabilities, og match dem (align drivers og strategi). Uden alle tre bliver fit tilfældigt.",
          },
          {
            q: "Explain the Cost-Responsiveness Efficiency Frontier (Fig. 2-3).",
            a: "Frontieren viser de bedste kombinationer af cost og responsiveness, der kan opnås med nuværende teknologi/processer. Man kan ikke samtidig være langt under cost og langt til højre i R uden at forbedre processerne (rykke frontier). Punkter inde i frontier er ineffektive.",
          },
          {
            q: "How does implied uncertainty impact the zone of strategic fit (Fig. 2-5)?",
            a: "Højere implied uncertainty kræver højere responsiveness for at blive i zonen. Lavere uncertainty tillader mere efficiency. Usikkerhed er derfor den vandrette driver, der bestemmer hvor højt på R-aksen man bør ligge.",
          },
          {
            q: "How do changing technology and business environment impact strategic fit?",
            a: "Ny teknologi kan flytte efficiency frontier (fx bedre IT → lavere σ → mindre ss for samme service). Ændret konkurrence, regulering eller kundepræferencer ændrer ønsket position. Fit er dynamisk: Dell-eksemplet viser skift mellem BTO/responsiv og retail/efficient over tid.",
          },
        ],
      },
    ],
  },
  {
    themeId: 3,
    title: "Distribution / network design — modelbesvarelser",
    answers: [
      {
        person: "A",
        items: [
          {
            q: "Name a suitable distribution network if the firm competes on response time — and why.",
            a: "Distributor storage med last-mile delivery, eller retail storage + pickup. Flere lagre tæt på kunden sænker response time. Trade-off: højere inventory og facilities-cost end manufacturer dropship.",
          },
          {
            q: "Explain the four network design decisions.",
            a: "1) Facility role (hvad laver sitet?). 2) Facility location (hvor?). 3) Capacity allocation (hvor stor kapacitet?). 4) Market & supply allocation (hvem forsyner hvilke markeder / får input fra hvor?).",
          },
          {
            q: "How do exchange-rate and demand risks impact network design?",
            a: "Valutarisiko kan gøre ét lavprisland dyrt overnight → favorerer diversificering eller fleksibel kapacitet. Demandrisiko favorerer ofte flere sites eller postponement, så man ikke binder for meget kapacitet ét sted. Begge kan øge cost men sænke risiko for after-tax profit.",
          },
        ],
      },
      {
        person: "B",
        items: [
          {
            q: "Name a suitable distribution network if the firm competes on high product variety — and why.",
            a: "Manufacturer storage med direct shipping (dropship) eller in-transit merge. Aggregation af inventory hos producenten gør det muligt at tilbyde stort sortiment uden at lagre alle varianter i hvert DC/butik.",
          },
          {
            q: "Explain the four network design decisions.",
            a: "Samme fire: role, location, capacity, market/supply allocation. De hænger sammen: valg af role (fx kun assembly) begrænser, hvor location og capacity giver mening.",
          },
          {
            q: "Explain Figure 5-2 (framework) in non-detailed terms.",
            a: "Et fire-fase framework: start med SC-strategi/arkitektur → vælg regioner og omtrentligt antal → identificér potentielle sites → vælg endelige sites, kapaciteter og allokeringer. Hver fase indsnævrer beslutningsrummet.",
          },
        ],
      },
      {
        person: "C",
        items: [
          {
            q: "What does capacity allocation mean?",
            a: "Hvor meget produktions-/lagerkapacitet der tildeles hvert site. Det afgør scale-fordele, fleksibilitet og evnen til at absorbere demand-chok.",
          },
          {
            q: "How does competitive strategy impact network design? Explain Phase I.",
            a: "Phase I oversætter competitive/SC-strategi til netværksarkitektur: centrale vs. lokale sites, make vs. buy, ønsket response time. Et prisfokus kan pege på få store low-cost sites; et hastighedsfokus på flere regionale sites.",
          },
          {
            q: "How do freight and fuel costs impact network design?",
            a: "Høje fragtomkostninger trækker mod flere lokale sites (kortere outbound) eller andre modes. Billig fragt favorerer centralisering og scale. Fuel-stigninger kan vende en tidligere optimal central struktur.",
          },
        ],
      },
      {
        person: "D",
        items: [
          {
            q: "What does market and supply allocation mean?",
            a: "Hvilke markeder der betjenes fra hvilke facilities, og hvilke suppliers/sites der leverer input til dem. Det er flow-allokeringen oven på location/capacity.",
          },
          {
            q: "How do tariffs and tax incentives impact network design?",
            a: "Told kan gøre lokal produktion billigere end import trods højere manufacturing cost. Skatteincitamenter og transfer pricing påvirker after-tax profit — det egentlige objektiv — så et 'dyrt' land kan være optimalt efter skat.",
          },
          {
            q: "Explain Phase II in the network design framework.",
            a: "Phase II vælger regioner og det omtrentlige antal faciliteter samt deres roller. Output er et regionalt landkort — ikke endelige adresser. Soft/hard faktorer og makroøkonomi spiller ind her.",
          },
        ],
      },
    ],
  },
  {
    themeId: 6,
    title: "Cycle inventory — modelbesvarelser",
    answers: [
      {
        person: "A",
        items: [
          {
            q: "Why does cycle inventory exist? Define cycle inventory.",
            a: "Cycle inventory findes, fordi fixed order-/setup-/transportomkostninger gør det dyrt at bestille én ad gangen. Man bestiller Q og forbruger jævnt; gennemsnitligt lager er Q/2. Det er economies of scale i lagerform.",
          },
          {
            q: "Explain the four costs that constitute ordering costs.",
            a: "Typisk: 1) buyer time / administration, 2) transport inbound der optræder pr. ordre, 3) receiving & handling, 4) andre fixed charges pr. ordre (fx setup hos leverandør der væltes over). Pointen: omkostninger der ikke stiger lineært med Q.",
          },
          {
            q: "How does the production lot size formula differ from the purchasing lot size formula?",
            a: "Purchasing EOQ antager øjeblikkelig levering af hele Q. Production lot size antager finit produktionsrate P > demand rate; lager bygges op med rate (P−d). Average inventory er lavere end Q/2 for samme Q, så optimal batch typisk større end purchasing-EOQ (korrektionsfaktor √(P/(P−d)) e.l.).",
          },
          {
            q: "What is an all-unit quantity discount?",
            a: "Når ordrestørrelsen overstiger et breakpoint, får alle enheder i ordren den lavere pris — ikke kun enhederne over breakpointet. Det skaber spring i material cost-kurven og kan gøre det optimalt at 'hoppe' til breakpoint.",
          },
        ],
      },
      {
        person: "B",
        items: [
          {
            q: "Explain formula 11.1.",
            a: "Formel 11.1 er typisk cycle inventory = Q/2 (ved jævnt forbrug og øjeblikkelig replenishment). Den kobler lot size direkte til gennemsnitligt lager.",
          },
          {
            q: "Explain the four variables D, S, C and h.",
            a: "D = annual demand (enheder/år). S = fixed cost pr. ordre. C = unit cost. h = holding cost rate (andel af C pr. år). Holding pr. enhed pr. år er h·C. EOQ balancerer (D/Q)·S med (Q/2)·hC.",
          },
          {
            q: "Explain the Best Buy example of aggregating multiple products in a single order.",
            a: "Ved at bestille flere produkter sammen deles den fixed order cost S. Hvert produkt kan få mindre lot size uden at miste EOS på ordreniveau — lavere cycle inventory pr. SKU for samme samlede fixed cost.",
          },
          {
            q: "Explain the formula for optimal frequency (11.6).",
            a: "Optimal ordrefrekvens følger af EOQ: n* = D/Q* (ordrer pr. år). Når flere produkter aggregers, vælges ofte en fælles frekvens der minimerer summen af order- og holding costs under kapacitetsbegrænsninger.",
          },
        ],
      },
      {
        person: "C",
        items: [
          {
            q: "Explain the three components in formula 11.2.",
            a: "Total annual cost for lot-sizing kombinerer typisk: annual material cost (D·C), annual order cost ((D/Q)·S) og annual holding cost ((Q/2)·hC). EOQ minimerer de to sidste (material er fast uden discount).",
          },
          {
            q: "Explain Figure 11-2.",
            a: "Figuren viser typisk order cost faldende i Q og holding cost stigende i Q; total cost er U-formet med minimum i EOQ. Pointen: for små Q → for mange ordrer; for store Q → for meget lager.",
          },
          {
            q: "Why does aggregating replenishment across products allow smaller lot sizes per product?",
            a: "Fordi S deles. Den 'effektive' fixed cost pr. produkt falder, så den Q der balancerer holding bliver mindre. Samlet truck/ordre kan stadig være stor.",
          },
          {
            q: "What is a marginal quantity discount? (term only)",
            a: "En rabat hvor kun enhederne over breakpointet får den lavere pris (også kaldet incremental discount) — i modsætning til all-unit, hvor hele ordren reprises.",
          },
        ],
      },
      {
        person: "D",
        items: [
          {
            q: "Explain the five costs that constitute inventory holding costs.",
            a: "Typisk: kapitalomkostning (opportunity cost), lagerplads, handling/labor, forsikring/skat, og risk costs (obsolescence, damage, theft). Samlet udtrykt som h·C pr. enhed pr. år.",
          },
          {
            q: "Explain Example 11-1.",
            a: "Et standard EOQ-regneeksempel: giv D, S, C, h → beregn Q* = √(2DS/hC), antal ordrer D/Q*, og sammenlign total cost med en ikke-optimal policy (fx 'bestil 100'). Viser at afvigelse fra EOQ koster, men ofte fladt nær optimum.",
          },
          {
            q: "Explain Figure 11.3 (quantity discounts).",
            a: "Figuren viser total cost med pristrin: for hvert prisinterval er der en lokal EOQ, men kun feasible i intervallet. Man sammenligner feasible EOQ'er og breakpoint-ordrer og vælger lavest total annual cost.",
          },
          {
            q: "What is a multi-echelon system?",
            a: "Et system med lager på flere niveauer i kæden (fx central DC + regionale lagre + butikker). Lot sizes og ss på ét niveau påvirker demand-processen på næste — derfor kan lokal EOQ være suboptimal for kæden.",
          },
        ],
      },
    ],
  },
];

export function getFourXAnswersForTheme(themeId: number) {
  return fourXAnswers.filter((b) => b.themeId === themeId);
}
