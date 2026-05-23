"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { blogPosts } from "@/data/blog";

export default function BlogSection() {
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
        gsap.from(".blog__header > *", {
          y: 30, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".blog-card", {
          y: 50, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".blog__grid", start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="blog" ref={sectionRef}>
      <div className="blog__header">
        <div className="blog__eyebrow">Our Blog</div>
        <h2 className="blog__heading">Built on Experience. Shared Through Knowledge.</h2>
        <Link href="/blog/" className="blog__view-btn">
          View Blog
        </Link>
      </div>

      <div className="blog__grid">
        {blogPosts.map((post, i) => (
          <article key={i} className="blog-card">
            <div className="blog-card__media">
              <Link href={post.slug}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={640}
                  height={800}
                  className="blog-card__img"
                />
              </Link>
            </div>
            <div className="blog-card__meta">
              <Link href={`/2026/02/02/`} className="blog-card__date">
                <span className="blog-card__day">{post.date}</span>
                <span className="blog-card__month">{post.monthYear}</span>
              </Link>
            </div>
            <div className="blog-card__labels">
              <Link href={post.categoryHref} className="blog-card__category">
                {post.category}
              </Link>
            </div>
            <h4 className="blog-card__title">
              <Link href={post.slug}>{post.title}</Link>
            </h4>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <div className="blog-card__more">
              <Link href={post.slug} className="blog-card__read-more">
                Read More
                <svg viewBox="0 0 13 20" width="10" height="16">
                  <polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
