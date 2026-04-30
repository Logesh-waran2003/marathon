CREATE TABLE IF NOT EXISTS registrations (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  whatsapp text,
  dob date NOT NULL,
  gender text NOT NULL,
  age_category text NOT NULL,
  city text,
  blood_group text,
  tshirt_size text,
  emergency_name text,
  emergency_phone text,
  race_category text NOT NULL,
  razorpay_payment_id text,
  amount integer NOT NULL DEFAULT 500,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can register" ON registrations FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Authenticated can read" ON registrations FOR SELECT TO authenticated USING (true);
