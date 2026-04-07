import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '@assets/logo_1775523360540.jpeg';
import ReservationChoice from '@/components/ReservationChoice';
import ReservationForm from '@/components/ReservationForm';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [showChoice, setShowChoice] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Horizon', path: '/experiencia/horizon' },
    { name: 'Adrenaline', path: '/experiencia/adrenaline' },
    { name: 'Signature', path: '/experiencia/signature' },
  ];

  const handleReservar = () => {
    setIsOpen(false);
    setShowChoice(true);
  };

  const handleSelectForm = () => {
    setShowChoice(false);
    setShowForm(true);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || location !== '/' ? 'bg-background/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 z-50">
            <img src={logoImg} alt="ORSA Guatapé" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-white leading-none">ORSA</span>
              <span className="text-[10px] tracking-[0.3em] text-primary uppercase leading-none mt-1">Guatapé</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                  location === link.path ? 'text-primary' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={handleReservar}
              className="px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors uppercase text-sm font-semibold tracking-wider"
            >
              Reservar
            </button>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden z-50 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Nav */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed inset-0 h-screen bg-background flex flex-col items-center justify-center gap-8 z-40"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-2xl font-serif tracking-widest uppercase transition-colors ${
                    location === link.path ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleReservar}
                className="mt-8 px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-colors uppercase text-sm font-semibold tracking-wider"
              >
                Reservar Ahora
              </button>
            </motion.div>
          )}
        </div>
      </header>

      {showChoice && (
        <ReservationChoice
          onClose={() => setShowChoice(false)}
          onSelectForm={handleSelectForm}
        />
      )}

      {showForm && (
        <ReservationForm
          selectExperience
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
