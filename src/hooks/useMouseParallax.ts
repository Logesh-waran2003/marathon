"use client";

import { useCallback, useEffect, useRef } from "react";

export function useMouseParallax() {
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const applyTo = useCallback((el: HTMLElement | null, depth: number) => {
    if (!el) return;
    const animate = () => {
      const { x, y } = pos.current;
      el.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      el.style.transition = "transform 0.15s ease-out";
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return { applyTo };
}
