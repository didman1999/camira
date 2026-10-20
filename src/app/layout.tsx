import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import CartDrawer from "@/components/layout/CartDrawer";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "SecureVision | كاميرات المراقبة وأنظمة الأمن",
  description:
    "متجر SecureVision لكاميرات المراقبة وأنظمة الأمن وأجهزة التسجيل والملحقات من Hikvision وDahua وUNV وغيرها. ضمان معتمد وشحن سريع لجميع المناطق.",
  openGraph: {
    title: "SecureVision | كاميرات المراقبة وأنظمة الأمن",
    description: "أمان أكبر لحياتك وممتلكاتك — كاميرات وأنظمة مراقبة أصلية بضمان معتمد.",
    locale: "ar_SA",
    type: "website",
    images: ["/images/hero.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#102632",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>
        <StoreProvider>
          {children}
          <CartDrawer />
        </StoreProvider>
      </body>
    </html>
  );
}
