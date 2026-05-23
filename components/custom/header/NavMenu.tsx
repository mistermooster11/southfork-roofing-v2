"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowUp } from "lucide-react";
import { navItems } from "@/data/nav";

export default function NavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Portal cần document.body — chỉ available sau mount
  useEffect(() => { setMounted(true); }, []);

  // Khoá scroll body khi menu mở
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const mobileNav = (
    <nav
      className={`mobile-nav${mobileOpen ? " is-open" : ""}`}
      aria-hidden={!mobileOpen}
    >
      <button
        className="mobile-nav__close"
        onClick={() => setMobileOpen(false)}
        aria-label="Close Menu"
      >
        <X size={24} strokeWidth={2} aria-hidden="true" />
      </button>
      <ul className="mobile-nav__list">
        {navItems.map((item) => (
          <li key={item.label} className="mobile-nav__item">
            <Link
              href={item.href}
              className="mobile-nav__link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
            {item.children && (
              <ul className="mobile-nav__sub">
                {item.children.map((sub) => (
                  <li key={sub.label}>
                    <Link
                      href={sub.href}
                      className="mobile-nav__sub-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="mobile-nav__item" style={{ borderBottom: "none", paddingTop: "20px" }}>
          <Link
            href="/contact-us"
            className="btn-quote"
            onClick={() => setMobileOpen(false)}
          >
            Fast Quote
          </Link>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      {/* Desktop nav */}
      <nav className="header__nav-wrapper">
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.label} className="nav-menu__item">
              <Link href={item.href} className="nav-menu__link flex! flex-row! group">
                {item.children && (
                  <ArrowUp
                    color="var(--color-accent)"
                    className="nav-menu__chevron rotate-45 group-hover:scale-125 group-hover:rotate-135 duration-100 transition-all"
                    size={13}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                )}
                <span>{item.label}</span>
              </Link>
              {item.children && (
                <ul className="nav-dropdown">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <Link href={sub.href} className="nav-dropdown__link">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger button (mobile) */}
      <button
        className="hamburger"
        onClick={() => setMobileOpen(true)}
        aria-label="Open Menu"
        aria-expanded={mobileOpen}
      >
        <Menu size={24} strokeWidth={2} aria-hidden="true" />
      </button>

      {/* Mobile nav — render vào document.body để thoát stacking context của header */}
      {mounted && createPortal(mobileNav, document.body)}
    </>
  );
}
