"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const titleSponsors = [
  { name: "Amazon", role: "Title Sponsor", desc: "Earth's most customer-centric company", color: "from-[#FF9900] to-[#FF6600]", logo: "amazon" },
  { name: "TCS", role: "Powered By", desc: "Tata Consultancy Services — Global IT leader", color: "from-[#0066B3] to-[#004C99]", logo: "tcs" },
];

const coSponsors = [
  { name: "Flipkart", role: "Co-Sponsor", color: "from-[#2874F0] to-[#1A5DC8]" },
  { name: "Infosys", role: "Co-Sponsor", color: "from-[#007CC3] to-[#005A8E]" },
  { name: "HCL Tech", role: "Technology Partner", color: "from-[#0072C6] to-[#004E8C]" },
];

const partners = [
  { name: "Apollo Hospitals", role: "Medical" },
  { name: "Care Hospitals", role: "Health" },
  { name: "Puma", role: "Activewear" },
  { name: "Gatorade", role: "Hydration" },
  { name: "Garmin", role: "Timing" },
  { name: "Decathlon", role: "Sports" },
  { name: "Cult.fit", role: "Fitness" },
  { name: "Red Bull", role: "Energy" },
];

const marqueePartners = [...partners, ...partners];

export default function Sponsors() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="sponsors" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-accent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div ref={ref} className="mx-auto max-w-6xl relative">
        <div className="text-center max-w-xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>Our Partners</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Sponsors &amp; Partners</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
          <p className={`mt-4 text-white/40 text-sm sm:text-base ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            Backed by India&apos;s biggest brands and institutions
          </p>
        </div>

        {/* Title sponsors */}
        <div className={`mt-14 sm:mt-20 grid gap-5 sm:gap-6 sm:grid-cols-2 ${visible ? "anim-scale-up delay-2" : "opacity-0"}`}>
          {titleSponsors.map((s) => (
            <div key={s.name} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 sm:p-10 transition-all duration-500 hover:bg-white/10 hover:border-white/15">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">{s.role}</span>
                <div className={`mt-5 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                  <span className="text-2xl sm:text-3xl font-black text-white">{s.name.slice(0, 1)}</span>
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl font-black text-white">{s.name}</h3>
                <p className="mt-1 text-xs text-white/30">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Co-sponsors */}
        <div className={`mt-6 grid gap-4 grid-cols-1 sm:grid-cols-3 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
          {coSponsors.map((s) => (
            <div key={s.name} className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 p-6 sm:p-7 border border-white/10 hover:border-white/15 transition-all duration-400 hover:-translate-y-1">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-500`}>
                  <span className="text-sm font-black text-white">{s.name.slice(0, 2)}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{s.name}</h3>
                  <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner marquee */}
      <div className={`mt-16 sm:mt-20 ${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 mb-8">Official Partners</p>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-accent to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-accent to-transparent z-10" />
          <div className="marquee-track">
            <div className="marquee-scroll">
              {marqueePartners.map((p, i) => (
                <div key={`${p.name}-${i}`} className="group shrink-0 flex items-center gap-3 rounded-2xl bg-white/5 hover:bg-white/10 px-5 py-4 border border-white/10 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30">
                    <span className="text-xs font-black text-white/60 group-hover:text-primary transition-colors">{p.name.slice(0, 2)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white whitespace-nowrap">{p.name}</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-wider">{p.role} Partner</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-accent to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-accent to-transparent z-10" />
          <div className="marquee-track">
            <div className="marquee-scroll-reverse">
              {[...marqueePartners].reverse().map((p, i) => (
                <div key={`rev-${p.name}-${i}`} className="group shrink-0 flex items-center gap-3 rounded-2xl bg-white/5 hover:bg-white/10 px-5 py-4 border border-white/10 hover:border-white/15 transition-all duration-300 hover:-translate-y-0.5 cursor-default">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary/30">
                    <span className="text-xs font-black text-white/60 group-hover:text-primary transition-colors">{p.name.slice(0, 2)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white whitespace-nowrap">{p.name}</p>
                    <p className="text-[9px] text-white/30 uppercase tracking-wider">{p.role} Partner</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
