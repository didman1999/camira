import ProductCard from "@/components/ui/ProductCard";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Product } from "@/types";

export default function BestSellers({ products }: { products: Product[] }) {
  return (
    <section id="products" aria-labelledby="best-sellers-title" className="scroll-mt-4 bg-white py-7 sm:py-8">
      <div className="container-page">
        <SectionHeader id="best-sellers-title" title="أفضل المنتجات" linkLabel="عرض جميع المنتجات" linkHref="#products" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
