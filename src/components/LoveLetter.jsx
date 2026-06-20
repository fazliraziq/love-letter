import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { config } from "../config";

const ease = [0.22, 1, 0.36, 1];

export default function LoveLetter() {
  const { letter, yourName } = config;
  const [open, setOpen] = useState(false);

  return (
    <section className="letter" id="letter">
      <motion.p
        className="letter__prompt"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, ease }}
      >
        {open ? "\u00A0" : letter.prompt}
      </motion.p>

      <motion.button
        className={`envelope ${open ? "is-open" : ""}`}
        onClick={() => setOpen(true)}
        disabled={open}
        aria-label={open ? "Letter opened" : "Open the letter"}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease }}
        whileHover={!open ? { y: -6, transition: { duration: 0.4 } } : {}}
      >
        <div className="envelope__body" />
        <div className="envelope__pocket" />
        <motion.div
          className="envelope__flap"
          animate={{ rotateX: open ? 180 : 0 }}
          transition={{ duration: 0.9, ease }}
        />
        <AnimatePresence>
          {!open && (
            <motion.div
              className="envelope__seal"
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {letter.sealInitial}
            </motion.div>
          )}
        </AnimatePresence>
        {!open && <span className="envelope__hint">tap to open</span>}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.article
            className="note-card"
            initial={{ opacity: 0, y: -30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease }}
          >
            <p className="note-card__salutation">{letter.salutation}</p>
            {letter.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 + i * 0.25, ease }}
              >
                {p}
              </motion.p>
            ))}
            <p className="note-card__signoff">{letter.signoff}</p>
            <p className="note-card__name">{yourName}</p>
          </motion.article>
        )}
      </AnimatePresence>
    </section>
  );
}
