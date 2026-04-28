"use client";

import PageHeader from "@/components/PageHeader";
import { useState } from "react";

const faqs = [
  { q: "Who are the organizers of Hosur Midnight Marathon?", a: "The marathon is organised by the Hosur Midnight Marathon team, in association with our title sponsors and partners." },
  { q: "When is the marathon held?", a: "The Hosur Midnight Marathon is usually held on the last weekend of August every year. The 2026 edition is scheduled for August 29-30, 2026." },
  { q: "What are the race categories?", a: "There are four categories: Full Marathon (42.2 KM), Half Marathon (21.1 KM), 10KM Run, and 5KM Fun Run." },
  { q: "How do I register?", a: "Visit the registration page on our website, select your preferred category, create an account or log in, fill out the registration form, and complete payment online." },
  { q: "Can I transfer my registration to someone else?", a: "No, registrations are non-transferable. Each participant must register individually." },
  { q: "Is there an age limit?", a: "Marathon: 18+, Half Marathon: 16+, 10KM: 14+, 5KM: Open to all ages (under 14 must be accompanied by a guardian)." },
  { q: "Where do I collect my BIB?", a: "BIB collection happens at the Expo held at HITEX Exhibition Centre on the Saturday before race day." },
  { q: "Is the course certified?", a: "Yes, the course is AIMS certified and measured by World Athletics approved course measurers." },
  { q: "Are headphones allowed?", a: "Headphones are allowed but must be kept at a low volume so that sound is not audible to other runners." },
  { q: "What happens if it rains?", a: "The marathon will be held rain or shine. In case of extreme weather, the organising committee will make appropriate decisions." },
];

export default function FaqsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <PageHeader title="FAQs" subtitle="Frequently asked questions about the marathon" />
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl bg-white border border-gray-100 overflow-hidden transition-shadow hover:shadow-sm">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="text-sm sm:text-base font-bold text-accent pr-4">{f.q}</span>
                <svg className={`w-5 h-5 shrink-0 text-muted transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === i ? "max-h-60 pb-5 sm:pb-6" : "max-h-0"}`}>
                <p className="px-5 sm:px-6 text-sm text-muted leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
