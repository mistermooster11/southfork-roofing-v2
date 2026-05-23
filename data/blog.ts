export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/how-to-spot-roof-damage-after-a-storm/",
    image: "/images/blog-1.jpg",
    date: "15",
    monthYear: "Apr '26",
    category: "Roof Repair",
    categoryHref: "/category/roof-repair/",
    title: "How to Spot Roof Damage After a Storm",
    excerpt:
      "Coastal storms in The Hamptons can cause roof damage that isn't always obvious from the ground. This guide walks homeowners through the warning signs to look for after heavy wind and rain.",
  },
  {
    slug: "/when-to-repair-vs-replace-your-roof/",
    image: "/images/blog-2.jpg",
    date: "08",
    monthYear: "Mar '26",
    category: "Roof Replacement",
    categoryHref: "/category/roof-replacement/",
    title: "When to Repair vs. Replace Your Roof: A Homeowner's Guide",
    excerpt:
      "Not every roofing problem requires a full replacement. This post breaks down the factors that determine whether a repair or a full re-roof is the smarter investment for your property.",
  },
];
