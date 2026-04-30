"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type ReactNode, useState } from "react";

const categories = [
  { key: "5k", label: "5K Run", fee: "₹500" },
  { key: "10k", label: "10K Run", fee: "₹500" },
  { key: "half", label: "Half Marathon", fee: "₹500" },
];

const icons: Record<string, ReactNode> = {
  "Goodie Bag": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
  "Finisher's Medal": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-4.5A3.375 3.375 0 0012.75 10.5h-1.5A3.375 3.375 0 007.5 14.25v4.5m6-6V6.75a3 3 0 00-3-3h0a3 3 0 00-3 3v1.5" /></svg>,
  "Medical Support": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
  "Refreshments": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" /></svg>,
  "Hydration Stations": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>,
  "Timing Certificate": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
  "RFID Chip Timing": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  "Race Day T-Shirt": <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>,
};

const perks: Record<string, { title: string; desc: string; included: string[] }[]> = {
  "5k": [
    { title: "Goodie Bag", desc: "A curated bag of goodies to kickstart your race day.", included: ["5k", "10k", "half"] },
    { title: "Finisher's Medal", desc: "A medal that feels earned. You didn't run all that for nothing.", included: ["5k", "10k", "half"] },
    { title: "Medical Support", desc: "On-course medical teams and first-aid stations throughout.", included: ["5k", "10k", "half"] },
    { title: "Refreshments", desc: "Post-race refreshments to refuel after your run.", included: ["5k", "10k", "half"] },
    { title: "Hydration Stations", desc: "Water and energy drinks at regular intervals on course.", included: ["5k", "10k", "half"] },
  ],
  "10k": [
    { title: "Goodie Bag", desc: "A curated bag of goodies to kickstart your race day.", included: ["5k", "10k", "half"] },
    { title: "Finisher's Medal", desc: "A medal that feels earned. You didn't run all that for nothing.", included: ["5k", "10k", "half"] },
    { title: "Timing Certificate", desc: "Official timing for all finishers. Your effort, properly recorded.", included: ["10k", "half"] },
    { title: "RFID Chip Timing", desc: "Precision chip timing for accurate split and finish times.", included: ["10k", "half"] },
    { title: "Medical Support", desc: "On-course medical teams and first-aid stations throughout.", included: ["5k", "10k", "half"] },
    { title: "Refreshments", desc: "Post-race refreshments to refuel after your run.", included: ["5k", "10k", "half"] },
    { title: "Hydration Stations", desc: "Water and energy drinks at regular intervals on course.", included: ["5k", "10k", "half"] },
    { title: "Race Day T-Shirt", desc: "Official race-day tee. Comfortable and breathable from start to finish.", included: ["10k", "half"] },
  ],
  "half": [
    { title: "Goodie Bag", desc: "A curated bag of goodies to kickstart your race day.", included: ["5k", "10k", "half"] },
    { title: "Finisher's Medal", desc: "A medal that feels earned. You didn't run all that for nothing.", included: ["5k", "10k", "half"] },
    { title: "Timing Certificate", desc: "Official timing for all finishers. Your effort, properly recorded.", included: ["10k", "half"] },
    { title: "RFID Chip Timing", desc: "Precision chip timing for accurate split and finish times.", included: ["10k", "half"] },
    { title: "Medical Support", desc: "On-course medical teams and first-aid stations throughout.", included: ["5k", "10k", "half"] },
    { title: "Refreshments", desc: "Post-race refreshments to refuel after your run.", included: ["5k", "10k", "half"] },
    { title: "Hydration Stations", desc: "Water and energy drinks at regular intervals on course.", included: ["5k", "10k", "half"] },
    { title: "Race Day T-Shirt", desc: "Official race-day tee. Comfortable and breathable from start to finish.", included: ["10k", "half"] },
  ],
};

export default function Exclusives() {
  const { ref, visible } = useScrollReveal(0.05);
  const [activeTab, setActiveTab] = useState("half");

  const activeCat = categories.find((c) => c.key === activeTab)!;
  const activePerks = perks[activeTab];

  return (
    <section id="exclusives" className="py-24 sm:py-32 lg:py-40 px-5 sm:px-8 bg-accent relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-6xl relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>What You Get</span>
          <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>Race Kit</h2>
          <div className={`mt-4 section-line mx-auto ${visible ? "" : "opacity-0"}`} />
          <p className={`mt-4 text-white/40 text-sm sm:text-base ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
            Every runner gets a premium race experience. Here&apos;s what&apos;s included with your registration.
          </p>
        </div>

        {/* Category tabs */}
        <div className={`mt-12 flex justify-center gap-2 sm:gap-3 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.key
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
                  : "bg-white/5 text-white/40 border border-white/10 hover:bg-white/10 hover:text-white/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fee badge */}
        <div className={`mt-8 text-center ${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
          <span className="text-white/30 text-sm">Entry Fee: </span>
          <span className="text-2xl sm:text-3xl font-black text-white">{activeCat.fee}</span>
        </div>

        {/* Perk grid */}
        <div className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${visible ? "anim-fade-up delay-4" : "opacity-0"}`}>
          {activePerks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:border-primary/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">{icons[perk.title]}</div>
              <p className="text-sm font-bold text-primary">{perk.title}</p>
              <p className="mt-1.5 text-xs text-white/50 leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Included with every registration */}
        <div className={`mt-10 text-center ${visible ? "anim-fade-up delay-5" : "opacity-0"}`}>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Included with every {activeCat.label} registration</p>
        </div>
      </div>
    </section>
  );
}
