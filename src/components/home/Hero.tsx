import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-navy-deep">
      {/* Desktop composition: villa + cameras on the left, copy on the right */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-[76%] lg:block"
        style={{
          maskImage: "linear-gradient(to left, transparent 0%, #000 22%)",
          WebkitMaskImage: "linear-gradient(to left, transparent 0%, #000 22%)",
        }}
      >
        <Image
          src="/images/hero.jpg"
          alt="فيلا حديثة ليلاً مع كاميرات مراقبة"
          fill
          priority
          sizes="76vw"
          className="object-cover object-[0%_62%]"
        />
      </div>

      <div className="container-page relative lg:flex lg:h-[clamp(400px,33vw,520px)] lg:items-center">
        <div className="max-w-[440px] py-8 text-white sm:py-10 lg:max-w-[380px] lg:py-0 xl:max-w-[440px]">
          <h1 id="hero-title" className="text-[32px] font-extrabold leading-[1.25] sm:text-[40px] xl:text-[50px]">
            <span className="text-primary-light">أمان أكبر</span> لحياتك
            <br />
            وممتلكاتك
          </h1>
          <p className="mt-3 text-[15px] font-semibold leading-relaxed text-white/90 sm:text-base xl:text-lg">
            كاميرات المراقبة وأنظمة الأمن بأحدث التقنيات
          </p>
          <p className="mt-1 text-sm text-white/65 xl:text-[15px]">للمنزل - الشركات - المنشآت - المصانع</p>
          <a href="#products" id="hero-cta" className="btn-primary mt-6 h-11 px-7 text-[15px] shadow-lg shadow-primary/25 xl:h-12 xl:px-8">
            تسوق الآن
            <ArrowLeft className="size-[18px]" />
          </a>
        </div>
      </div>

      {/* Mobile / tablet: full image below the copy */}
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/8] lg:hidden">
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[30%_62%]"
        />
        <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-navy-deep to-transparent" />
      </div>
    </section>
  );
}
