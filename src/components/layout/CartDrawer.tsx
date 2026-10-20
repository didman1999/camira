"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { cn, formatPrice } from "@/lib/utils";

export default function CartDrawer() {
  const { items, isCartOpen, closeCart, updateQuantity, removeFromCart, subtotal, cartCount } = useStore();
  const [notice, setNotice] = useState(false);

  useEffect(() => {
    if (!isCartOpen) {
      setNotice(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isCartOpen, closeCart]);

  return (
    <div className={cn("fixed inset-0 z-[60] transition-[visibility] duration-300", isCartOpen ? "visible" : "invisible")} aria-hidden={!isCartOpen}>
      <div
        onClick={closeCart}
        className={cn("absolute inset-0 bg-navy/50 transition-opacity duration-300", isCartOpen ? "opacity-100" : "opacity-0")}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="سلة التسوق"
        className={cn(
          "absolute inset-y-0 end-0 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300",
          isCartOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3.5">
          <h2 className="flex items-center gap-2 text-base font-extrabold text-navy">
            <ShoppingBag className="size-5 text-primary" />
            سلة التسوق
            <span className="rounded-full bg-primary-soft px-2 text-xs font-bold text-primary">{cartCount}</span>
          </h2>
          <button type="button" id="close-cart-button" onClick={closeCart} aria-label="إغلاق السلة" className="grid size-9 place-items-center rounded-md text-navy hover:bg-surface">
            <X className="size-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="grid size-16 place-items-center rounded-full bg-surface text-muted">
              <ShoppingBag className="size-7" />
            </span>
            <p className="font-bold text-navy">سلتك فارغة</p>
            <p className="text-sm text-muted">أضف منتجات لتظهر هنا</p>
            <button type="button" onClick={closeCart} className="btn-primary mt-2 h-10 px-6 text-sm">
              متابعة التسوق
            </button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-3 py-3.5">
                  <span className="relative size-[72px] shrink-0 overflow-hidden rounded-md border border-line bg-white">
                    <Image src={product.image} alt={product.name} fill sizes="72px" className="object-contain p-1" />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-navy">{product.name}</p>
                        <p dir="ltr" className="truncate text-end text-xs text-muted">{product.model}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(product.id)}
                        aria-label={`حذف ${product.name}`}
                        className="text-muted transition-colors hover:text-sale"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-2">
                      <div className="flex items-center rounded-md border border-line">
                        <button type="button" onClick={() => updateQuantity(product.id, quantity + 1)} aria-label="زيادة الكمية" className="grid size-7 place-items-center text-navy hover:text-primary">
                          <Plus className="size-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-bold">{quantity}</span>
                        <button type="button" onClick={() => updateQuantity(product.id, quantity - 1)} aria-label="إنقاص الكمية" className="grid size-7 place-items-center text-navy hover:text-primary">
                          <Minus className="size-3.5" />
                        </button>
                      </div>
                      <span className="text-sm font-extrabold text-primary">{formatPrice(product.price * quantity)}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-line bg-surface p-4">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-muted">المجموع الفرعي</span>
                <span className="text-lg font-extrabold text-navy">{formatPrice(subtotal)}</span>
              </div>
              <p className="text-xs text-muted">الشحن والضريبة تحسب عند إتمام الطلب</p>
              <button type="button" id="checkout-button" onClick={() => setNotice(true)} className="btn-primary h-11 w-full text-sm">
                إتمام الطلب
              </button>
              {notice && (
                <p role="status" className="rounded-md bg-primary-soft px-3 py-2 text-center text-xs font-bold text-primary">
                  سيتم تفعيل الدفع الإلكتروني قريباً
                </p>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
