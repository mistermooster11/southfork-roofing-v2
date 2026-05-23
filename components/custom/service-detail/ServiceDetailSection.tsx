"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

interface ServiceDetailSectionProps {
  /** Sidebar image */
  sidebarImage: string;
  sidebarImageWidth: number;
  sidebarImageHeight: number;
  /** Highlight matching sidebar link */
  activeService: string;
  /** Main heading (h2) */
  heading: string;
  /** Intro paragraph(s) */
  intro: string[];
  /** "What We Do" bullets */
  whatWeDo: string[];
  /** "Why Choose UnclogMe" bullets */
  whyChooseUs: string[];
}

const SIDEBAR_SERVICES = [
  { label: "Roof Repair", href: "/roof-repair/" },
  { label: "Roof Replacement", href: "/roof-replacement/" },
  { label: "Chimney Repair & Cleaning", href: "/chimney-repair/" },
  { label: "Flat Roofing", href: "/flat-roofing/" },
  { label: "Emergency Roof Repair", href: "/emergency-roof-repair/" },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="var(--color-accent)"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

export default function ServiceDetailSection({
  sidebarImage,
  sidebarImageWidth,
  sidebarImageHeight,
  activeService,
  heading,
  intro,
  whatWeDo,
  whyChooseUs,
}: ServiceDetailSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".svc-detail__sidebar", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".svc-detail__main", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="svc-detail" ref={sectionRef}>
      <div className="svc-detail__container">

        {/* ── LEFT SIDEBAR ──────────────────────── */}
        <aside className="svc-detail__sidebar">
          <div className="svc-detail__sidebar-box">
            <h3 className="svc-detail__sidebar-heading">Services</h3>
            <ul className="svc-detail__sidebar-list">
              {SIDEBAR_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className={`svc-detail__sidebar-link${
                      s.label === activeService ? " svc-detail__sidebar-link--active" : ""
                    }`}
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="svc-detail__sidebar-img-wrap">
            <Image
              src={sidebarImage}
              alt={heading}
              width={sidebarImageWidth}
              height={sidebarImageHeight}
              className="svc-detail__sidebar-img"
            />
          </div>
        </aside>

        {/* ── RIGHT MAIN CONTENT ─────────────────── */}
        <div className="svc-detail__main">
          <h2 className="svc-detail__heading">{heading}</h2>

          {intro.map((p, i) => (
            <p key={i} className="svc-detail__intro">{p}</p>
          ))}

          <h3 className="svc-detail__list-heading">What We Do</h3>
          <ul className="svc-detail__list">
            {whatWeDo.map((item, i) => (
              <li key={i} className="svc-detail__list-item">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="svc-detail__list-heading">Why Choose South Fork Roofing</h3>
          <ul className="svc-detail__list">
            {whyChooseUs.map((item, i) => (
              <li key={i} className="svc-detail__list-item">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Link href="/contact-us/" className="svc-detail__btn">
            Free Estimate
          </Link>
        </div>

      </div>
    </section>
  );
}
