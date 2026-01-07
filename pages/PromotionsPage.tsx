
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Zap, Users, ShieldCheck, ArrowRight } from 'lucide-react';

const PromotionsPage: React.FC = () => {
  const promos = [
    {
      title: "FREE 10-YEAR WARRANTY",
      subtitle: "A $1,035 Value",
      description: "Our biggest event of the year. Purchase a qualifying Generac Guardian series home standby generator and receive a full 10-year extended-limited warranty at no extra cost.",
      icon: <ShieldCheck size={40} className="text-generac-orange" />,
      deadline: "Ends Nov 7, 2025",
      primary: true
    },
    {
      title: "REFER-A-NEIGHBOR",
      subtitle: "Secure Together",
      description: "Help your friends stay powered. Refer a neighbor who installs a system with PBR, and you'll both receive a $100 credit toward future maintenance services.",
      icon: <Users size={40} className="text-white" />,
      deadline: "Ongoing Program"
    },
    {
      title: "VETERAN & FIRST RESPONDER",
      subtitle: "Respect for Service",
      description: "We are proud to support those who serve. Active military, veterans, and first responders receive a 5% discount on all installation services.",
      icon: <Gift size={40} className="text-white" />,
      deadline: "Permanent Offer"
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pb-24">
      <section className="pt-32 pb-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1 rounded-full bg-generac-orange/10 border border-generac-orange/20 text-generac-orange text-[10px] font-black uppercase tracking-[0.4em] mb-8"
        >
          Exclusive Sales Events
        </motion.div>
        <h1 className="text-6xl md:text-8xl font-display text-white tracking-tighter mb-6">
          ELITE <span className="generac-orange">INCENTIVES</span>
        </h1>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-medium">
          Premium power security should be accessible. Explore our current programs designed to add value to your infrastructure investment.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8">
        {promos.map((p, idx) => (
          <motion.div 
            key={idx}
            initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className={`relative p-12 rounded-[3.5rem] border ${
              p.primary ? 'bg-gradient-to-br from-zinc-900 to-black border-generac-orange/30' : 'bg-zinc-900/50 border-white/5'
            } flex flex-col md:flex-row gap-12 items-center`}
          >
            {p.primary && (
              <div className="absolute top-8 right-12 bg-generac-orange text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest animate-pulse">
                LIMITED TIME
              </div>
            )}
            
            <div className="flex-shrink-0 w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center">
              {p.icon}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-display text-white mb-2 tracking-wide">{p.title}</h2>
              <p className="text-generac-orange font-black text-xs uppercase tracking-widest mb-6">{p.subtitle}</p>
              <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-8">{p.description}</p>
              <div className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-white/5 border border-white/5 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                {p.deadline}
              </div>
            </div>

            <div className="flex-shrink-0">
              <button className={`w-full md:w-auto px-10 py-5 rounded-2xl font-black transition-all flex items-center justify-center gap-3 ${
                p.primary ? 'bg-generac-orange text-white shadow-2xl shadow-orange-600/20' : 'bg-white text-black hover:bg-zinc-200'
              }`}>
                ACTIVATE OFFER <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PromotionsPage;
