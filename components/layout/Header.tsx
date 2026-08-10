"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";
import { CartButton } from "@/components/cart/CartButton";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
      <div className="hidden border-b border-slate-800 bg-slate-900/95 py-2 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 text-sm text-slate-300 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="mailto:hello@aradhya-paints.com" className="hover:text-white transition-colors">
              hello@aradhya-paints.com
            </a>
            <a href="tel:+919876543210" className="hover:text-white transition-colors">
              +91 98765 43210
            </a>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
              IG
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">
              FB
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-white">
              YT
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/aradhya.jpeg"
            alt={BRAND.name}
            width={140}
            height={60}
            className="h-10 w-auto object-contain"
            decoding="async"
          />
          <span className="hidden text-sm font-semibold uppercase tracking-[0.28em] text-orange-400 sm:inline-block">
            {BRAND.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CartButton />
          <Link
            href="#contact"
            className="hidden rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400 lg:inline-flex"
          >
            Get A Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition hover:border-orange-500 hover:text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-slate-800 bg-slate-950/98 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-orange-400"
            >
              Get A Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
