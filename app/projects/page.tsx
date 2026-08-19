import { Suspense } from "react";
import PortfolioGridClient from "@/components/projects/PortfolioGridClient";

const PROJECTS = [
  // Interior Painting (5)
  { id: 'i1', title: 'Luxury Living Room Makeover', category: 'Interior Painting', image: '/Interior-Painting.jpg', location: 'Mumbai', short: 'Soft neutrals, premium finish.' },
  { id: 'i2', title: 'Premium Bedroom Painting', category: 'Interior Painting', image: '/Home-Renovation.avif', location: 'Pune', short: 'Serene tones and satin finish.' },
  { id: 'i3', title: 'Modern Apartment Interior', category: 'Interior Painting', image: '/banner2.png', location: 'Bengaluru', short: 'Contemporary palette and trims.' },
  { id: 'i4', title: 'Classic Heritage Interior', category: 'Interior Painting', image: '/why-choose-us.jpeg', location: 'Chennai', short: 'Careful restoration and bespoke colours.' },
  { id: 'i5', title: 'Studio Loft Refresh', category: 'Interior Painting', image: '/Interior-Painting.jpg', location: 'Hyderabad', short: 'Open-plan modern finish.' },

  // Exterior Painting (4)
  { id: 'e1', title: 'Modern Villa Exterior', category: 'Exterior Painting', image: '/Exterior-Painting.jpg', location: 'Goa', short: 'Weatherproof premium exterior coating.' },
  { id: 'e2', title: 'Residential Exterior Repainting', category: 'Exterior Painting', image: '/Commercial-Tower.jpg', location: 'Mumbai', short: 'Fresh curb appeal and long-life paint.' },
  { id: 'e3', title: 'Contemporary Facade Makeover', category: 'Exterior Painting', image: '/Office-Complex.avif', location: 'Pune', short: 'Bold contrasts and durable finish.' },
  { id: 'e4', title: 'Heritage Home Exterior', category: 'Exterior Painting', image: '/Home-Renovation.avif', location: 'Kolkata', short: 'Sympathetic colours and protection.' },

  // Texture Painting (4)
  { id: 't1', title: 'Designer Texture Wall', category: 'Texture Painting', image: '/Texture-Painting.jpg', location: 'Bengaluru', short: 'Hand-trowelled texture with depth.' },
  { id: 't2', title: 'Feature Wall Accent', category: 'Texture Painting', image: '/Texture-Painting.jpg', location: 'Delhi', short: 'Subtle metallic highlights.' },
  { id: 't3', title: 'Contemporary Textured Lobby', category: 'Texture Painting', image: '/banner2.png', location: 'Hyderabad', short: 'Durable textured finish for high traffic.' },
  { id: 't4', title: 'Artist Finish Suite', category: 'Texture Painting', image: '/why-choose-us.jpeg', location: 'Mumbai', short: 'Bespoke artisanal texture.' },

  // Wall Putty (4)
  { id: 'w1', title: 'Flawless Wall Preparation', category: 'Wall Putty', image: '/Industrial-Site.png', location: 'Pune', short: 'Smooth substrate for premium paint.' },
  { id: 'w2', title: 'High-Build Skim Coat', category: 'Wall Putty', image: '/why-choose-us.jpeg', location: 'Chennai', short: 'Even surfaces with perfect finish.' },
  { id: 'w3', title: 'Crack Repair & Putty', category: 'Wall Putty', image: '/Home-Renovation.avif', location: 'Mumbai', short: 'Long-lasting surface repairs.' },
  { id: 'w4', title: 'Architectural Wall Refinement', category: 'Wall Putty', image: '/banner2.png', location: 'Bengaluru', short: 'Smooth details for premium projects.' },

  // Waterproofing (4)
  { id: 'wf1', title: 'Waterproof Terrace Project', category: 'Waterproofing', image: '/Waterproofing.jpg', location: 'Mumbai', short: 'Secure terrace with warranty-grade system.' },
  { id: 'wf2', title: 'Basement Waterproofing', category: 'Waterproofing', image: '/Waterproofing.jpg', location: 'Pune', short: 'Damp-proofing and protective coating.' },
  { id: 'wf3', title: 'Balcony & Parapet Protection', category: 'Waterproofing', image: '/Exterior-Painting.jpg', location: 'Delhi', short: 'Robust seal and UV resistance.' },
  { id: 'wf4', title: 'Rooftop Membrane Upgrade', category: 'Waterproofing', image: '/why-choose-us.jpeg', location: 'Hyderabad', short: 'High-performance rooftop system.' },

  // Residential Painting (4)
  { id: 'r1', title: 'Premium Family Home Finish', category: 'Residential Painting', image: '/Residential-Painting.jpg', location: 'Chennai', short: 'Safe, low-odour paints for families.' },
  { id: 'r2', title: 'Townhouse Color Refresh', category: 'Residential Painting', image: '/Home-Renovation.avif', location: 'Bengaluru', short: 'Quick, tidy repaint with minimal disruption.' },
  { id: 'r3', title: 'Apartment Block Recoat', category: 'Residential Painting', image: '/Residential-Painting.jpg', location: 'Mumbai', short: 'Consistent colours across multiple units.' },
  { id: 'r4', title: 'Cottage Interior Renewal', category: 'Residential Painting', image: '/Interior-Painting.jpg', location: 'Goa', short: 'Warm palette and meticulous trim work.' },

  // Commercial Painting (4)
  { id: 'c1', title: 'Contemporary Office Renovation', category: 'Commercial Painting', image: '/Office-Complex.avif', location: 'Bengaluru', short: 'Modern corporate finishes and branding colours.' },
  { id: 'c2', title: 'Premium Commercial Building', category: 'Commercial Painting', image: '/Commercial-Tower.jpg', location: 'Mumbai', short: 'High-durability exterior coatings.' },
  { id: 'c3', title: 'Retail Space Refit', category: 'Commercial Painting', image: '/banner2.png', location: 'Delhi', short: 'On-brand colours and retail-ready finishes.' },
  { id: 'c4', title: 'Hospitality Suite Refresh', category: 'Commercial Painting', image: '/why-choose-us.jpeg', location: 'Goa', short: 'Guest-ready decorative finishes.' },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">OUR PROJECTS</p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-slate-900">Explore our latest painting and finishing projects.</h1>
        <div className="mt-4 h-1 w-36 rounded-full bg-gradient-to-r from-orange-300 to-orange-500" />
      </header>

      <div className="mt-8">
        <Suspense fallback={<div className="h-80 rounded-2xl border border-slate-200 bg-slate-100 animate-pulse" />}>
          <PortfolioGridClient projects={PROJECTS} />
        </Suspense>
      </div>
    </main>
  );
}
