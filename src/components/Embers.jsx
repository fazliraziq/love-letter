import { useMemo } from "react";

/* Drifting candlelight specks that float gently upward behind the page. */
export default function Embers({ count = 26 }) {
  const embers = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 11 + Math.random() * 16,
        delay: -Math.random() * 24,
        drift: `${(Math.random() - 0.5) * 120}px`,
      })),
    [count]
  );

  return (
    <div className="embers" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          className="ember"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            animationDuration: `${e.duration}s`,
            animationDelay: `${e.delay}s`,
            "--drift": e.drift,
          }}
        />
      ))}
    </div>
  );
}
