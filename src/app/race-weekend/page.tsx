import PageHeader from "@/components/PageHeader";

const schedule = [
  { day: "Saturday, August 29", events: [
    { time: "10:00 AM - 6:00 PM", title: "Expo & BIB Collection", location: "HITEX Exhibition Centre" },
    { time: "4:00 PM", title: "5KM Fun Run Flag Off", location: "HITEX" },
    { time: "6:00 PM", title: "Pasta Party", location: "HITEX" },
  ]},
  { day: "Sunday, August 30", events: [
    { time: "4:30 AM", title: "Marathon Flag Off", location: "Peoples Plaza" },
    { time: "5:30 AM", title: "Half Marathon Flag Off", location: "Hussain Sagar" },
    { time: "7:00 AM", title: "10KM Run Flag Off", location: "Gachibowli" },
    { time: "11:00 AM", title: "Prize Distribution Ceremony", location: "Gachibowli Stadium" },
  ]},
];

export default function RaceWeekendPage() {
  return (
    <>
      <PageHeader title="Race Weekend" subtitle="Two nights of running, celebration, and community" bg="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80" />
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {schedule.map((day) => (
            <div key={day.day}>
              <h2 className="text-2xl sm:text-3xl font-black text-accent">{day.day}</h2>
              <div className="mt-2 section-line" />
              <div className="mt-6 space-y-3">
                {day.events.map((e) => (
                  <div key={e.title} className="flex gap-4 sm:gap-6 rounded-xl bg-white p-5 border border-gray-100">
                    <div className="shrink-0 w-24 sm:w-32">
                      <p className="text-sm font-bold text-primary">{e.time}</p>
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-bold text-accent">{e.title}</p>
                      <p className="text-xs text-muted mt-0.5">{e.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
