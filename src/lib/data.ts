import type { Service, PortfolioItem, Testimonial, ProcessStep, Stat } from "@/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Ad Making & Advertising",
    description: "Compelling commercial content that drives brand awareness and converts audiences into customers.",
    icon: "Megaphone",
    category: "production",
  },
  {
    id: 2,
    title: "Social Impact & Awareness Videos",
    description: "Powerful stories that spark conversations, change minds, and mobilise communities.",
    icon: "Heart",
    category: "production",
  },
  {
    id: 3,
    title: "Digital Marketing & Online Promotions",
    description: "Strategic digital campaigns across platforms — from concept to conversion-optimised content.",
    icon: "TrendingUp",
    category: "digital",
  },
  {
    id: 4,
    title: "Celebrity Launch & Inauguration Services",
    description: "High-profile event coverage with premium production quality that captures every VIP moment.",
    icon: "Star",
    category: "events",
  },
  {
    id: 5,
    title: "Documentary Films & Campaigning Videos",
    description: "Long-form storytelling that educates, inspires, and leaves a lasting impression.",
    icon: "Film",
    category: "production",
  },
  {
    id: 6,
    title: "Event Planning & Coordination",
    description: "End-to-end event management backed by creative media production for an unforgettable experience.",
    icon: "Calendar",
    category: "events",
  },
  {
    id: 7,
    title: "Professional Photo Shoots & Surprise Moment Captures",
    description: "Every milestone deserves to be immortalised — from studio portraits to candid life moments.",
    icon: "Camera",
    category: "production",
  },
  {
    id: 8,
    title: "Dream & Fantasy Visualization Videos",
    description: "Cinematic visual storytelling that transforms imagination into breathtaking on-screen reality.",
    icon: "Sparkles",
    category: "creative",
  },
  {
    id: 9,
    title: "Strategic Promotions for Individuals & Organizations",
    description: "Tailored promotional strategies that build reputation, visibility, and lasting brand equity.",
    icon: "Target",
    category: "digital",
  },
  {
    id: 10,
    title: "Film Production, Distribution, Finance & Business Promotions",
    description: "Full-spectrum film services — from funding and production to distribution and market launch.",
    icon: "Clapperboard",
    category: "production",
  },
  {
    id: 11,
    title: "Music Videos",
    description: "Visually arresting music videos that amplify your sound with narrative and artistic flair.",
    icon: "Music",
    category: "creative",
  },
  {
    id: 12,
    title: "Digital Content for Platforms",
    description: "Platform-native content engineered for YouTube, Instagram, OTT, and beyond.",
    icon: "Play",
    category: "digital",
  },
];

export const serviceCategories = [
  { key: "all", label: "All Services" },
  { key: "production", label: "Production" },
  { key: "digital", label: "Digital" },
  { key: "events", label: "Events" },
  { key: "creative", label: "Creative" },
];

export const portfolio: PortfolioItem[] = [
  { id:  1, reel: "DaF3sRnEv_1", title: "Online Job / Task Fraud",        cast: "ft. Rajendra Prasad, Charan Lakkaraju & Avyukta",        category: "Cyber Awareness" },
  { id:  2, reel: "DZ40QG3kZ1l", title: "Medical Emergency Scam",         cast: "ft. Jagapathi Babu & Garikipati Narasimha Rao",          category: "Cyber Awareness" },
  { id:  3, reel: "DZz2ytlE_1-", title: "SBI Rewards / APK Fraud",        cast: "ft. P.V. Sindhu, Satya Krishna & Ravi Prakash",          category: "Cyber Awareness" },
  { id:  4, reel: "DZukSmsCaST", title: "Matrimonial Fraud",              cast: "ft. Akkineni Naga Chaitanya, Prince & Divi",             category: "Cyber Awareness" },
  { id:  5, reel: "DZroFwrPwrI", title: "Fake Customer Care Fraud",       cast: "ft. Naren Nithin & Siva Reddy",                          category: "Cyber Awareness" },
  { id:  6, reel: "DZfAME9ElAu", title: "Loan App Fraud",                 cast: "ft. Sudheer Babu & Ajay Ghosh",                          category: "Cyber Awareness" },
  { id:  7, reel: "DZcP6-nDIR-", title: "Cyber Awareness Short Film",     cast: "A Karri Visuals Production",                             category: "Cyber Awareness" },
  { id:  8, reel: "DZUxcvnEtvI", title: "Honey Trap / Sextortion Scam",   cast: "ft. P.V. Sindhu, Dr. Bharath Reddy & Hariteja",          category: "Cyber Awareness" },
  { id:  9, reel: "DZO6wDQkmSj", title: "Jumped Deposit Scam",            cast: "ft. SS Thaman, Varsha Bollamma & Brahmaji",              category: "Cyber Awareness" },
  { id: 10, reel: "DZMFI7YCCSB", title: "Lucky Draw / Lottery Scam",      cast: "ft. Actor Suman",                                        category: "Cyber Awareness" },
  { id: 11, reel: "DZFWm5wErVY", title: "UPI Scam Alert",                 cast: "ft. Siva Balaji, Balagam Venu & Rohini",                 category: "Cyber Awareness" },
  { id: 12, reel: "DZEQoF2Fbwc", title: "Screen Sharing / Fake KYC",      cast: "ft. Eesha Rebba & Viva Harsha",                          category: "Cyber Awareness" },
  { id: 13, reel: "DY_Zjt5jyp9", title: "Cyber Fraud Awareness",          cast: "ft. Naveen Chandra & Dimple Hayathi",                    category: "Cyber Awareness" },
  { id: 14, reel: "DYmMEVWEuUw", title: "Betting Scam",                   cast: "ft. Akkineni Naga Chaitanya & ensemble",                 category: "Cyber Awareness" },
  { id: 15, reel: "DYhAiDGCifV", title: "Impersonation Fraud",            cast: "ft. Naveen Polishetty & Varalaxmi Sarathkumar",          category: "Cyber Awareness" },
  { id: 16, reel: "DYTP-dAAqEr", title: "Cyber Awareness Short Film",     cast: "A Karri Visuals Production",                             category: "Cyber Awareness" },
  { id: 17, reel: "DVaon2iD24z", title: "Ad Film Shoot",                  cast: "ft. Ananya Nagalla & Rakesh",                            category: "Ad Film"         },
];

export const testimonials: Testimonial[] = [
  // Drawn from @karribalaji2 Instagram presence and real productions
  {
    id: 1,
    name: "Dr. Shankhabrata Bagchi",
    role: "Concept & Execution Partner",
    company: "IPS, Commissioner of Police",
    quote: "Karri Visuals brings unparalleled dedication to every frame. Their ability to work with high-profile talent while maintaining cinematic quality is truly exceptional.",
    avatar: "/img/about-photo.webp",
  },
  {
    id: 2,
    name: "Production Team",
    role: "Film Production Collaboration",
    company: "Telugu Cinema Industry",
    quote: "From Naga Chaitanya to P.V. Sindhu, Karri Visuals has consistently delivered productions that capture the essence of Telugu culture with world-class production values.",
    avatar: "/img/about-photo.webp",
  },
  {
    id: 3,
    name: "Celebrity Client",
    role: "Film & Media Professional",
    company: "Hyderabad",
    quote: "Working with Karri Visuals is a seamless experience. Their creative vision, technical expertise, and passion for storytelling make every project extraordinary.",
    avatar: "/img/about-photo.webp",
  },
  {
    id: 4,
    name: "Brand Partner",
    role: "Marketing & Promotions",
    company: "Telugu Entertainment",
    quote: "The productions Karri Visuals creates don't just capture moments — they immortalise them. A team that truly understands what it means to tell a story.",
    avatar: "/img/about-photo.webp",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Concept",
    description: "We dive deep into your brand, goals, and audience to craft a story worth telling.",
    icon: "Lightbulb",
  },
  {
    step: 2,
    title: "Capture",
    description: "Our crew brings your concept to life with cinematic-grade equipment and creative direction.",
    icon: "Camera",
  },
  {
    step: 3,
    title: "Edit",
    description: "Frame by frame, we sculpt the raw footage into a polished, emotion-driven narrative.",
    icon: "Scissors",
  },
  {
    step: 4,
    title: "Deliver",
    description: "Your final film, optimised for every platform, delivered on time and above expectation.",
    icon: "Send",
  },
];

export const stats: Stat[] = [
  { value: 17, suffix: "+", label: "Celebrity Productions" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 8, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
];
