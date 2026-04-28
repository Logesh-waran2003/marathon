"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const perks = [
  {
    title: "Finisher's Medal",
    desc: "A premium, uniquely designed medal celebrating your achievement. Each edition features a new collectible design.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg>,
    gradient: "from-amber-500 to-orange-600",
    bg: "from-amber-50 to-orange-50",
  },
  {
    title: "Race Day T-Shirt",
    desc: "Premium dry-fit official race-day T-shirt designed exclusively for participants. Wear it with pride.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>,
    gradient: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
  },
  {
    title: "Timing Certificate",
    desc: "Official chip-timed certificate with your splits, pace, and overall ranking. Share your achievement.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
    gradient: "from-emerald-500 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
  },
  {
    title: "Curated Goodies",
    desc: "A tastefully curated goodies bag packed with nutrition bars, supplements, and partner surprises.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
    gradient: "from-purple-500 to-pink-600",
    bg: "from-purple-50 to-pink-50",
  },
  {
    title: "Hydration Stations",
    desc: "Water, electrolytes, and energy gels every 2.5km. Sponge stations at key points to keep you cool.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
    gradient: "from-cyan-500 to-blue-600",
    bg: "from-cyan-50 to-blue-50",
  },
  {
    title: "Medical Support",
    desc: "Full medical coverage with ambulances, physios, and first-aid stations every 5km on course.",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
    gradient: "from-rose-500 to-red-600",
    bg: "from-rose-50 to-red-50",
  },
];

export default function Exclusives() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="exclusives" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/[0.02] via-transparent to-gold/[0.02] rounded-full blur-3xl" />

      <div ref={ref} className="mx-auto max-w-6xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>What You Get</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-accent ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Race Day Exclusives</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
          <p className={`mt-4 text-muted text-sm sm:text-base ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            Every runner deserves a premium experience. Hover to discover what awaits you.
          </p>
        </div>

        <div className="mt-14 sm:mt-20 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <div
              key={p.title}
              className={`flip-card h-56 sm:h-64 ${visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className={`flip-card-front rounded-2xl bg-white border border-gray-100 shadow-sm shadow-black/[0.03] p-7 sm:p-8 flex flex-col items-center justify-center text-center`}>
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg shadow-black/10`}>
                    {p.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-accent">{p.title}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Hover to learn more</p>
                </div>

                {/* Back */}
                <div className={`flip-card-back rounded-2xl bg-gradient-to-br ${p.gradient} p-7 sm:p-8 flex flex-col items-center justify-center text-center`}>
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-[240px]">{p.desc}</p>
                  <div className="mt-4 w-8 h-0.5 rounded-full bg-white/30" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
