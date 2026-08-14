"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, NAV_LINKS } from "@/lib/constants";

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
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 transition hover:border-orange-500 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 transition hover:border-orange-500 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H8v3h2.3v8h3.2Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800/80 transition hover:border-orange-500 hover:text-white"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                <path d="M22.5 12c0-1.7-.2-3.5-.6-5.2-.3-1.3-1.4-2.3-2.7-2.6C17 3.8 14.6 3.5 12 3.5s-5 .3-7.2.7c-1.3.3-2.4 1.3-2.7 2.6C1.7 8.5 1.5 10.3 1.5 12s.2 3.5.6 5.2c.3 1.3 1.4 2.3 2.7 2.6 2.2.4 4.7.7 7.2.7s5-.3 7.2-.7c1.3-.3 2.4-1.3 2.7-2.6.4-1.7.6-3.5.6-5.2Zm-13.4 3.1V8.9l6.2 3.1-6.2 3.1Z" />
              </svg>
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
