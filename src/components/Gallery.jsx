import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);

  return (
    <section className="gallery">
      <div className="shell">
        <div className="heading">
          <h2 className="heading__title">{gallery.title}</h2>
          <p className="heading__sub">{gallery.subtitle}</p>
        </div>

        <div className="grid">
          {gallery.photos.map((photo, i) => (
            <motion.button
              key={i}
              className="tile"
              onClick={() => setActive(photo)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease }}
              aria-label={photo.caption || `Photo ${i + 1}`}
            >
              <img src={photo.src} alt={photo.caption || `A memory, ${i + 1}`} loading="lazy" />
              {photo.caption && <span className="tile__caption">{photo.caption}</span>}
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="lightbox"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <motion.figure
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <img src={active.src} alt={active.caption || "A memory"} />
              {active.caption && <figcaption>{active.caption}</figcaption>}
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
