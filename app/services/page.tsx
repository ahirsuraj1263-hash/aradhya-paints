import type { Metadata } from "next";
import { BRAND, DELIVERY } from "@/lib/constants";
import { SERVICES } from "@/lib/products";
import { ProductCard } from "@/components/service/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore ${BRAND.name}'s painting services for interior, exterior, texture, waterproofing, and premium residential or commercial finishes.`,
};

export default function ServicesPage() {
  return (
    <div className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          hindi="हमारी सेवाएँ"
          subtitle="Interior, exterior, texture, waterproofing, and premium finishing solutions for homes and businesses."
        />

        <div className="max-w-3xl mx-auto text-center mb-10 space-y-3">
          <p className="text-sm text-white/90 leading-relaxed">
            From a single-room refresh to complete commercial transformation,
            our team combines precise preparation, premium materials, and clean
            execution to deliver polished results that last.
          </p>
          <p className="font-hindi text-xs text-white/85">
            प्रीमियम फिनिश · साफ़ काम · भरोसेमंद सेवा · मुफ्त कंसल्टेशन
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {SERVICES.map((service) => (
            <ProductCard key={service.id} product={service} />
          ))}
        </div>

        <p className="text-center text-white/80 text-xs mt-10">
          {DELIVERY.coverage} · {DELIVERY.dispatch}
        </p>
      </div>
    </div>
  );
}
