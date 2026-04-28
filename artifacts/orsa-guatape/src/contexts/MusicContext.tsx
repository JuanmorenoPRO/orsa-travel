import { createContext, useContext, useRef, useState, useEffect, useCallback } from "react";

interface MusicContextValue {
  pause: () => void;
  resume: () => void;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  isMuted: boolean;
  setMuted: (v: boolean) => void;
}

const MusicContext = createContext<MusicContextValue | null>(null);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setMuted] = useState(false);
  const isMutedRef = useRef(false);
  const startedRef = useRef(false);

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;

    audio.play().then(() => {
      startedRef.current = true;
    }).catch(() => {
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

  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const resume = useCallback(() => {
    if (!isMutedRef.current) {
      audioRef.current?.play().catch(() => {});
    }
  }, []);

  return (
    <MusicContext.Provider value={{ pause, resume, audioRef, isMuted, setMuted }}>
      <audio ref={audioRef} src="/song.mp3" loop preload="auto" />
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const ctx = useContext(MusicContext);
  if (!ctx) throw new Error("useMusic must be used inside MusicProvider");
  return ctx;
}
