import PageHeader from "@/components/PageHeader";

const stats = [
  { val: "1,250", label: "Participants in 2011" },
  { val: "28,000+", label: "Participants in 2025" },
  { val: "₹8,00,000+", label: "Funds Raised" },
  { val: "50+", label: "Countries" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" subtitle="The story behind India's 2nd largest marathon" />

      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <blockquote className="text-xl sm:text-2xl font-light italic text-muted text-center border-l-4 border-primary pl-6">
            &ldquo;If you want to win, run 100 metres. If you want an experience, run a marathon.&rdquo;
          </blockquote>

          <div className="mt-12 space-y-6 text-base sm:text-lg text-muted leading-relaxed">
            <p>
              Experience the city of pearls and its Hyderabadi spirit through its signature event — the NMDC Hyderabad Marathon organised by the Hyderabad Runners Society (HRS). Since its inception in 2011, the marathon has grown from a humble 1,250 participants to becoming the country&apos;s 2nd largest event in terms of participation.
            </p>
            <p>
              The Hyderabad Marathon isn&apos;t purely a race — it&apos;s an emotion. Every year, on the last weekend of August, the whole city gets together, irrespective of age, race or religion. The goal is to make a winner out of everyone who arrives at the starting line, simply because they made a conscious decision to take a step towards a healthier lifestyle.
            </p>
            <p>
              The marathon also serves as a platform to reach out and support numerous causes by pledging runs, having raised over ₹8,00,000 in funds to uplift those in need.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-white p-6 text-center border border-gray-100 shadow-sm">
                <p className="text-2xl sm:text-3xl font-black text-primary">{s.val}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HRS Section */}
      <section className="py-16 sm:py-24 px-5 sm:px-8 bg-white">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">The Organisers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-accent">Hyderabad Runners Society</h2>
          <div className="mt-4 section-line" />
          <p className="mt-6 text-base sm:text-lg text-muted leading-relaxed">
            Founded in May 2007, HRS is the first group in India to institutionalise running. This not-for-profit society helps people lead active lifestyles through a three-fold approach: Advocacy, Training &amp; Events.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-background p-6 sm:p-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Our Mission</p>
              <p className="text-sm text-muted">To promote running as the preferred form of exercise in and around the twin cities.</p>
            </div>
            <div className="rounded-2xl bg-background p-6 sm:p-8 border border-gray-100">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">Our Vision</p>
              <p className="text-sm text-muted">To achieve a fit, athletic and active Hyderabad, by reaching out to every corner of the city.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
