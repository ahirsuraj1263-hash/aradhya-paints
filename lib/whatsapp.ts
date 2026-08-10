import { BRAND } from "./constants";
import type { Product } from "./products";
import { formatPrice } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
}

export function buildOrderMessage(items: CartItem[]): string {
  const lines = items.map(
    (item) =>
      `• ${item.product.name} (${item.product.duration}) × ${item.quantity} — ${formatPrice(item.product.price * item.quantity)}`
  );

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return [
    `Hi, I'd like to request a quote from ${BRAND.name}:`,
    "",
    "Name:",
    "Address:",
    "Pincode:",
    "",
    ...lines,
    "",
    `Estimated total: ${formatPrice(total)}`,
    "",
    "Please confirm the service schedule and site coordination details.",
  ].join("\n");
}

export function buildEnquiryMessage(): string {
  return `Hi, I have an enquiry about ${BRAND.name} services.`;
}

export function buildSingleProductMessage(
  product: Product,
  quantity: number
): string {
  return buildOrderMessage([{ product, quantity }]);
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}
