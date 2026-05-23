"use client";

import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";
import { useRef, useEffect } from "react";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from(".topbar", { y: -40, opacity: 0, duration: 0.6, clearProps: "all" })
          .from(".header__inner", { y: -30, opacity: 0, duration: 0.6, clearProps: "all" }, "-=0.3");
      }, headerRef);
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <header className="site-header" ref={headerRef}>
      {/* Top Bar */}
      <div className="topbar">
        <div className="topbar__inner">
          <span className="topbar__item">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
            </svg>
            SERVING THE HAMPTONS SINCE 1985
          </span>

          <span className="topbar__item--separator">|</span>

          <Link href="/contact-us" className="topbar__item">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z" />
            </svg>
            FREE ESTIMATE
          </Link>

          <span className="topbar__item--separator">|</span>

          <a href="tel:6315276834" className="topbar__item">
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
            </svg>
            (631) 527-6834
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="header__inner">
        {/* Logo */}
        <div className="header__logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="South Fork Roofing & Chimney"
              width={200}
              height={44}
              priority
              style={{ width: "100%", maxWidth: 200, height: "auto" }}
            />
          </Link>
        </div>

        {/* Nav + Mobile hamburger */}
        <NavMenu />

        {/* Desktop CTA */}
        <div className="header__cta">
          <Link href="/contact-us" className="btn-quote">
            Free Estimate
          </Link>
        </div>
      </div>
    </header>
  );
}
