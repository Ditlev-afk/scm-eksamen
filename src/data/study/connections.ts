import type { ThemeConnection, CurriculumStory } from './types';

export const curriculumStory: CurriculumStory = {
  title: "Hvordan hele pensum hænger sammen",
  paragraphs: ["Start med strategic fit (tema 1): hvad vil kunden have, og hvor usikkert er det for kæden (IDU)? Det bestemmer om SC skal være effektiv eller responsiv.", "Drivers & metrics (tema 2) er oversættelsen fra strategi til praksis — og DuPont viser hvordan valgene rammer ROA.", "Derefter bygges strukturen: distribution network (3) for flow til kunden, network design (4) og location (5) for hvor kapacitet skal stå.", "Drift og planlægning: cycle inventory (6) for EOS/batches, safety inventory (7) for usikkerhed, product availability/newsvendor (8) for one-shot sæson.", "Transportation (9) binder lokationer sammen og trader med lager/RT. Coordination (10) forklarer hvorfor lokal optimering (bullwhip) ødelægger surplus — og hvordan info/VMI/CRP retter det.", "Til sidst udvides systemgrænsen: sustainability/circular (11) og remanufacturing (12) tilføjer reverse flows, recovery hierarchy og nye revenue streams.", "Mundtligt tip: når dialogen går 'uden for tema', hop langs pilene ovenfor. Fx safety stock → info sharing; distribution → pooling; Faulkswagon → CoG + TL/LTL."],
};

export const connections: ThemeConnection[] = [
  { from: 1, to: 2, label: "Fit bestemmer E/R — drivers er håndtagene" },
  { from: 1, to: 3, label: "Fit styrer om netværket skal være quick-response eller cost-efficient" },
  { from: 2, to: 3, label: "Facilities/inventory/transport metrics formes af distributionsvalg" },
  { from: 2, to: 6, label: "Inventory-driver operationaliseres som cycle inventory/EOQ" },
  { from: 2, to: 7, label: "Inventory-driver + servicekrav → safety inventory" },
  { from: 2, to: 9, label: "Transportation-driver: mode/netværk" },
  { from: 2, to: 10, label: "Information/pricing-drivers er centrale i coordination" },
  { from: 3, to: 4, label: "Distribution-strukturen sætter krav til facility network" },
  { from: 4, to: 5, label: "Fase 4 bruger location-metoder (CoG, break-even, factor rating)" },
  { from: 3, to: 7, label: "Flere DC'er ⇒ mindre pooling ⇒ mere ss" },
  { from: 3, to: 9, label: "Ship-from valg ændrer outbound/inbound transport" },
  { from: 6, to: 9, label: "Lot size og shipment size er spejlvendte EOS-beslutninger" },
  { from: 7, to: 8, label: "Samme availability-mål, men løbende ss vs one-shot newsvendor" },
  { from: 7, to: 10, label: "Info sharing/VMI sænker σ og dermed ss" },
  { from: 8, to: 1, label: "Høj Cu/høj IDU produkter kræver mere responsive SC" },
  { from: 9, to: 5, label: "Faulkswagon: CoG + service-radius + TL/LTL cost map" },
  { from: 10, to: 6, label: "Batch ordering/promotions forvrænger ordrer og lots" },
  { from: 11, to: 12, label: "Reman er højeste recovery-option i cirkulær SC" },
  { from: 11, to: 3, label: "Reverse flows kræver egne netværks-/facility-valg" },
  { from: 12, to: 7, label: "Core/parts inventory har høj usikkerhed → safety-logik" },
  { from: 4, to: 2, label: "Ny fabrik/lager ændrer assets og dermed ROA" },
  { from: 1, to: 10, label: "Uden coordination kan lokal adfærd ødelægge et ellers rigtigt fit" },
];

export function getConnectionsForTheme(themeId: number) {
  return connections.filter((c) => c.from === themeId || c.to === themeId);
}
