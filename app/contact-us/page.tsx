import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ContactSection from "@/components/custom/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us — South Fork Roofing & Chimney | East Hampton, NY",
  description:
    "Contact South Fork Roofing and Chimney for a free estimate on roofing, chimney, or emergency services across East Hampton and Long Island. Call (631) 527-6834.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeroSection
        title="Contact Us"
        subtitle="Available 24/7 — no extra charge for emergency calls. Fill out the form or call us directly."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactSection />
      <div className="contact-map">
        <iframe
          title="South Fork Roofing & Chimney — East Hampton, NY"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5!2d-72.1853!3d40.9634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8470a4e4e4e4e%3A0x0!2sEast+Hampton%2C+NY+11937!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="450"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
