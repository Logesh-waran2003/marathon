"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState } from "react";

export default function Newsletter() {
  const { ref, visible } = useScrollReveal(0.15);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <section id="register" className="relative py-20 sm:py-28 lg:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="parallax-bg absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=1920&q=80')]" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-secondary to-accent/95" />
      <div className="absolute inset-0 overlay-pattern" />

      <div ref={ref} className="relative z-10 mx-auto max-w-2xl text-center">
        <span className={`text-xs font-bold uppercase tracking-[0.3em] text-primary ${visible ? "anim-fade-up" : "opacity-0"}`}>Stay Connected</span>
        <h2 className={`mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-white ${visible ? "anim-fade-up delay-1" : "opacity-0"}`}>
          Stay Updated
        </h2>
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base text-white/40 font-light ${visible ? "anim-fade-up delay-2" : "opacity-0"}`}>
          Get the latest news, registration updates, and exclusive offers delivered to your inbox.
        </p>

        <div className={`mt-8 sm:mt-10 ${visible ? "anim-fade-up delay-3" : "opacity-0"}`}>
          {done ? (
            <div className="glass rounded-2xl p-8 inline-flex flex-col items-center gap-2">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-white font-bold text-lg">You&apos;re subscribed!</p>
              <p className="text-white/40 text-sm">We&apos;ll keep you posted.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 bg-white/5 rounded-xl px-5 py-3.5 text-sm text-white placeholder-white/30 outline-none border border-white/5 focus:border-primary/50 transition-colors"
              />
              <button type="submit" className="rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-white uppercase tracking-wider transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 shrink-0">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
