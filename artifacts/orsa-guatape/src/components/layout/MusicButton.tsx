import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    // Try immediate autoplay
    audio.play().then(() => {
      startedRef.current = true;
    }).catch(() => {
      // Browser blocked autoplay — play on first user interaction
      const startOnInteraction = () => {
        if (startedRef.current) return;
        audio.play().then(() => {
          startedRef.current = true;
        }).catch(() => {});
        ['click', 'scroll', 'touchstart', 'keydown'].forEach((e) =>
          document.removeEventListener(e, startOnInteraction)
        );
      };
      ['click', 'scroll', 'touchstart', 'keydown'].forEach((e) =>
        document.addEventListener(e, startOnInteraction, { once: true })
      );
    });
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setMuted(false);
    } else {
      audio.pause();
      setMuted(true);
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/song_1.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={muted ? 'Reproducir música' : 'Silenciar música'}
        className="fixed bottom-24 right-6 z-50 bg-background/80 hover:bg-background border border-white/20 hover:border-primary/50 text-white/70 hover:text-primary p-4 rounded-full shadow-lg shadow-black/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
      >
        {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
      </button>
    </>
  );
}
