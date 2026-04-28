"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, visible } = useScrollReveal(0.3);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const dur = 2200;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target]);

  return <span ref={ref} className="tabular-nums">{val.toLocaleString()}{suffix}</span>;
}

const stats = [
  { target: 28000, suffix: "+", label: "Runners", sub: "Registered in 2025" },
  { target: 14, suffix: "th", label: "Edition", sub: "Since 2011" },
  { target: 50, suffix: "+", label: "Countries", sub: "Global participation" },
  { target: 42, suffix: ".2km", label: "Full Marathon", sub: "AIMS Certified course" },
];

export default function About() {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8">
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>
            About the Event
          </span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-accent leading-tight ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>
            India&apos;s 2nd Largest
            <span className="gradient-text"> Marathon</span>
          </h2>
          <div className={`mt-4 section-line ${visible ? "" : "opacity-0"}`} />
          <p className={`mt-6 text-base sm:text-lg text-muted leading-relaxed ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            The Hyderabad Marathon is the flagship event of Hyderabad Runners Society (HRS) and a
            signature event of the City of Pearls. Held annually since 2011, it brings together
            runners from across the globe to celebrate fitness, community, and the spirit of endurance
            through the city&apos;s most iconic landmarks.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-sm shadow-black/5 border border-gray-100 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 group ${visible ? "anim-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full transition-all group-hover:from-primary/10" />
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-accent">
                <Counter target={s.target} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-bold text-foreground">{s.label}</p>
              <p className="mt-0.5 text-xs text-muted">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
