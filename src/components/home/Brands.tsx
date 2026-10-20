import SectionHeader from "@/components/ui/SectionHeader";
import type { Brand } from "@/types";

/**
 * Text-based wordmarks styled after each brand's colours.
 * Swap for official SVG logos (with permission) by placing files in /public/brands.
 */
function BrandMark({ id, name }: Brand) {
  const latin = "font-[Arial,Helvetica,sans-serif]";
  switch (id) {
    case "hikvision":
      return <span className={`${latin} text-[17px] font-black italic tracking-tight text-[#e60012] sm:text-xl`}>HIKVISION</span>;
    case "dahua":
      return (
        <span className={`${latin} flex flex-col items-center leading-none`}>
          <span className="text-[22px] font-black italic tracking-tight text-[#e2231a] sm:text-[26px]">alhua</span>
          <span className="text-[6px] font-bold tracking-[0.25em] text-[#e2231a]">TECHNOLOGY</span>
        </span>
      );
    case "unv":
      return <span className={`${latin} text-[22px] font-semibold tracking-wide text-[#1a1a1a] sm:text-[26px]`}>unv</span>;
    case "tplink":
      return (
        <span className={`${latin} flex items-center gap-1 text-lg font-semibold text-[#21b5c4] sm:text-xl`}>
          <span className="grid size-5 place-items-center rounded-full border-[3px] border-[#21b5c4] sm:size-6" />
          tp-link
        </span>
      );
    case "wd":
      return <span className={`${latin} text-[13px] font-bold tracking-tight text-[#111] sm:text-[15px]`}>Western Digital</span>;
    case "seagate":
      return (
        <span className={`${latin} flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] text-[#6d6e71] sm:text-xs`}>
          <span className="size-4 rounded-full border-2 border-dashed border-[#6ebe44]" />
          SEAGATE
        </span>
      );
    case "ezviz":
      return (
        <span className={`${latin} flex items-center gap-1 text-lg font-bold text-[#3c3c3c] sm:text-xl`}>
          <span className="grid grid-cols-2 gap-px">
            <span className="size-2 rounded-tl-full bg-[#ef4136]" />
            <span className="size-2 rounded-tr-full bg-[#00a651]" />
            <span className="size-2 rounded-bl-full bg-[#2e3192]" />
            <span className="size-2 rounded-br-full bg-[#f7941d]" />
          </span>
          EZVIZ
        </span>
      );
    case "imou":
      return <span className={`${latin} text-xl font-black tracking-wide text-[#f39800] sm:text-2xl`}>IMOU</span>;
    default:
      return <span className="font-bold text-navy">{name}</span>;
  }
}

export default function Brands({ brands }: { brands: Brand[] }) {
  return (
    <section id="brands" aria-labelledby="brands-title" className="scroll-mt-4 bg-white pb-10">
      <div className="container-page">
        <SectionHeader id="brands-title" title="أشهر الماركات العالمية" />
        <ul className="card grid grid-cols-2 divide-line sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand) => (
            <li key={brand.id}>
              <a
                href="#brands"
                aria-label={brand.name}
                title={brand.name}
                dir="ltr"
                className="flex h-16 items-center justify-center px-3 opacity-90 transition hover:opacity-100 hover:[&>span]:scale-105 sm:h-[72px] [&>span]:transition-transform"
              >
                <BrandMark {...brand} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
