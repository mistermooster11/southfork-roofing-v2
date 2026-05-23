"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { whyChooseUs } from "@/data/about";

export default function AboutSection() {
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
        gsap.from(".about__content", {
          x: -60, opacity: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".about__media", {
          x: 60, opacity: 0, duration: 0.9, ease: "power3.out",
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
    <section className="about" ref={sectionRef}>
      <div className="about__container">
        {/* Left Column */}
        <div className="about__content">
          <div className="about__label">About Us</div>
          <h2 className="about__heading">
            The Hamptons&rsquo; Most Trusted Roofing &amp;
            Chimney Specialists Since 1985
          </h2>
          <p className="about__text">
            South Fork Roofing and Chimney has served East Hampton and the
            surrounding Hamptons communities for over 40 years. From roof
            repairs and full replacements to chimney rebuilds, siding,
            skylights, and gutters — our experienced team handles every
            project with the craftsmanship this region demands.
          </p>
          <p className="about__text">
            We serve residential, commercial, and industrial properties across
            Long Island. Storm damage, free estimates, insurance claims
            assistance — we handle it all so you don&rsquo;t have to.
          </p>
          <h3 className="about__why-title">Why Choose Us</h3>
          <ul className="about__list">
            {whyChooseUs.map((item, i) => (
              <li key={i} className="about__list-item">
                <span className="about__list-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.4 19.4" width="19" height="19">
                    <g transform="translate(1120.5 4876.904)">
                      <g transform="translate(2 2)">
                        <path d="M-1113.4-4866.4c-0.3,0.3-0.8,0.3-1.1,0l-2.4-2.4c-0.3-0.3-0.3-0.8,0-1c0.3-0.3,0.8-0.3,1.1,0l1.9,1.9l0.5,0.5C-1113.2-4867.1-1113.2-4866.7-1113.4-4866.4z" />
                        <path d="M-1108.8-4871.1l-4.7,4.7c-0.3,0.3-0.8,0.3-1,0l-0.5-0.5l1.1-1.1l4.1-4.2c0.3-0.3,0.8-0.3,1,0C-1108.5-4871.9-1108.5-4871.4-1108.8-4871.1z" />
                        <path d="M-1112.8-4878.9c-7.3,0-9.7,2.4-9.7,9.7c0,7.3,2.4,9.7,9.7,9.7c7.3,0,9.7-2.4,9.7-9.7C-1103.1-4876.5-1105.6-4878.9-1112.8-4878.9zM-1112.8-4860.5c-6.6,0-8.8-2.2-8.8-8.8c0-6.6,2.2-8.8,8.8-8.8c6.6,0,8.8,2.2,8.8,8.8S-1106.2-4860.5-1112.8-4860.5z" />
                      </g>
                    </g>
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link href="/contact-us/" className="about__btn">
            Get A Quote
          </Link>
        </div>

        {/* Right Column */}
        <div className="about__media">
          <div className="about__img-wrap">
            <Image
              src="/images/about-row.jpg"
              alt="South Fork Roofing crew on the job"
              width={690}
              height={613}
              className="about__img"
            />
            <div className="about__exp-box w-full! md:w-fit! flex! flex-row! gap-10!">
              <div className="about__exp-icon">
                <Image
                  src="/images/vector-decoration.svg"
                  alt="Roofing Icon"
                  width={40}
                  height={40}
                />
              </div>
              <div className="about__exp-content flex flex-row gap-4">
                <span className="about__exp-number">40+</span>
                <span className="about__exp-text">
                  Years of<br />Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
