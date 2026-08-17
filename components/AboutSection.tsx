type AboutCard = {
  icon: string;
  title: string;
  body: string;
};

type AboutSectionProps = {
  title: string;
  subtitle: string;
};

const cards: AboutCard[] = [
  {
    icon: "🏋️",
    title: "Staying Active",
    body: "Movement is a big part of how I recharge. You'll find me at the gym most days, and over the past year I've gotten into wall climbing — something about the problem-solving element of it clicked immediately. Football (soccer) has always been my sport, and I hold my own at table tennis too.",
  },
  {
    icon: "⚽",
    title: "Fuelled by Sport",
    body: "When I'm not playing, I'm watching. Formula 1, football, and cricket are my go-tos — the kind of sports where strategy, pressure, and split-second decisions make every moment feel alive. There's a lot more to learn from sport than just the result.",
  },
  {
    icon: "🎵",
    title: "Music & Concerts",
    body: "Music runs through everything I do. I listen across genres, but lately EDM has been the mood. Concerts are genuinely one of my favourite things in life — something about being in a crowd all feeling the same thing at the same time is just unbeatable.",
  },
  {
    icon: "📺",
    title: "Screens I Actually Enjoy",
    body: "When I do slow down, I'm usually deep in a good TV series, an anime, or a film that actually makes you think. I don't watch to pass time — I watch to feel something.",
  },
  {
    icon: "🌍",
    title: "Chasing Horizons",
    body: "Travelling is how I stay curious about the world. I love both mountains and beaches. Trekking and trails are my favourite way to explore, and I'll never pass up a good sunset view.",
  },
];

// Grid position of each card across the snake path at each breakpoint:
// mobile = single column (straight line), sm = 2-wide zigzag, lg = 3-wide zigzag.
const cardPositions = [
  "col-start-[1] row-start-[1] sm:col-start-[1] sm:row-start-[1] lg:col-start-[1] lg:row-start-[1]",
  "col-start-[1] row-start-[3] sm:col-start-[3] sm:row-start-[1] lg:col-start-[3] lg:row-start-[1]",
  "col-start-[1] row-start-[5] sm:col-start-[3] sm:row-start-[3] lg:col-start-[5] lg:row-start-[1]",
  "col-start-[1] row-start-[7] sm:col-start-[1] sm:row-start-[3] lg:col-start-[5] lg:row-start-[3]",
  "col-start-[1] row-start-[9] sm:col-start-[1] sm:row-start-[5] lg:col-start-[3] lg:row-start-[3]",
];

// Dotted-line connectors linking consecutive cards (1-2, 2-3, 3-4, 4-5).
// Each edge can be a horizontal or vertical dash depending on breakpoint,
// so both line variants render and only the relevant one is shown.
const edges = [
  {
    wrapper:
      "col-start-[1] row-start-[2] sm:col-start-[2] sm:row-start-[1] lg:col-start-[2] lg:row-start-[1]",
    vertical: "block sm:hidden",
    horizontal: "hidden sm:block",
  },
  {
    wrapper:
      "col-start-[1] row-start-[4] sm:col-start-[3] sm:row-start-[2] lg:col-start-[4] lg:row-start-[1]",
    vertical: "block lg:hidden",
    horizontal: "hidden lg:block",
  },
  {
    wrapper:
      "col-start-[1] row-start-[6] sm:col-start-[2] sm:row-start-[3] lg:col-start-[5] lg:row-start-[2]",
    vertical: "block sm:hidden lg:block",
    horizontal: "hidden sm:block lg:hidden",
  },
  {
    wrapper:
      "col-start-[1] row-start-[8] sm:col-start-[1] sm:row-start-[4] lg:col-start-[4] lg:row-start-[3]",
    vertical: "block lg:hidden",
    horizontal: "hidden lg:block",
  },
];

const accents = [
  {
    border: "border-violet-500/60",
    hoverBorder: "hover:border-violet-400",
    badge: "bg-violet-600",
    iconBg: "bg-violet-500/15",
    glow: "hover:shadow-[0_20px_40px_rgba(124,58,237,0.25)]",
    text: "group-hover:text-violet-300",
  },
  {
    border: "border-amber-500/60",
    hoverBorder: "hover:border-amber-400",
    badge: "bg-amber-500",
    iconBg: "bg-amber-500/15",
    glow: "hover:shadow-[0_20px_40px_rgba(217,119,6,0.25)]",
    text: "group-hover:text-amber-300",
  },
  {
    border: "border-rose-500/60",
    hoverBorder: "hover:border-rose-400",
    badge: "bg-rose-500",
    iconBg: "bg-rose-500/15",
    glow: "hover:shadow-[0_20px_40px_rgba(225,29,72,0.25)]",
    text: "group-hover:text-rose-300",
  },
  {
    border: "border-teal-500/60",
    hoverBorder: "hover:border-teal-400",
    badge: "bg-teal-500",
    iconBg: "bg-teal-500/15",
    glow: "hover:shadow-[0_20px_40px_rgba(13,148,136,0.25)]",
    text: "group-hover:text-teal-300",
  },
  {
    border: "border-indigo-500/60",
    hoverBorder: "hover:border-indigo-400",
    badge: "bg-indigo-600",
    iconBg: "bg-indigo-500/15",
    glow: "hover:shadow-[0_20px_40px_rgba(79,70,229,0.25)]",
    text: "group-hover:text-indigo-300",
  },
];

export default function AboutSection({ title, subtitle }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden rounded-[2rem] border-2 border-dashed border-white/15 bg-slate-950 p-8 text-white shadow-[0_12px_40px_rgba(15,23,42,0.15)] lg:p-10"
    >
      {/* corner "box" pins, board-game-box style */}
      <span className="absolute left-4 top-4 h-2 w-2 rounded-full bg-violet-500/50" />
      <span className="absolute right-4 top-4 h-2 w-2 rounded-full bg-violet-500/50" />
      <span className="absolute bottom-4 left-4 h-2 w-2 rounded-full bg-violet-500/50" />
      <span className="absolute bottom-4 right-4 h-2 w-2 rounded-full bg-violet-500/50" />

      <div className="mx-auto max-w-2xl text-center">
        <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
          <span aria-hidden="true">🎲</span> About
        </p>
        <h2 className="font-game mt-3 text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-[1.6] text-slate-300">
          {subtitle}
        </p>
      </div>

      <div className="relative mt-12 rounded-3xl border border-white/10 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:18px_18px] p-6 md:p-10">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-4 -top-6 text-6xl opacity-10"
        >
          🎲
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -left-4 text-6xl opacity-10"
        >
          🏁
        </span>

        <div
          className="relative grid grid-cols-[1fr] grid-rows-[auto_2rem_auto_2rem_auto_2rem_auto_2rem_auto] sm:grid-cols-[1fr_2rem_1fr] sm:grid-rows-[auto_3rem_auto_3rem_auto] lg:grid-cols-[1fr_2.5rem_1fr_2.5rem_1fr] lg:grid-rows-[auto_3.5rem_auto]"
        >
          {edges.map((edge, index) => (
            <div
              key={`edge-${index}`}
              aria-hidden="true"
              className={`relative ${edge.wrapper}`}
            >
              <span
                className={`absolute left-1/2 inset-y-0 border-l-2 border-dashed border-violet-400/60 ${edge.vertical}`}
              />
              <span
                className={`absolute top-0 inset-x-0 border-t-2 border-dashed border-violet-400/60 ${edge.horizontal}`}
              />
            </div>
          ))}

          {cards.map((card, index) => {
            const accent = accents[index];
            const isStart = index === 0;
            const isFinish = index === cards.length - 1;
            return (
              <div key={card.title} className={`relative ${cardPositions[index]}`}>
                <div
                  className={`group relative rounded-xl border-2 bg-slate-900 p-6 pt-10 text-center shadow-[0_4px_16px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 ${accent.border} ${accent.hoverBorder} ${accent.glow}`}
                >
                  {(isStart || isFinish) && (
                    <span className="absolute left-1/2 top-[-38px] -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {isStart ? "Start" : "Finish"}
                    </span>
                  )}
                  <div
                    className={`font-game absolute left-1/2 top-[-18px] flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-sm font-bold text-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 ${accent.badge}`}
                  >
                    {index + 1}
                  </div>

                  <div className="absolute right-3 top-3 grid grid-cols-2 gap-1 opacity-30">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.badge}`} />
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.badge}`} />
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.badge}`} />
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.badge}`} />
                  </div>

                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:scale-110 ${accent.iconBg}`}
                  >
                    {card.icon}
                  </div>
                  <h3
                    className={`font-game mt-4 text-lg font-bold text-white transition-colors duration-300 ${accent.text}`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.6] text-slate-300">
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
