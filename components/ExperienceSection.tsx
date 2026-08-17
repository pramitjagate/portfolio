import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.15)] lg:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Experience
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Professional experience
          </h2>
        </div>
        <p className="text-sm font-medium text-slate-300">
          Experience shaped by analytics, reporting, and practical
          problem-solving.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
              <Briefcase size={18} className="text-violet-400" />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-300">
              {item.role}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {item.period} • {item.location}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
