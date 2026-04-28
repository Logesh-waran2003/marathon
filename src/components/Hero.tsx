"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1920&q=80",
  "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1920&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
];

const RACE_DATE = new Date("2026-08-30T06:00:00").getTime();

function useCountdown() {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, RACE_DATE - Date.now());
      setT({ d: Math.floor(diff / 864e5), h: Math.floor((diff % 864e5) / 36e5), m: Math.floor((diff % 36e5) / 6e4), s: Math.floor((diff % 6e4) / 1e3) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

function Particles() {
  const [particles, setParticles] = useState<Array<{ w: number; h: number; l: number; t: number; dur: number; del: number; op: number }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, () => ({
        w: 2 + Math.random() * 3,
        h: 2 + Math.random() * 3,
        l: Math.random() * 100,
        t: Math.random() * 100,
        dur: 3 + Math.random() * 4,
        del: Math.random() * 5,
        op: 0.2 + Math.random() * 0.4,
      }))
    );
  }, []);

  if (!particles.length) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: `${p.w}px`,
            height: `${p.h}px`,
            left: `${p.l}%`,
            top: `${p.t}%`,
            animation: `float ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.del}s`,
            opacity: p.op,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [cur, setCur] = useState(0);
  const cd = useCountdown();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setCur((p) => (p + 1) % slides.length), []);
  useEffect(() => { const id = setInterval(next, 6000); return () => clearInterval(id); }, [next]);

  // Scroll-only parallax (no mouse shake)
  useEffect(() => {
    let raf = 0;
    const animate = () => {
      const scrollY = window.scrollY;
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
        contentRef.current.style.opacity = `${Math.max(1 - scrollY * 0.003, 0)}`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[120vh] min-h-[700px] overflow-hidden bg-accent">
      {/* Background slides — all rendered, only opacity toggles (no blue flash) */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-[-20px] bg-cover bg-center transition-opacity duration-[2s] scale-105 ${i === cur ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute bottom-0 inset-x-0 h-[60%] bg-gradient-to-t from-accent via-accent/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/50 via-transparent to-accent/50" />
      </div>

      {/* Floating particles */}
      <Particles />

      {/* Content */}
      <div ref={contentRef} className="absolute inset-0 z-[4] flex flex-col items-center justify-center text-center px-5 sm:px-8 will-change-transform">
        <div className="anim-fade-up">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-primary">
            14th Edition • August 29-30, 2026
          </span>
        </div>

        <h1 className="anim-fade-up delay-2 mt-5 sm:mt-8 text-[2.5rem] sm:text-6xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter">
          HOSUR MIDNIGHT
          <span className="block gradient-text mt-1 sm:mt-2">MARATHON</span>
        </h1>

        <p className="anim-fade-up delay-3 mt-4 sm:mt-6 text-sm sm:text-lg text-white/50 max-w-md font-light leading-relaxed">
          Run through the night. The ultimate midnight marathon awaits you.
        </p>

        {/* Countdown */}
        <div className="anim-fade-up delay-4 mt-8 sm:mt-12 flex gap-2 sm:gap-4">
          {([["d", "Days"], ["h", "Hrs"], ["m", "Min"], ["s", "Sec"]] as const).map(([k, label]) => (
            <div key={k} className="glass rounded-xl sm:rounded-2xl px-3 sm:px-6 py-3 sm:py-5 min-w-[56px] sm:min-w-[85px] text-center">
              <span className="block text-xl sm:text-4xl font-black text-white tabular-nums leading-none">
                {String(cd[k]).padStart(2, "0")}
              </span>
              <span className="block text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mt-1.5">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="anim-fade-up delay-5 mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
          <a href="#register" className="group relative overflow-hidden rounded-xl bg-primary px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-bold text-white uppercase tracking-wider transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30">
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a href="#categories" className="glass rounded-xl px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-bold text-white/70 uppercase tracking-wider transition-all hover:bg-white/10 hover:-translate-y-0.5">
            Explore Races ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-2 anim-fade-up delay-7">
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-5 sm:right-10 z-[5] flex flex-col gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCur(i)} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${i === cur ? "w-2 h-8 bg-primary" : "w-2 h-3 bg-white/20 hover:bg-white/40"}`}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-[6]" />
    </section>
  );
}
