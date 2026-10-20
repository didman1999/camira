import Header from "@/components/layout/Header";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/home/Hero";
import TrustFeatures from "@/components/home/TrustFeatures";
import CategoriesSection from "@/components/home/CategoriesSection";
import BestSellers from "@/components/home/BestSellers";
import PromoBanners from "@/components/home/PromoBanners";
import Brands from "@/components/home/Brands";
import { getBestSellers, getBrands, getCategories } from "@/services/catalog";

export default async function HomePage() {
  const [categories, bestSellers, brands] = await Promise.all([
    getCategories(),
    getBestSellers(),
    getBrands(),
  ]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustFeatures />
        <CategoriesSection categories={categories} />
        <BestSellers products={bestSellers} />
        <PromoBanners />
        <Brands brands={brands} />
      </main>
      <SiteFooter />
    </>
  );
}
