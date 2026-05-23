"use client";

import { useEffect, useRef } from "react";

/**
 * useGsapReveal
 * Fade-up reveal animation using GSAP + ScrollTrigger.
 *
 * @param selector  - CSS selector for child elements to animate (default: "[data-reveal]")
 * @param stagger   - Stagger delay between each element (default: 0.12)
 */
export function useGsapReveal(
  selector = "[data-reveal]",
  stagger = 0.12
) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const targets = containerRef.current?.querySelectorAll(selector);
        if (!targets || targets.length === 0) return;

        gsap.fromTo(
          targets,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            stagger,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 82%",
              once: true,
            },
          }
        );
      }, containerRef);
    })();

    return () => ctx?.revert();
  }, [selector, stagger]);

  return containerRef;
}
