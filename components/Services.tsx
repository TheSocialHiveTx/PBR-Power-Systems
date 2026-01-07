
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wrench, Shield, Search } from 'lucide-react';

const serviceData = [
  {
    title: 'PRECISION INSTALL',
    description: 'White-glove installation service including permits, structural prep, and multi-point safety testing.',
    icon: <Zap size={28} />,
  },
  {
    title: 'SYSTEM DESIGN',
    description: "Custom power architecture tailored to your home's unique footprint and critical system demands.",
    icon: <Search size={28} />,
  },
  {
    title: 'ELITE SERVICE',
    description: 'Proactive maintenance protocols ensuring your infrastructure is storm-ready at a moment\'s notice.',
    icon: <Shield size={28} />,
  },
  {
    title: 'RAPID RESPONSE',
    description: 'Authorized troubleshooting and emergency repair. We keep the lights on when others fail.',
    icon: <Wrench size={28} />,
  },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div className="max-w-2xl">
          <h2 className="text-sm font-black text-generac-orange uppercase tracking-[0.5em] mb-4">Core Competencies</h2>
          <p className="text-6xl font-display text-white tracking-tighter leading-none">ELITE POWER <br/><span className="generac-orange italic">ENGINEERING</span></p>
        </div>
        <p className="text-zinc-500 font-medium max-w-sm">
          PBR Power Systems isn't just about sales. We are technical specialists dedicated to the design, deployment, and defense of residential power grids.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceData.map((service, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-generac-orange/30 transition-all group"
          >
            <div className="w-16 h-16 bg-white/5 rounded-[1.25rem] flex items-center justify-center text-zinc-400 mb-8 group-hover:bg-generac-orange group-hover:text-white transition-all shadow-inner">
              {service.icon}
            </div>
            <h3 className="text-2xl font-display text-white mb-4 tracking-wider">{service.title}</h3>
            <p className="text-zinc-500 font-medium leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-zinc-800 via-generac-orange/20 to-zinc-800"
      >
        <div className="bg-zinc-950 rounded-[2.9rem] p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-generac-orange text-[10px] font-black uppercase tracking-widest mb-6">
                    Infrastructure Audit
                </div>
                <h3 className="text-4xl font-display text-white mb-4 tracking-wider">PREPARE FOR THE UNEXPECTED</h3>
                <p className="text-zinc-500 text-lg font-medium max-w-xl">
                    Our comprehensive site surveys analyze your home's electrical capacity and gas supply to ensure a flawless integration.
                </p>
            </div>
            <a href="#contact" className="w-full md:w-auto px-12 py-6 bg-white text-black font-black rounded-2xl hover:bg-zinc-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.1)] text-center">
                BOOK SITE AUDIT
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
