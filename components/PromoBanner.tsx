
import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Side Content */}
        <div className="p-8 md:p-12 lg:p-16 flex-1 relative z-10 flex flex-col justify-center">
            <div className="inline-block bg-generac-orange text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full mb-6 uppercase">
                Limited Time Sales Event
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                FREE <span className="generac-orange">10-Year Warranty</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium mb-2">WITH PURCHASE</p>
            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-black text-white">A $1,035 value!*</span>
            </div>
            
            <div className="flex items-center gap-4 bg-zinc-800 p-4 rounded-xl border border-zinc-700 max-w-sm mb-8">
                <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Promo Dates</span>
                    <span className="text-white font-bold">OCT 13, 2025 - NOV 7, 2025</span>
                </div>
            </div>

            <p className="text-xs text-zinc-500 font-medium">*Terms & Conditions apply. Only available on qualifying home standby generator installations.</p>
        </div>

        {/* Right Side Image/Brand */}
        <div className="md:w-2/5 bg-zinc-800 relative min-h-[300px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50" />
            {/* Using a placeholder for a Generac Guardian unit look */}
            <div className="relative z-10 p-12">
                 <div className="text-6xl font-black text-white italic tracking-tighter opacity-20 absolute top-4 left-4 select-none">GUARDIAN</div>
                 <img 
                    src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&q=80&w=800" 
                    alt="Generator Unit" 
                    className="w-full h-auto object-contain rounded-xl shadow-2xl"
                 />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
