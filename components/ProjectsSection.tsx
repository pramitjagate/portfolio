import { Briefcase } from "lucide-react";

type ProjectItem = {
  title: string;
  role: string;
  period: string;
  location: string;
  link?: string;
  bullets: string[];
};

type ProjectsSectionProps = {
  items: ProjectItem[];
};

export default function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.15)] lg:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Projects
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Selected projects
          </h2>
        </div>
        <p className="text-sm font-medium text-slate-300">
          A focused set of projects that combine analysis, visualization, and
          practical problem-solving.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {items.map((item) => (
          <details
            key={item.title}
            className="group rounded-[1.25rem] border border-white/10 bg-white/5 p-6"
          >
            <summary className="cursor-pointer list-none">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-slate-300">
                    {item.role}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.period} • {item.location}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-violet-400" />
                  <span className="text-lg font-semibold text-slate-400 transition duration-200 group-open:rotate-180">
                    ⌄
                  </span>
                </div>
              </div>
            </summary>

            <div className="mt-4">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-sm font-medium text-violet-300 transition hover:text-violet-200"
                >
                  View project ↗
                </a>
              ) : null}
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
