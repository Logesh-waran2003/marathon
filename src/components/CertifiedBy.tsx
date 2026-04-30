"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const certs = [
  { name: "AIMS", full: "Association of International Marathons", logo: null },
  { name: "World Athletics", full: "Certified Course Measurement", logo: "/marathon/logos/world-athletics.svg" },
  { name: "AFI", full: "Athletics Federation of India", logo: null },
];

export default function CertifiedBy() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="relative border-y border-white/5 bg-accent/95 py-12 sm:py-16 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className={`text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 mb-8 sm:mb-10 ${visible ? "anim-fade-up" : "opacity-0"}`}>
          Certified &amp; Recognized By
        </p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className={`group flex items-center gap-4 rounded-2xl bg-white/5 px-6 py-4 sm:px-8 sm:py-5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-primary/20 hover:-translate-y-0.5 ${visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-primary/25 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                {c.logo ? (
                  <img src={c.logo} alt={c.name} className="w-9 h-9 sm:w-10 sm:h-10 object-contain" />
                ) : (
                  <span className="text-xs sm:text-sm font-black text-primary tracking-tight">{c.name}</span>
                )}
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-white">{c.name}</p>
                <p className="text-xs text-white/50 leading-tight">{c.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
