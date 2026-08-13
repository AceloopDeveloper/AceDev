import { useEffect, useRef, useState } from "react";

// Put this file at src/hooks/useScrollReveal.js (adjust the import path in
// each section file if your project structure differs).
//
// Usage:
//   const { ref, visible } = useScrollReveal();
//   <div ref={ref} className={`transition-all duration-700 ease-out ${
//     visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
//   }`}>
//
// Replays every time the element scrolls back into view — it isn't a
// one-shot reveal. Skips the animation entirely (always visible) if the
// user has "reduce motion" turned on at the OS level.
export default function useScrollReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}