import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/banner2.png"
          alt="Construction professionals working on site"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid min-h-[60vh] items-center lg:grid-cols-2">
          <div className="max-w-3xl space-y-8 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-orange-200">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Building the future
            </span>

            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-orange-300">
                Construction & renovation solutions
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[4rem] leading-[1.05]">
                Strong foundations for modern construction projects.
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              We deliver premium building, renovation and finishing services with expert planning, dependable execution, and a polished final result.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#contact" size="lg" className="min-w-[12rem] bg-orange-500 hover:bg-orange-400 text-slate-950">
                Get A Quote
              </Button>
              <Button href="#services" variant="secondary" size="lg" className="min-w-[12rem] text-white border-white/20">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
