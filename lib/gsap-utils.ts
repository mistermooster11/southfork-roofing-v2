/**
 * Wraps an async GSAP useEffect body with a `cancelled` guard.
 * Prevents React StrictMode double-invoke race condition:
 *   Mount1 → gsap.set(opacity:0) → Cleanup(cancelled=true) → Mount2 runs clean
 *
 * Usage:
 *   useEffect(() => gsapEffect(async (gsap, ScrollTrigger) => {
 *     // your animation code here
 *     return () => ctx?.revert(); // optional inner cleanup
 *   }), []);
 */
export function gsapEffect(
  fn: (
    gsap: typeof import("gsap").gsap,
    ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger
  ) => Promise<(() => void) | void>
) {
  let cancelled = false;
  let innerCleanup: (() => void) | void;

  (async () => {
    const { gsap } = await import("gsap");
    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
    if (cancelled) return;
    gsap.registerPlugin(ScrollTrigger);
    innerCleanup = await fn(gsap, ScrollTrigger);
  })();

  return () => {
    cancelled = true;
    innerCleanup?.();
  };
}
