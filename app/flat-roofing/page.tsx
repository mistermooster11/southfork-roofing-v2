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
  title: "Flat Roofing — South Fork Roofing & Chimney | East Hampton, NY",
  description:
    "Expert flat roofing installation and repair for commercial and residential properties across East Hampton and Long Island. EPDM, TPO, and modified bitumen.",
};

export default function FlatRoofingPage() {
  return (
    <>
      <PageHeroSection
        title="Flat Roofing"
        subtitle="Expert flat roofing installation and repair for commercial and residential properties across The Hamptons and Long Island."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Flat Roofing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Flat Roofing"
        sidebarImage="/images/service-4.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Flat Roofing for The Hamptons"
        intro={[
          "Flat roofs require specialized materials and installation techniques to handle water drainage and coastal weather conditions. South Fork Roofing and Chimney installs and repairs flat roofing systems for commercial and residential properties throughout East Hampton and Long Island.",
          "We work with EPDM, TPO, and modified bitumen systems, selecting the right material for your property's specific needs and budget.",
        ]}
        whatWeDo={[
          "New flat roof installation (EPDM, TPO, modified bitumen)",
          "Flat roof repair and patch work",
          "Drainage assessment and improvement",
          "Roof coating and waterproofing",
          "Commercial and residential flat roofing",
        ]}
        whyChooseUs={[
          "40+ years of roofing expertise across Long Island",
          "Free written estimate — no obligation",
          "Licensed and insured flat roofing professionals",
          "Materials rated for coastal weather conditions",
          "Workmanship warranty on every installation",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
