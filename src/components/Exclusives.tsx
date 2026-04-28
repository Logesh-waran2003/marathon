"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const perks = [
  {
    title: "Finisher's Medal",
    desc: "A premium, uniquely designed medal celebrating your achievement",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg>,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Race Day T-Shirt",
    desc: "Premium quality official race-day T-shirt to wear with pride",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" /></svg>,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Timing Certificate",
    desc: "Official timing certificate for all timed run finishers",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Curated Goodies",
    desc: "A tastefully curated goodies bag packed with surprises",
    icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
    gradient: "from-purple-500 to-pink-600",
  },
];

export default function Exclusives() {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section id="exclusives" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 bg-background">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div className="text-center max-w-xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>What You Get</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-accent ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>
            Race Day Exclusives
          </h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
        </div>

        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl bg-white p-6 sm:p-8 border border-gray-100 shadow-sm shadow-black/5 transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-2 ${visible ? "anim-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {p.icon}
              </div>
              <h3 className="mt-5 text-base sm:text-lg font-bold text-accent">{p.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
