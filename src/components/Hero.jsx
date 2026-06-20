import { motion } from "framer-motion";
import { config } from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { hero, herName } = config;

  return (
    <section className="hero">
      <div
        className="hero__photo"
        style={{ backgroundImage: `url(${hero.image})` }}
        aria-hidden="true"
      />

      <div className="shell">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          {hero.eyebrow}
        </motion.p>

        <motion.h2
          className="hero__greeting"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease }}
        >
          {hero.greeting}
        </motion.h2>

        <motion.h1
          className="hero__name"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.9, ease }}
        >
          {herName}
        </motion.h1>

        <motion.div
          className="hero__rule"
          initial={{ width: 0 }}
          animate={{ width: "min(280px, 60vw)" }}
          transition={{ duration: 1.2, delay: 1.7, ease }}
        />

        <motion.p
          className="hero__subline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 2, ease }}
        >
          {hero.subline}
        </motion.p>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.6 }}
      >
        <span>{hero.scrollHint}</span>
        <motion.span
          className="dot"
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
