export interface Service {
  id: string;
  slug: string;
  name: string;
  nameHindi: string;
  shortDescription: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  images?: string[];
  highlights: string[];
  benefits: string[];
  inStock: boolean;
}

export type Product = Service;

export const SERVICES: Service[] = [
  {
    id: "1",
    slug: "interior-painting",
    name: "Interior Painting",
    nameHindi: "इंटीरियर पेंटिंग",
    shortDescription: "Elegant, room-by-room finishing for homes, apartments, and premium workspaces.",
    description: "Our interior painting service transforms your living spaces with smooth finishes, premium colour guidance, and immaculate workmanship. Ideal for bedrooms, living rooms, offices, and stylish residential interiors.",
    price: 25000,
    duration: "2–4 days",
    image: "/Interior-Painting.jpg",
    images: ["/Interior-Painting.jpg", "/Interior-Painting.jpg", "/Interior-Painting.jpg"],
    highlights: ["Premium finish", "Colour consultation", "Dust-free execution"],
    benefits: ["Fresh, polished look", "Durable modern finish", "Professional site coordination"],
    inStock: true,
  },
  {
    id: "2",
    slug: "exterior-painting",
    name: "Exterior Painting",
    nameHindi: "एक्सटीरियर पेंटिंग",
    shortDescription: "Weather-resistant exterior coating for long-term curb appeal and surface protection.",
    description: "Protect and elevate your exterior walls with weather-ready coatings, quality primers, and carefully planned site execution. Ideal for villas, apartments, and commercial facades.",
    price: 35000,
    duration: "3–6 days",
    image: "/Exterior-Painting.jpg",
    images: ["/Exterior-Painting.jpg", "/Exterior-Painting.jpg", "/Exterior-Painting.jpg"],
    highlights: ["Weatherproof finish", "Surface preparation", "Professional colour match"],
    benefits: ["Improved curb appeal", "Stronger wall protection", "Long-lasting durability"],
    inStock: true,
  },
  {
    id: "3",
    slug: "texture-painting",
    name: "Texture Painting",
    nameHindi: "टेक्सचर पेंटिंग",
    shortDescription: "Designer wall textures that add depth, character, and a luxury feel to your space.",
    description: "Texture painting adds dimension and a fine designer look to selected walls and feature surfaces. The result is a more premium environment with visual contrast and subtle detail.",
    price: 42000,
    duration: "3–5 days",
    image: "/Texture-Painting.jpg",
    images: ["/Texture-Painting.jpg", "/Texture-Painting.jpg", "/Texture-Painting.jpg"],
    highlights: ["Designer textures", "Premium wall depth", "Feature wall styling"],
    benefits: ["Luxury aesthetic", "Custom surface character", "Long-lasting appeal"],
    inStock: true,
  },
  {
    id: "4",
    slug: "wall-putty",
    name: "Wall Putty",
    nameHindi: "वॉल पुट्टी",
    shortDescription: "Smooth surface correction and wall strengthening before final paint application.",
    description: "Wall putty creates a clean, even, and durable base for fresh paint. This ensures improved adhesion, a refined surface feel, and a better long-term finish on new or repaired walls.",
    price: 18000,
    duration: "1–2 days",
    image: "/Wall-Putty.webp",
    images: ["/Wall-Putty.webp", "/Wall-Putty.webp", "/Wall-Putty.webp"],
    highlights: ["Wall strength", "Smooth finish prep", "Better paint adhesion"],
    benefits: ["Cleaner base", "More even finish", "Improved durability"],
    inStock: true,
  },
  {
    id: "5",
    slug: "waterproofing",
    name: "Waterproofing",
    nameHindi: "वॉटरप्रूफिंग",
    shortDescription: "Protect wet areas, terraces, and exposed surfaces with trusted waterproof coatings.",
    description: "Our waterproofing solutions are designed to shield exposed structures from moisture damage, seepage, and long-term wear. The service is ideal for terraces, bathrooms, balconies, and utility surfaces.",
    price: 32000,
    duration: "2–4 days",
    image: "/waterproofing.jpg",
    images: ["/waterproofing.jpg", "/waterproofing.jpg", "/waterproofing.jpg"],
    highlights: ["Seepage protection", "Moisture-ready systems", "Area-specific treatment"],
    benefits: ["Long-term protection", "Reduced maintenance", "Safer surfaces"],
    inStock: true,
  },
  {
    id: "6",
    slug: "residential-painting",
    name: "Residential Painting",
    nameHindi: "रेसिडेंशियल पेंटिंग",
    shortDescription: "High-quality repainting and finishing for homes, flats, and premium residential interiors.",
    description: "Residential painting brings together aesthetic improvement, clean execution, and a better everyday living environment. We help homeowners create confident, welcoming spaces with premium finish quality.",
    price: 30000,
    duration: "4–7 days",
    image: "/residential-painting.jpg",
    images: ["/residential-painting.jpg", "/residential-painting.jpg", "/residential-painting.jpg"],
    highlights: ["Home-friendly scheduling", "Premium finishes", "Careful prep work"],
    benefits: ["Better home value", "Showroom-level finish", "Neat professional workflow"],
    inStock: true,
  },
  {
    id: "7",
    slug: "commercial-painting",
    name: "Commercial Painting",
    nameHindi: "कमर्शियल पेंटिंग",
    shortDescription: "Professional coatings for offices, retail spaces, reception areas, and showrooms.",
    description: "Commercial painting improves brand visibility, customer perception, and workplace atmosphere. Our team handles the scheduling and finishing requirements needed for a polished commercial environment.",
    price: 46000,
    duration: "5–8 days",
    image: "/mobile-featured-img.png",
    images: ["/mobile-featured-img.png", "/featured-banner.png", "/banner2.png"],
    highlights: ["Business-ready execution", "Premium presentation", "Minimal disruption"],
    benefits: ["Better brand impression", "Professional workspace feel", "Reliable site management"],
    inStock: true,
  },
];

export const PRODUCTS = SERVICES;

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((item) => item.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return SERVICES.find((item) => item.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
