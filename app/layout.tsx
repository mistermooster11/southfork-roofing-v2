import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const BASE_URL = "https://southforkroofing.com";

export const metadata: Metadata = {
  title: "South Fork Roofing & Chimney | East Hampton, NY | The Hamptons",
  description:
    "The Hamptons' trusted roofing and chimney specialists since 1985. Roof repair, roof replacement, chimney cleaning, and emergency services across East Hampton and Long Island.",
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: "South Fork Roofing & Chimney | East Hampton, NY",
    description:
      "The Hamptons' trusted roofing and chimney specialists since 1985. Roof repair, replacement, chimney cleaning, and emergency services across East Hampton and Long Island.",
    url: BASE_URL,
    siteName: "South Fork Roofing & Chimney",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "South Fork Roofing & Chimney | East Hampton, NY",
    description:
      "The Hamptons' trusted roofing and chimney specialists since 1985.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "South Fork Roofing & Chimney",
  image: `${BASE_URL}/logo-light.png`,
  url: BASE_URL,
  telephone: "+16315276834",
  address: {
    "@type": "PostalAddress",
    streetAddress: "105 Newtown Ln",
    addressLocality: "East Hampton",
    addressRegion: "NY",
    postalCode: "11937",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9634,
    longitude: -72.1848,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  description:
    "The Hamptons' trusted roofing and chimney specialists since 1985. Serving East Hampton and Long Island with roof repair, replacement, chimney cleaning, and emergency services.",
  foundingDate: "1985",
  areaServed: "East Hampton, NY",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="South Fork Roofing & Chimney" expiryDate="June 20, 2026" trade="roofers" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
