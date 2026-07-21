import { Briefcase } from "lucide-react";

type ExperienceItem = {
  title: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export default function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Experience
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            Professional experience
          </h2>
        </div>
        <p className="text-sm font-medium text-slate-700">
          Experience shaped by analytics, reporting, and practical
          problem-solving.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <Briefcase size={18} className="text-violet-600" />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-700">
              {item.role}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {item.period} • {item.location}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
