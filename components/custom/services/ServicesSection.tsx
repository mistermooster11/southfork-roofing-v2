"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { services } from "@/data/services";

export default function ServicesSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const scrollStart = useRef(0);
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
        gsap.from(".services__header > *", {
          y: 30, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".service-card", {
          y: 40, opacity: 0, duration: 0.65, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: ".services__grid", start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      scrollStart.current = el.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault(); // ngăn page scroll + image selection
      const dx = touchStartX.current - e.touches[0].clientX;
      el.scrollLeft = scrollStart.current + dx;
    };

    el.addEventListener("touchstart", handleTouchStart, { passive: true });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section className="services" ref={sectionRef}>
      {/* Section header */}
      <div className="services__header max-w-6xl! mx-auto">
        <div className="services__label">Our Services</div>
        <h2 className="services__heading">
          Expert Roofing &amp; Chimney Services for The Hamptons &amp; Long Island
        </h2>
        <p className="services__subtext">
          From emergency roof repairs to full replacements, chimney cleaning, flat roofing, gutters,
          and siding — South Fork Roofing and Chimney handles every exterior project across East Hampton and Long Island.
        </p>
      </div>

      {/* Scroll hint — chỉ hiện trên mobile */}
      <div className="services__scroll-hint">
        <span className="services__scroll-hint-text">Swipe to explore</span>
        <svg className="services__scroll-hint-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Service cards — carousel on mobile */}
      <div
        className="services__carousel-wrap"
        ref={wrapRef}
      >
        <div className="services__grid">
          {services.map((svc) => (
            <Link key={svc.number} href={svc.href} className="service-card">
              <div className="service-card__media">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  width={svc.width}
                  height={svc.height}
                  className="service-card__img"
                />
              </div>
              <span className="service-card__number">{svc.number}</span>
              <div className="service-card__body">
                <h5 className="service-card__title">{svc.title}</h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
