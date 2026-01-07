
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PromoBanner from './components/PromoBanner';
import LoadEstimator from './components/LoadEstimator';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import PromotionsPage from './pages/PromotionsPage';
import FAQPage from './pages/FAQPage';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone } from 'lucide-react';

export type View = 'home' | 'services' | 'promotions' | 'faq';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [showPromo, setShowPromo] = useState(true);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'services':
        return <ServicesPage />;
      case 'promotions':
        return <PromotionsPage />;
      case 'faq':
        return <FAQPage />;
      default:
        return (
          <>
            <Hero />
            <section id="estimator" className="relative z-20">
              <LoadEstimator />
            </section>
            <section id="promo" className="py-24 bg-black">
              <PromoBanner />
            </section>
            <section id="services" className="py-24 bg-zinc-950">
              <Services />
            </section>
            <section id="contact" className="py-24 bg-black">
              <ContactSection />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100 overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <AnimatePresence>
        {showPromo && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="bg-generac-orange text-white py-2.5 text-center text-xs font-black uppercase tracking-[0.2em] relative px-4 z-[60] overflow-hidden"
          >
            FREE 10-YEAR WARRANTY UNTIL NOV 7 • A $1,035 VALUE
            <button 
              onClick={() => setShowPromo(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:scale-125 transition-transform"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Header currentView={currentView} setView={setCurrentView} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setView={setCurrentView} />
      
      {/* Sleek Minimal Sticky CTA */}
      <div className="fixed bottom-8 left-8 z-[100] hidden md:block">
        <motion.a 
          href="tel:2815081289" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            boxShadow: [
              "0 10px 30px -10px rgba(255, 102, 0, 0.3)",
              "0 20px 50px -10px rgba(255, 102, 0, 0.6)",
              "0 10px 30px -10px rgba(255, 102, 0, 0.3)"
            ]
          }}
          transition={{ 
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            },
            opacity: { duration: 0.5 },
            y: { duration: 0.5 }
          }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-4 bg-gradient-to-r from-orange-500 to-generac-orange text-white px-7 py-4 rounded-2xl shadow-2xl border border-white/10 group overflow-hidden relative"
        >
          {/* Subtle reflection effect */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
          />
          
          <Phone className="w-5 h-5 relative z-10" />
          <span className="font-display text-2xl tracking-[0.1em] leading-none relative z-10">CALL NOW</span>
        </motion.a>
      </div>
    </div>
  );
};

export default App;
