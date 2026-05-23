"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroSectionProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHeroSection({
  title,
  subtitle,
  breadcrumbs,
}: PageHeroSectionProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      ctx = gsap.context(() => {
        gsap.from(innerRef.current?.children ?? [], {
          y: -28, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
        });
      });
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="page-hero">
      <div className="page-hero__inner" ref={innerRef}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="page-hero__breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="page-hero__breadcrumb-sep"> / </span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="page-hero__breadcrumb-link">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="page-hero__breadcrumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="page-hero__title">{title}</h1>
        <hr className="page-hero__divider" />
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}
