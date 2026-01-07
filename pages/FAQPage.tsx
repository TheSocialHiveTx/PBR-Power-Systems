
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does a standby generator work?",
      a: "A standby generator is permanently installed outside your home, similar to an air conditioning unit. It runs on natural gas or liquid propane (LP) and is connected directly to your home's electrical panel. When it detects a power loss, the Automatic Transfer Switch (ATS) disconnects the utility and connects the generator, restoring power in seconds."
    },
    {
      q: "Can a generator run my whole house including A/C?",
      a: "Yes. With a properly sized unit (typically 22kW to 26kW for modern Gulf Coast homes) and the use of Smart Management Modules (SMMs) for power shed, we can ensure your central air conditioning, kitchen appliances, and well pumps all operate simultaneously."
    },
    {
      q: "What is the maintenance schedule?",
      a: "Like a car, your generator needs oil and filter changes. Generac recommends a full service every 200 hours of run time or at least once per year. PBR offers comprehensive maintenance contracts that include battery testing and valve adjustments."
    },
    {
      q: "Natural Gas vs Propane: Which is better?",
      a: "Both are excellent for standby use. Natural gas provides an endless fuel supply and is preferred in urban/suburban areas. Propane is higher in energy density and is often the best choice for rural properties with large storage tanks."
    },
    {
      q: "How long does installation take?",
      a: "Most residential installations are completed in 1-2 days. However, the pre-installation phase (permitting and site design) can take 2-4 weeks depending on your local utility and municipal requirements."
    },
    {
      q: "Do I need a concrete pad?",
      a: "Yes. Every generator requires a level, stable foundation. PBR provides professional-grade pre-cast concrete pads or custom-poured solutions as part of our full-service installation."
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pb-24">
      <section className="pt-32 pb-16 text-center px-4">
        <HelpCircle size={64} className="text-generac-orange mx-auto mb-8 opacity-50" />
        <h1 className="text-6xl md:text-8xl font-display text-white tracking-tighter mb-4">
          POWER <span className="generac-orange">KNOWLEDGE</span>
        </h1>
        <p className="text-zinc-500 font-bold uppercase tracking-[0.4em]">Frequently Asked Questions</p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-[2rem] border-white/5 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-10 py-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-xl font-black text-white">{faq.q}</span>
                <div className={`p-2 rounded-xl transition-all ${openIndex === idx ? 'bg-generac-orange text-white' : 'bg-white/5 text-zinc-500'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10 pt-2 text-zinc-400 text-lg leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 mt-24 text-center">
        <div className="p-12 glass rounded-[3rem] border-generac-orange/20">
          <h3 className="text-2xl font-black text-white mb-4 tracking-wider">STILL HAVE QUESTIONS?</h3>
          <p className="text-zinc-500 mb-8">Speak directly with Phillip Ranew for a professional assessment of your property.</p>
          <a href="tel:2815081289" className="text-generac-orange text-3xl font-display hover:scale-105 transition-transform inline-block">
            (281) 508-1289
          </a>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
