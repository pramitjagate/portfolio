import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={`rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:p-10 ${className}`.trim()}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            {title}
          </h2>
        </div>
        {description ? (
          <p className="text-sm font-medium text-slate-700">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
