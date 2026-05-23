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
  title: "Roof Repair — South Fork Roofing & Chimney | East Hampton, NY",
  description:
    "Expert roof repair services across East Hampton and Long Island. Storm damage, missing shingles, leaks, and flashing repair — South Fork Roofing responds fast.",
};

export default function RoofRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Roof Repair"
        subtitle="Fast, reliable roof repair for homes and businesses across East Hampton and Long Island — storm damage, leaks, and more."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Roof Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Roof Repair"
        sidebarImage="/images/service-1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Roof Repair Services in The Hamptons"
        intro={[
          "A damaged roof can't wait. South Fork Roofing and Chimney has been responding to roof repairs across East Hampton and Long Island since 1985 — storm damage, missing shingles, active leaks, and flashing failures.",
          "Our team arrives prepared, assesses the damage honestly, and completes the repair right the first time. We also work directly with insurance adjusters on storm-related claims.",
        ]}
        whatWeDo={[
          "Missing, cracked, or curling shingles",
          "Flashing repair around chimneys, skylights & vents",
          "Active leak diagnosis and waterproofing",
          "Storm and wind damage repair",
          "Emergency same-day response available",
        ]}
        whyChooseUs={[
          "Free written estimate before any work begins",
          "Licensed and insured roofing professionals",
          "Insurance claims assistance for storm damage",
          "40+ years serving East Hampton and Long Island",
          "Reliable, transparent, and efficient service",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
