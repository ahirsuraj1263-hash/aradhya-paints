interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  product?: string;
  service?: string;
  rating: number;
}

export function TestimonialCard({
  quote,
  name,
  location,
  product,
  service,
  rating,
}: TestimonialCardProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <blockquote className="relative flex flex-col h-full rounded-[18px] bg-white border border-[#d9e2f6] p-5 sm:p-6 overflow-hidden shadow-[0_14px_42px_rgba(20,44,78,0.08)]">
      <span
        className="pointer-events-none absolute top-0 left-0 w-5 h-5 border-t border-l border-[#e28a25]/55"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-0 right-0 w-5 h-5 border-b border-r border-[#e28a25]/55"
        aria-hidden="true"
      />

      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#e28a25]/35 text-[10px] font-medium tracking-[0.14em] uppercase text-[#b4630a] bg-[#fffaf2]">
          {product ?? service}
        </span>
        <span
          className="font-display text-3xl leading-none text-[#d5a15a] select-none"
          aria-hidden="true"
        >
          &rdquo;
        </span>
      </div>

      <div className="flex gap-0.5 mt-3.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      <p className="mt-4 text-sm text-[#48556a] leading-relaxed flex-1">
        {quote}
      </p>

      <div className="mt-5 pt-4 border-t border-[#d9e2f6] flex items-center gap-3">
        <span
          className="flex items-center justify-center w-9 h-9 rounded-full border border-[#e28a25]/40 text-[#e28a25] font-display text-base shrink-0"
          aria-hidden="true"
        >
          {initial}
        </span>
        <footer className="min-w-0">
          <cite className="not-italic block text-sm font-medium text-[#10233c] truncate">
            {name}
          </cite>
          <span className="block text-xs text-[#6f7b91] mt-0.5">{location}</span>
        </footer>
      </div>
    </blockquote>
  );
}

function StarIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-gold"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
