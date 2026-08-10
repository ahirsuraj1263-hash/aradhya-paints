"use client";

import { useState } from "react";
import type { Product } from "@/lib/products";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const galleryImages = product.images?.length ? product.images : [product.image];
  const [activeImage, setActiveImage] = useState(galleryImages[0] ?? product.image);

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-[8px] border border-gold/15 bg-card-inner/70 p-3 sm:p-4">
        <img
          src={activeImage}
          alt={product.name}
          width={832}
          height={1178}
          className="w-full h-auto object-contain rounded-[4px]"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {galleryImages.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {galleryImages.map((image, index) => {
            const isActive = image === activeImage;
            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`h-20 w-20 overflow-hidden rounded-[6px] border transition-all duration-200 ${
                  isActive
                    ? "border-gold shadow-[0_0_0_1px_rgba(212,180,106,0.35)]"
                    : "border-white/10 hover:border-gold/50"
                }`}
                aria-label={`Show image ${index + 1} for ${product.name}`}
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
