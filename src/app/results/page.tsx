import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const editions = [
  { year: "2025", date: "August 23-24, 2025", runners: "28,300" },
  { year: "2024", date: "August 24-25, 2024", runners: "25,500" },
  { year: "2023", date: "August 26-27, 2023", runners: "23,000" },
  { year: "2022", date: "August 27-28, 2022", runners: "20,000" },
  { year: "2019", date: "August 24-25, 2019", runners: "18,500" },
];

export default function ResultsPage() {
  return (
    <>
      <PageHeader title="Results" subtitle="Race results from past editions" />
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          {editions.map((e) => (
            <div key={e.year} className="flex items-center justify-between rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition group">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-accent">{e.year}</p>
                <p className="text-xs text-muted mt-1">{e.date} • {e.runners} runners</p>
              </div>
              <Link href="#" className="rounded-lg bg-background border border-gray-200 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-muted group-hover:border-primary group-hover:text-primary transition">
                View Results
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
