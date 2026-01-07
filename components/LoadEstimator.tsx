
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Home, Wind, Tv, Waves, Thermometer, ChevronRight } from 'lucide-react';

const appliances = [
  { id: 'ac', name: 'Central A/C', icon: <Wind size={20} />, kw: 5 },
  { id: 'kitchen', name: 'Gourmet Kitchen', icon: <Home size={20} />, kw: 3 },
  { id: 'pool', name: 'Pool Pump', icon: <Waves size={20} />, kw: 2 },
  { id: 'heat', name: 'Water Heater', icon: <Thermometer size={20} />, kw: 4 },
  { id: 'media', name: 'Home Office/Media', icon: <Tv size={20} />, kw: 1 },
];

const LoadEstimator: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(['kitchen']);
  const [lastSelected, setLastSelected] = useState<string | null>(null);
  
  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    setLastSelected(id);
  };

  const totalKw = selected.reduce((acc, id) => {
    const item = appliances.find(a => a.id === id);
    return acc + (item?.kw || 0);
  }, 10); // Base load of 10kW

  const getRecommendation = () => {
    if (totalKw >= 24) return { size: '26kW', model: 'Guardian 26' };
    if (totalKw >= 20) return { size: '22kW', model: 'Guardian 22' };
    return { size: '14kW-18kW', model: 'Guardian Compact' };
  };

  const rec = getRecommendation();

  return (
    <div className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative engineering elements */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.03] pointer-events-none">
        <Zap size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
               <h2 className="text-sm font-black text-generac-orange uppercase tracking-[0.4em]">Configuration Lab</h2>
               <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <h3 className="text-5xl font-display text-white mb-8">BUILD YOUR <span className="generac-orange">BACKUP</span></h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-md leading-relaxed">
              Select your critical life-support and comfort systems. Our precision algorithm calculates your minimal secure load.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appliances.map((app) => (
                <motion.button
                  key={app.id}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggle(app.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all text-left group ${
                    selected.includes(app.id) 
                      ? 'border-generac-orange bg-generac-orange/10 text-white shadow-[0_0_20px_rgba(255,102,0,0.1)]' 
                      : 'border-white/5 bg-white/5 text-zinc-500 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className={`transition-colors duration-300 ${selected.includes(app.id) ? 'text-generac-orange' : 'text-zinc-600 group-hover:text-zinc-400'}`}>
                    {app.icon}
                  </div>
                  <span className="font-bold tracking-tight">{app.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div 
              animate={lastSelected ? { scale: [1, 1.02, 1] } : {}}
              transition={{ duration: 0.3 }}
              className="glass p-12 rounded-[3rem] border-white/10 relative text-center shadow-2xl"
            >
                <div className="absolute -inset-2 bg-gradient-to-b from-generac-orange/10 to-transparent blur-2xl rounded-[3rem] -z-10" />
                
                <p className="text-zinc-500 font-black uppercase tracking-widest text-[10px] mb-4">Current Engineering Load</p>
                <motion.div 
                  key={totalKw}
                  initial={{ opacity: 0.5, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-8xl font-display text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  {totalKw}<span className="text-3xl text-zinc-600 font-mono tracking-tighter">kW</span>
                </motion.div>
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={rec.size}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-generac-orange text-white font-black text-[10px] uppercase tracking-widest shadow-lg shadow-orange-600/20">
                        PBR Recommended Unit
                    </div>
                    <h4 className="text-4xl font-display text-white tracking-widest">{rec.model}</h4>
                    <p className="text-zinc-400 font-medium text-sm px-8 leading-relaxed">
                      Sized to support your selected essentials + whole home baseline with safety overhead.
                    </p>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 pt-10 border-t border-white/5 space-y-4">
                  <motion.a 
                    whileHover={{ gap: '1rem' }}
                    href="#contact" 
                    className="w-full py-5 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shadow-xl shadow-black/20"
                  >
                    SECURE THIS SYSTEM <ChevronRight size={20} />
                  </motion.a>
                  <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">A Site Survey is required for final verification</p>
                </div>
              {/* Fix: Closing tag must match the opening <motion.div> at line 77 */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadEstimator;
