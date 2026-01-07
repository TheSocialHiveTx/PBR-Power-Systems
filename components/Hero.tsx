
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Activity, Circle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Background with subtle parallax-ready image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=2000"
          alt="Stormy sky over modern home"
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-generac-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-generac-orange"></span>
              </span>
              PBR Infrastructure Guard
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-white leading-[0.9] mb-6 tracking-tighter">
              UNINTERRUPTED <br />
              <span className="generac-orange italic">POWER SECURITY.</span>
            </h1>
            
            <p className="mt-6 text-xl text-zinc-400 max-w-xl font-medium leading-relaxed mb-10">
              In the Gulf Coast, power isn't a luxury—it's safety. PBR Power Systems engineers high-performance Generac backup solutions for Anahuac's most resilient homes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-10 py-5 bg-generac-orange text-white rounded-2xl font-black text-lg shadow-[0_0_40px_rgba(255,102,0,0.3)] hover:bg-orange-600 transition-all text-center flex items-center justify-center gap-2"
              >
                SECURE YOUR HOME
                <Zap className="w-5 h-5 fill-current" />
              </motion.a>
              <a
                href="tel:2815081289"
                className="px-10 py-5 bg-zinc-900/50 backdrop-blur-md text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all text-center"
              >
                DIRECT CONSULT LINE
              </a>
            </div>
          </motion.div>

          {/* Right side interactive "Status" widget */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="glass p-10 rounded-[3rem] border-white/5 relative overflow-hidden group">
               {/* Scanning Line Effect */}
               <div className="absolute inset-0 scanner-line z-0 pointer-events-none" />
               
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Zap size={200} className="text-white group-hover:scale-110 transition-transform duration-1000" />
               </div>
               
               <div className="relative z-10 space-y-8">
                  <div className="flex justify-between items-end">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                           <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">Local Status: Anahuac, TX</p>
                           <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-generac-orange text-[8px] font-mono">[LIVE FEED]</motion.span>
                        </div>
                        <h3 className="text-white text-3xl font-display tracking-widest">GRID READINESS</h3>
                    </div>
                    <div className="text-right">
                        <p className="text-green-500 font-black text-2xl font-mono">100% STABLE</p>
                    </div>
                  </div>

                  <div className="h-[1px] bg-white/10 w-full" />

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <ShieldCheck className="text-generac-orange mb-3" size={28} />
                        <p className="text-white font-black text-xs uppercase tracking-widest">PROTECTED</p>
                        <p className="text-zinc-500 text-[10px] font-bold">Authorized Center</p>
                    </div>
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                        <Activity className="text-white mb-3 animate-pulse" size={28} />
                        <p className="text-white font-black text-xs uppercase tracking-widest">MONITORING</p>
                        <p className="text-zinc-500 text-[10px] font-bold">24/7 Remote Link</p>
                    </div>
                  </div>

                  <div className="pt-4 flex items-start gap-4">
                     <div className="w-1 h-12 bg-generac-orange/30 rounded-full" />
                     <p className="text-zinc-400 text-xs italic font-medium leading-relaxed">
                        "Telemetry indicates Guardian series units performing at optimal efficiency. Hurricane prep coordination active."
                     </p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
