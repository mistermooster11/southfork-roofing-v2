"use client";

import Autoplay from "embla-carousel-autoplay";
import { useRef, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { reviews } from "@/data/testimonials";


function StarIcon() {
  return (
    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f4b400">
      <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
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
        gsap.from(".testimonials__header", {
          x: -50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".testimonials__summary", {
          x: 50, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
        gsap.from(".testimonials__carousel-wrap", {
          y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials__carousel-wrap", start: "top 88%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials__container">
        {/* Left: 60% — header text */}
        <div className="testimonials__header">
          <div className="testimonials__eyebrow">24/7 at no extra charge</div>
          <h2 className="testimonials__heading">Trusted When It Matters Most</h2>
          <p className="testimonials__subtext">
            Our clients rely on UnclogMe for fast response, professional service, and reliable
            solutions for residential and commercial unclogging, grease trap cleaning, and ongoing
            maintenance across Miami-Dade County.
          </p>
        </div>

        {/* Right: 40% — rating summary + Google badge */}
        <div className="testimonials__summary">
          <div className="testimonials__google-badge">
            {/* Google "G" logo */}
            <svg viewBox="0 0 24 24" width="48" height="48" xmlns="http://www.w3.org/2000/svg" className="testimonials__google-logo">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="testimonials__google-info">
              <span className="testimonials__google-label">Google</span>
              <div className="testimonials__stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="testimonials__count">
                Based on <strong>19 reviews</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews carousel */}
      <div className="testimonials__carousel-wrap">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[autoplay.current]}
          className="testimonials__embla"
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent className="">
            {reviews.map((review, i) => (
              <CarouselItem key={i} className="testimonials__embla-item ">
                <div className="review-card rounded-md bg-[#F4F4F4]!">
                  <div className="review-card__header">
                    <div className="review-card__google-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                    <img
                      src={review.avatar}
                      alt={review.name}
                      width={40}
                      height={40}
                      className="review-card__avatar"
                    />
                    <div className="review-card__info">
                      <div className="review-card__name">{review.name}</div>
                    </div>
                  </div>
                  <div className="review-card__stars">
                    {[...Array(review.rating)].map((_, j) => <StarIcon key={j} />)}
                  </div>
                  <p className="review-card__text">{review.text}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="testimonials__prev-btn" />
          <CarouselNext className="testimonials__next-btn " />
        </Carousel>
      </div>
    </section>
  );
}
