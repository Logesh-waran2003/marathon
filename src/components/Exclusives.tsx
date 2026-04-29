"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const kit = [
  {
    title: "Finisher's Medal",
    desc: "Collectible medal unique to each edition",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg>,
  },
  {
    title: "Race Day T-Shirt",
    desc: "Premium dry-fit tee with event branding",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>,
  },
  {
    title: "RFID Race BIB",
    desc: "Chip-timed bib for accurate tracking",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>,
  },
];

const course = [
  {
    title: "Hydration Stations",
    desc: "Water & electrolytes every 2.5 km",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
  },
  {
    title: "Medical Support",
    desc: "Ambulances & first-aid every 5 km",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  },
  {
    title: "Timing Certificate",
    desc: "Official results with splits & pace",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  },
];

export default function Exclusives() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="exclusives" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-white relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>What You Get</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-accent ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Race Day Exclusives</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
        </div>

        <div className="mt-14 sm:mt-20 grid lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Left — Your Race Kit */}
          <div className={`${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent">Your Race Kit</h3>
            </div>
            <div className="space-y-3">
              {kit.map((item, i) => (
                <div key={item.title} className="group flex items-start gap-4 rounded-2xl bg-background p-4 sm:p-5 border border-gray-100 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/[0.04]" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center — Hero visual */}
          <div className={`${visible ? "anim-scale-up delay-3" : "opacity-0"}`}>
            <div className="relative rounded-3xl overflow-hidden bg-accent aspect-[3/4] flex flex-col items-center justify-center text-center p-8">
              <div className="absolute inset-0 overlay-pattern" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold/10 to-transparent rounded-tr-full" />

              <div className="relative">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-2xl shadow-primary/30 mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Included With</p>
                <p className="text-3xl sm:text-4xl font-black text-white leading-tight">Every<br />Registration</p>
                <p className="mt-4 text-xs text-white/30 leading-relaxed max-w-[200px] mx-auto">All categories include a complete race kit, on-course support, and post-race perks</p>
                <div className="mt-6 flex justify-center gap-1.5">
                  {["42.2K", "21.1K", "10K", "5K"].map((d) => (
                    <span key={d} className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-[10px] font-bold text-white/50">{d}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — On Course Support */}
          <div className={`${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-accent">On Course</h3>
            </div>
            <div className="space-y-3">
              {course.map((item, i) => (
                <div key={item.title} className="group flex items-start gap-4 rounded-2xl bg-background p-4 sm:p-5 border border-gray-100 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-md hover:shadow-emerald-500/[0.04]" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-accent">{item.title}</p>
                    <p className="mt-0.5 text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bonus */}
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-gold/10 to-amber-50 border border-gold/20 p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                <p className="text-xs font-bold text-accent">Post-Race Refreshments</p>
              </div>
              <p className="text-[11px] text-muted leading-relaxed">Complimentary breakfast, fruits, and energy drinks at the finish area</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
