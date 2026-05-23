"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { pricingCards, type PricingCard } from "@/data/pricing";

export default function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.from(".pricing__header > *", {
          y: 30, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".pricing-card", {
          y: 50, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".pricing__carousel", start: "top 88%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  // ── Mouse drag (desktop) ─────────────────────────
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startXRef.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftRef.current = containerRef.current.scrollLeft;
    containerRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      containerRef.current.scrollLeft = scrollLeftRef.current - walk;
    },
    [isDragging]
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    if (containerRef.current) containerRef.current.style.cursor = "grab";
  }, []);

  // ── Touch swipe (mobile) ─────────────────────────
  const touchStartXRef = useRef(0);
  const touchScrollLeftRef = useRef(0);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchScrollLeftRef.current = containerRef.current.scrollLeft;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const dx = touchStartXRef.current - e.touches[0].clientX;
    containerRef.current.scrollLeft = touchScrollLeftRef.current + dx;
  }, []);

  return (
    <section className="pricing" ref={sectionRef}>
      {/* Header */}
      <div className="pricing__header">
        <div className="pricing__label">Pricing</div>
        <h2 className="pricing__heading">Request for intervention</h2>
        <p className="pricing__subtext">
          Clear and upfront pricing for residential and commercial unclogging, grease trap
          cleaning, emergency services, and ongoing maintenance — with no hidden fees
          across Miami-Dade County.
        </p>
      </div>

      {/* Drag / swipe carousel */}
      <div
        className="pricing__carousel-wrap"
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        <div className="pricing__carousel">
          {pricingCards.map((card, i) => (
            <div
              key={i}
              className={`pricing-card${card.highlight ? " pricing-card--highlight" : ""}`}
            >
              {card.highlight && (
                <div className="pricing-card__badge">Best Choice</div>
              )}
              <div className="pricing-card__body">
                {/* Price */}
                <div className="pricing-card__price-row">
                  <span className="pricing-card__currency">$</span>
                  <span className="pricing-card__amount">{card.price}</span>
                  <div className="pricing-card__note">
                    {card.note.split(".").filter(Boolean).map((n, j) => (
                      <div key={j}>{n.trim()}</div>
                    ))}
                  </div>
                </div>
                {/* Title */}
                <h3 className="pricing-card__title">{card.title}</h3>
                {/* Features */}
                <div className="pricing-card__features">
                  {card.features.map((f, j) => (
                    <div key={j} className="pricing-card__feature-row">
                      <span>{f}</span>
                      <span className="pricing-card__check" aria-hidden="true" />
                    </div>
                  ))}
                </div>
                {/* Description */}
                <p className="pricing-card__desc">
                  {card.description.split("\n\n").map((part, j) => (
                    <span key={j}>
                      {part}
                      {j < card.description.split("\n\n").length - 1 && <><br /><br /></>}
                    </span>
                  ))}
                </p>
              </div>
              {/* Button */}
              <Link
                href="/contact-us/"
                className={`pricing-card__btn${card.highlight ? " pricing-card__btn--primary" : ""}`}
              >
                <svg className="pricing-card__btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
