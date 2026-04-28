"use client";

import { useEffect, useRef } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PromoBanner() {
  const { ref, visible } = useScrollReveal(0.1);
  const bgRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const animate = () => {
      if (bgRef.current) {
        const rect = bgRef.current.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const offset = (window.innerHeight / 2 - center) * 0.15;
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.1)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-28 sm:py-36 lg:py-44 px-5 sm:px-8 overflow-hidden">
      <div ref={bgRef} className="absolute inset-[-40px] bg-[url('https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=1920&q=80')] bg-cover bg-center will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent/85 to-accent/70" />
      <div className="absolute inset-0 overlay-pattern" />

      {/* Decorative running track lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-[calc(50%-30px)] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-[calc(50%+30px)] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div ref={fgRef} className="relative z-10">
        <div ref={ref} className="mx-auto max-w-4xl text-center">
          <span className={`inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>
            The Journey Begins
          </span>
          <h2 className={`mt-4 text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.9] ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>
            Journey to
            <span className="gradient-text"> Triumph</span>
          </h2>
          <p className={`mt-4 sm:mt-6 text-sm sm:text-lg text-white/40 max-w-xl mx-auto font-light ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            From the historic Charminar to the Durgam Cheruvu Cable Bridge — experience Hyderabad like never before.
          </p>

          {/* Route preview cards */}
          <div className={`mt-10 sm:mt-14 flex flex-wrap justify-center gap-3 sm:gap-4 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
            {["Hussain Sagar", "KBR Park", "Cable Bridge", "Gachibowli Stadium"].map((place, i) => (
              <span key={place} className="glass rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold text-white/60 transition hover:text-white hover:bg-white/10"
                style={{ animationDelay: `${0.4 + i * 0.1}s` }}
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
