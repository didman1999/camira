import { products } from "@/data/products";
import { brands, categories } from "@/data/catalog";
import type { Brand, Category, Product } from "@/types";

/**
 * Data access layer.
 *
 * Today it returns local mock data. When a backend exists (any host — Hostinger,
 * a headless CMS, WooCommerce, a custom API), replace the bodies of these functions
 * with fetch calls to `process.env.NEXT_PUBLIC_API_BASE_URL`. Components stay unchanged.
 */

export async function getBestSellers(): Promise<Product[]> {
  return products.filter((p) => p.isBestSeller);
}

export async function getAllProducts(): Promise<Product[]> {
  return products;
}

export async function getCategories(): Promise<Category[]> {
  return categories;
}

export async function getBrands(): Promise<Brand[]> {
  return brands;
}

/** Synchronous client-side search over the mock catalogue (used by the header search). */
export function searchProducts(query: string, limit = 6): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products
    .filter((p) =>
      [p.name, p.model, p.brand].some((field) => field.toLowerCase().includes(q)),
    )
    .slice(0, limit);
}
