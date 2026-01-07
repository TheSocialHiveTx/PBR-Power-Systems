
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Search, Wrench, Building2, Home, Activity, CheckCircle2 } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const fullServices = [
    {
      title: "Residential Infrastructure",
      description: "Whole-home power security solutions using Generac Guardian Series. We handle everything from gas plumbing to electrical panel integration.",
      icon: <Home className="text-generac-orange" />,
      features: ["Automatic Transfer Switch (ATS) Install", "Natural Gas/Propane Plumbing", "Sub-panel Design", "Utility Coordination"]
    },
    {
      title: "Commercial Continuity",
      description: "Keep your business running through the storm. High-capacity diesel and gaseous generators for retail, office, and light industrial use.",
      icon: <Building2 className="text-generac-orange" />,
      features: ["Load Banking", "NFPA 110 Compliance", "UPS Systems", "Redundancy Design"]
    },
    {
      title: "Elite Maintenance",
      description: "Our multi-point inspection protocol ensures your system starts exactly when the grid fails. Proactive care for maximum lifespan.",
      icon: <Shield className="text-generac-orange" />,
      features: ["Oil & Filter Change", "Battery Health Check", "Valve Adjustments", "Spark Plug Replacement"]
    },
    {
      title: "Remote Monitoring",
      description: "Real-time infrastructure data in the palm of your hand via Generac Mobile Link. Receive alerts before problems occur.",
      icon: <Activity className="text-generac-orange" />,
      features: ["Status Notifications", "Maintenance Reminders", "Remote Start/Stop", "Dealer Monitoring"]
    }
  ];

  return (
    <div className="bg-zinc-950 min-h-screen pb-24">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40" alt="Industrial electrical" />
        <div className="relative z-20 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-7xl md:text-9xl font-display text-white tracking-tighter"
          >
            FULL <span className="generac-orange">SERVICES</span>
          </motion.h1>
          <p className="text-zinc-400 font-bold uppercase tracking-[0.4em] mt-4">PBR Engineering Solutions</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fullServices.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-12 rounded-[3rem] border-white/5"
            >
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10">
                {service.icon}
              </div>
              <h2 className="text-4xl font-display text-white mb-6">{service.title}</h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">{service.description}</p>
              <ul className="space-y-4">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                    <CheckCircle2 size={18} className="text-generac-orange" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-generac-orange/5 border border-generac-orange/20 rounded-[3rem] p-12 md:p-24 text-center">
          <h2 className="text-5xl font-display text-white mb-8">THE PBR DEPLOYMENT PROCESS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div>
              <div className="text-generac-orange font-display text-4xl mb-4">01</div>
              <h3 className="text-white font-black mb-2">SITE SURVEY</h3>
              <p className="text-zinc-500">We analyze your gas supply, electrical panel, and local codes to design a safe, efficient system.</p>
            </div>
            <div>
              <div className="text-generac-orange font-display text-4xl mb-4">02</div>
              <h3 className="text-white font-black mb-2">PRECISION BUILD</h3>
              <p className="text-zinc-500">Our technicians install your generator with surgical precision, ensuring all connections are industrial-grade.</p>
            </div>
            <div>
              <div className="text-generac-orange font-display text-4xl mb-4">03</div>
              <h3 className="text-white font-black mb-2">LIFETIME GUARD</h3>
              <p className="text-zinc-500">We don't just walk away. We provide ongoing monitoring and maintenance to protect your investment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
