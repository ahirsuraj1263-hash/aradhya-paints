import type { Metadata } from "next";
import { BRAND } from "@/lib/constants";
import { WHY_CHOOSE } from "@/lib/content";
import { PremiumSectionHeading } from "@/components/ui/PremiumSectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Why Aradhya Paints",
  description: `Discover why ${BRAND.name} is the trusted choice for premium painting services, clean workmanship, and lasting finishes.`,
};

const REASONS = [
  {
    title: "Premium Finish Standards",
    hindi: "प्रीमियम फिनिश स्टैंडर्ड",
    desc: "Every project is executed with precise preparation, premium-grade materials, and a finish detail that elevates the whole space.",
    points: [
      "Surface-first prep and finishing discipline",
      "Premium-grade paint systems and application care",
      "Clean, neat execution from start to finish",
    ],
  },
  {
    title: "Designed for Real Spaces",
    hindi: "वास्तविक Spaces के लिए डिज़ाइन",
    desc: "Whether the goal is a calm home interior or a polished commercial presentation, the process is tailored to how the space is used.",
    points: [
      "Residential and commercial adaptability",
      "Colour and finish guidance built around your space",
      "Practical, long-term improvement in appearance",
    ],
  },
  {
    title: "Reliable Service Experience",
    hindi: "भरोसेमंद सेवा अनुभव",
    desc: "From scheduling to completion, your work is coordinated with communication and professionalism to reduce stress throughout the project.",
    points: [
      "Clear communication and site coordination",
      "Timely updates and dependable workmanship",
      "A smoother, more confident project journey",
    ],
  },
  {
    title: "Trust & Transparency",
    hindi: "विश्वास और पारदर्शिता",
    desc: "You receive honest guidance, clear timelines, and a workmanship-first process that gives confidence before the first coat goes on.",
    points: [
      "Professional consultation and estimates",
      "Transparent service scope and expectations",
      "Site-ready scheduling and execution support",
    ],
  },
];

const COMPARISON = [
  { us: "Detailed surface preparation", them: "Rushed or incomplete prep work" },
  { us: "Premium finish standards", them: "Average finish quality" },
  { us: "Site-ready consultation", them: "Generic guidance only" },
  { us: "Professional workflow", them: "Unclear coordination" },
  { us: "Longer-lasting presentation", them: "Short-term cosmetic change" },
];

export default function WhyAradyaPaintsPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-20 section-panel">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <PremiumSectionHeading
          eyebrow="The difference you can see"
          title="Why Aradhya Paints"
          hindi="क्यों अरध्या पेन्ट्स"
          tagline="Premium finishing, reliable execution, and a polished environment for every project."
        />

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-5 mb-16 lg:mb-20">
          {WHY_CHOOSE.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[18px] border border-[#d9e2f6] bg-white/90 p-5 sm:p-6 flex gap-4 shadow-[0_10px_28px_rgba(20,44,78,0.06)]"
            >
              <span
                className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full border border-[#e28a25]/40 text-[#e28a25] font-display text-sm"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-base sm:text-lg text-[#10233c] tracking-wide uppercase leading-snug">
                  {item.title}
                </h3>
                <p className="font-hindi text-xs text-[#4c5a70] mt-1">{item.hindi}</p>
                <p className="text-sm text-[#48556a] mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8 sm:space-y-10">
          {REASONS.map((reason, i) => (
            <div
              key={reason.title}
              className="rounded-[18px] border border-[#d9e2f6] bg-white/90 p-5 sm:p-6 lg:p-8 shadow-[0_10px_30px_rgba(20,44,78,0.06)]"
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 flex items-center justify-center w-11 h-11 rounded-full border border-[#e28a25]/40 text-[#e28a25] font-display text-lg"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-xl sm:text-2xl text-[#10233c] tracking-wide">
                    {reason.title}
                  </h2>
                  <p className="font-hindi text-[#47546a] text-sm mt-1">
                    {reason.hindi}
                  </p>
                  <p className="text-[#48556a] mt-3 leading-relaxed text-sm sm:text-base">
                    {reason.desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {reason.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-[#48556a] text-sm"
                      >
                        <span className="text-[#2b8e72] mt-0.5">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 lg:mt-20">
          <h2 className="font-display text-2xl sm:text-3xl text-[#10233c] text-center tracking-wide mb-8">
            Aradhya Paints vs. Average Contractors
          </h2>
          <div className="rounded-[20px] border border-[#d9e2f6] overflow-x-auto bg-white/85 shadow-[0_10px_28px_rgba(20,44,78,0.06)]">
            <div className="grid grid-cols-2 bg-[#f8f3ea] text-xs sm:text-sm font-medium min-w-[280px]">
              <div className="p-3 sm:p-4 text-[#10233c]">Aradhya Paints</div>
              <div className="p-3 sm:p-4 text-[#47546a]">Generic Providers</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div
                key={row.us}
                className={`grid grid-cols-2 text-xs sm:text-sm min-w-[280px] ${
                  i % 2 === 0 ? "bg-white/80" : "bg-[#fbfaf7]"
                }`}
              >
                <div className="p-3 sm:p-4 text-[#48556a] flex items-start gap-2">
                  <span className="text-[#2b8e72] shrink-0">✓</span>
                  <span>{row.us}</span>
                </div>
                <div className="p-3 sm:p-4 text-[#6d788c] flex items-start gap-2">
                  <span className="text-[#9ea7b8] shrink-0">✗</span>
                  <span>{row.them}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center mt-14 lg:mt-16 space-y-4">
          <p className="text-[#48556a]">
            Start your painting transformation today.
          </p>
          <Button href="/services" size="lg" className="w-full sm:w-auto">
            Explore Our Services
          </Button>
        </div>
      </div>
    </div>
  );
}
