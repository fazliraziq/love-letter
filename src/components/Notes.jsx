import { motion } from "framer-motion";
import { config } from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function Notes() {
  return (
    <section className="notes" aria-label="A few words">
      {config.notes.map((line, i) => (
        <motion.p
          key={i}
          className="note"
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.1, ease }}
        >
          {line}
        </motion.p>
      ))}
    </section>
  );
}
