import PageHeader from "@/components/PageHeader";

const hotels = [
  { name: "Hyatt Place Banjara Hills", type: "Hospitality Partner", distance: "8 km from venue", stars: 4, offer: "15% discount for marathon participants" },
  { name: "Novotel HICC", type: "Recommended", distance: "5 km from venue", stars: 5, offer: "Special marathon rate available" },
  { name: "ITC Kohenur", type: "Recommended", distance: "3 km from venue", stars: 5, offer: "Complimentary early breakfast for runners" },
  { name: "Lemon Tree Gachibowli", type: "Budget Friendly", distance: "2 km from venue", stars: 3, offer: "10% discount with code HYDRUN26" },
  { name: "Marriott", type: "Recommended", distance: "6 km from venue", stars: 5, offer: "Marathon weekend package available" },
  { name: "Holiday Inn Express", type: "Budget Friendly", distance: "4 km from venue", stars: 3, offer: "Group booking discounts available" },
];

export default function HotelPage() {
  return (
    <>
      <PageHeader title="Hotel Partners" subtitle="Recommended stays for marathon weekend" bg="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80" />
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {hotels.map((h) => (
              <div key={h.name} className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-primary/20 transition group">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{h.type}</span>
                  <span className="text-xs text-gold">{"★".repeat(h.stars)}</span>
                </div>
                <h3 className="mt-3 text-base sm:text-lg font-bold text-accent">{h.name}</h3>
                <p className="mt-1 text-xs text-muted">{h.distance}</p>
                <div className="mt-4 rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-medium text-primary">{h.offer}</p>
                </div>
                <a href="#" className="mt-4 inline-block text-xs font-bold text-primary uppercase tracking-wider hover:underline">Book Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
