"use client";

import type { Service } from "@/lib/products";
import { useCart } from "@/components/cart/CartProvider";

interface ProductAddButtonProps {
  product: Service;
  compact?: boolean;
}

export function ProductAddButton({ product, compact }: ProductAddButtonProps) {
  const { addItem } = useCart();

  if (compact) {
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          addItem(product);
        }}
        disabled={!product.inStock}
        className="w-full sm:w-auto shrink-0 min-h-11 px-6 py-2.5 text-sm font-semibold bg-gold text-black rounded-full hover:bg-gold-light transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Get Free Quote
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        addItem(product);
      }}
      disabled={!product.inStock}
      className="w-full min-h-12 py-3 text-sm font-medium text-gold border border-gold/40 rounded-xl hover:bg-gold/10 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
    >
      Request Quote
    </button>
  );
}
