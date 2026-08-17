import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.15)] lg:p-10"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Education
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            Academic background
          </h2>
        </div>
        <p className="text-sm font-medium text-slate-300">
          A foundation in engineering, management, and analytical
          problem-solving.
        </p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {items.map((item, index) => (
          <motion.article
            key={item.school}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[1.25rem] border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                {item.school}
              </h3>
              <GraduationCap size={18} className="text-violet-400" />
            </div>
            <p className="mt-3 text-sm font-medium text-slate-300">
              {item.degree}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {item.period} • {item.location}
            </p>
            {item.coursework ? (
              <details className="group mt-4 rounded-xl border border-violet-800/50 bg-violet-950/30 p-3">
                <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-violet-300">
                  <span>Coursework</span>
                  <span className="text-base transition duration-200 group-open:rotate-180">
                    ▾
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.coursework}
                </p>
              </details>
            ) : null}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
