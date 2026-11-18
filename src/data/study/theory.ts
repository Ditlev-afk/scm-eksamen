import type { ThemeTheory } from './types';

export const theoryByTheme: Record<number, ThemeTheory> = {
  1: {
    title: "Strategic fit — grundteori",
    sections: [
      { heading: "Hvad problemet egentlig er", body: "En virksomhed kan have en skarp competitive strategy og alligevel tabe, hvis supply chain ikke kan levere det, der er lovet — eller hvis den er unødvendigt dyr. Strategic fit er navnet på det match mellem hvad kunden prioriterer og hvad kæden faktisk kan levere til en acceptabel omkostning." },
      { heading: "To strategier der skal spille sammen", body: "Competitive strategy handler om kundebehov og positionering (typisk marketing/sales): kvalitet, hastighed, pris, innovation, service. Supply chain strategy handler om operations, distribution og service: hvor på spektret effektiv↔responsiv kæden skal ligge, og hvordan inventory, transport, facilities og information understøtter det. De tre funktionelle strategier (product development, marketing/sales, supply chain) skal alle pege samme vej som den overordnede competitive strategy." },
      { heading: "Implied demand uncertainty som bindeled", body: "Det er ikke nok at sige 'efterspørgslen svinger'. Implied demand uncertainty (IDU) spørger: hvilken usikkerhed har vi selv skabt for kæden med vores løfter? Kortere lead time, højere CSL, flere varianter og mere innovation øger IDU — også hvis den underliggende markedsefterspørgsel er uændret. Tabel 2-1 i Chopra kobler kundeattributter direkte til IDU." },
      { heading: "Zone of strategic fit (Fig. 2-5)", body: "Tegn IU på x-aksen og responsiveness på y-aksen. Jo højere IDU, jo højere R kræves. Under zonen: for træg → stockouts og tabt salg. Over zonen: for dyr → lav surplus/profit. Fit er et bånd, ikke ét punkt. Cost-responsiveness frontier (Fig. 2-3) viser samtidig, at man ikke kan være både billigst og hurtigst uden innovation i processerne." },
      { heading: "Fig. 2-6: samme IU, forskellig fordeling", body: "Kæden kan nå samme overordnede responsiveness ved at lade forskellige led absorbere usikkerheden. Retailer-tung model: stort lokalt lager/sortiment. Manufacturer-tung: fleksibel produktion, retailer mere 'ordreformidler'. Scope-begreberne interfunctional vs intercompany siger, om fit kun gælder inden for firmaet eller på tværs af partnere." },
      { heading: "Dynamisk fit", body: "Dell-eksemplet viser at fit ændrer sig med markedet. Custom/BTO/høj R kan være rigtigt i én periode; pris/retail/BTS i en anden. Derfor skal drivers kunne redesignes, når life cycles skrumper, variety stiger, eller teknologi ændrer omkostningskurven." },
      { heading: "Bro til resten af pensum", body: "Når fit er valgt, er drivers (tema 2) håndtagene. Distribution/network/location (3–5) bygger strukturen. Inventory/transport/coordination (6–10) driver den daglige performance. Cirkulær SC (11–12) udvider systemgrænsen." },
    ],
  },
  2: {
    title: "Drivers & metrics — grundteori",
    sections: [
      { heading: "Fra strategi til håndtag", body: "Fig. 3-1 i Chopra: competitive strategy → supply chain strategy → structure → design af drivers → metrics. Uden denne kæde bliver SC-beslutninger tilfældige. Drivers er de konkrete håndtag, ledelsen kan dreje." },
      { heading: "Seks drivers i to grupper", body: "Logistiske (fysisk flow): facilities, inventory, transportation. Cross-functional: information, sourcing, pricing. Hver kan drejes mod efficiency (lav unit cost, høj udnyttelse) eller responsiveness (hurtig reaktion, buffer, fleksibilitet)." },
      { heading: "Trade-off-logikken", body: "Mere responsiveness koster typisk slack (ekstra kapacitet, lager, hurtigere transport). Mere efficiency udnytter aktiver hårdere, men reagerer dårligere på peaks. Fit afgør hvilken vej der er rigtig for det pågældende produkt/segment." },
      { heading: "DuPont som finansielt sprog", body: "ROA = margin × asset turnover. SC påvirker COGS/transport/holding (margin) og lager/anlæg/tilgodehavender (assets). En operationel idé er først god, hvis nettoeffekten på ROA/surplus er positiv. Customer priorities (Slack & Lewis): Quality, Speed, Dependability, Flexibility, Cost — virksomheden konkurrerer typisk på få af dem." },
      { heading: "Case-mønstre", body: "Kina-fabrik: assets↑ (turnover↓) men unit cost/transport kan forbedre margin. Mere safety stock: assets↑ + holding↑, men færre stockouts kan øge sales. Fortæl altid begge sider af trade-offen." },
      { heading: "Metrics", body: "Hver driver har operationelle mål (fx kapacitetsudnyttelse, inventory turns, on-time delivery, forecast error). De skal kunne kobles tilbage til finansielle mål — ellers styrer man i blinde." },
    ],
  },
  3: {
    title: "Distribution network — grundteori",
    sections: [
      { heading: "Distribution ≠ network design", body: "Distribution network (Chopra ch.4) handler om hvordan varer når kunden (ship-from struktur, last-mile, drop-ship). Network design (ch.5) handler om hvor faciliteter placeres regionalt/globalt. De hænger sammen, men er ikke det samme spørgsmål." },
      { heading: "Surplus som designmål", body: "Vælg den struktur der opfylder de relevante servicefaktorer til lavest mulige samlede omkostning. Du behøver ikke maksimere alle servicefaktorer — kun dem, der matcher competitive strategy." },
      { heading: "Servicefaktorer", body: "Response time, product variety, availability, customer experience, order visibility, returnability, time-to-market. Forskellige segmenter vægter dem forskelligt: mode vs. dagligvarer vs. B2B-reservedele." },
      { heading: "Cost-drivere", body: "Inventory, transportation, facilities, information. Direct shipping sparer inventory via aggregation men mister på transport/RT/retur. Last-mile vinder på RT/experience men mister på inventory og dyr sidste mil." },
      { heading: "Seks arketyper", body: "1) Manufacturer storage + direct shipping (dropship). 2) Manufacturer storage + direct + in-transit merge. 3) Distributor storage + package carrier. 4) Distributor storage + last-mile. 5) Manufacturer/distributor storage + customer pickup. 6) Retail storage + customer pickup. High-value, usikker demand, kunden vil vente → manufacturer storage. Fast movers, speed, høj tæthed → distributor/last-mile/retail." },
      { heading: "Antal faciliteter", body: "Flere sites: RT↓, inventory↑ (mindre pooling), outbound↓, inbound↑. Total transport er ofte U-formet. Tegn gerne kurven: inventory stiger, transport falder først, facilities stiger." },
    ],
  },
  4: {
    title: "Network design — grundteori",
    sections: [
      { heading: "Beslutningsrum", body: "Hvor skal vi producere/lagre? Hvor store skal sites være? Hvilke markeder betjenes fra hvilke sites? Under usikkerhed, told og skat. Målet er after-tax profit plus ønsket responstid — ikke kun lavest unit manufacturing cost." },
      { heading: "Fire faser (Fig. 5.2)", body: "1) Strategi/arkitektur: hvilke roller skal faciliteter have? 2) Regioner + ca. antal/rolle. 3) Potentielle sites (hard/soft infra). 4) Endeligt valg + kapacitet + allokering. Husk outputs pr. fase — det er rammen, ikke bare en liste." },
      { heading: "Faktorkategorier", body: "Strategic (fit), macroeconomic (løn/told/skat/valuta), competitive (placering/externalities), teknologiske, infrastrukturelle m.fl. Vælg tre og forklar mekanismen: fx told hæver landed cost → kan flytte produktion nærmere markedet." },
      { heading: "CPLM", body: "Capacitated Plant Location Model: binary open/close + continuous flows. Objektiv: min produktion+transport+fixed. Constraints: kapacitet og demand. Fortolkning: få store vs flere små er et modelresultat, ikke en mavefornemmelse." },
      { heading: "Gravity", body: "Vægtet midtpunkt ud fra volumener. God til første geografiske bud. Dårlig som eneste svar, fordi told, veje, grænser og kapacitet mangler." },
      { heading: "After-tax tænkning", body: "Et 'billigt' land kan blive dyrt efter tariffer, inventory pga. LT, risiko og skat. Exchange-rate og demand risk påvirker også, hvor mange sites man vil have (diversifikation vs. scale)." },
    ],
  },
  5: {
    title: "Location decisions — grundteori",
    sections: [
      { heading: "Tre metoder, tre spørgsmål", body: "Break-even, factor rating og Center of Gravity svarer på forskellige spørgsmål. Break-even: ved hvilket volumen er site A billigere end B? Factor rating: hvordan sammenlignes blanding af hard og soft faktorer? CoG: hvor minimeres transportafstand × volumen?" },
      { heading: "Break-even", body: "TC = F + vQ. Find crossover-volumen Q_BE mellem to (eller flere) sites. Under crossover vinder typisk lav F; over vinder lav v. Enkel grafisk og matematisk, men blind for soft factors, kapacitet og risiko." },
      { heading: "Factor rating", body: "Vælg faktorer → giv vægte (sum 1 eller 100) → score hvert site → vægtet sum. Styrke: kan inkludere politisk risiko, clustering, proximity to markets. Svaghed: subjektivitet i både vægte og scores — følsomhedsanalyse hjælper." },
      { heading: "Center of Gravity", body: "x* = Σ(xᵢ·Vᵢ)/ΣVᵢ, y* = Σ(yᵢ·Vᵢ)/ΣVᵢ. Giver et transportminimerende punkt givet volumener. Regneeksempel (fx 50,110) er godt på tavlen. Justér derefter for veje, grænser, kapacitet og servicekrav." },
      { heading: "Syv typiske faktorer", body: "Labor productivity, exchange rates/currency risk, costs (tax, transportation), political risk/attitudes, proximity to markets, proximity to suppliers, clustering. Service-location vægter ofte kundetæthed; industri vægter inputomkostninger og transport." },
      { heading: "Faulkswagen-bro", body: "Factory location ≈ CoG + kapacitetstype. DW location ≈ service-radius (24h/48h) + kapacitet + geo. LTL gør DW vigtigere end fabriksfinjustering, fordi sidste mil bliver dyr og kompleks." },
    ],
  },
  6: {
    title: "Cycle inventory — grundteori",
    sections: [
      { heading: "Hvorfor lager uden usikkerhed?", body: "Fordi fixed costs gør det dyrt at bestille/producere én ad gangen. Cycle inventory er prisen for economies of scale: man bestiller Q og forbruger jævnt ned." },
      { heading: "Q/2", body: "Hvis du bestiller Q og forbruger jævnt ned til 0, er gennemsnittet Q/2. Det er definitionen på cycle inventory — ikke safety stock. Inventory turns ≈ D/(Q/2)." },
      { heading: "EOQ (purchasing)", body: "Q* = √(2DS/hC) sætter annual order cost (D/Q)·S og annual holding cost (Q/2)·hC i balance. Høj S → stor Q; høj hC → lille Q. D = annual demand, S = fixed order cost, C = unit cost, h = holding rate." },
      { heading: "Production lot size", body: "Når produktion sker med rate P > demand rate d, bygges lager langsommere op. Optimal batch bliver større end purchasing-EOQ, fordi average inventory er lavere end Q/2 for samme Q (korrektionsfaktor (1−d/P))." },
      { heading: "Quantity discounts", body: "All-unit: hele ordren får den lavere pris over breakpoint. Marginal: kun enheder over breakpoint. Beslutning: total annual cost (order+hold+material). Lavest enhedspris er en fælde, hvis holding eksploderer." },
      { heading: "Aggregation", body: "Joint ordering deler S på tværs af produkter → mindre Q pr. produkt for samme service. Kapacitet (truck/line) kan begrænse gevinsten. Kobling til transport: store lots ⇒ færre shipments, men højere cycle inventory." },
    ],
  },
  7: {
    title: "Safety inventory — lærebogsafsnit",
    sections: [
      {
        heading: "Hvad safety inventory er",
        body: "Safety inventory (ss) er den ekstra buffer, der holdes fordi demand og/eller supply over lead time er usikker. Cycle inventory (tema 6) findes også uden usikkerhed; safety inventory findes kun fordi σ > 0. Formålet er at beskytte et valgt serviceniveau mod stockouts — til gengæld binder det kapital og øger holding cost.",
      },
      {
        heading: "Tre ledelsesspørgsmål",
        body: "1) Hvilket availability-niveau ønsker vi? (CSL, fill rate eller order fill rate). 2) Hvor meget ss kræves for at nå det niveau givet usikkerhed og lead time? 3) Hvordan kan vi sænke ss uden at miste service — typisk via kortere LT, bedre forecast, pooling eller informationsdeling?",
      },
      {
        heading: "Service-mål — bland dem ikke sammen",
        body: "Cycle service level (CSL): sandsynlighed for ikke at gå i stockout i en replenishment-cyklus. Fill rate: andel af efterspurgte enheder der leveres fra lager. Order fill rate: andel komplette ordrer. CSL er det mest brugte i simple z-formler; fill rate er ofte mere relevant for kunden. Samme CSL kan give meget forskellig fill rate afhængigt af lot size.",
      },
      {
        heading: "Grundformel: ss = z · σ_L",
        body: "Oversæt ønsket CSL til z via normalfordelingens fraktil (fx CSL 0,95 → z ≈ 1,65; 0,99 → z ≈ 2,33). Estimer standardafvigelsen af demand over lead time, σ_L. Så er ss = z·σ_L. Hvis demand pr. periode har std.afv. σ_D og lead time er L perioder (konstant), er σ_L = σ_D·√L. Hvis L også er usikker, udvides formlen med ekstra led for LT-varians.",
      },
      {
        heading: "Reorder point og review policies",
        body: "Continuous review: bestil når lager når ROP = D_L + ss, hvor D_L er forventet demand over LT. Periodic review: man bestiller kun ved faste tidspunkter; ordren skal dække LT + review interval, så ss bliver typisk større. Continuous kræver bedre IT/tracking; periodic er administrativt enklere.",
      },
      {
        heading: "Eksempel (tal)",
        body: "Ugentlig demand μ = 100, σ_D = 20, L = 4 uger, CSL = 95 % (z = 1,65). Så D_L = 400, σ_L = 20·√4 = 40, ss = 1,65·40 ≈ 66, ROP ≈ 466. Hvis L kortes til 1 uge: σ_L = 20, ss ≈ 33 — halvering af LT giver ikke nødvendigvis halv ss (√L-effekten), men her falder ss markant.",
      },
      {
        heading: "Pooling og aggregation",
        body: "Hvis to lagre med uafhængig demand (σ₁, σ₂) samles, er σ_pool = √(σ₁²+σ₂²) < σ₁+σ₂. Samlet ss falder for samme CSL. Det er spejlvendt distribution-trade-off: centralisering hjælper inventory, men kan skade response time. Delayed differentiation / common components giver samme matematiske gevinst.",
      },
      {
        heading: "Kobling til forecast og coordination",
        body: "Bedre forecast sænker σ_D og dermed ss. Informationsdeling (POS, CPFR) og kortere LT er de vigtigste ikke-lager-værktøjer til at holde service uden at binde kapital. Det er broen til tema 10.",
      },
    ],
  },
  8: {
    title: "Product availability / Newsvendor — lærebogsafsnit",
    sections: [
      {
        heading: "Anden beslutningssituation end safety stock",
        body: "Tema 7 handler om løbende replenishment: man genbestiller, og ss beskytter over LT. Tema 8 (newsvendor) handler om one-shot eller sæson: Q vælges før demand realiseres, og overskud/underskud afregnes til salvage/lost margin. Fashion, elektronik-lancering, julevarer og aviser er klassiske eksempler. Samme ord 'service' — forskellig model.",
      },
      {
        heading: "Co og Cu — marginalomkostningerne",
        body: "Cost of overstocking Co = c − s, hvor c er indkøbs-/produktionspris og s er salvage (restværdi, outlet, scrap). Cost of understocking Cu = p − c, hvor p er salgspris (eller p − c plus goodwill). Co er tabet ved at have én enhed for meget; Cu er tabet ved at mangle én enhed.",
      },
      {
        heading: "Optimal CSL* = Cu / (Cu + Co)",
        body: "Den optimale cyklus-service er fraktilen Cu/(Cu+Co) af demand-fordelingen. Intuition: hvis understock er dyrt relativt til overstock (høj Cu, lav Co), bestiller du højt i fordelingen. Hvis resten er værdiløs og margin lille, bestiller du konservativt. Find Q* som den Q hvor P(Demand ≤ Q) = CSL*.",
      },
      {
        heading: "Normalfordelt demand — regneopskrift",
        body: "Hvis demand ~ N(μ, σ): Q* = μ + z·σ, hvor z = Φ⁻¹(CSL*). Eksempel: μ = 350, σ = 100, c = 100, p = 180, s = 70. Så Co = 30, Cu = 80, CSL* = 80/110 ≈ 0,727 → z ≈ 0,60 → Q* ≈ 350 + 60 = 410. Forventet leftover og stockout kan derefter estimeres med loss-funktioner.",
      },
      {
        heading: "Salvage og kanaler",
        body: "Bedre outlet/kanal hæver s → sænker Co → hæver CSL* og Q*. Dårlig restværdi gør dig konservativ. Det forklarer, hvorfor firms investerer i secondary markets, reman/remarketing (tema 11–12) eller fleksible designs, der kan sælges i flere kanaler.",
      },
      {
        heading: "Flere perioder og OUL",
        body: "I en base-stock / order-up-to model for kort sæson med review kan OUL sættes efter samme newsvendor-fraktil over den relevante dækningsperiode. Pointen er stadig Co/Cu — ikke z·σ_L fra kontinuerlig replenishment uden salvage-logik.",
      },
      {
        heading: "Typisk forveksling",
        body: "Hvis situationen er fashion one-shot, og man begynder at snakke ROP = D_L + z·σ_L uden Co/Cu, er man i forkert model. Sig eksplicit: 'her er Q en engangsbeslutning før demand; optimal fraktil er Cu/(Cu+Co)'.",
      },
    ],
  },
  9: {
    title: "Transportation — lærebogsafsnit",
    sections: [
      {
        heading: "Transport som trade-off-maskine",
        body: "Mode og netværk påvirker unit cost, response time, pipeline inventory og reliability. Der findes ikke 'hurtigst og billigst' samtidigt. Valget skal matche strategic fit: effektiv SC accepterer langsommere mode for economies of scale; responsiv SC betaler for speed.",
      },
      {
        heading: "Direct shipping vs milk runs",
        body: "Direct: hver leverandør/fabrik kører direkte til destination — enkel, god ved høj volume. Milk runs: én rute samler/afleverer flere stop — consolidation + mindre batch pr. stop. Ved lav volume kan milk runs vinde, fordi inventory/lot-size-effekter og delte fixed costs (Ex 14-1 i Chopra) slår den simple direkte tur.",
      },
      {
        heading: "TL vs LTL vs package",
        body: "Truckload (TL): fyldt lastbil, direkte, lav cost pr. enhed, god ved store flows. Less-than-truckload (LTL): fleksibel ved små flows, dyrere pr. enhed, mere håndtering og ofte længere LT. Package carriers: endnu mindre sendinger, højere unit cost, hurtig last-mile. Faulkswagen-mønster: Factory→DW typisk TL; DW→CREP/små kunder typisk LTL.",
      },
      {
        heading: "Transportmodellen (LP)",
        body: "Klassisk LP: fordel forsendelser fra m sources til n destinations for at minimere Σ cᵢⱼ·xᵢⱼ under supply- og demand-constraints. Hvis total supply ≠ total demand, tilføjes en dummy-kilde eller -destination med 0-cost. Degeneracy (for få positive shipments) håndteres med ε-metoder.",
      },
      {
        heading: "Northwest-corner og Stepping Stone",
        body: "Northwest-corner rule: byg en initial feasible løsning fra øverste venstre celle og 'brug' supply/demand op. Stepping-stone: for hver tom celle, find en cyklus og beregn opportunity cost; hvis negativ, forbedr ved at skifte flow langs cyklus. Gentag til ingen forbedring. Vogel/MODI er hurtigere varianter af samme idé.",
      },
      {
        heading: "Eksempel-tankegang",
        body: "To fabrikker (kap. 80 og 70), tre lagre (demand 50, 60, 40). Cost-matrix udfyldes; initial løsning via NW-corner; stepping-stone finder om fx rute 2→1 bør erstatte noget af 1→1. Resultatet er assignment: hvem leverer hvor — givet at sites allerede er valgt (tema 4–5).",
      },
      {
        heading: "Kobling til inventory og facilities",
        body: "Hurtigere mode sænker pipeline inventory (d·LT) og kan sænke ss (kortere L), men hæver transportcost. Flere DC'er sænker outbound distance men kan øge inbound og inventory. Transportvalg er dermed et driver-valg under fit — ikke et isoleret 'fragtafdeling'-spørgsmål.",
      },
    ],
  },
  10: {
    title: "Coordination & bullwhip — lærebogsafsnit",
    sections: [
      {
        heading: "Hvad coordination betyder",
        body: "Supply chain coordination betyder, at beslutninger maksimerer kædens samlede surplus — ikke hvert leds lokale profit på forvrænget information. Ukoordinerede led vælger lot sizes, priser og forecasts, der ser rationelle ud lokalt, men skaber ustabilitet og ekstra omkostninger upstream.",
      },
      {
        heading: "Bullwhip-effekten",
        body: "Bullwhip: variationen i ordrer forstærkes, jo længere man kommer upstream. Retail POS svinger lidt; grossistordrer mere; fabriksplaner endnu mere. Årsagen er, at hvert led typisk ser ordrer fra næste led — ikke den egentlige kundeefterspørgsel — og oveni lægger batching, sikkerhed og kampagnestøj.",
      },
      {
        heading: "Fire klassiske årsager",
        body: "1) Demand signal processing: forecast på ordrer i stedet for POS → hver opdatering forstærkes. 2) Order batching: store, sjældne ordrer (EOQ, truckfills). 3) Rationering og shortage gaming: kunder bestiller ekstra når der er knaphed. 4) Price fluctuations: fremadkøb ved kampagner/EDLP-brud skaber kunstige peaks.",
      },
      {
        heading: "Omkostningskonsekvenser",
        body: "Ustabil produktion (overtime/idle), ekstra safety stock i flere led, rush transport, ujævn labor og dårligere service trods mere lager. Bullwhip er derfor ikke kun 'irriterende variation' — det er et direkte angreb på både margin og asset turnover.",
      },
      {
        heading: "Levers — information",
        body: "Del POS-data, forecasts og kampagneplaner. CRP (continuous replenishment), VMI (vendor-managed inventory) og CPFR (collaborative planning, forecasting & replenishment) flytter beslutningen nærmere den reelle demand. Kortere lead times reducerer den periode, man skal gætte på.",
      },
      {
        heading: "Levers — incitamenter og priser",
        body: "Stabile priser / EDLP reducerer fremadkøb. Allokering baseret på historisk salg (ikke aktuelle ordrer) dæmper shortage gaming. Kontrakter (buyback, revenue sharing, quantity flexibility) kan align'e Co/Cu på tværs af led, så lokal Q nærmer sig kædeoptimal Q.",
      },
      {
        heading: "Bro til inventory",
        body: "Bedre information sænker σ og dermed ss for samme CSL (tema 7). Coordination er en af de vigtigste måder at sænke lager uden at skade service — og forklarer, hvorfor IT og samarbejde er drivers på linje med trucks og warehouses.",
      },
    ],
  },
  11: {
    title: "Sustainability & circular SC — lærebogsafsnit",
    sections: [
      {
        heading: "Udvid systemgrænsen",
        body: "Klassisk forward supply chain stopper analytisk ved salg til slutkunde. En cirkulær / reverse supply chain inkluderer retur, recovery og remarketing som værdiskabelse — ikke kun compliance eller 'grøn PR'. Surplus-begrebet udvides: værdi kan skabes efter første salg.",
      },
      {
        heading: "Fem kerneprocesser",
        body: "1) Product acquisition (cores/returns ind). 2) Reverse logistics (transport tilbage). 3) Inspection & sorting (kvalitet, route-to-recovery). 4) Recovery (repair, reman, cannibalize, recycle). 5) Remarketing (salg af recovered products/materialer). Usikkerhed og cost ligger ofte i acquisition og RL; værdi skabes især i recovery + remarketing.",
      },
      {
        heading: "Recovery hierarchy",
        body: "Bevar så meget indlejret værdi som muligt: remanufacture / refurbish før cannibalization før recycle (energi/materiale). Repair-loops kan sidde parallelt. Hierarkiet er både miljø- og økonomilogik: scrap af en fungerende motor ødelægger arbejde og energi, der allerede er betalt.",
      },
      {
        heading: "Revenue streams",
        body: "Tre typiske grupper: A) cores og råmateriale til egen proces eller salg. B) recovered products (reman/refurb) solgt med garanti/kanal. C) ekstra virgin sales via service-, take-back- eller brand-augmentation (kunden køber nyt fordi return/service er attraktiv). En god forklaring nævner alle tre.",
      },
      {
        heading: "Seven deadly sins (organisatorisk)",
        body: "Typiske fejl: se reverse logistics kun som cost center; mangle ejer og KPI; dårlig systemintegration mellem forward og reverse; ignorere end-of-life i design; tro markedet løser core-flow selv; ikke koble recovery-cost med recovered value; undervurdere kvalitet/brand-risiko ved 3. parts 'reman'.",
      },
      {
        heading: "C2C og design",
        body: "Cradle-to-cradle / design for circularity: modularitet, standardisering, adskillelige materialer. Limede, specielle designs dræber genbrug. Sustainability metrics (CO₂, waste, recovery rate) skal kobles til de samme drivers som forward SC — ellers bliver det et sideprojekt.",
      },
      {
        heading: "Bro til remanufacturing",
        body: "Tema 12 dykker ned i reman som konkret recovery-option: definition, value hierarchy, profitbetingelse og operationel usikkerhed i cores. Tema 11 er rammen; tema 12 er den industrielle proces.",
      },
    ],
  },
  12: {
    title: "Remanufacturing — grundteori",
    sections: [
      { heading: "Hvad reman er (og ikke er)", body: "Remanufacturing restore'r et produkt til nær as-new med industriel proces, udskiftning af slidte dele og typisk garanti. Repair fikser en fejl. Refurbish er ofte kosmetisk/delvis. Recycle beholder kun materiale. Reman bevarer produktets form og meget af den indlejrede værdi." },
      { heading: "Value hierarchy", body: "Remanufacture → cannibalize → recycle (+ repair-loop). Rækkefølgen maksimerer indlejret energi, arbejde og funktion. Vælg den højest mulige option givet core-kvalitet og efterspørgsel." },
      { heading: "Profitbetingelse", body: "Recovered value + revenue > cost to recover. Kræver stabil core-forsyning, acceptabel yield/quality, process capability og en remarketing-kanal. Uden kanal er reman kun omkostning." },
      { heading: "Design og brand", body: "Modularitet og standardisering hjælper adskillelse og genbrug. Specialisering og limede designs dræber genbrug. Dårlig 3. parts 'reman' kan skabe brand risk — derfor QA og tydelig produktidentitet." },
      { heading: "Operationel usikkerhed", body: "Core timing, kvalitet og mix er stokastisk. Reverse inventory og planning er derfor sværere end mange forward flows: man ved ikke præcis hvad der kommer ind, eller hvornår." },
      { heading: "Pensumplacering", body: "Bygger direkte på tema 11, men kan trækkes selvstændigt. Forvent definitioner, hierarchy, workshop-case (fx CopyMagic-lignende) og business case. Faulkswagen er tværgående og erstatter ikke tema 12." },
    ],
  },
};

export function getTheory(themeId: number) { return theoryByTheme[themeId]; }
