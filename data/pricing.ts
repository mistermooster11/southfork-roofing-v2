export type PricingCard = {
  price: number;
  note: string;
  title: string;
  features: string[];
  description: string;
  highlight?: boolean;
};

export const pricingCards: PricingCard[] = [
  {
    price: 0,
    note: "No obligation. Written estimate before any work begins.",
    title: "Free Inspection & Estimate",
    features: ["Full roof inspection", "Chimney & flashing check", "Written scope of work", "No-pressure consultation"],
    description:
      "Every project starts with a free inspection. We tell you exactly what we found, what we recommend, and what it will cost.",
  },
  {
    price: 0,
    note: "Price varies by scope. Call for a quote.",
    title: "Roof Repair",
    features: [
      "Missing or damaged shingles",
      "Flashing repair around chimneys & skylights",
      "Leak diagnosis and patching",
      "Storm damage repair",
    ],
    description:
      "From a few missing shingles to an active leak, our team arrives prepared and fixes it right the first time.\n\nMost repairs completed same day.",
    highlight: true,
  },
  {
    price: 0,
    note: "Lifetime warranty shingles available on qualifying jobs.",
    title: "Roof Replacement",
    features: [
      "Full tear-off and re-roof",
      "Residential & commercial",
      "Lifetime warranty shingles available",
      "Insurance claims assistance",
    ],
    description:
      "When repair isn't enough, we handle the full replacement — from tear-off to final inspection — with materials built to last.",
  },
  {
    price: 0,
    note: "Annual cleaning recommended for all fireplaces.",
    title: "Chimney Services",
    features: [
      "Chimney cleaning & inspection",
      "Crown, cap & liner repair",
      "Tuckpointing & rebuilds",
      "CSIA-standard service",
    ],
    description:
      "We service all chimney types — from annual cleaning to full rebuilds. Protecting your fireplace and your home.",
  },
];
