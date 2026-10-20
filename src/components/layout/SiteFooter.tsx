import { Mail, Phone } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-navy text-white/70">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs sm:flex-row">
        <p>© {new Date().getFullYear()} SecureVision. جميع الحقوق محفوظة.</p>
        <div className="flex items-center gap-4">
          <a href="tel:+966500000000" dir="ltr" className="flex items-center gap-1.5 hover:text-white">
            <Phone className="size-3.5" /> +966 50 000 0000
          </a>
          <a href="mailto:info@securevision.sa" className="flex items-center gap-1.5 hover:text-white">
            <Mail className="size-3.5" /> info@securevision.sa
          </a>
        </div>
      </div>
    </footer>
  );
}
