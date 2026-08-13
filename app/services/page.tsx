import type { Metadata } from "next";
import Image from "next/image";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import EstimateCta from "@/components/ui/EstimateCta";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore ${BRAND.name}'s painting services for interior, exterior, texture, putty, waterproofing, and residential finishing solutions.`,
};

const SERVICE_ROWS = [
  {
    name: "Interior Painting",
    image: "/Interior-Painting.jpg",
    eyebrow: "Interior Painting",
    heading: ["Beautiful Interiors,", "Lasting Freshness"],
    description: "Smooth finishes and thoughtful colour choices that brighten your home with a premium, lasting look.",
    features: [
      { label: "Smooth Finish", icon: "paint" },
      { label: "Rich Colours", icon: "palette" },
      { label: "Home Refresh", icon: "spark" },
      { label: "Long-Lasting", icon: "shield" },
    ],
  },
  {
    name: "Exterior Painting",
    image: "/Exterior-Painting.jpg",
    eyebrow: "Exterior Painting",
    heading: ["Strong Façades,", "Sharper Curb Appeal"],
    description: "Weather-resistant coatings that protect every wall while giving your property a cleaner, brighter first impression.",
    features: [
      { label: "Weather Safe", icon: "shield" },
      { label: "Curb Appeal", icon: "spark" },
      { label: "Surface Care", icon: "paint" },
      { label: "Long Wear", icon: "clock" },
    ],
  },
  {
    name: "Texture Painting",
    image: "/Texture-Painting.jpg",
    eyebrow: "Texture Painting",
    heading: ["Depth & Detail,", "Designed to Stand Out"],
    description: "Elegant texture finishes that add dimension, style, and a premium designer look to statement walls or feature spaces.",
    features: [
      { label: "Designer Look", icon: "spark" },
      { label: "Pattern Depth", icon: "paint" },
      { label: "Feature Wall", icon: "palette" },
      { label: "Luxury Feel", icon: "shield" },
    ],
  },
  {
    name: "Wall Putty",
    image: "/Wall-Putty.webp",
    eyebrow: "Wall Putty",
    heading: ["Perfectly Smooth", "Ready-to-Paint Surfaces"],
    description: "A stronger, cleaner base that levels surfaces, reduces cracks, and improves the final finish quality before painting.",
    features: [
      { label: "Surface Prep", icon: "paint" },
      { label: "Smooth Base", icon: "shield" },
      { label: "Flawless Look", icon: "spark" },
      { label: "Better Finish", icon: "palette" },
    ],
  },
  {
    name: "Waterproofing",
    image: "/Waterproofing.jpg",
    eyebrow: "Waterproofing",
    heading: ["Dry, Safe Spaces,", "Protected for Longer"],
    description: "Reliable moisture protection that prevents seepage and keeps terraces, balconies, and wet areas dependable over time.",
    features: [
      { label: "Moisture Guard", icon: "shield" },
      { label: "Leak Care", icon: "spark" },
      { label: "Long Life", icon: "clock" },
      { label: "Surface Safety", icon: "paint" },
    ],
  },
  {
    name: "Residential Painting",
    image: "/Residential-Painting.jpg",
    eyebrow: "Residential Painting",
    heading: ["A Home That Feels", "Fresh Again"],
    description: "Thoughtful painting services designed to elevate daily comfort, improve appearance, and keep your home beautifully maintained.",
    features: [
      { label: "Home Makeover", icon: "spark" },
      { label: "Clean Finish", icon: "paint" },
      { label: "Careful Work", icon: "shield" },
      { label: "Comfort Focus", icon: "palette" },
    ],
  },
] as const;

function FeatureIcon({ type }: { type: string }) {
  const common = "h-4 w-4";

  switch (type) {
    case "paint":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M7 11h10l-1.3 8.5A2.1 2.1 0 0 1 13.6 21H10.4a2.1 2.1 0 0 1-2.1-1.5L7 11Z" />
          <path d="M9 11V7.8A3 3 0 0 1 12 5a3 3 0 0 1 3 2.8V11" />
        </svg>
      );
    case "palette":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 3.5a8.5 8.5 0 0 0 0 17c.9 0 1.8-.2 2.5-.7.7-.5 1.2-1.2 1.2-2.1 0-1.3-1-2.3-2.3-2.3H13a2.5 2.5 0 0 1-2.5-2.5V11a2.5 2.5 0 0 1 2.5-2.5h.7A2.6 2.6 0 0 0 18.2 6V5.4A8.5 8.5 0 0 0 12 3.5Z" />
          <circle cx="8.5" cy="9.2" r="1.1" />
          <circle cx="9.8" cy="13.2" r="1.1" />
          <circle cx="14.2" cy="7.5" r="1.1" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="m12 2.5 1.6 4.9L18.5 9l-4.9 1.6L12 15.5l-1.6-4.9L5.5 9l4.9-1.6L12 2.5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M12 3.5 18.2 5.8v5.4c0 3.8-2.4 7.1-6.2 9.3-3.8-2.2-6.2-5.5-6.2-9.3V5.8L12 3.5Z" />
          <path d="m9.5 12.2 1.6 1.6 3.3-3.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.5v5l3.5 2" />
        </svg>
      );
  }
}

export default function ServicesPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative min-h-[430px] overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/about-professional.svg"
            alt="Painting professional at work"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-[calc(2rem+20px)] sm:px-6 lg:px-8 lg:py-[calc(3rem+20px)]">
          <div className="grid min-h-[430px] items-center lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-200/90">
                Home » Services
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Our Services
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200 sm:text-base">
                Aradhya Paints delivers refined painting solutions for homes, offices, and commercial spaces with careful planning, premium materials, and dependable finishing work.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/#contact" size="lg">
                  Book a consultation
                </Button>
                <Button href="#services-list" variant="secondary" size="lg" className="w-full sm:w-auto">
                  View mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="pb-20 mt-10">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {SERVICE_ROWS.map((service, index) => (
            <article
              key={service.name}
              className="group relative overflow-hidden rounded-[30px] border border-[#edf2ff] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)]"
            >
              <div
                className={`absolute inset-y-0 w-1.5 bg-gradient-to-b from-[#e28a25] to-[#f2a24d] ${
                  index % 2 === 0 ? "right-0" : "left-0"
                }`}
              />

              <div className="grid gap-0 lg:grid-cols-2 lg:items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="p-3 sm:p-4 lg:p-4">
                    <div className="relative h-[340px] overflow-hidden rounded-[26px] sm:h-[420px] lg:h-[100%] lg:min-h-[420px]">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-600">
                      <span className="h-px w-5 bg-orange-300" />
                      {service.eyebrow}
                    </div>

                    <h2 className="mt-5 max-w-md text-3xl font-bold leading-[1.08] tracking-tight text-[#10233c] sm:text-4xl">
                      <span className="block">{service.heading[0]}</span>
                      <span className="block">{service.heading[1]}</span>
                    </h2>

                    <p className="mt-5 max-w-lg text-base leading-7 text-[#47546a]">{service.description}</p>

                    <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
                      {service.features.map((feature) => (
                        <div key={feature.label} className="flex flex-col items-center gap-2 rounded-[18px] border border-[#edf2ff] bg-[#f8fafc] px-2 py-4 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                            <FeatureIcon type={feature.icon} />
                          </div>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#10233c]">
                            {feature.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Button
                        href={`/#contact?service=${encodeURIComponent(service.name)}`}
                        size="lg"
                        className="inline-flex rounded-full bg-gradient-to-r from-[#e28a25] to-[#f2a24d] px-6 py-3 text-sm font-semibold text-[#10233c] shadow-[0_8px_30px_rgba(226,138,37,0.26)]"
                      >
                        <span>Book Service</span>
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                          <path d="M4.5 10h11" />
                          <path d="M10.5 4.5 16 10l-5.5 5.5" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-600">
              <span className="h-px w-5 bg-orange-300" />
              — HOW IT WORKS
            </div>

            <h3 className="mt-4 text-2xl font-semibold text-[#10233c] sm:text-3xl">From Consultation to Final Walkthrough</h3>
            <p className="mt-3 mx-auto max-w-2xl text-sm leading-7 text-[#47546a]">
              A simple, clear process that keeps you informed at every step — from initial discussion through to final handover.
            </p>
          </div>

          <div className="relative mt-12">
            {/* horizontal connector line behind circles (hidden on small screens) */}
            <div className="hidden md:block absolute left-8 right-8 top-1/2 z-0">
              <div className="h-px bg-slate-200" />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:items-stretch md:justify-between">
              {[
                {
                  step: "STEP 01",
                  title: "Consultation",
                  desc: "Share your requirements with our team",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  ),
                },
                {
                  step: "STEP 02",
                  title: "Site Visit",
                  desc: "On-site inspection and a detailed estimate",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M3 11.5 12 3l9 8.5" />
                      <path d="M9 22V12h6v10" />
                    </svg>
                  ),
                },
                {
                  step: "STEP 03",
                  title: "Execution",
                  desc: "Skilled team completes the work on schedule",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M3 17v2a2 2 0 0 0 2 2h4" />
                      <path d="M21 7v-2a2 2 0 0 0-2-2h-4" />
                      <path d="M7 13 17 3l4 4-10 10" />
                    </svg>
                  ),
                },
                {
                  step: "STEP 04",
                  title: "Final Walkthrough",
                  desc: "Quality check and handover with you",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ),
                },
              ].map((s, idx) => (
                <div key={s.title} className="w-full max-w-xs md:max-w-none md:w-1/4">
                  <div className="flex flex-col items-center text-center md:items-center">
                    <div className="flex flex-col items-center">
                      <div className="mb-3 text-xs text-slate-400 uppercase tracking-widest">{s.step}</div>

                      <div className="relative">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white border-2 border-orange-400 text-orange-600">
                          {s.icon}
                        </div>
                      </div>
                    </div>

                    <h4 className="mt-4 text-lg font-semibold text-[#10233c]">{s.title}</h4>
                    <p className="mt-2 text-sm text-[#47546a]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EstimateCta
        title={"Ready to transform your space?"}
        description={"Get a detailed, no-obligation quote from our painting experts — fast, transparent, and tailored to your project."}
        primaryLabel={"Get Free Estimate"}
        primaryHref={"/#contact"}
        secondaryLabel={"Call Us Now"}
        secondaryHref={`tel:+${BRAND.whatsapp}`}
      />

    </div>
  );
}
