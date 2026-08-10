"use client";

import { useState } from "react";
import type { Service } from "@/lib/products";
import { useCart } from "@/components/cart/CartProvider";
import { Button } from "@/components/ui/Button";
import { buildSingleProductMessage, getWhatsAppUrl } from "@/lib/whatsapp";

interface AddToCartButtonProps {
  product: Service;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const whatsappUrl = getWhatsAppUrl(
    buildSingleProductMessage(product, quantity)
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <span className="text-cream text-sm w-full sm:w-auto">Preferred schedule:</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="min-h-11 min-w-11 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 flex items-center justify-center text-lg cursor-pointer"
            aria-label="Reduce selected quantity"
          >
            −
          </button>
          <span className="text-cream min-w-10 text-center font-medium text-lg">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="min-h-11 min-w-11 rounded-lg border border-gold/40 text-gold hover:bg-gold/10 flex items-center justify-center text-lg cursor-pointer"
            aria-label="Increase selected quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Button
          variant="primary"
          size="lg"
          className="w-full"
          onClick={() => addItem(product, quantity)}
          disabled={!product.inStock}
        >
          Get Free Quote
        </Button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button variant="whatsapp" size="lg" className="w-full">
            Book Free Consultation
          </Button>
        </a>
      </div>
    </div>
  );
}
