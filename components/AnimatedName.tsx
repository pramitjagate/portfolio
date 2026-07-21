import { motion } from "framer-motion";

type AnimatedNameProps = {
  name: string;
};

export default function AnimatedName({ name }: AnimatedNameProps) {
  const [firstWord, ...restWords] = name.split(" ");
  const remainingName = restWords.join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10"
    >
      <div className="w-full text-4xl font-black uppercase tracking-[0.35em] text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]">
        <div className="leading-[0.8]">
          {firstWord.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
              className="mr-2 inline-block text-transparent [-webkit-text-stroke:2px_#0f172a]"
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap leading-[0.85] text-slate-950">
          {remainingName.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.03, duration: 0.35 }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
