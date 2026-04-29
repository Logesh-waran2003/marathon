export interface RaceCategory {
  slug: string;
  title: string;
  distance: string;
  fee: string;
  startTime: string;
  img: string;
  color: string;
  route: string;
  amenities: string[];
  criteria: string[];
}

export const raceCategories: RaceCategory[] = [
  {
    slug: "marathon",
    title: "Marathon",
    distance: "42.2 KM",
    fee: "₹1,800",
    startTime: "11:30 PM",
    img: "https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=1920&q=80",
    color: "from-red-600 to-orange-500",
    route: "Starting at Hosur Town Centre, through the illuminated Hosur Main Road, past SIPCOT Industrial Park, looping through Bagalur Cross, Shoolagiri Highway stretch, Denkanikottai Road, and finishing at the Hosur Athletic Stadium under the night sky.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water & energy drinks along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate", "Glow-in-the-dark accessories"],
    criteria: ["Must be 18 years or older", "Valid timing certificate from a timed run required", "Must have completed Marathon/Half Marathon on or after Jan 2023", "HM qualification: 3hr 15min or faster", "FM qualification: 6hr 30min or faster", "Photo ID mandatory"],
  },
  {
    slug: "half-marathon",
    title: "Half Marathon",
    distance: "21.1 KM",
    fee: "₹1,400",
    startTime: "12:00 AM",
    img: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=1920&q=80",
    color: "from-blue-600 to-cyan-500",
    route: "Starting at Hosur Town Centre, the route takes runners through the lit-up Hosur Main Road, past SIPCOT, along Bagalur Cross, and finishing at Hosur Athletic Stadium.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water & energy drinks along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 16 years or older", "Valid timing certificate from a 10K timed run required", "10K qualification: 1hr 30min or faster", "Photo ID mandatory"],
  },
  {
    slug: "10k-run",
    title: "10KM Run",
    distance: "10 KM",
    fee: "₹900",
    startTime: "12:30 AM",
    img: "https://images.unsplash.com/photo-1544899489-a083461b088c?w=1920&q=80",
    color: "from-emerald-600 to-teal-500",
    route: "A fast and flat course starting from Hosur Town Centre, passing through the illuminated streets, looping around key landmarks, and finishing at Hosur Athletic Stadium.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water stations along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 14 years or older", "No prior timing certificate required", "Photo ID mandatory"],
  },
  {
    slug: "5k-run",
    title: "5KM Run",
    distance: "5 KM",
    fee: "₹600",
    startTime: "1:00 AM",
    img: "https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?w=1920&q=80",
    color: "from-purple-600 to-pink-500",
    route: "A fun, family-friendly route around the Hosur Town Centre area, perfect for first-time runners and families. The route is flat, well-lit, and supported with water stations.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "Race BIB", "Water stations", "Medical support", "Post-race refreshments", "Finisher's medal"],
    criteria: ["Open to all ages (under 14 must be accompanied by guardian)", "No prior timing certificate required", "Photo ID mandatory for adults"],
  },
];
