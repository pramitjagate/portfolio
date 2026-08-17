import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedName from "./AnimatedName";

type HeroSectionProps = {
  name: string;
};

export default function HeroSection({ name }: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-[2rem] border border-white/10 bg-slate-950 p-8 text-white shadow-[0_20px_80px_rgba(15,23,42,0.35)] lg:p-12"
    >
      <div className="flex flex-col justify-center">
        <AnimatedName name={name} />
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-violet-800/60 bg-violet-950/40 px-3 py-1 text-sm font-medium text-violet-300">
          <Sparkles size={16} />
          Data & Business Analyst | Python | SQL | Tableau | Power BI
        </div>
        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
          I turn data into clear insights that improve reliability, experience,
          and decision-making.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
          I&apos;m a Data & Business Analyst with 2.5+ years of experience
          building web applications and data-driven solutions for clients across
          industries at an IT services firm. Proficient in Python, SQL, Java,
          React, Tableau, Power BI, and Excel, with hands-on experience in
          machine learning, GenAI/LLM applications, and workflow automation.
          I&apos;ve developed interactive dashboards, ML prediction models, and
          a RAG-based AI chatbot that automated analysis workflows, surfaced
          actionable insights, and streamlined decision-making for clients and
          stakeholders.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            View my work <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Get in touch
          </a>
        </div>
      </div>
    </motion.section>
  );
}
