import { useEffect, useRef, useState } from "react";
import { config } from "../config";

export default function MusicToggle() {
  const { music } = config;
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = 0.5;
  }, []);

  if (!music.enabled) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <button
        className={`music ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <span className="music__dot" />
        {playing ? "Playing" : music.label}
      </button>
    </>
  );
}
