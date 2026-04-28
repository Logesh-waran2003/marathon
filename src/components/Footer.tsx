import Link from "next/link";

const cols = [
  { title: "Event", links: [
    { label: "About Us", href: "/about" },
    { label: "Race Weekend", href: "/race-weekend" },
    { label: "Prize Money", href: "/prize-money" },
    { label: "Results", href: "/results" },
  ]},
  { title: "Categories", links: [
    { label: "Marathon", href: "/race-categories/marathon" },
    { label: "Half Marathon", href: "/race-categories/half-marathon" },
    { label: "10KM Run", href: "/race-categories/10k-run" },
    { label: "5KM Run", href: "/race-categories/5k-run" },
  ]},
  { title: "Resources", links: [
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Philanthropy", href: "/philanthropy" },
    { label: "Hotel Partners", href: "/hotel" },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-accent text-white">
      <div className="border-b border-white/5 py-10 sm:py-12 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-6">Supported By</p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5">
            {["Govt. of Telangana", "GHMC", "Hyderabad Traffic Police", "Sports Authority"].map((s) => (
              <span key={s} className="rounded-lg bg-white/5 border border-white/5 px-4 sm:px-6 py-2.5 text-[11px] sm:text-xs font-medium text-white/40 transition hover:text-white/60 hover:border-white/10">{s}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="block">
              <span className="text-xl sm:text-2xl font-black tracking-tight">HYDERABAD<span className="text-primary"> MARATHON</span></span>
            </Link>
            <p className="mt-2 text-sm text-white/30 leading-relaxed max-w-xs">Organised by Hyderabad Runners Society. Bringing the city together through running since 2011.</p>
            <div className="mt-5 flex gap-3">
              {["Fb", "Tw", "Ig", "Yt"].map((s) => (
                <span key={s} className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-[11px] font-bold text-white/40 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer">{s}</span>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-4">{c.title}</p>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}><Link href={l.href} className="text-sm text-white/30 hover:text-primary transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5 py-5 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/20">
          <p>&copy; {new Date().getFullYear()} Hyderabad Runners Society. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white/40 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white/40 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white/40 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
