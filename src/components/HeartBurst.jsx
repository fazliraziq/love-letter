import { useEffect, useState, useCallback } from "react";

const HEARTS = ["❤", "♥", "❤", "💛"];

/* When she clicks/taps anywhere, a little heart floats up from that spot. */
export default function HeartBurst() {
  const [sparks, setSparks] = useState([]);

  const spawn = useCallback((x, y) => {
    const id = crypto.randomUUID();
    const char = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    setSparks((s) => [...s, { id, x, y, char }]);
    setTimeout(() => {
      setSparks((s) => s.filter((sp) => sp.id !== id));
    }, 1200);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onClick = (e) => {
      // ignore clicks on buttons/links so the UI still feels intentional
      if (e.target.closest("button, a, input")) return;
      spawn(e.clientX, e.clientY);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [spawn]);

  return (
    <>
      {sparks.map((s) => (
        <span
          key={s.id}
          className="heart-spark"
          style={{ left: s.x, top: s.y }}
          aria-hidden="true"
        >
          {s.char}
        </span>
      ))}
    </>
  );
}
