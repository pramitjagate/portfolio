import { Brain } from "lucide-react";

type HighlightsSectionProps = {
  items: string[];
};

export default function HighlightsSection({ items }: HighlightsSectionProps) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:p-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Highlights
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            A profile shaped by analytical thinking, practical execution, and a
            strong user focus.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {items.map((highlight) => (
            <div
              key={highlight}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"
            >
              <Brain size={14} className="text-violet-600" />
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
