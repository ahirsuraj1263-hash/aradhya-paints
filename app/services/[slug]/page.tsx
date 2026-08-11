import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND } from "@/lib/constants";
import { SERVICES, formatPrice, getServiceBySlug } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { ProductImageGallery } from "@/components/service/ProductImageGallery";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="py-8 sm:py-10 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="text-xs text-muted mb-6 flex flex-wrap items-center gap-y-1">
          <Link href="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2 text-gold/30">/</span>
          <Link href="/services" className="hover:text-gold">
            Services
          </Link>
          <span className="mx-2 text-gold/30">/</span>
          <span className="text-cream/70 truncate max-w-[12rem] sm:max-w-none">
            {service.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start">
          <div className="mx-auto lg:mx-0 w-full max-w-[22rem] sm:max-w-[24rem] lg:max-w-[26rem]">
            <ProductImageGallery product={service} />
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-medium tracking-widest uppercase text-gold/70 border border-gold/20 rounded-full px-3 py-1">
                {service.duration}
              </span>
              <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl text-gold-light mt-3 sm:mt-4 leading-tight">
                {service.name}
              </h1>
              <p className="font-hindi text-white/90 mt-2">{service.nameHindi}</p>
            </div>

            <div>
              <p className="text-2xl sm:text-3xl font-medium text-white">
                {formatPrice(service.price)}
              </p>
              <p className="text-sm text-white/80 mt-1">Starting estimate</p>
            </div>

            <p className="text-sm text-white/90 leading-relaxed">
              {service.description}
            </p>

            <Button href="#contact" variant="primary" size="md" className="w-full sm:w-auto">
              Request a Quote
            </Button>

            <div className="pt-6 border-t border-gold/10 space-y-6">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-gold/80 mb-3">
                  Service Highlights
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm text-white/90 border border-white/20 bg-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-widest text-gold/80 mb-3">
                  What You Can Expect
                </h2>
                <ul className="space-y-2">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-white/90 text-sm"
                    >
                      <span className="text-leaf mt-0.5">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-white/80">
                {BRAND.name} · {BRAND.domain} · Consultation and site scheduling
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
