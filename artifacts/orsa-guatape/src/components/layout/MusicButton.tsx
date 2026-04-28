import { Volume2, VolumeX } from 'lucide-react';
import { useMusic } from '@/contexts/MusicContext';

export function MusicButton() {
  const { audioRef, isMuted, setMuted } = useMusic();

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
    <button
      onClick={toggle}
      aria-label={isMuted ? 'Reproducir música' : 'Silenciar música'}
      className="fixed bottom-24 right-6 z-50 bg-background/80 hover:bg-background border border-white/20 hover:border-primary/50 text-white/70 hover:text-primary p-4 rounded-full shadow-lg shadow-black/20 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
    >
      {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
    </button>
  );
}
