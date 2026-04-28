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
    startTime: "4:30 AM",
    img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1920&q=80",
    color: "from-red-600 to-orange-500",
    route: "Starting at Peoples Plaza along Necklace Road, looping Hussain Sagar Lake, through Rajbhavan Road, Punjagutta flyover, Banjara Hills, past KBR Park, Jubilee Hills, across the iconic Durgam Cheruvu Cable Bridge, through Mindspace Junction, Biodiversity Junction, Gachibowli flyover, Hyderabad Central University campus, finishing at Gachibowli Athletic Stadium.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water & energy drinks along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 18 years or older", "Valid timing certificate from a timed run required", "Must have completed Marathon/Half Marathon on or after Jan 2023", "HM qualification: 3hr 15min or faster", "FM qualification: 6hr 30min or faster", "Photo ID mandatory"],
  },
  {
    slug: "half-marathon",
    title: "Half Marathon",
    distance: "21.1 KM",
    fee: "₹1,400",
    startTime: "5:30 AM",
    img: "https://images.unsplash.com/photo-1486218119243-13883505764c?w=1920&q=80",
    color: "from-blue-600 to-cyan-500",
    route: "Starting near Hussain Sagar, the route takes runners through scenic Necklace Road, past Tank Bund, through Begumpet, along Raj Bhavan Road, and finishing at Gachibowli Stadium via the Durgam Cheruvu Cable Bridge.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water & energy drinks along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 16 years or older", "Valid timing certificate from a 10K timed run required", "10K qualification: 1hr 30min or faster", "Photo ID mandatory"],
  },
  {
    slug: "10k-run",
    title: "10KM Run",
    distance: "10 KM",
    fee: "₹900",
    startTime: "7:00 AM",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1920&q=80",
    color: "from-emerald-600 to-teal-500",
    route: "A fast and flat course starting from Gachibowli, passing through the IT corridor, looping around key landmarks, and finishing at Gachibowli Stadium.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "RFID-tagged race BIB", "Water stations along course", "Medical support", "Post-race refreshments", "Finisher's medal", "Timing certificate"],
    criteria: ["Must be 14 years or older", "No prior timing certificate required", "Photo ID mandatory"],
  },
  {
    slug: "5k-run",
    title: "5KM Run",
    distance: "5 KM",
    fee: "₹600",
    startTime: "8:00 AM",
    img: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=1920&q=80",
    color: "from-purple-600 to-pink-500",
    route: "A fun, family-friendly route around the Gachibowli area, perfect for first-time runners and families. The route is flat and well-supported with water stations.",
    amenities: ["Official race-day T-shirt", "Goodies bag", "Race BIB", "Water stations", "Medical support", "Post-race refreshments", "Finisher's medal"],
    criteria: ["Open to all ages (under 14 must be accompanied by guardian)", "No prior timing certificate required", "Photo ID mandatory for adults"],
  },
];
