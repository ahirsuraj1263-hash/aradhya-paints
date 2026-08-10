"use client";

import { useEffect, useState } from "react";
import { useCart } from "./CartProvider";

export function CartButton() {
  const { itemCount, openCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      onClick={openCart}
      className="relative min-h-11 min-w-11 flex items-center justify-center text-white hover:text-white/80 transition-colors cursor-pointer rounded-lg"
      aria-label={`Open cart${mounted && itemCount > 0 ? `, ${itemCount} items` : ""}`}
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      {mounted && itemCount > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold text-black text-xs font-bold rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}
