import { ArrowLeft } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  id?: string;
  linkLabel?: string;
  linkHref?: string;
}

export default function SectionHeader({ title, id, linkLabel, linkHref = "#" }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <h2 id={id} className="text-lg font-extrabold text-navy sm:text-xl">
        {title}
      </h2>
      {linkLabel && (
        <a
          href={linkHref}
          className="group inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark sm:text-sm"
        >
          {linkLabel}
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        </a>
      )}
    </div>
  );
}
