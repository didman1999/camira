import { BadgeCheck, Box, Headset, Truck } from "lucide-react";

const features = [
  { icon: Box, title: "ضمان معتمد", text: "على جميع المنتجات" },
  { icon: Truck, title: "شحن سريع", text: "لجميع المناطق" },
  { icon: BadgeCheck, title: "منتجات أصلية", text: "من وكالات معتمدة" },
  { icon: Headset, title: "دعم فني متخصص", text: "قبل وبعد البيع" },
];

export default function TrustFeatures() {
  return (
    <section aria-label="مميزات المتجر" className="bg-navy text-white">
      <ul className="container-page grid grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, i) => (
          <li
            key={title}
            className={[
              "flex items-center justify-center gap-3 px-2 py-4 sm:py-5",
              i % 2 === 1 ? "border-s border-white/10" : "",
              i >= 2 ? "border-t border-white/10 lg:border-t-0" : "",
              i === 2 ? "lg:border-s" : "",
            ].join(" ")}
          >
            <Icon className="size-7 shrink-0 text-primary-light sm:size-8" strokeWidth={1.5} />
            <div className="min-w-0">
              <p className="text-sm font-bold sm:text-[15px]">{title}</p>
              <p className="text-[11px] text-white/60 sm:text-xs">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
