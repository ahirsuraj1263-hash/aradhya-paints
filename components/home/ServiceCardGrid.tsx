import Image from "next/image";
import { SERVICES } from "@/lib/products";

const featuredServices = SERVICES.slice(0, 6);

export function ServiceCardGrid() {
  return (
    <section className="py-10 sm:py-14 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service, index) => (
            <article
              key={service.slug}
              className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-2 text-xs uppercase tracking-[0.28em] text-white">
                  <span className="block h-2 w-2 rounded-full bg-orange-500" />
                  Service
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600 transition hover:text-orange-500">
                    Learn More →
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                    {index + 1}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
