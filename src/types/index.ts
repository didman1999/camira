export type BadgeTone = "sale" | "success" | "primary";

export interface ProductBadge {
  label: string;
  tone: BadgeTone;
}

export interface Product {
  id: string;
  slug: string;
  /** Arabic display name */
  name: string;
  /** Latin brand + model line shown under the name */
  model: string;
  brand: string;
  categoryId: string;
  /** Price in SAR */
  price: number;
  /** Original price in SAR, when discounted */
  oldPrice?: number;
  image: string;
  badge?: ProductBadge;
  isBestSeller?: boolean;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  href: string;
}

export interface Brand {
  id: string;
  name: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
