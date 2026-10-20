"use client";

import { useState } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";
import { navItems } from "@/data/catalog";
import { useStore } from "@/context/StoreContext";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, openCart } = useStore();

  return (
    <header id="top" className="relative z-40 bg-white shadow-[0_1px_0_var(--color-line)]">
      <TopBar />

      <div className="container-page flex flex-wrap items-center gap-x-4 gap-y-3 py-3 lg:gap-x-6 xl:flex-nowrap xl:py-3.5">
        <Logo />

        <SearchBar
          id="header-search"
          className="order-last w-full lg:order-none lg:w-auto lg:max-w-[520px] lg:flex-1 xl:min-w-[240px] xl:max-w-[380px]"
        />

        {/* Desktop navigation: own row on lg, inline on xl */}
        <nav aria-label="التنقل الرئيسي" className="hidden lg:order-last lg:block lg:w-full xl:order-none xl:w-auto xl:flex-1">
          <ul className="flex items-center gap-0.5 border-t border-line pt-2 xl:justify-end xl:border-0 xl:pt-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  id={`nav-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  aria-current={activeId === item.id ? "page" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-md px-2.5 py-1.5 text-[13px] font-bold transition-colors 2xl:px-3 2xl:text-sm",
                    activeId === item.id
                      ? "bg-primary text-white shadow-sm"
                      : "text-navy hover:bg-primary-soft hover:text-primary",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile / tablet actions */}
        <div className="ms-auto flex items-center gap-1 lg:hidden">
          <a href="#top" aria-label="حسابي" className="hidden size-10 place-items-center rounded-md text-navy hover:bg-surface sm:grid md:hidden">
            <User className="size-5" />
          </a>
          <button
            type="button"
            id="mobile-cart-button"
            onClick={openCart}
            aria-label={`سلة التسوق (${cartCount})`}
            className="relative grid size-10 place-items-center rounded-md text-navy hover:bg-surface"
          >
            <ShoppingCart className="size-[22px]" strokeWidth={1.8} />
            <span className="absolute top-1 end-0.5 grid min-w-4 place-items-center rounded-full bg-sale px-1 text-[10px] font-bold leading-4 text-white">
              {cartCount}
            </span>
          </button>
          <button
            type="button"
            id="mobile-menu-button"
            onClick={() => setMenuOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
            className="grid size-10 place-items-center rounded-md text-navy hover:bg-surface"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
        onNavigate={(id) => {
          setActiveId(id);
          setMenuOpen(false);
        }}
      />
    </header>
  );
}
