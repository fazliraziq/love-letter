import { motion } from "framer-motion";
import { config } from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function Story() {
  const { story } = config;
  if (!story.enabled) return null;

  return (
    <section className="story">
      <div className="shell">
        <div className="heading">
          <h2 className="heading__title">{story.title}</h2>
        </div>

        <div className="timeline">
          {story.moments.map((m, i) => (
            <motion.div
              key={i}
              className="moment"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: i * 0.05, ease }}
            >
              <p className="moment__year">{m.year}</p>
              <p className="moment__text">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
