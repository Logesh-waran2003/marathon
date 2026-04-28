"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const certs = [
  { name: "AIMS", full: "Association of International Marathons" },
  { name: "World Athletics", full: "Certified Course Measurement" },
  { name: "AFI", full: "Athletics Federation of India" },
];

export default function CertifiedBy() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="border-y border-gray-100 bg-white py-10 sm:py-14 px-5 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className={`text-center text-xs font-bold uppercase tracking-[0.3em] text-muted mb-8 sm:mb-10 ${visible ? "anim-fade-up" : "opacity-0"}`}>
          Certified &amp; Recognized By
        </p>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 lg:gap-16">
          {certs.map((c, i) => (
            <div
              key={c.name}
              className={`flex items-center gap-3 sm:gap-4 group ${visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center border border-primary/10 group-hover:border-primary/30 transition-colors">
                <span className="text-lg sm:text-xl font-black text-primary">{c.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-accent">{c.name}</p>
                <p className="text-[10px] sm:text-xs text-muted">{c.full}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
