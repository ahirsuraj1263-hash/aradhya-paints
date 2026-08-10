import { BRAND, DELIVERY } from "@/lib/constants";

export function TrustBadges() {
  const items = [
    "Premium finish standards",
    "Site-ready scheduling",
    "Trusted workmanship",
    DELIVERY.coverage,
    "Clean execution",
  ];

  return (
    <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto scrollbar-hide">
      <div className="flex sm:flex-wrap sm:justify-center gap-x-6 sm:gap-x-8 gap-y-3 min-w-max sm:min-w-0 pb-1 sm:pb-0">
        {items.map((item) => (
          <span
            key={item}
            className="text-sm sm:text-sm text-[#41526a] tracking-wide flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e28a25] shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
