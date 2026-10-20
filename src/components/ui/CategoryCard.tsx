import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
  priority?: boolean;
}

export default function CategoryCard({ category, priority }: CategoryCardProps) {
  return (
    <a
      href={category.href}
      className="card group flex flex-col overflow-hidden hover:border-primary/30 hover:shadow-card-hover"
    >
      <div className="relative h-24 overflow-hidden bg-surface sm:h-28 lg:h-[118px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 250px, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-1 px-2 py-2.5 text-center">
        <h3 className="text-sm font-bold leading-snug text-navy">{category.name}</h3>
        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-primary">
          اكتشف المزيد
          <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}
