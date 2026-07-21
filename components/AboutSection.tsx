type AboutSectionProps = {
  title: string;
  body: string[];
};

export default function AboutSection({ title, body }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.05)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
          About
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950">{title}</h2>
      </div>
      <div className="space-y-4 text-lg leading-8 text-slate-600">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
