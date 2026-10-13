"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export function NodraMarkReveal({ children }: { children: ReactNode }) {
  const markRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "ready" | "assembled">("idle");

  useEffect(() => {
    const mark = markRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // The server-rendered mark stays visible without an observer or with reduced motion.
    if (!mark || reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    let startTimer: number | undefined;
    let played = false;

    const cancelStart = () => {
      window.clearTimeout(startTimer);
      startTimer = undefined;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (played) {
          return;
        }

        // Prepare the separated pieces while the mark is still below the fold.
        setPhase("ready");

        const visible = entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.9,
        );
        if (!visible) {
          cancelStart();
          return;
        }
        if (startTimer !== undefined) {
          return;
        }

        // Wait for the visitor to reach the symbol, instead of playing at its first pixels.
        startTimer = window.setTimeout(() => {
          played = true;
          startTimer = undefined;
          setPhase(reducedMotion.matches ? "idle" : "assembled");
          observer.disconnect();
        }, 450);
      },
      { threshold: [0, 0.9], rootMargin: "0px 0px -64px 0px" },
    );

    observer.observe(mark);
    return () => {
      cancelStart();
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={markRef}
      className="nodra-mark-reveal mx-auto w-3/5 max-w-64"
      data-state={phase}
      role="img"
      aria-label="Isotipo de Nodra"
    >
      {children}
    </div>
  );
}
