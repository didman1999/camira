"use client";

import { useEffect } from "react";
import { Headphones, PackageSearch, User, X } from "lucide-react";
import { navItems } from "@/data/catalog";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

interface MobileMenuProps {
  open: boolean;
  activeId: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export default function MobileMenu({ open, activeId, onClose, onNavigate }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div className={cn("fixed inset-0 z-50 transition-[visibility] duration-300 lg:hidden", open ? "visible" : "invisible")} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={cn("absolute inset-0 bg-navy/50 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="القائمة"
        className={cn(
          "absolute inset-y-0 start-0 flex w-[82%] max-w-xs flex-col bg-white shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-line p-4">
          <Logo />
          <button type="button" onClick={onClose} aria-label="إغلاق القائمة" className="grid size-9 place-items-center rounded-md text-navy hover:bg-surface">
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="القائمة الجانبية" className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-bold transition-colors",
                    activeId === item.id ? "bg-primary text-white" : "text-navy hover:bg-surface",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-1 border-t border-line p-3 text-sm font-semibold text-navy">
          {[
            { icon: User, label: "حسابي" },
            { icon: PackageSearch, label: "تتبع الطلب" },
            { icon: Headphones, label: "دعم فني متخصص" },
          ].map(({ icon: Icon, label }) => (
            <a key={label} href="#top" onClick={onClose} className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-surface">
              <Icon className="size-4 text-primary" /> {label}
            </a>
          ))}
        </div>
      </aside>
    </div>
  );
}
