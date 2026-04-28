"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const title = [
  { name: "NMDC", role: "Title Sponsor", initials: "N" },
  { name: "IDFC FIRST Bank", role: "Powered By", initials: "IF" },
];

const partners = [
  { name: "Care Hospitals", role: "Medical" },
  { name: "HITEX", role: "Venue" },
  { name: "Hyatt Place", role: "Hospitality" },
  { name: "T10 Sports", role: "Activewear" },
  { name: "OneGlint", role: "Photography" },
  { name: "Timing India", role: "Timing" },
  { name: "Centro", role: "Goodie Bag" },
  { name: "GreenPath", role: "Eco" },
];

export default function Sponsors() {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section id="sponsors" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 bg-white">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="text-center max-w-xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>Our Partners</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-accent ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>
            Sponsors &amp; Partners
          </h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
        </div>

        {/* Title sponsors */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-center gap-5 sm:gap-8">
          {title.map((s, i) => (
            <div
              key={s.name}
              className={`group relative overflow-hidden rounded-2xl bg-accent p-8 sm:p-10 text-center min-w-[200px] sm:min-w-[260px] transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-1 ${visible ? "anim-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 group-hover:border-primary/30 transition-colors">
                <span className="text-2xl sm:text-3xl font-black text-white">{s.initials}</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white">{s.name}</p>
              <p className="mt-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-primary">{s.role}</p>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {partners.map((p, i) => (
            <div
              key={p.name}
              className={`group flex items-center gap-3 rounded-xl bg-background p-4 sm:p-5 border border-gray-100 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 ${visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.35 + i * 0.05}s` }}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200 group-hover:border-primary/20 transition-colors">
                <span className="text-xs font-black text-accent">{p.name.charAt(0)}</span>
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold text-accent truncate">{p.name}</p>
                <p className="text-[10px] text-muted uppercase tracking-wider">{p.role} Partner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
