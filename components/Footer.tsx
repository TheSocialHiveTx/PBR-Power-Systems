
import React from 'react';
import { View } from '../App';

interface FooterProps {
  setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col leading-none mb-6">
              <span className="text-4xl font-display tracking-wider text-white">
                PBR <span className="generac-orange">POWER</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase mt-1">Infrastructure Specialist</span>
            </div>
            <p className="text-zinc-400 max-w-sm font-medium leading-relaxed">
                Engineering home and business resilience across Anahuac, TX. Authorized Generac Sales & Service experts dedicated to absolute power security.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-[10px] uppercase tracking-widest mb-6 text-zinc-500">Navigation</h4>
            <ul className="space-y-4 text-zinc-300 font-bold text-sm">
              <li><button onClick={() => setView('home')} className="hover:text-generac-orange transition-colors">Home Base</button></li>
              <li><button onClick={() => setView('services')} className="hover:text-generac-orange transition-colors">Engineering Services</button></li>
              <li><button onClick={() => setView('promotions')} className="hover:text-generac-orange transition-colors">Sales Events</button></li>
              <li><button onClick={() => setView('faq')} className="hover:text-generac-orange transition-colors">Knowledge Base</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[10px] uppercase tracking-widest mb-6 text-zinc-500">Credentials</h4>
            <div className="flex flex-col gap-4">
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                 <p className="text-xs font-black tracking-widest text-generac-orange mb-1 uppercase italic">GENERAC</p>
                 <p className="text-[10px] font-bold text-white uppercase opacity-60">Elite Gold Dealer</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
                 <p className="text-xs font-black tracking-widest text-white mb-1 uppercase tracking-widest">AUTHORIZED</p>
                 <p className="text-[10px] font-bold text-zinc-500 uppercase">Service & Warranty Center</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PBR Power Infrastructure. 
            <span className="mx-2">|</span>
            Anahuac, TX (281) 508-1289
          </p>
          <div className="flex gap-6 grayscale opacity-30">
             <span className="text-[10px] font-black italic tracking-widest">GUARDIAN® SERIES</span>
             <span className="text-[10px] font-black italic tracking-widest">MOBILE LINK™</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
