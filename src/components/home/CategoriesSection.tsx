import CategoryCard from "@/components/ui/CategoryCard";
import type { Category } from "@/types";

export default function CategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <section id="categories" aria-label="أقسام المتجر" className="scroll-mt-4 bg-surface py-5 sm:py-6">
      <div className="container-page grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {categories.map((category, i) => (
          <div key={category.id} className={i === categories.length - 1 ? "col-span-2 sm:col-span-1" : undefined}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </section>
  );
}
