import { ArrowRight, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedName from "./AnimatedName";

type HeroSectionProps = {
  name: string;
  email: string;
  github: string;
  linkedin: string;
};

const scatterDots = [
  { top: "8%", left: "6%", size: 6, color: "bg-violet-400/60" },
  { top: "20%", left: "37%", size: 4, color: "bg-slate-400/50" },
  { top: "12%", left: "62%", size: 3, color: "bg-slate-400/40" },
  { top: "29%", left: "3%", size: 3, color: "bg-slate-400/40" },
  { top: "48%", left: "56%", size: 4, color: "bg-amber-400/40" },
  { top: "52%", left: "27%", size: 3, color: "bg-slate-400/40" },
  { top: "78%", left: "13%", size: 3, color: "bg-slate-400/40" },
  { top: "88%", left: "48%", size: 4, color: "bg-violet-400/40" },
  { top: "63%", left: "95%", size: 3, color: "bg-slate-400/40" },
];

export default function HeroSection({
  name,
  email,
  github,
  linkedin,
}: HeroSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex min-h-[calc(100svh-4.5rem)] w-full flex-col justify-center overflow-hidden py-12 text-white lg:pt-16 lg:pb-32"
    >
      {scatterDots.map((dot, index) => (
        <span
          key={index}
          aria-hidden="true"
          className={`pointer-events-none absolute hidden rounded-full lg:block ${dot.color}`}
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
          }}
        />
      ))}

      <div className="relative grid w-full gap-12 px-6 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:px-16 xl:px-24">
        <div className="flex flex-col justify-center">
          <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-300">
            Dallas, TX
          </div>

          <AnimatedName name={name} />

          <p className="font-script mt-2 text-3xl text-amber-400 sm:text-4xl">
            Data &amp; Business Analyst
          </p>

          <h2 className="mt-4 max-w-2xl text-xl font-semibold leading-snug text-white/90 sm:text-2xl">
            I turn data into clear insights that improve reliability,
            experience, and decision-making.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            2.5+ years of experience building web applications and
            data-driven solutions across Python, SQL, Tableau, Power BI, and
            GenAI/LLM applications &mdash; turning workflows into interactive
            dashboards, ML models, and AI-powered tools.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-500"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-amber-400"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            <a href={github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href={`mailto:${email}`} className="transition hover:text-white">
              Email
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:max-w-sm xl:max-w-md">
          <Sparkle
            aria-hidden="true"
            className="absolute -top-8 left-4 h-6 w-6 text-violet-400/70"
          />

          <div
            aria-hidden="true"
            className="absolute -inset-2 rounded-t-[10rem] rounded-b-[2rem] bg-amber-500/25"
          />
          <div
            aria-hidden="true"
            className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-violet-600 shadow-[0_8px_24px_rgba(124,58,237,0.4)]"
          >
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80" />
          </div>

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-[10rem] rounded-b-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <Image
              src="/dp.jpeg"
              alt="Pramit Shivakumar Jagate"
              fill
              sizes="(min-width: 1280px) 28rem, (min-width: 1024px) 24rem, 20rem"
              className="object-cover"
              priority
            />
          </div>

          <div className="font-script absolute -bottom-6 left-4 max-w-[13rem] -rotate-3 rounded-2xl bg-violet-600 px-4 py-3 text-xl text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
            Turning data into decisions
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-6 hidden flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400 lg:left-16 lg:flex xl:left-24"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-slate-600" />
      </div>
    </motion.section>
  );
}
