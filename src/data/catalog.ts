import type { Brand, Category, NavItem } from "@/types";

export const categories: Category[] = [
  { id: "cameras", name: "كاميرات المراقبة", image: "/images/cat-cameras.jpg", href: "#products" },
  { id: "systems", name: "أنظمة المراقبة", image: "/images/cat-systems.jpg", href: "#products" },
  { id: "recorders", name: "أجهزة التسجيل", image: "/images/cat-recorders.jpg", href: "#products" },
  { id: "accessories", name: "الملحقات", image: "/images/cat-accessories.jpg", href: "#products" },
  { id: "access-control", name: "أنظمة التحكم في الدخول", image: "/images/cat-access.jpg", href: "#products" },
];

export const brands: Brand[] = [
  { id: "hikvision", name: "Hikvision" },
  { id: "dahua", name: "Dahua" },
  { id: "unv", name: "UNV" },
  { id: "tplink", name: "TP-Link" },
  { id: "wd", name: "Western Digital" },
  { id: "seagate", name: "Seagate" },
  { id: "ezviz", name: "EZVIZ" },
  { id: "imou", name: "Imou" },
];

export const navItems: NavItem[] = [
  { id: "home", label: "الرئيسية", href: "#top" },
  { id: "cameras", label: "الكاميرات", href: "#categories" },
  { id: "systems", label: "أنظمة المراقبة", href: "#categories" },
  { id: "recorders", label: "أجهزة التسجيل", href: "#categories" },
  { id: "accessories", label: "الملحقات", href: "#categories" },
  { id: "offers", label: "العروض", href: "#offers" },
  { id: "brands", label: "الماركات", href: "#brands" },
  { id: "articles", label: "مقالات", href: "#top" },
  { id: "contact", label: "تواصل معنا", href: "#contact" },
];
