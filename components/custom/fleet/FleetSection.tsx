"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function FleetSection() {
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
        gsap.from(".fleet-section__text", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".fleet-section__img", {
          scale: 0.92, opacity: 0, duration: 0.7, ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="fleet-section" ref={sectionRef}>
      <div className="fleet-section__container">
        {/* LEFT — text */}
        <div className="fleet-section__text">
          <div className="fleet-section__eyebrow">Our Fleet</div>
          <h2 className="fleet-section__heading">
            Modern Trucks Powered by Advanced Technology
          </h2>
          <p className="fleet-section__intro">
            Our fleet includes three modern service trucks equipped with advanced
            technology to handle grease trap cleaning, commercial and residential
            unclogging, and emergency services efficiently. This allows us to deliver
            faster response times, precise service execution, and reliable results across
            Miami-Dade County.
          </p>
        </div>

        {/* RIGHT — 3 images stacked */}
        <div className="fleet-section__images">
          <Image
            src="/wp-assets/About-Row-IMG-1.webp"
            alt="UnclogMe service truck"
            width={1024}
            height={909}
            className="fleet-section__img"
          />
          <Image
            src="/wp-assets/Truck-Example-2.webp"
            alt="UnclogMe truck example"
            width={1024}
            height={683}
            className="fleet-section__img"
          />
          <Image
            src="/wp-assets/Truck-Example-3.webp"
            alt="UnclogMe truck example"
            width={1024}
            height={541}
            className="fleet-section__img"
          />
        </div>
      </div>
    </section>
  );
}
