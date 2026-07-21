import { GraduationCap } from "lucide-react";

type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  coursework?: string;
};

type EducationSectionProps = {
  items: EducationItem[];
};

export default function EducationSection({ items }: EducationSectionProps) {
  return (
    <section
      id="education"
      className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            Education
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            Academic background
          </h2>
        </div>
        <p className="text-sm font-medium text-slate-700">
          A foundation in engineering, management, and analytical
          problem-solving.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((item) => (
          <article
            key={item.school}
            className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-950">
                {item.school}
              </h3>
              <GraduationCap size={18} className="text-violet-600" />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-700">
              {item.degree}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {item.period} • {item.location}
            </p>
            {item.coursework ? (
              <details className="group mt-4 rounded-xl border border-violet-100 bg-violet-50/70 p-3">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-violet-700">
                  <span>Coursework</span>
                  <span className="text-base transition duration-200 group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.coursework}
                </p>
              </details>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
