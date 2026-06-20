import { motion } from "framer-motion";
import { config } from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function Closing() {
  const { closing, yourName } = config;

  return (
    <section className="closing">
      <div className="shell">
        <motion.h2
          className="closing__line"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, ease }}
        >
          {closing.line}
        </motion.h2>

        <motion.p
          className="closing__sub"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
        >
          {closing.sub}
        </motion.p>

        <motion.p
          className="closing__sign"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.2, delay: 0.6, ease }}
        >
          with all my heart
          <span className="script">{yourName}</span>
        </motion.p>
      </div>
    </section>
  );
}
