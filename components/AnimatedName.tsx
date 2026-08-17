import { motion } from "framer-motion";

type AnimatedNameProps = {
  name: string;
};

export default function AnimatedName({ name }: AnimatedNameProps) {
  const words = name.split(" ");

  return (
    <h1 className="font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="mr-3 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
