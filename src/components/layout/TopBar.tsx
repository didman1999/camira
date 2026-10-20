"use client";

import { Headphones, PackageSearch, ShieldCheck, ShoppingCart, Truck, User } from "lucide-react";
import { useStore } from "@/context/StoreContext";

const perks = [
  { icon: Truck, label: "شحن سريع لجميع المناطق" },
  { icon: ShieldCheck, label: "ضمان معتمد" },
  { icon: Headphones, label: "دعم فني متخصص" },
];

export default function TopBar() {
  const { cartCount, openCart } = useStore();

  return (
    <div className="hidden border-b border-line bg-white text-xs text-ink/80 md:block">
      <div className="container-page flex h-9 items-center justify-between">
        <ul className="flex items-center gap-5">
          {perks.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-1.5">
              <Icon className="size-[15px] text-navy" strokeWidth={1.8} />
              <span className="font-semibold">{label}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a href="#top" id="track-order-link" className="flex items-center gap-1.5 font-semibold transition-colors hover:text-primary">
            <PackageSearch className="size-[15px]" strokeWidth={1.8} />
            تتبع الطلب
          </a>
          <a href="#top" id="account-link" className="flex items-center gap-1.5 font-semibold transition-colors hover:text-primary">
            <User className="size-[15px]" strokeWidth={1.8} />
            حسابي
          </a>
          <button
            type="button"
            id="topbar-cart-button"
            onClick={openCart}
            aria-label={`سلة التسوق (${cartCount})`}
            className="relative grid size-7 place-items-center text-navy transition-colors hover:text-primary"
          >
            <ShoppingCart className="size-[18px]" strokeWidth={1.8} />
            <span className="absolute -top-1 -end-1.5 grid min-w-4 place-items-center rounded-full bg-sale px-1 text-[10px] font-bold leading-4 text-white">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
