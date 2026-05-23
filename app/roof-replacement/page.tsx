import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Roof Replacement — South Fork Roofing & Chimney | East Hampton, NY",
  description:
    "Full roof replacement services across East Hampton and Long Island. Lifetime warranty shingles, insurance claims assistance, and 40+ years of Hamptons expertise.",
};

export default function RoofReplacementPage() {
  return (
    <>
      <PageHeroSection
        title="Roof Replacement"
        subtitle="Full roof replacement with lifetime warranty shingles — expert craftsmanship from a Hamptons roofing company trusted since 1985."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roof Replacement" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Replacement"
        sidebarImage="/images/service-2.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Roof Replacement for Hamptons Homes & Properties"
        intro={[
          "When repair isn't enough, a full roof replacement is the most reliable long-term investment for your property. South Fork Roofing and Chimney has performed hundreds of roof replacements across East Hampton, Southampton, and the surrounding Hamptons communities.",
          "We handle everything — tear-off, underlayment, installation, and final inspection — using materials rated for Long Island's coastal climate. Lifetime warranty shingles are available on qualifying jobs.",
        ]}
        whatWeDo={[
          "Full tear-off and new roof installation",
          "Residential, commercial, and industrial properties",
          "Lifetime warranty shingles on qualifying jobs",
          "Asphalt, metal, and specialty roofing materials",
          "Insurance claims documentation and adjuster coordination",
        ]}
        whyChooseUs={[
          "Free written estimate — no obligation",
          "Lifetime warranty shingles with manufacturer backing",
          "40+ years serving East Hampton and Long Island",
          "Insurance claims assistance for storm damage",
          "Licensed, insured, and locally trusted",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
