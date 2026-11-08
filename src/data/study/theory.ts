import type { ThemeTheory } from './types';

export const theoryByTheme: Record<number, ThemeTheory> = {
  1: {
    title: "Strategic fit — grundteori",
    sections: [
      { heading: "Hvad problemet egentlig er", body: "En virksomhed kan have en skarp competitive strategy og alligevel tabe, hvis supply chain ikke kan levere det, der er lovet — eller hvis den er unødvendigt dyr. Strategic fit er navnet på det match." },
      { heading: "To strategier der skal spille sammen", body: "Competitive strategy handler om kundebehov og positionering (typisk marketing/sales). Supply chain strategy handler om operations, distribution og service: hvor på spektret effektiv↔responsiv kæden skal ligge, og hvordan inventory, transport, facilities og information understøtter det." },
      { heading: "Implied demand uncertainty som bindeled", body: "Det er ikke nok at sige 'efterspørgslen svinger'. IDU spørger: hvilken usikkerhed har vi selv skabt for kæden med vores løfter? Kortere lead time, højere CSL, flere varianter og mere innovation øger IDU — også hvis den underliggende markedsefterspørgsel er uændret." },
      { heading: "Zone of strategic fit (Fig. 2-5)", body: "Tegn IU på x-aksen og responsiveness på y-aksen. Jo højere IDU, jo højere R kræves. Under zonen: for træg → stockouts og tabt salg. Over zonen: for dyr → lav surplus/profit. Eksamenspoint: fit er et bånd, ikke ét punkt." },
      { heading: "Fig. 2-6: samme IU, forskellig fordeling", body: "Kæden kan nå samme overordnede responsiveness ved at lade forskellige led absorbere usikkerheden. Retailer-tung model: stort lokalt lager/sortiment. Manufacturer-tung: fleksibel produktion, retailer mere 'ordreformidler'." },
      { heading: "Dynamisk fit", body: "Dell-eksemplet viser at fit ændrer sig med markedet. Custom/BTO/høj R kan være rigtigt i én periode; pris/retail/BTS i en anden. Derfor skal drivers kunne redesignes." },
      { heading: "Bro til resten af pensum", body: "Når fit er valgt, er drivers (tema 2) håndtagene. Distribution/network/location (3–5) bygger strukturen. Inventory/transport/coordination (6–10) driver den daglige performance. Cirkulær SC (11–12) udvider systemgrænsen." },
    ],
  },
  2: {
    title: "Drivers & metrics — grundteori",
    sections: [
      { heading: "Fra strategi til håndtag", body: "Fig. 3-1 i Chopra: competitive strategy → supply chain strategy → structure → design af drivers → metrics. Uden denne kæde bliver SC-beslutninger tilfældige." },
      { heading: "Seks drivers i to grupper", body: "Logistiske (fysisk flow): facilities, inventory, transportation. Cross-functional: information, sourcing, pricing. Hver kan drejes mod E eller R." },
      { heading: "Trade-off-logikken", body: "Mere responsiveness koster typisk slack (ekstra kapacitet, lager, hurtigere transport). Mere efficiency udnytter aktiver hårdere, men reagerer dårligere på peaks. Fit afgør hvilken vej der er rigtig." },
      { heading: "DuPont som sprog til censor", body: "ROA = margin × asset turnover. SC påvirker COGS/transport/holding (margin) og lager/anlæg/tilgodehavender (assets). En 'god' operationel idé er først god, hvis nettoeffekten på ROA/surplus er positiv." },
      { heading: "Case-mønstre", body: "Kina-fabrik: assets↑ (turnover↓) men unit cost/transport kan forbedre margin. Mere safety stock: assets↑ + holding↑, men færre stockouts kan øge sales. Fortæl altid begge sider." },
      { heading: "Metrics", body: "Hver driver har operationelle mål (fx kapacitetsudnyttelse, inventory turns, on-time delivery, forecast error). De skal kunne kobles tilbage til finansielle mål — ellers styrer man i blinde." },
    ],
  },
  3: {
    title: "Distribution network — grundteori",
    sections: [
      { heading: "Distribution ≠ network design", body: "Distribution network (Chopra ch.4) handler om hvordan varer når kunden (ship-from struktur, last-mile, drop-ship). Network design (ch.5) handler om hvor faciliteter placeres regionalt/globalt. De hænger sammen, men er ikke det samme spørgsmål." },
      { heading: "Surplus som designmål", body: "Vælg den struktur der opfylder de relevante servicefaktorer til lavest mulige samlede omkostning. Du behøver ikke maksimere alle servicefaktorer." },
      { heading: "Servicefaktorer", body: "Response time, product variety, availability, customer experience, order visibility, returnability, time-to-market. Forskellige segmenter vægter dem forskelligt." },
      { heading: "Cost-drivere", body: "Inventory, transportation, facilities, information. Direct shipping sparer inventory via aggregation men mister på transport/RT/retur. Last-mile vinder på RT/experience men mister på inventory og dyr sidste mil." },
      { heading: "Antal faciliteter", body: "Flere sites: RT↓, inventory↑ (mindre pooling), outbound↓, inbound↑. Total transport er ofte U-formet. Det er en favorit-eksamenstegning." },
      { heading: "Valgregel til tavlen", body: "High-value, low/uncertain demand, kunden vil vente → manufacturer storage/direct. Fast movers, speed/convenience, høj tæthed → distributor/last-mile." },
    ],
  },
  4: {
    title: "Network design — grundteori",
    sections: [
      { heading: "Beslutningsrum", body: "Hvor skal vi producere/lagre? Hvor store skal sites være? Hvilke markeder betjenes fra hvilke sites? Under usikkerhed, told og skat." },
      { heading: "Fire faser (Fig. 5.2)", body: "1) Strategi/arkitektur. 2) Regioner + ca. antal/rolle. 3) Potentielle sites (hard/soft infra). 4) Endeligt valg + kapacitet + allokering. Husk outputs pr. fase." },
      { heading: "Faktorkategorier", body: "Strategic (fit), macroeconomic (løn/told/skat/valuta), competitive (placering/externalities), teknologiske, infrastrukturelle m.fl. Til eksamen: vælg tre og forklar mekanismen — ikke bare list navne." },
      { heading: "CPLM", body: "Binary open/close + continuous flows. Objektiv: min produktion+transport+fixed. Constraints: kapacitet og demand. Fortolkning: få store vs flere små er et modelresultat, ikke en mavefornemmelse." },
      { heading: "Gravity", body: "Vægtet midtpunkt. God til første geografiske bud. Dårlig som eneste svar, fordi told, veje, grænser og kapacitet mangler." },
      { heading: "After-tax tænkning", body: "Et 'billigt' land kan blive dyrt efter tariffer, inventory pga. LT, risiko og skat. Network design optimerer profit efter skat, ikke kun unit manufacturing cost." },
    ],
  },
  5: {
    title: "Location decisions — grundteori",
    sections: [
      { heading: "Metoder er værktøj — ikke religion", body: "Break-even, factor rating og CoG svarer på forskellige spørgsmål. Censor vil høre hvornår hvilken metode, plus styrke/svaghed." },
      { heading: "Break-even", body: "TC=F+vQ. Find Q_BE. Under crossover vinder typisk lav F; over vinder lav v. Enkel, men blind for soft factors og risiko." },
      { heading: "Factor rating", body: "Gør blandede kriterier sammenlignelige via vægte. Styrke: soft+hard. Svaghed: subjektivitet — nævn det selv, før censor gør." },
      { heading: "Center of Gravity", body: "Transportminimerende punkt givet volumener. Regneeksempel (50,110) er godt på tavlen. Derefter: justér for praksis." },
      { heading: "Faulkswagon-bro", body: "Factory location ≈ CoG + kapacitetstype. DW location ≈ service-radius (24h/48h) + kapacitet + geo. LTL gør DW vigtigere end fabriksfinjustering." },
    ],
  },
  6: {
    title: "Cycle inventory — grundteori",
    sections: [
      { heading: "Hvorfor lager uden usikkerhed?", body: "Fordi fixed costs gør det dyrt at bestille/producere én ad gangen. Cycle inventory er prisen for economies of scale." },
      { heading: "Q/2", body: "Hvis du bestiller Q og forbruger jævnt ned til 0, er gennemsnittet Q/2. Det er definitionen — ikke safety stock." },
      { heading: "EOQ", body: "Q*=√(2DS/hC) sætter order cost og holding cost i balance. Høj S → stor Q; høj hC → lille Q. I Chopra er holding h·C." },
      { heading: "Quantity discounts", body: "All-unit vs marginal ændrer priskurven. Beslutning: total annual cost (order+hold+material). Lavest enhedspris er en fælde." },
      { heading: "Aggregation", body: "Joint ordering deler S. Kapacitet (truck/line) kan begrænse gevinsten — derfor både 11-4 og 11-5." },
      { heading: "Kobling til transport", body: "Store lots ⇒ færre shipments/lavere fixed transport pr. enhed, men højere cycle inventory. Samme EOS-logik som milk run vs direct." },
    ],
  },
  7: {
    title: "Safety inventory — grundteori",
    sections: [
      { heading: "Usikkerhedens lager", body: "Safety inventory findes fordi demand/supply over lead time er usikker. Den køber service for kapital og holding cost." },
      { heading: "Tre ledelsesspørgsmål", body: "1) Hvilket availability-niveau? 2) Hvor meget ss kræves? 3) Hvordan sænke ss uden at miste service (LT, forecast, pooling, info)?" },
      { heading: "Service-mål", body: "CSL (cyklus-sandsynlighed), fill rate (enheder), order fill rate (komplette ordrer). Bland dem ikke sammen." },
      { heading: "ss = z·σ_L", body: "Oversæt ønsket CSL til z; estimér usikkerhed i lead-time demand; gang. Højere CSL eller højere σ_L ⇒ mere ss." },
      { heading: "Review policies", body: "Continuous: ROP=DL+ss. Periodic: dæk LT+review ⇒ mere ss, men enklere admin. IT-kvalitet afgør ofte valget." },
      { heading: "Pooling", body: "Færre lagre/aggregerede forecasts sænker samlet ss. Det er spejlvendt distribution-trade-off: centralisering hjælper inventory, men kan skade RT." },
    ],
  },
  8: {
    title: "Product availability / newsvendor — grundteori",
    sections: [
      { heading: "Anden beslutningssituation end tema 7", body: "Tema 7: løbende replenishment. Tema 8: ofte one-shot/sæson hvor Q vælges før demand realiseres. Samme ord 'service', forskellig model." },
      { heading: "Co og Cu", body: "Co=c−s (for meget). Cu=p−c (for lidt). Det er marginalomkostningerne ved at afvige én enhed fra den 'rigtige' Q." },
      { heading: "Optimal CSL*", body: "CSL*=Cu/(Cu+Co). Bestil op til den fraktil af demand-fordelingen. Intuition: jo dyrere understock relativt til overstock, jo højere service." },
      { heading: "Salvage", body: "Bedre restværdi sænker Co og hæver CSL*. Dårlig outlet-kanal gør dig mere konservativ i Q." },
      { heading: "Eksamensfælde", body: "Hvis du begynder at snakke z·σ_L til et fashion one-shot spørgsmål uden Co/Cu, er du i forkert model. Sig eksplicit hvilken situation du er i." },
    ],
  },
  9: {
    title: "Transportation — grundteori",
    sections: [
      { heading: "Transport som trade-off-maskine", body: "Mode og netværk påvirker unit cost, RT, pipeline inventory og reliability. Der findes ikke 'hurtigst og billigst' samtidigt." },
      { heading: "Direct vs milk runs", body: "Direct: enkel, god ved høj volume. Milk runs: consolidation + mindre batch pr. stop, god ved lav volume hvor inventory-besparelse vinder (Ex 14-1)." },
      { heading: "TL vs LTL", body: "TL: stordrift, direkte, lav cost/enhed. LTL: fleksibel ved små flows, dyrere og mere håndtering. Faulkswagon: Factory→DW = TL; DW→CREP = LTL." },
      { heading: "Stepping Stone", body: "Når sites er valgt, resterer assignment-problemet: hvem leverer hvor. Initial løsning forbedres cyklisk til optimalitet." },
      { heading: "Kobling til inventory/fit", body: "Effektiv SC accepterer langsommere mode for EOS. Responsiv SC betaler for speed. Transportvalg er dermed et driver-valg under fit." },
    ],
  },
  10: {
    title: "Coordination — grundteori",
    sections: [
      { heading: "Lokal optimum ≠ kædeoptimum", body: "Hvis hvert led maksimerer egen profit på forvrænget information, falder total surplus. Coordination er at rette information, incitamenter og processer." },
      { heading: "Bullwhip-mekanik", body: "Retail POS svinger lidt; ordrer upstream svinger mere, fordi hvert led forecast'er på ordrer, batch'er, rationerer og reagerer på priser." },
      { heading: "Cost-konsekvenser", body: "Ustabil produktion, ekstra ss i flere led, rush transport, ujævn labor. Det er derfor bullwhip ikke kun er 'irriterende variation'." },
      { heading: "Levers", body: "Information sharing (POS, forecast, kampagner), CRP, VMI, CPFR, stabile priser/EDLP, kortere LT, allokering baseret på historik, kontrakter der aligner incitamenter." },
      { heading: "Bro til inventory", body: "Bedre info sænker σ og dermed ss for samme CSL. Coordination er en af de vigtigste måder at 'sænke ss uden at skade service'." },
    ],
  },
  11: {
    title: "Sustainability & circular SC — grundteori",
    sections: [
      { heading: "Udvid systemgrænsen", body: "Klassisk forward SC stopper ved salg. Cirkulær SC inkluderer retur, recovery og remarketing som værdiskabelse — ikke kun compliance." },
      { heading: "Fem processer", body: "Acquisition → reverse logistics → inspection/sorting → recovery → remarketing. Værdi skabes især i recovery+remarketing; usikkerhed/cost ofte i RL + acquisition." },
      { heading: "Seven deadly sins", body: "Typiske organisatoriske fejl: se RL som cost center, mangle ejer/KPI, dårlig systemintegration, ignorere EOL, tro det løser sig selv, ikke koble cost med recovered value." },
      { heading: "Revenue streams", body: "A: cores/råmateriale. B: recovered products. C: ekstra virgin sales via service-/brand-augmentation. En god besvarelse nævner alle tre grupper." },
      { heading: "C2C og hierarchy", body: "Design til kredsløb. I drift: vælg recovery-option med højest bevaret værdi først (reman før recycle)." },
    ],
  },
  12: {
    title: "Remanufacturing — grundteori",
    sections: [
      { heading: "Hvad reman er (og ikke er)", body: "Reman restore'r til nær as-new med industriel proces og typisk garanti. Repair fikser fejl. Recycle beholder kun materiale. Refurb er ofte mellemting." },
      { heading: "Value hierarchy", body: "Remanufacture → cannibalize → recycle (+ repair-loop). Rækkefølgen maksimerer indlejret energi/arbejde/funktion." },
      { heading: "Profitbetingelse", body: "Recovered value + revenue > cost to recover. Kræver cores, yield/quality, process capability og remarketing-kanal." },
      { heading: "Design og brand", body: "Modularitet/standardisering hjælper. Specialisering/limede designs dræber genbrug. 3. parts dårlig 'reman' skaber brand risk." },
      { heading: "Operationel usikkerhed", body: "Core timing, kvalitet og mix er stokastisk — derfor er reverse inventory/planning sværere end mange forward flows." },
      { heading: "Pensumplacering", body: "Bygger direkte på tema 11, men kan trækkes selvstændigt. Forvent definitioner, hierarchy, CopyMagic og business case." },
    ],
  },
};

export function getTheory(themeId: number) { return theoryByTheme[themeId]; }
