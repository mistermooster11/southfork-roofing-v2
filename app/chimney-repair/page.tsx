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
  title: "Chimney Repair & Cleaning — South Fork Roofing & Chimney | East Hampton",
  description:
    "Expert chimney repair, cleaning, and rebuilds across East Hampton and Long Island. Tuckpointing, cap and crown repair, liner installation, and annual inspections.",
};

export default function ChimneyRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Chimney Repair & Cleaning"
        subtitle="Expert chimney services for Hamptons homes — annual cleaning, cap and crown repair, tuckpointing, liner installation, and full rebuilds."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Chimney Repair & Cleaning" },
        ]}
      />
      <ServiceDetailSection
        activeService="Chimney Repair & Cleaning"
        sidebarImage="/images/service-3.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Chimney Services for The Hamptons"
        intro={[
          "A chimney that isn't properly maintained can cause water infiltration, structural damage, and fire hazards. South Fork Roofing and Chimney provides comprehensive chimney services for residential and commercial properties across The Hamptons and Long Island.",
          "We recommend annual chimney inspections to identify wear before it becomes a costly repair — and we handle everything from routine cleaning to full chimney rebuilds.",
        ]}
        whatWeDo={[
          "Annual chimney cleaning and inspection",
          "Cap, crown, and damper repair or replacement",
          "Tuckpointing and mortar joint restoration",
          "Flue liner installation and repair",
          "Full chimney rebuilds for severely damaged structures",
        ]}
        whyChooseUs={[
          "40+ years of chimney expertise across Long Island",
          "Free written estimate — no obligation",
          "Residential and commercial chimney services",
          "Licensed, insured, and locally trusted",
          "Annual maintenance programs available",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
