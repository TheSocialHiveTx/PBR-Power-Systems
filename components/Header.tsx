
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, ChevronRight } from 'lucide-react';
import { View } from '../App';

interface HeaderProps {
  currentView: View;
  setView: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { name: string; view: View }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Full Services', view: 'services' },
    { name: 'Promotions', view: 'promotions' },
    { name: 'FAQ', view: 'faq' },
  ];

  const handleNav = (view: View) => {
    setView(view);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-700 ${scrolled ? 'py-3' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-[1.5rem] px-8 h-20 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl border-white/10 bg-black/40 backdrop-blur-2xl' : 'bg-transparent border-transparent'}`}>
          {/* Logo Section */}
          <button onClick={() => setView('home')} className="flex-shrink-0 flex items-center gap-3 group">
            <div className="bg-generac-orange p-2.5 rounded-xl group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-orange-600/20">
                <Zap className="text-white fill-current" size={20} />
            </div>
            <div className="flex flex-col leading-none text-left">
              <span className="text-2xl font-display tracking-wider text-white">
                PBR <span className="generac-orange">POWER</span>
              </span>
              <span className="text-[8px] font-black tracking-[0.4em] text-zinc-500 uppercase">Infrastructure Expert</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-12 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.view)}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative py-2 ${
                  currentView === item.view ? 'text-generac-orange' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.name}
                {currentView === item.view && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-generac-orange rounded-full" />
                )}
              </button>
            ))}
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: '#FF6600', color: '#FFFFFF' }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-white text-black px-7 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl transition-all flex items-center gap-2"
            >
              Consult <ChevronRight size={14} />
            </motion.a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-xl bg-white/5 text-zinc-400 hover:text-white border border-white/10 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[-1]"
            />
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden mx-4 mt-2 glass rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] border-white/10 p-8 space-y-4"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.view)}
                  className={`block w-full text-left px-8 py-5 text-sm font-black rounded-2xl transition-all uppercase tracking-[0.2em] border ${
                    currentView === item.view 
                      ? 'bg-generac-orange text-white border-orange-400' 
                      : 'bg-white/5 text-zinc-400 border-transparent hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5">
                <a href="tel:2815081289" className="flex items-center justify-center gap-3 bg-white text-black p-5 rounded-2xl font-black uppercase tracking-widest">
                  Emergency Line <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
