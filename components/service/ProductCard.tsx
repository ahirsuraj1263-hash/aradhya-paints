import Link from "next/link";
import type { Service } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { ProductAddButton } from "./ProductAddButton";

interface ProductCardProps {
  product: Service;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group card-premium flex flex-col rounded-2xl overflow-hidden transition-all duration-300 ring-1 ring-[#f97316]/15 h-full">
      <Link
        href={`/services/${product.slug}`}
        className="block relative aspect-[3/4] bg-[#091426] overflow-hidden border-b border-white/10"
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 50% 70%, rgba(249,115,22,0.28) 0%, transparent 65%)",
          }}
        />
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-contain p-3 sm:p-4 group-hover:scale-[1.035] transition-transform duration-500 ease-out"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 text-[10px] font-medium tracking-widest lowercase text-[#ffdfb6] bg-[#0a1224]/85 rounded-full border border-[#f97316]/35 backdrop-blur-sm">
          {product.duration}
        </span>
      </Link>

      <div className="flex flex-col flex-1 p-4 sm:p-5 lg:p-6">
        <Link href={`/services/${product.slug}`} className="block">
          <h3 className="font-display text-lg sm:text-xl lg:text-[1.35rem] text-[#ffb47a] leading-snug group-hover:text-[#f97316] transition-colors">
            {product.name}
          </h3>
          <p className="font-hindi text-xs text-[#c8d5ee] mt-1">{product.nameHindi}</p>
        </Link>

        <p className="text-sm text-[#d8e2f6] leading-relaxed mt-2 sm:mt-3 line-clamp-2 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-white/10">
          <div className="min-w-0">
            <p className="text-lg sm:text-xl font-semibold text-white tracking-tight">
              {formatPrice(product.price)}
            </p>
            <p className="text-xs text-[#9fb4d3] mt-0.5">Starting estimate</p>
          </div>
          <ProductAddButton product={product} compact />
        </div>
      </div>
    </article>
  );
}
