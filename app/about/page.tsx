import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, MISSION } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.name} — premium painting services for polished homes, offices, and commercial spaces.`,
};

const STORY_ITEMS = [
  {
    title: "The Beginning",
    desc: "We started as a small, passionate team focused on craftsmanship and client trust.",
  },
  {
    title: "Growing the Team",
    desc: "Our expertise expanded to 180+ skilled professionals delivering premium finishes.",
  },
  {
    title: "Today",
    desc: "We deliver 1200+ projects with a 4.9/5 satisfaction rating across homes and businesses.",
  },
] as const;

const TRUST_ITEMS = [
  {
    title: "Premium Materials",
    desc: "We use paint systems selected for durability, finish quality, and lasting appearance.",
    number: "01",
    icon: "bucket",
  },
  {
    title: "Professional Finish",
    desc: "Our application process is precise, clean, and tailored to the needs of each space.",
    number: "02",
    icon: "roller",
  },
  {
    title: "On-time Delivery",
    desc: "We value schedules, site discipline, and communication that keeps projects moving smoothly.",
    number: "03",
    icon: "clock",
  },
  {
    title: "Fair Pricing",
    desc: "Transparent estimates and clear scope help clients feel informed before work begins.",
    number: "04",
    icon: "pricing",
  },
] as const;

export default function AboutPage() {
  return (
    <div>
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
                Home / About Us
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Premium painting, built on trust.
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200 sm:text-base">
                Thoughtful service, quality finishes, and dependable project care.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/#contact" size="lg">
                  Book a consultation
                </Button>
                <Button href="#mission" variant="secondary" size="lg" className="w-full sm:w-auto">
                  View mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[430px] py-16 section-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="relative order-2 lg:order-1 w-full">
              <div className="absolute -left-12 top-8 h-20 w-20 rounded-full bg-orange-100/80 blur-3xl" />
              <div className="h-[420px] sm:h-[480px] lg:h-[540px] w-full overflow-hidden rounded-[32px] border border-[#d9e2f6] bg-white shadow-[0_20px_45px_rgba(20,44,78,0.06)]">
                <Image
                  src="/why-choose-us.jpeg"
                  alt="Aradhya Paints project team"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 w-full">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#10233c]">
                From a small local team to a trusted painting partner.
              </h2>
              <p className="mt-4 text-base leading-7 text-[#47546a]">
                Aradhya Paints began with a simple promise: deliver premium paint finishes with care and professionalism.
                Over time, our team grew, our processes sharpened, and our clients’ trust became the foundation of every project.
              </p>

              <div className="mt-8 space-y-6">
                {STORY_ITEMS.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#f6df5d]/80 bg-[#f9d64d] shadow-[0_8px_18px_rgba(249,214,77,0.3)]">
                      <span aria-hidden="true" className="text-lg font-bold leading-none text-[#10233c]">
                        ✦
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 rounded-[20px] border border-[#d9e2f6] bg-white p-4 shadow-[0_14px_28px_rgba(20,44,78,0.06)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#10233c]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm text-[#47546a] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="min-h-[430px] py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
              Mission & Vision
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#10233c]">
              Clear purpose for every project, from consultation to finish.
            </h2>
            <p className="mt-4 text-base leading-8 text-[#47546a]">
              Our work is guided by a clear mission to elevate spaces with premium finishes and a vision of becoming the
              trusted painting partner for thoughtful, long-lasting results.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-[#d9e2f6] bg-white p-8 shadow-[0_20px_60px_rgba(20,44,78,0.06)]">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">
                Mission
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-[#10233c]">
                Deliver premium painting solutions with clarity, precision, and professional care.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#47546a]">
                {MISSION.english}
              </p>
            </div>

            <div className="rounded-[28px] border border-[#d9e2f6] bg-white p-8 shadow-[0_20px_60px_rgba(20,44,78,0.06)]">
              <span className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">
                Vision
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-[#10233c]">
                Be the trusted painting partner for modern spaces that need beautiful results and strong project care.
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-[#47546a]">
                {MISSION.englishMission}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trusted" className="min-h-[430px] bg-white py-20 section-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-orange-300 sm:w-16" />
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-orange-600">
                Why Clients Trust Us
              </p>
              <span className="h-px w-12 bg-orange-300 sm:w-16" />
            </div>

            <h2 className="mt-6 mx-auto max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-[#10233c] sm:text-4xl">
              <span className="block">Built on Quality & Trust.</span>
            </h2>

            <div className="mt-5 flex justify-center">
              <span className="h-1 w-20 rounded-full bg-orange-500" />
            </div>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#47546a] sm:text-base">
              We keep every project simple, consistent, and professional from first consultation to final walkthrough.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {TRUST_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[280px] overflow-hidden rounded-[26px] border border-[#eaf0fb] bg-white p-6 pb-8 shadow-[0_18px_40px_rgba(20,44,78,0.06)]"
              >
                <div className="absolute bottom-3 right-3 text-[2.3rem] font-black leading-none text-[#f7b83a]/15">
                  {item.number}
                </div>

                <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#10233c] bg-[#10233c] text-orange-400 shadow-[0_14px_28px_rgba(16,35,60,0.18)]">
                  {item.icon === "bucket" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M7 9.5h10l-1.1 9.5A2.1 2.1 0 0 1 13.8 21H10.2a2.1 2.1 0 0 1-2.1-1.9L7 9.5Z" />
                      <path d="M9 9.5V7.7A3 3 0 0 1 12 5a3 3 0 0 1 3 2.7v1.8" />
                      <path d="M12 11.5v4.2" />
                    </svg>
                  )}
                  {item.icon === "roller" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M7 7h8.5A1.5 1.5 0 0 1 17 8.5v2A1.5 1.5 0 0 1 15.5 12H7" />
                      <path d="M9 12v5.5A2.5 2.5 0 0 0 11.5 20H12a2 2 0 0 0 2-2v-1.5" />
                      <path d="M7 5.5h8.5V4a1.5 1.5 0 0 0-1.5-1.5H8.5A1.5 1.5 0 0 0 7 4v1.5Z" />
                      <path d="M7 7v5" />
                    </svg>
                  )}
                  {item.icon === "clock" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 7.5v5l3.5 2" />
                    </svg>
                  )}
                  {item.icon === "pricing" && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                      <path d="M7 5.5h9.5A2.5 2.5 0 0 1 19 8v9.5A2.5 2.5 0 0 1 16.5 20H7a2 2 0 0 1-2-2V7.5a2 2 0 0 1 2-2Z" />
                      <path d="M8.2 10.2h7.6M8.2 13.8h7.6M9.2 7h6.1" />
                    </svg>
                  )}
                </div>

                <h3 className="relative z-10 mt-6 text-xl font-bold text-[#10233c]">{item.title}</h3>
                <div className="relative z-10 mt-4 h-px w-12 bg-orange-500" />
                <p className="relative z-10 mt-4 text-sm leading-6 text-[#47546a]">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-[28px] bg-[#10233c] p-5 text-white shadow-[0_18px_40px_rgba(20,44,78,0.12)]">
              <div className="absolute -right-7 -top-7 h-32 w-32 rounded-full border border-white/10" />
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-white/15 text-white/60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-full w-full p-3">
                  <path d="M12 3.5 18.2 5.8v5.4c0 3.8-2.4 7.1-6.2 9.3-3.8-2.2-6.2-5.5-6.2-9.3V5.8L12 3.5Z" />
                  <path d="m9.5 12.3 1.7 1.7 3.3-3.8" />
                </svg>
              </div>

              <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/5 text-orange-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path d="M12 3.5 18.2 5.8v5.4c0 3.8-2.4 7.1-6.2 9.3-3.8-2.2-6.2-5.5-6.2-9.3V5.8L12 3.5Z" />
                  <path d="m9.5 12.3 1.7 1.7 3.3-3.8" />
                </svg>
              </div>

              <h3 className="relative z-10 mt-6 text-2xl font-bold text-white">Quality Assured</h3>
              <p className="relative z-10 mt-3 text-sm leading-6 text-slate-300">
                Every finish is checked for consistency, smoothness, and attention to detail before handover.
              </p>
            </article>

            <article className="relative overflow-hidden rounded-[28px] border border-[#eaf0fb] bg-white p-5 shadow-[0_18px_40px_rgba(20,44,78,0.06)]">
              <div className="absolute -right-7 -top-7 h-32 w-32 rounded-full border border-orange-200/80 bg-orange-50/70" />
              <div className="absolute right-6 top-6 h-16 w-16 rounded-full border border-orange-200/80 text-orange-500 opacity-60">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-full w-full p-3">
                  <path d="M8.5 12.7a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z" />
                  <path d="M15.5 11.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
                  <path d="M5.8 18.2a5.2 5.2 0 0 1 5.4-4.2h1.6a5.2 5.2 0 0 1 5.4 4.2" />
                </svg>
              </div>

              <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#10233c] bg-white text-[#10233c]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                  <path d="M8.5 12.7a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z" />
                  <path d="M15.5 11.3a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
                  <path d="M5.8 18.2a5.2 5.2 0 0 1 5.4-4.2h1.6a5.2 5.2 0 0 1 5.4 4.2" />
                </svg>
              </div>

              <h3 className="relative z-10 mt-6 text-2xl font-bold text-[#10233c]">Experienced Team</h3>
              <p className="relative z-10 mt-3 text-sm leading-6 text-[#47546a]">
                Our crews combine practical expertise, respectful service, and dependable project care.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="min-h-[430px] py-20 bg-[#10233c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[36px] border border-white/10 bg-slate-950/95 p-10 sm:p-14 shadow-[0_25px_80px_rgba(8,12,31,0.35)]">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">
                  Ready to transform your space?
                </p>
                <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Let’s build something great together.
                </h2>
                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-300">
                  Talk to our team about premium painting solutions, thoughtful planning, and a dependable finishing process that leaves your space looking refined.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button href="/#contact" size="lg">
                  Start your project
                </Button>
                <Button href="#trusted" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore trust factors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
