"use client";

import { useEffect } from "react";
import { useCart } from "./CartProvider";
import { formatPrice } from "@/lib/products";
import { buildOrderMessage, getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function CartDrawer() {
  const {
    items,
    itemCount,
    total,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappUrl =
    items.length > 0
      ? getWhatsAppUrl(buildOrderMessage(items))
      : undefined;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-40 sm:backdrop-blur-sm"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-black-elevated border-l border-gold/15 z-50 flex flex-col shadow-2xl safe-top"
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gold/20 shrink-0">
          <h2 className="text-lg sm:text-xl font-display text-gold">
            Your Cart ({itemCount})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="min-h-11 min-w-11 flex items-center justify-center text-cream hover:text-gold transition-colors cursor-pointer rounded-lg"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 space-y-3">
          {items.length === 0 ? (
            <p className="text-cream/85 text-center py-12 text-sm sm:text-base">
              Your cart is empty. Browse our products to get started.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-3 sm:gap-4 p-3 rounded-lg bg-black/40 border border-gold/10"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  width={64}
                  height={64}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-contain bg-black shrink-0"
                  loading="lazy"
                  decoding="async"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-cream font-medium text-sm leading-snug line-clamp-2">
                    {item.product.name}
                  </h3>
                  <p className="text-cream/75 text-xs mt-0.5">{item.product.duration}</p>
                  <p className="text-gold text-sm mt-1 font-medium">
                    {formatPrice(item.product.price)}
                  </p>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      className="min-h-10 min-w-10 rounded border border-gold/40 text-gold hover:bg-gold/10 flex items-center justify-center text-base cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="text-cream min-w-8 text-center text-sm font-medium">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      className="min-h-10 min-w-10 rounded border border-gold/40 text-gold hover:bg-gold/10 flex items-center justify-center text-base cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="ml-auto min-h-10 px-3 text-cream/70 hover:text-red-400 text-xs sm:text-sm cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-gold/20 space-y-3 safe-bottom shrink-0 bg-black-elevated">
            <div className="flex justify-between items-center text-cream text-sm sm:text-base gap-2">
              <span className="shrink-0">Total (MRP incl. GST)</span>
              <span className="text-gold font-semibold text-lg sm:text-xl">
                {formatPrice(total)}
              </span>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
              onClick={() => {
                clearCart();
                closeCart();
              }}
            >
              <Button variant="whatsapp" size="lg" className="w-full min-h-12">
                <WhatsAppIcon />
                <span className="truncate">Send Order on WhatsApp</span>
              </Button>
            </a>
            <p className="text-cream/75 text-xs text-center">
              Site-ready scheduling within 24 hours
            </p>
          </div>
        )}
      </aside>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
