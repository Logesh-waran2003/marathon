"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { title: "Marathon", distance: "42.2 KM", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80", time: "4:30 AM", color: "from-red-600 to-orange-500" },
  { title: "Half Marathon", distance: "21.1 KM", img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=600&q=80", time: "5:30 AM", color: "from-blue-600 to-cyan-500" },
  { title: "10K Run", distance: "10 KM", img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&q=80", time: "7:00 AM", color: "from-emerald-600 to-teal-500" },
  { title: "5K Run", distance: "5 KM", img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=600&q=80", time: "8:00 AM", color: "from-purple-600 to-pink-500" },
];

export default function RaceCategories() {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="categories" className="py-20 sm:py-28 lg:py-36 px-5 sm:px-8 bg-white">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="text-center max-w-xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>Choose Your Challenge</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-accent ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Race Categories</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
        </div>

        <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <div
              key={c.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${visible ? "anim-scale-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${c.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-t ${c.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>

              {/* Distance badge */}
              <div className={`absolute top-4 right-4 rounded-lg bg-gradient-to-r ${c.color} px-3 py-1.5 shadow-lg`}>
                <span className="text-xs sm:text-sm font-black text-white">{c.distance}</span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-black text-white">{c.title}</h3>
                <p className="mt-1 text-xs sm:text-sm text-white/50 font-medium">Flag off: {c.time}</p>
                <div className="mt-4 flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-xs font-bold text-white uppercase tracking-wider">View Details</span>
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
