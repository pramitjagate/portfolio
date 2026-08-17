import { motion } from "framer-motion";

type SkillGroup = {
  title: string;
  items: string[];
};

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export default function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.15)] lg:grid-cols-[0.8fr_1.2fr] lg:p-10"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white">
          How I build products
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <h3 className="text-base font-semibold text-white">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
