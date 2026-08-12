import type { Metadata } from "next";
import Image from "next/image";
import { BRAND, MISSION } from "@/lib/constants";
import { ABOUT_EXTRA, WHY_CHOOSE } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.name} — premium painting services for polished homes, offices, and commercial spaces.`,
};

const COMPANY_STRENGTHS = [
  { title: "Trusted Craft", description: "Experienced painting teams with attention to every detail." },
  { title: "Premium Materials", description: "Top-quality paint systems and finishing products for lasting beauty." },
  { title: "Reliable Delivery", description: "Clear timelines, consistent communication, and respectful site care." },
  { title: "Customer Confidence", description: "A quality-first process that builds trust from consultation through completion." },
] as const;

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

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-slate-100 text-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,138,37,0.12),transparent_28%),radial-gradient(circle_at_10%_80%,rgba(248,168,77,0.08),transparent_18%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-[calc(2rem+20px)] sm:px-6 lg:px-8 lg:py-[calc(3rem+20px)]">
          <div className="grid min-h-[36vh] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600/90">
                Home / About Us
              </p>
              <h1 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-950">
                Premium painting services built around trust, precision, and lasting finishes.
              </h1>
              <p className="mt-8 text-base sm:text-lg leading-8 text-slate-700">
                Aradhya Paints delivers a refined painting experience for homes, offices, and commercial spaces.
                We combine professional planning, premium materials, and meticulous workmanship to create spaces
                that feel polished and built to last.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/#contact" size="lg">
                  Book a consultation
                </Button>
                <Button href="#mission" variant="secondary" size="lg" className="w-full sm:w-auto">
                  View mission
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-12 top-8 h-28 w-28 rounded-full bg-orange-300/20 blur-3xl" />
              <div className="absolute right-0 top-14 h-20 w-20 rounded-full border border-slate-300/30 bg-white/80" />
              <div className="relative h-[300px] overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(20,44,78,0.12)] sm:h-[360px] md:h-[400px] lg:h-[480px]">
                <Image
                  src="/about-professional.svg"
                  alt="Painting professional at work"
                  width={1000}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10 rounded-full border border-orange-300/30 bg-orange-200/10 p-4 shadow-[0_0_40px_rgba(226,138,37,0.16)] hidden md:block">
                <div className="h-12 w-12 rounded-full bg-orange-200/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 section-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-12 top-6 h-24 w-24 rounded-full bg-orange-100/80 blur-3xl" />
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-[32px] border border-[#d9e2f6] bg-white shadow-[0_24px_60px_rgba(20,44,78,0.08)]">
                  <Image
                    src="/why-choose-us.jpeg"
                    alt="Aradhya Paints project team"
                    width={1000}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-[#d9e2f6] bg-white p-5 shadow-[0_16px_36px_rgba(20,44,78,0.06)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">1200+</p>
                    <p className="mt-3 text-sm text-[#47546a] leading-relaxed">Projects completed across residential and commercial spaces.</p>
                  </div>
                  <div className="rounded-[28px] border border-[#d9e2f6] bg-white p-5 shadow-[0_16px_36px_rgba(20,44,78,0.06)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">4.9/5</p>
                    <p className="mt-3 text-sm text-[#47546a] leading-relaxed">Client satisfaction through quality finishes and reliable project execution.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
                About the company
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#10233c]">
                Bringing premium painting solutions to every space with a corporate, trust-first approach.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#47546a]">
                Aradhya Paints blends professional planning, premium materials, and a disciplined project workflow to
                deliver polished painting results that feel modern, corporate, and dependable.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {COMPANY_STRENGTHS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[#d9e2f6] bg-white p-6 shadow-[0_16px_36px_rgba(20,44,78,0.06)]"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#10233c]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#47546a]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/services" size="lg">
                  Explore Services
                </Button>
                <Button href="#trusted" variant="secondary" size="lg" className="w-full sm:w-auto">
                  Why clients trust us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 bg-slate-50">
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

      <section id="trusted" className="py-20 section-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-600">
              Why clients trust us
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-[#10233c]">
              Professional execution, premium materials, and customer confidence at every stage.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#d9e2f6] bg-white p-6 shadow-[0_18px_45px_rgba(20,44,78,0.06)] transition hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange-600 shadow-[0_12px_30px_rgba(226,138,37,0.1)]">
                  <span className="text-sm font-semibold uppercase tracking-[0.28em]">{item.title.charAt(0)}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[#10233c]">{item.title}</h3>
                <p className="mt-3 text-sm text-[#47546a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[32px] border border-[#d9e2f6] bg-[#f7f3ef] p-8 shadow-[0_20px_60px_rgba(20,44,78,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10233c]/80">
                Proven consistency
              </p>
              <p className="mt-4 text-[#47546a] leading-relaxed text-sm">
                Every project is completed with consistent finish standards, site discipline, and premium attention to detail.
              </p>
            </div>
            <div className="rounded-[32px] border border-[#d9e2f6] bg-white p-8 shadow-[0_20px_60px_rgba(20,44,78,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10233c]/80">
                Customer-first service
              </p>
              <p className="mt-4 text-[#47546a] leading-relaxed text-sm">
                Clear estimates, scheduled updates, and respectful site care keep every project secure, polished, and on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#10233c] text-white">
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
