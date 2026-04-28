import PageHeader from "@/components/PageHeader";

const prizes = [
  { cat: "Marathon (Men)", first: "₹3,00,000", second: "₹2,00,000", third: "₹1,00,000" },
  { cat: "Marathon (Women)", first: "₹3,00,000", second: "₹2,00,000", third: "₹1,00,000" },
  { cat: "Half Marathon (Men)", first: "₹1,50,000", second: "₹1,00,000", third: "₹50,000" },
  { cat: "Half Marathon (Women)", first: "₹1,50,000", second: "₹1,00,000", third: "₹50,000" },
  { cat: "10KM Run (Men)", first: "₹50,000", second: "₹30,000", third: "₹20,000" },
  { cat: "10KM Run (Women)", first: "₹50,000", second: "₹30,000", third: "₹20,000" },
];

export default function PrizeMoneyPage() {
  return (
    <>
      <PageHeader title="Prize Money" subtitle="Rewarding excellence across all categories" />
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-accent">
                <th className="py-4 pr-4 text-xs font-bold uppercase tracking-[0.2em] text-muted">Category</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-[0.2em] text-gold text-center">🥇 1st</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-[0.2em] text-muted text-center">🥈 2nd</th>
                <th className="py-4 px-4 text-xs font-bold uppercase tracking-[0.2em] text-muted text-center">🥉 3rd</th>
              </tr>
            </thead>
            <tbody>
              {prizes.map((p) => (
                <tr key={p.cat} className="border-b border-gray-100 hover:bg-gray-50 transition">
                  <td className="py-4 pr-4 text-sm font-bold text-accent">{p.cat}</td>
                  <td className="py-4 px-4 text-sm font-black text-primary text-center">{p.first}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-foreground text-center">{p.second}</td>
                  <td className="py-4 px-4 text-sm font-semibold text-foreground text-center">{p.third}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-8 text-xs text-muted">* Prize money is subject to applicable taxes. 5KM Run is a non-competitive fun run with no prize money.</p>
        </div>
      </section>
    </>
  );
}
