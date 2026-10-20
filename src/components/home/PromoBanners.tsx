import Image from "next/image";
import { ArrowLeft } from "lucide-react";

/** Small CSS phone mockup showing a live-view grid (no extra image asset needed). */
function PhoneMockup() {
  const feeds = ["/images/hero.jpg", "/images/cat-cameras.jpg", "/images/cat-access.jpg", "/images/promo-night.jpg"];
  return (
    <div className="w-[88px] rounded-[18px] bg-navy p-[5px] shadow-[0_12px_30px_rgb(16_38_50/0.35)] sm:w-[104px]">
      <div className="overflow-hidden rounded-[13px] bg-white">
        <div className="flex items-center justify-between bg-navy px-2 py-1.5 text-[7px] font-bold text-white sm:text-[8px]">
          <span dir="ltr">SecureVision</span>
          <span className="flex items-center gap-0.5">
            <span className="size-1.5 animate-pulse rounded-full bg-sale" />
            LIVE
          </span>
        </div>
        <div className="grid grid-cols-2 gap-[2px] bg-navy/10 p-[2px]">
          {feeds.map((src, i) => (
            <div key={src} className="relative aspect-square overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                sizes="52px"
                className={i === 0 ? "object-cover object-[25%_50%]" : "object-cover"}
              />
              <span dir="ltr" className="absolute bottom-0.5 left-0.5 rounded-sm bg-black/50 px-0.5 text-[5px] font-bold text-white sm:text-[6px]">
                CAM {i + 1}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-1 p-2">
          <div className="h-1.5 w-3/4 rounded bg-line" />
          <div className="h-1.5 w-1/2 rounded bg-line" />
          <div className="mt-2 h-4 rounded bg-primary" />
        </div>
      </div>
    </div>
  );
}

export default function PromoBanners() {
  return (
    <section id="offers" aria-label="عروض مميزة" className="scroll-mt-4 bg-white pb-8">
      <div className="container-page grid gap-4 md:grid-cols-2">
        {/* Smart remote monitoring */}
        <article className="relative h-[190px] overflow-hidden rounded-xl bg-[#e7edf4] sm:h-[210px]">
          <div
            className="absolute inset-y-0 start-0 w-[52%]"
            style={{
              maskImage: "linear-gradient(to left, #000 55%, transparent)",
              WebkitMaskImage: "linear-gradient(to left, #000 55%, transparent)",
            }}
          >
            <Image src="/images/hero.jpg" alt="" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover object-[20%_45%]" />
          </div>
          <div className="absolute start-[34%] top-1/2 -translate-y-1/2 sm:start-[36%]">
            <PhoneMockup />
          </div>
          <div className="relative z-10 me-0 flex h-full w-[52%] flex-col justify-center ps-2 pe-5 ms-auto sm:pe-7">
            <h3 className="text-lg font-extrabold text-navy sm:text-2xl">راقب من أي مكان</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-ink/70 sm:text-sm">
              تطبيقات سهلة الاستخدام
              <br />
              على الهاتف والكمبيوتر
            </p>
            <a href="#products" className="btn-primary mt-4 h-9 self-start px-4 text-xs sm:h-10 sm:text-sm">
              تعرف على الحلول الذكية
              <ArrowLeft className="size-4" />
            </a>
          </div>
        </article>

        {/* Night vision */}
        <article className="relative h-[190px] overflow-hidden rounded-xl bg-navy-deep sm:h-[210px]">
          <div className="absolute inset-0 -scale-x-100">
            <Image src="/images/promo-night.jpg" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-[0%_38%]" />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-navy-deep via-navy-deep/80 to-transparent" />
          <div className="relative z-10 flex h-full w-[58%] flex-col justify-center ps-2 pe-5 ms-auto sm:pe-7">
            <h3 className="text-lg font-extrabold text-white sm:text-2xl">رؤية واضحة في كل الظروف</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white/75 sm:text-sm">كاميرات بتقنية الرؤية الليلية المتطورة</p>
            <a
              href="#products"
              className="mt-4 inline-flex h-9 items-center gap-2 self-start rounded-md bg-white px-4 text-xs font-bold text-navy transition-colors hover:bg-primary-soft sm:h-10 sm:text-sm"
            >
              اكتشف الكاميرات الليلية
              <ArrowLeft className="size-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
