import { Button } from "@/components/ui/Button";

interface Props {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function EstimateCta({
  eyebrow,
  title,
  description,
  primaryLabel = "Start your project",
  primaryHref = "/#contact",
  secondaryLabel = "Explore trust factors",
  secondaryHref = "#trusted",
}: Props) {
  return (
    <section className="min-h-[430px] py-20 bg-[#10233c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[36px] border border-white/10 bg-slate-950/95 p-10 sm:p-14 shadow-[0_25px_80px_rgba(8,12,31,0.35)]">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              {eyebrow ? (
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-orange-300">
                  {eyebrow}
                </p>
              ) : null}

              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-slate-300">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
              </Button>
              <Button href={secondaryHref} variant="secondary" size="lg" className="w-full sm:w-auto">
                {secondaryLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
