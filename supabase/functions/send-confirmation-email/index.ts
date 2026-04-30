import "jsr:@supabase/functions-js/edge-runtime.d.ts"

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;

interface Registration {
  name: string;
  email: string;
  phone: string;
  race_category: string;
  amount: number;
  razorpay_payment_id: string;
}

const categoryLabel: Record<string, string> = {
  "half-marathon": "Half Marathon (21.1 KM)",
  "10k-run": "10K Run",
  "5k-run": "5K Run",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type" } });
  }

  try {
    const { record } = await req.json() as { record: Registration };

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f8fafc; padding: 40px 30px; border-radius: 16px;">
        <h1 style="font-size: 24px; font-weight: 900; margin: 0;">Hosur Midnight Marathon</h1>
        <p style="color: #94a3b8; font-size: 13px; margin-top: 4px;">Run the Night, Light the Future</p>
        <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
        <h2 style="font-size: 20px; font-weight: 800; margin: 0;">You're Registered, ${record.name}! 🎉</h2>
        <p style="color: #94a3b8; font-size: 14px; line-height: 1.6; margin-top: 12px;">
          Your registration for the <strong style="color: #dc2626;">${categoryLabel[record.race_category] || record.race_category}</strong> is confirmed.
        </p>
        <div style="background: #1e293b; border-radius: 12px; padding: 20px; margin-top: 20px;">
          <table style="width: 100%; font-size: 14px; color: #94a3b8;">
            <tr><td style="padding: 6px 0;">Category</td><td style="text-align: right; color: #f8fafc; font-weight: 700;">${categoryLabel[record.race_category] || record.race_category}</td></tr>
            <tr><td style="padding: 6px 0;">Amount Paid</td><td style="text-align: right; color: #f8fafc; font-weight: 700;">₹${record.amount}</td></tr>
            <tr><td style="padding: 6px 0;">Payment ID</td><td style="text-align: right; color: #f8fafc; font-weight: 700; font-family: monospace; font-size: 12px;">${record.razorpay_payment_id}</td></tr>
          </table>
        </div>
        <div style="margin-top: 24px; text-align: center;">
          <a href="https://logesh-waran2003.github.io/marathon/" style="display: inline-block; background: #dc2626; color: white; padding: 12px 32px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px;">Visit Website</a>
        </div>
        <p style="color: #475569; font-size: 12px; margin-top: 32px; text-align: center;">
          June 16, 2026 • Hosur, Tamil Nadu<br/>
          Organised by Elitzur Academy of Sports
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Hosur Marathon <noreply@resend.dev>",
        to: [record.email],
        subject: `Registration Confirmed — ${categoryLabel[record.race_category] || record.race_category}`,
        html,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      return new Response(JSON.stringify({ error: result }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, id: result.id }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: (err as Error).message }), { status: 500 });
  }
});
