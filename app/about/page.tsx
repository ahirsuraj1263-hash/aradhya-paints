import type { Metadata } from "next";
import { BRAND, MISSION } from "@/lib/constants";
import { ABOUT_EXTRA } from "@/lib/content";
import { PremiumSectionHeading } from "@/components/ui/PremiumSectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.name} — premium painting services for polished homes, offices, and commercial spaces.`,
};

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-16 section-panel">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <PremiumSectionHeading
          eyebrow="Who we are"
          title="About Aradhya Paints"
          hindi="अरध्या पेन्ट्स के बारे में"
          tagline="Premium painting services for elegant homes, workspaces, and lasting finishes."
        />

        <div className="flex justify-center mb-10">
          <img
            src="/ojuu20080.avif"
            alt={BRAND.name}
            width={200}
            height={80}
            className="h-16 sm:h-20 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="space-y-10 text-sm text-[#48556a] leading-relaxed">
          <section>
            <h2 className="font-display text-xl sm:text-2xl text-[#10233c] mb-3 tracking-wide">
              Our Story
            </h2>
            {ABOUT_EXTRA.story.map((para) => (
              <p key={para.slice(0, 40)} className="mt-3 first:mt-0">
                {para}
              </p>
            ))}
            <p className="mt-3">
              Our name combines <em className="text-[#10233c] not-italic font-medium">Ojas</em>{" "}
              — the Ayurvedic essence of vitality and energy — with{" "}
              <em className="text-[#10233c] not-italic font-medium">Nath</em>, meaning
              protector.               Aradhya Paints is the trusted partner for refined,
              lasting surface transformation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl text-[#10233c] mb-4 tracking-wide">
              From Source to Your Space
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {ABOUT_EXTRA.process.map((step, i) => (
                <div
                  key={step.title}
                  className="p-4 rounded-[16px] border border-[#d9e2f6] bg-white/90"
                >
                  <span className="text-[10px] tracking-widest text-[#e28a25]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm text-[#10233c] font-medium mt-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#48556a] mt-1.5 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl text-[#10233c] mb-4 tracking-wide">
              Vision & Mission
            </h2>
            <div className="p-5 rounded-[16px] border border-[#d9e2f6] bg-white/90 space-y-4">
              <div>
                <span className="inline-flex px-2 py-0.5 text-[10px] tracking-[0.14em] uppercase border border-[#10233c]/15 text-[#10233c]/85 rounded-[4px] mb-3">
                  हिन्दी
                </span>
                <p lang="hi" className="font-hindi text-[#48556a]">
                  {MISSION.hindi}
                </p>
                <p lang="hi" className="font-hindi text-[#67758a] text-xs mt-3">
                  {MISSION.hindiMission}
                </p>
              </div>
              <div className="pt-3 border-t border-[#d9e2f6]">
                <span className="inline-flex px-2 py-0.5 text-[10px] tracking-[0.14em] uppercase border border-[#10233c]/15 text-[#10233c]/85 rounded-[4px] mb-3">
                  English
                </span>
                <p className="text-sm text-[#48556a]">{MISSION.english}</p>
                <p className="text-sm text-[#48556a] mt-3">{MISSION.englishMission}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl sm:text-2xl text-[#10233c] mb-3 tracking-wide">
              Quality Promise
            </h2>
            <p className="text-[#48556a]">
              Every Aradhya Paints project is executed with professional care,
              precision, and premium-grade finishing standards — because your
              space deserves a result you can trust, not compromise.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
