"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";

type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  location?: string;
  short?: string;
};

export default function PortfolioGridClient({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [projects]);

  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") ?? "All";

  const [selected, setSelected] = useState<string>(initialCategory);

  useEffect(() => {
    // Update selection when URL changes (so links work and reflect state)
    const cat = searchParams?.get("category") ?? "All";
    setSelected(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    if (selected === "All") return projects;
    return projects.filter((p) => p.category === selected);
  }, [projects, selected]);

  return (
    <section className="py-16">
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((cat) => {
          const href = cat === "All" ? "/projects" : `/projects?category=${encodeURIComponent(cat)}`;
          const isActive = selected === cat;
          return (
            <Link key={cat} href={href} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive ? "bg-orange-600 text-white shadow-md" : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-50"}`}>
              {cat}
            </Link>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <article key={p.id} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute left-4 bottom-4 z-10">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white bg-orange-600/95">
                  {p.category}
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              {p.location && <p className="mt-1 text-sm text-slate-500">{p.location}</p>}
              {p.short && <p className="mt-3 text-sm text-slate-600">{p.short}</p>}

              <div className="mt-4">
                <Button href="#" variant="ghost" size="sm" className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200">
                  View Project
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H3a1 1 0 110-2h10.586L10.293 5.707a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
