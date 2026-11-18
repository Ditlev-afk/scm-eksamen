export type FourXBlock = {
  themeId: number;
  edition: string;
  title: string;
  questions: { person: string; items: string[] }[];
};

/** Official 4xExplanation prompts distilled from DTU Learn (prefer 7th ed. where available). */
export const fourXBlocks: FourXBlock[] = [
  {
    themeId: 1,
    edition: "7th",
    title: "Strategic supply chain fit (Chapter 2)",
    questions: [
      {
        person: "A",
        items: [
          "Find four examples of customer priorities. How do they relate to competitive strategy?",
          "Explain the three steps for achieving strategic fit.",
          "Explain the Responsiveness Spectrum (Fig. 2-4).",
          "How do environment and sustainability impact achieving/maintaining strategic fit?",
        ],
      },
      {
        person: "B",
        items: [
          "What are the three functional strategies, and how should they relate to competitive strategy?",
          "Explain the six product attributes (quantity, response time, variety, service level, price, innovation).",
          "Explain interfunctional scope vs intercompany scope.",
          "How do increasing product variety and shrinking life cycles impact strategic fit?",
        ],
      },
      {
        person: "C",
        items: [
          "Explain: strategic fit = consistency between customer priorities and the supply chain.",
          "How do customer needs impact Implied Demand Uncertainty (Table 2-1)? Define IDU first.",
          "How does responsiveness impact the zone of strategic fit (Fig. 2-5)?",
          "How do globalization and increasing uncertainty impact strategic fit?",
        ],
      },
      {
        person: "D",
        items: [
          "What are the three requirements for achieving strategic fit?",
          "Explain the Cost-Responsiveness Efficiency Frontier (Fig. 2-3).",
          "How does implied uncertainty impact the zone of strategic fit (Fig. 2-5)?",
          "How do changing technology and business environment impact strategic fit?",
        ],
      },
    ],
  },
  {
    themeId: 3,
    edition: "7th",
    title: "Distribution / Network Design (Ch. 4–5 arketyper + faser)",
    questions: [
      {
        person: "A",
        items: [
          "Name a suitable distribution network if the firm competes on response time — and why.",
          "Explain the four network design decisions.",
          "How do exchange-rate and demand risks impact network design?",
        ],
      },
      {
        person: "B",
        items: [
          "Name a suitable distribution network if the firm competes on high product variety — and why.",
          "Explain the four network design decisions.",
          "Explain Figure 5-2 (framework) in non-detailed terms.",
        ],
      },
      {
        person: "C",
        items: [
          "What does capacity allocation mean?",
          "How does competitive strategy impact network design? Explain Phase I.",
          "How do freight and fuel costs impact network design?",
        ],
      },
      {
        person: "D",
        items: [
          "What does market and supply allocation mean?",
          "How do tariffs and tax incentives impact network design?",
          "Explain Phase II in the network design framework.",
        ],
      },
    ],
  },
  {
    themeId: 6,
    edition: "7th",
    title: "Inventory I — Cycle inventory (Chapter 11)",
    questions: [
      {
        person: "A",
        items: [
          "Why does cycle inventory exist? Define cycle inventory.",
          "Explain the four costs that constitute ordering costs.",
          "How does the production lot size formula differ from the purchasing lot size formula?",
          "What is an all-unit quantity discount?",
        ],
      },
      {
        person: "B",
        items: [
          "Explain formula 11.1.",
          "Explain the four variables D, S, C and h.",
          "Explain the Best Buy example of aggregating multiple products in a single order.",
          "Explain the formula for optimal frequency (11.6).",
        ],
      },
      {
        person: "C",
        items: [
          "Explain the three components in formula 11.2.",
          "Explain Figure 11-2.",
          "Why does aggregating replenishment across products allow smaller lot sizes per product?",
          "What is a marginal quantity discount? (term only)",
        ],
      },
      {
        person: "D",
        items: [
          "Explain the five costs that constitute inventory holding costs.",
          "Explain Example 11-1.",
          "Explain Figure 11.3 (quantity discounts).",
          "What is a multi-echelon system?",
        ],
      },
    ],
  },
];

export function getFourXForTheme(themeId: number) {
  return fourXBlocks.filter((b) => b.themeId === themeId);
}
