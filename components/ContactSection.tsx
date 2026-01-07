
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div>
          <h2 className="text-sm font-black text-generac-orange uppercase tracking-widest mb-4">Get In Touch</h2>
          <p className="text-6xl font-display text-white tracking-tight mb-8">PBR POWER SYSTEMS</p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-zinc-400 flex-shrink-0 border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-zinc-500 uppercase tracking-wider text-[10px] mb-1">Office Location</p>
                <p className="text-xl text-white font-bold tracking-wide">3448 Hwy 61, Anahuac, TX</p>
                <p className="text-zinc-500 font-medium">United States, Texas</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-zinc-400 flex-shrink-0 border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-zinc-500 uppercase tracking-wider text-[10px] mb-1">Direct Consult Line</p>
                <a href="tel:2815081289" className="text-3xl text-white font-display hover:text-generac-orange transition-colors tracking-widest">(281) 508-1289</a>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-zinc-400 flex-shrink-0 border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-zinc-500 uppercase tracking-wider text-[10px] mb-1">Corporate Email</p>
                <a href="mailto:Phillip.ranew@yahoo.com" className="text-xl text-zinc-400 font-bold hover:text-generac-orange transition-colors underline decoration-zinc-800 underline-offset-4">Phillip.ranew@yahoo.com</a>
              </div>
            </div>

            <div className="pt-8">
               <div className="glass p-8 rounded-3xl border border-white/5 bg-zinc-900/40">
                    <p className="text-sm font-bold text-zinc-400 mb-2 italic leading-relaxed">"Our priority is Anahuac's resilience. We build systems that perform when everything else fails."</p>
                    <p className="text-[10px] font-black text-white uppercase tracking-widest">— Phillip Ranew, Owner</p>
               </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-black/50 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <svg className="w-40 h-40 text-black fill-current" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-display text-black mb-8 tracking-wider uppercase">Project Intake Form</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Full Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border-2 border-zinc-100 bg-white text-black font-bold focus:border-generac-orange outline-none transition-all placeholder:text-zinc-300" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Primary Phone</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-xl border-2 border-zinc-100 bg-white text-black font-bold focus:border-generac-orange outline-none transition-all placeholder:text-zinc-300" placeholder="(281) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Service Category</label>
                <select className="w-full px-5 py-4 rounded-xl border-2 border-zinc-100 bg-white text-black font-bold focus:border-generac-orange outline-none transition-all appearance-none">
                  <option>Residential Installation</option>
                  <option>Commercial Continuity</option>
                  <option>Annual Maintenance Plan</option>
                  <option>Diagnostic & Repair</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">Project Notes</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border-2 border-zinc-100 bg-white text-black font-bold focus:border-generac-orange outline-none transition-all placeholder:text-zinc-300" placeholder="Tell us about your home power needs..."></textarea>
              </div>
              <button className="w-full py-5 bg-black text-white font-black rounded-2xl text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-300 transform active:scale-95 uppercase tracking-widest">
                SEND TO ENGINEERING
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
