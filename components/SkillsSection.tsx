type SkillGroup = {
  title: string;
  items: string[];
};

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export default function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:grid-cols-[0.8fr_1.2fr] lg:p-10"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-950">
          How I build products
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <h3 className="text-base font-semibold text-slate-950">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
