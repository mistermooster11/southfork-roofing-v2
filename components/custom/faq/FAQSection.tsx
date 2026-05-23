"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
        gsap.from(".faq__left", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".faq__item", {
          y: 30, opacity: 0, duration: 0.6, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: ".faq__right", start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" ref={sectionRef}>
      <div className="faq__container">
        {/* Left */}
        <div className="faq__left">
          <div className="faq__eyebrow">Frequently Asked Questions</div>
          <h2 className="faq__heading">
            Know More About Our Unclogging Services in Miami-Dade, broward &amp; Palm beach
          </h2>
          <p className="faq__subtext">
            Find clear answers about our residential and commercial unclogging, grease trap
            cleaning, emergency response, and ongoing maintenance services across Miami-Dade County.
          </p>
          <Link href="/faq/" className="faq__btn">
            View FAQ
          </Link>
        </div>

        {/* Right */}
        <div className="faq__right">
          {faqs.map((item, i) => (
            <div key={i} className={`faq__item${openIndex === i ? " faq__item--open" : ""}`}>
              <button
                className="faq__question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-bold">{item.q}</span>
                <span className="faq__icon" aria-hidden="true">
                  {openIndex === i ? (
                    <svg viewBox="0 0 38.2 25.9" width="20" height="14">
                      <path d="m 38.2,12.9 v 0 L 25.3,0 l -2,2 9.5,9.5 H 0 v 2.9 h 32.8 l -9.5,9.5 2,2 10.9,-11 v 0 l 1.6,-1.5 z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 16 16" width="14" height="14">
                      <path d="M14.374,15.999 L5.562,15.999 L5.562,14.374 L13.238,14.374 L0.0,1.135 L1.137,0.1 L14.374,13.236 L14.374,5.562 L15.999,5.562 L15.999,14.374 L15.999,15.999 L14.374,15.999 Z" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
