import { Cctv } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Use on dark backgrounds */
  inverted?: boolean;
}

export default function Logo({ className, inverted = false }: LogoProps) {
  return (
    <a href="#top" aria-label="SecureVision - الصفحة الرئيسية" className={cn("flex shrink-0 flex-col items-start leading-none", className)}>
      <span dir="ltr" className="flex items-center gap-1.5">
        <span className="grid size-8 place-items-center rounded-lg bg-primary text-white shadow-sm sm:size-9">
          <Cctv className="size-5 sm:size-[22px]" strokeWidth={2.2} />
        </span>
        <span className="font-[Arial,Helvetica,sans-serif] text-xl font-extrabold tracking-tight sm:text-[22px]">
          <span className={inverted ? "text-white" : "text-navy"}>Secure</span>
          <span className="text-primary">Vision</span>
        </span>
      </span>
      <span className={cn("mt-1 text-[10px] font-semibold sm:text-[11px]", inverted ? "text-white/60" : "text-muted")}>
        أنظمتك الأمنية... في أيدٍ أمينة
      </span>
    </a>
  );
}
