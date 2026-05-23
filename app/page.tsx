import "@/styles/homepage.css";
import HeroSection from "@/components/custom/hero/HeroSection";
import MarqueeTicker from "@/components/custom/ticker/MarqueeTicker";
import TrustedLogos from "@/components/custom/trusted/TrustedLogos";
import AboutSection from "@/components/custom/about/AboutSection";
import ServicesSection from "@/components/custom/services/ServicesSection";
import PricingSection from "@/components/custom/pricing/PricingSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";
import FAQSection from "@/components/custom/faq/FAQSection";
import BlogSection from "@/components/custom/blog/BlogSection";

export default function Home() {
  return (
    <>
      <div className="above-fold">
        <HeroSection />
        <MarqueeTicker />
      </div>
      <TrustedLogos />
      <AboutSection />
      <PricingSection />
      <CTAFormSection />
      <TestimonialsSection />
      <NeedServicesSection />
      <FAQSection />
      <BlogSection />
    </>
  );
}
