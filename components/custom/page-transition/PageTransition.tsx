"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Curtain page transition — 2 lớp
 * Layer 1 (cam)  — trượt lên trước, thu hẹp sau
 * Layer 2 (đen)  — chạy theo sau cam một chút, cùng hiệu ứng
 */
export default function PageTransition() {
  const orangeRef = useRef<HTMLDivElement>(null);
  const blackRef  = useRef<HTMLDivElement>(null);
  const pathname  = usePathname();
  const isFirst   = useRef(true);

  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return; }

    let cancelled = false;
    const orange = orangeRef.current;
    const black  = blackRef.current;
    if (!orange || !black) return;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      const SLIDE_UP   = 0.9;    // phase 1: trượt lên
      const HOLD       = 0.15;   // dừng giữa
      const SLIDE_DOWN = 0.9;    // phase 2: thu lại
      const DELAY      = 0.18;   // độ trễ của lớp đen so với lớp cam

      // Reset cả 2
      gsap.set([orange, black], {
        scaleY: 0,
        transformOrigin: "bottom center",
        pointerEvents: "none",
      });
      gsap.set(orange, { pointerEvents: "auto" });

      const tl = gsap.timeline({
        onComplete: () => gsap.set([orange, black], { pointerEvents: "none" }),
      });

      // --- Lớp cam ---
      tl.to(orange, { scaleY: 1, duration: SLIDE_UP,   ease: "expo.inOut" }, 0)
        .to(orange, { duration: HOLD }, `>`)
        .to(orange, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: SLIDE_DOWN,
          ease: "expo.inOut",
        }, `>`);

      // --- Lớp đen (bắt đầu sau DELAY giây so với cam) ---
      tl.to(black, { scaleY: 1, duration: SLIDE_UP,   ease: "expo.inOut" }, DELAY)
        .to(black, { duration: HOLD }, `>`)
        .to(black, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: SLIDE_DOWN,
          ease: "expo.inOut",
        }, `>`);
    })();

    return () => { cancelled = true; };
  }, [pathname]);

  const baseStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    transform: "scaleY(0)",
    transformOrigin: "bottom center",
    pointerEvents: "none",
    willChange: "transform",
  };

  return (
    <>
      {/* Lớp đen — z-index thấp hơn để cam luôn nằm trên */}
      <div
        ref={blackRef}
        aria-hidden="true"
        style={{ ...baseStyle, backgroundColor: "var(--color-dark)", zIndex: 99998 }}
      />
      {/* Lớp cam */}
      <div
        ref={orangeRef}
        aria-hidden="true"
        style={{ ...baseStyle, backgroundColor: "var(--color-accent)", zIndex: 99999 }}
      />
    </>
  );
}

