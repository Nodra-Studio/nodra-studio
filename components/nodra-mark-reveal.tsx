"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function NodraMarkReveal({ children }: { children: ReactNode }) {
  const markRef = useRef<HTMLDivElement>(null);
  const [assembled, setAssembled] = useState(false);

  useEffect(() => {
    const mark = markRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // The server-rendered mark stays visible without an observer or with reduced motion.
    if (!mark || reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.4)) {
          return;
        }

        if (!reducedMotion.matches) {
          setAssembled(true);
        }
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(mark);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={markRef}
      className="nodra-mark-reveal mx-auto w-3/5 max-w-64"
      data-assembled={assembled}
      role="img"
      aria-label="Isotipo de Nodra"
    >
      {children}
    </div>
  );
}
