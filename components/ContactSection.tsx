import { Mail, Globe } from "lucide-react";

type ContactSectionProps = {
  email: string;
  github: string;
  linkedin: string;
};

export default function ContactSection({
  email,
  github,
  linkedin,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.15)] lg:p-10"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold">
            Let&apos;s connect and talk about analytics, AI, and impact.
          </h2>
          <p className="mt-3 max-w-xl text-lg leading-8 text-slate-300">
            Reach out if you want to discuss analytics work, portfolio feedback,
            or opportunities in data and AI.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-100"
          >
            <Mail size={16} /> {email}
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Globe size={16} /> GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            <Globe size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
