"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Check, Heart, ShoppingCart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { cn, formatPrice } from "@/lib/utils";
import type { BadgeTone, Product } from "@/types";

const badgeTones: Record<BadgeTone, string> = {
  sale: "bg-sale",
  success: "bg-success",
  primary: "bg-primary",
};

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleFavorite, isFavorite } = useStore();
  const [justAdded, setJustAdded] = useState(false);
  const favorite = isFavorite(product.id);

  useEffect(() => {
    if (!justAdded) return;
    const t = setTimeout(() => setJustAdded(false), 1600);
    return () => clearTimeout(t);
  }, [justAdded]);

  const handleAdd = () => {
    addToCart(product);
    setJustAdded(true);
  };

  return (
    <article
      id={`product-${product.id}`}
      className="card group relative flex scroll-mt-24 flex-col p-2.5 hover:shadow-card-hover sm:p-3"
    >
      {/* Top row: badge (start/right) + favourite (end/left) */}
      <div className="absolute inset-x-2.5 top-2.5 z-10 flex items-start justify-between sm:inset-x-3 sm:top-3">
        {product.badge ? (
          <span
            className={cn(
              "rounded px-1.5 py-0.5 text-[10px] font-bold text-white sm:text-[11px]",
              badgeTones[product.badge.tone],
            )}
          >
            {product.badge.label}
          </span>
        ) : (
          <span />
        )}
        <button
          type="button"
          id={`fav-${product.id}`}
          onClick={() => toggleFavorite(product.id)}
          aria-pressed={favorite}
          aria-label={favorite ? "إزالة من المفضلة" : "أضف إلى المفضلة"}
          className="grid size-7 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-sale"
        >
          <Heart
            className={cn("size-[18px] transition-transform", favorite && "scale-110 fill-sale text-sale")}
            strokeWidth={1.8}
          />
        </button>
      </div>

      <div className="relative mx-auto mt-5 aspect-square w-full max-w-[180px] sm:mt-4">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 200px, (min-width: 640px) 30vw, 45vw"
          className="object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>

      <div className="mt-2 flex flex-1 flex-col items-center text-center">
        <h3 className="line-clamp-2 text-[13px] font-bold leading-snug text-navy sm:text-sm">{product.name}</h3>
        <p dir="ltr" className="mt-0.5 text-[11px] text-muted sm:text-xs">
          {product.model}
        </p>

        <div className="mt-2 flex flex-wrap items-baseline justify-center gap-x-2">
          <span className="text-[15px] font-extrabold text-primary sm:text-base">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-[11px] text-muted line-through sm:text-xs">{formatPrice(product.oldPrice)}</span>
          )}
        </div>
      </div>

      <button
        type="button"
        id={`add-${product.id}`}
        onClick={handleAdd}
        disabled={!product.inStock}
        className={cn(
          "btn-primary mt-3 h-9 w-full text-xs sm:text-[13px]",
          justAdded && "bg-success hover:bg-success",
        )}
      >
        {justAdded ? (
          <>
            <Check className="size-4" /> تمت الإضافة
          </>
        ) : (
          <>
            <ShoppingCart className="size-4" /> أضف إلى السلة
          </>
        )}
      </button>
    </article>
  );
}
