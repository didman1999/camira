"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/services/catalog";
import { cn, formatPrice } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  id: string;
}

export default function SearchBar({ className, id }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const results = searchProducts(query);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const goToProduct = (productId: string) => {
    setOpen(false);
    setQuery("");
    const el = document.getElementById(`product-${productId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-primary");
      setTimeout(() => el.classList.remove("ring-2", "ring-primary"), 1800);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results[0]) goToProduct(results[0].id);
    else document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  const showPanel = open && query.trim().length > 0;

  return (
    <div ref={wrapperRef} className={cn("relative", className)}>
      <form role="search" onSubmit={onSubmit} className="flex h-10 overflow-hidden rounded-md border border-line bg-white transition-colors focus-within:border-primary sm:h-11">
        <button
          type="submit"
          aria-label="بحث"
          className="grid w-10 shrink-0 place-items-center bg-primary text-white transition-colors hover:bg-primary-dark sm:w-11"
        >
          <Search className="size-[18px]" />
        </button>
        <input
          id={id}
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
          placeholder="ابحث عن منتج، ماركة أو كلمة مفتاحية..."
          aria-label="ابحث عن منتج"
          aria-expanded={showPanel}
          aria-controls={listId}
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-ink outline-none placeholder:text-muted/80 [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="مسح البحث"
            className="grid w-9 shrink-0 place-items-center text-muted hover:text-ink"
          >
            <X className="size-4" />
          </button>
        )}
      </form>

      {showPanel && (
        <div
          id={listId}
          role="listbox"
          className="absolute inset-x-0 top-full z-50 mt-1.5 overflow-hidden rounded-lg border border-line bg-white shadow-card-hover"
        >
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto py-1">
              {results.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={false}
                    onClick={() => goToProduct(p.id)}
                    className="flex w-full items-center gap-3 px-3 py-2 text-start transition-colors hover:bg-surface"
                  >
                    <span className="relative size-11 shrink-0 overflow-hidden rounded-md border border-line bg-white">
                      <Image src={p.image} alt="" fill sizes="44px" className="object-contain p-0.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-bold text-navy">{p.name}</span>
                      <span dir="ltr" className="block truncate text-end text-xs text-muted">{p.model}</span>
                    </span>
                    <span className="shrink-0 text-sm font-extrabold text-primary">{formatPrice(p.price)}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-5 text-center text-sm text-muted">لا توجد نتائج مطابقة لـ &quot;{query}&quot;</p>
          )}
        </div>
      )}
    </div>
  );
}
