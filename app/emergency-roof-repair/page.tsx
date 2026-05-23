import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";

export const metadata: Metadata = {
  title: "Emergency Roof Repair — South Fork Roofing & Chimney | East Hampton",
  description:
    "Fast emergency roof repair across East Hampton and Long Island. Storm damage, active leaks, and collapsed sections — South Fork Roofing responds fast to secure your property.",
};

export default function EmergencyRoofRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Roof Repair"
        subtitle="Storm damage, active leaks, or structural failures — South Fork Roofing responds fast across East Hampton and Long Island."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page/" },
          { label: "Emergency Roof Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Roof Repair"
        sidebarImage="/images/service-1.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Emergency Roof Repair Across The Hamptons"
        intro={[
          "When a storm tears off shingles, opens a leak, or compromises your roof's structure, you need a fast, reliable response. South Fork Roofing and Chimney provides emergency roof repair services across East Hampton and all of Long Island.",
          "Our team responds quickly to secure your property, stop active water intrusion, and assess the full scope of damage — so you know exactly what happened and what it will take to fix it right.",
        ]}
        whatWeDo={[
          "Emergency tarping and temporary weatherproofing",
          "Active leak identification and patching",
          "Storm and wind damage repair",
          "Structural assessment after major events",
          "Insurance documentation for storm damage claims",
        ]}
        whyChooseUs={[
          "Fast response across East Hampton and Long Island",
          "Insurance claims assistance for storm damage",
          "40+ years protecting Hamptons properties",
          "Free written estimate before any permanent repair",
          "Licensed, insured, and locally trusted",
        ]}
      />
      <CTAFormSection />
      <TestimonialsSection />
    </>
  );
}
