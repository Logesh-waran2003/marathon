"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  whatsapp: string | null;
  dob: string;
  gender: string;
  age_category: string;
  city: string | null;
  blood_group: string | null;
  tshirt_size: string | null;
  emergency_name: string | null;
  emergency_phone: string | null;
  race_category: string;
  razorpay_payment_id: string | null;
  amount: number;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin");
        return;
      }
      fetchRegistrations();
    };
    checkAuth();
  }, [router]);

  const fetchRegistrations = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) setRegistrations(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin");
  };

  const filtered = registrations.filter((r) => {
    const matchesSearch = !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase()) ||
      r.phone.includes(search);
    const matchesCategory = !categoryFilter || r.race_category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "WhatsApp", "DOB", "Gender", "Age Category", "City", "Blood Group", "T-Shirt", "Emergency Name", "Emergency Phone", "Race Category", "Payment ID", "Amount", "Registered At"];
    const rows = filtered.map((r) => [
      r.name, r.email, r.phone, r.whatsapp || "", r.dob, r.gender, r.age_category,
      r.city || "", r.blood_group || "", r.tshirt_size || "", r.emergency_name || "",
      r.emergency_phone || "", r.race_category, r.razorpay_payment_id || "", r.amount,
      new Date(r.created_at).toLocaleString(),
    ]);
    const csv = [headers, ...rows].map((row) => row.map((v) => `"${v}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const categoryLabel = (slug: string) => {
    const map: Record<string, string> = { "half-marathon": "Half Marathon", "10k-run": "10K Run", "5k-run": "5K Run" };
    return map[slug] || slug;
  };

  return (
    <div className="min-h-screen bg-accent">
      <header className="border-b border-white/10 px-5 sm:px-8 py-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div>
            <h1 className="text-lg font-black text-white">Admin Dashboard</h1>
            <p className="text-xs text-white/40">Hosur Midnight Marathon</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xs text-white/40 hover:text-white transition">View Site</Link>
            <button onClick={handleLogout} className="rounded-lg bg-white/5 border border-white/10 px-4 py-2 text-xs font-bold text-white/60 hover:text-white hover:bg-white/10 transition">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="px-5 sm:px-8 py-8">
        <div className="mx-auto max-w-7xl">
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-white/40">Total</p>
              <p className="mt-1 text-2xl font-black text-white">{registrations.length}</p>
            </div>
            {["half-marathon", "10k-run", "5k-run"].map((cat) => (
              <div key={cat} className="rounded-xl bg-white/5 border border-white/10 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-white/40">{categoryLabel(cat)}</p>
                <p className="mt-1 text-2xl font-black text-white">{registrations.filter((r) => r.race_category === cat).length}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, or phone..."
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-primary/50 transition"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-primary/50 transition"
            >
              <option value="" className="bg-accent">All Categories</option>
              <option value="half-marathon" className="bg-accent">Half Marathon</option>
              <option value="10k-run" className="bg-accent">10K Run</option>
              <option value="5k-run" className="bg-accent">5K Run</option>
            </select>
            <button onClick={exportCSV} className="rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-primary-dark transition shrink-0">
              Export CSV
            </button>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-20 text-white/40">Loading registrations...</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-white/40">No registrations found.</div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">#</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Name</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Email</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Phone</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Category</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Gender</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Age</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">T-Shirt</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Payment ID</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-white/40">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, i) => (
                    <tr key={r.id} className="border-b border-white/5 hover:bg-white/5 transition">
                      <td className="px-4 py-3 text-white/30">{i + 1}</td>
                      <td className="px-4 py-3 text-white font-medium">{r.name}</td>
                      <td className="px-4 py-3 text-white/60">{r.email}</td>
                      <td className="px-4 py-3 text-white/60">{r.phone}</td>
                      <td className="px-4 py-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{categoryLabel(r.race_category)}</span>
                      </td>
                      <td className="px-4 py-3 text-white/60 capitalize">{r.gender}</td>
                      <td className="px-4 py-3 text-white/60">{r.age_category}</td>
                      <td className="px-4 py-3 text-white/60">{r.tshirt_size || "—"}</td>
                      <td className="px-4 py-3 text-white/40 font-mono text-xs">{r.razorpay_payment_id || "—"}</td>
                      <td className="px-4 py-3 text-white/40 text-xs">{new Date(r.created_at).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="mt-4 text-xs text-white/20">Showing {filtered.length} of {registrations.length} registrations</p>
        </div>
      </main>
    </div>
  );
}
