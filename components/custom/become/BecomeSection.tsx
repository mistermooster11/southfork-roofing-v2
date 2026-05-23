"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

const BENEFITS = [
  {
    num: "01",
    title: "Flexible Schedule",
    text: "Set your own hours and take jobs that fit your availability — work full-time or part-time.",
  },
  {
    num: "02",
    title: "Training Provided",
    text: "No experience needed. We train you on our equipment, processes, and safety standards.",
  },
  {
    num: "03",
    title: "Competitive Pay",
    text: "Earn competitive pay per job with performance bonuses and opportunities to grow.",
  },
  {
    num: "04",
    title: "Grow With Us",
    text: "Join a fast-growing company expanding across South Florida with room to advance.",
  },
];

export default function BecomeSection() {
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
        gsap.from(".become-section__intro", {
          y: 30, opacity: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".become-card", {
          y: 50, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".become-section__grid", start: "top 85%", once: true },
        });
        gsap.from(".become-section__cta", {
          y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: ".become-section__cta", start: "top 92%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="become-section" ref={sectionRef}>
      <div className="become-section__inner">
        <p className="become-section__intro">
          UnclogMe is expanding its network of professional uncloggers across Miami-Dade, Broward &amp; Palm Beach.
          If you are a motivated, hands-on professional looking for a rewarding career in drain and grease trap services,
          we want to hear from you.
        </p>

        <div className="become-section__grid">
          {BENEFITS.map((b) => (
            <div key={b.num} className="become-card">
              <div className="become-card__num">{b.num}</div>
              <div className="become-card__title">{b.title}</div>
              <p className="become-card__text">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="become-section__cta">
          <Link href="/contact-us/" className="become-section__cta-btn">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
