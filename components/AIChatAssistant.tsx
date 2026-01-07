
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { MessageSquare, X, Send, Cpu, Shield } from 'lucide-react';

const AIChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Welcome to PBR Power Systems. I am your Energy Consultant. How can I assist with your home\'s power security today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const response = await getGeminiResponse(input);
    const assistantMessage: ChatMessage = { role: 'assistant', content: response };
    setMessages(prev => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,102,0,0.2)] transition-all ${
          isOpen ? 'bg-zinc-900 border border-white/10' : 'bg-generac-orange border border-orange-400'
        }`}
      >
        {isOpen ? <X className="text-white" /> : <MessageSquare className="text-white" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[90vw] md:w-[450px] bg-zinc-950 rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-zinc-900/50 p-8 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-generac-orange/10 rounded-2xl flex items-center justify-center border border-generac-orange/20">
                   <Cpu className="text-generac-orange" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-black text-lg">PBR CONCIERGE</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">System Online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="h-96 overflow-y-auto p-8 space-y-6 bg-[radial-gradient(circle_at_top_right,rgba(255,102,0,0.05),transparent)]">
              {messages.map((m, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-5 rounded-[1.5rem] text-sm font-medium leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-generac-orange text-white rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-zinc-300 rounded-tl-none shadow-xl'
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl rounded-tl-none flex gap-1.5">
                    <div className="w-1.5 h-1.5 bg-generac-orange rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-generac-orange rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-generac-orange rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-zinc-900/30 border-t border-white/5">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Inquire about power security..."
                  className="w-full pl-6 pr-14 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-generac-orange transition-all placeholder:text-zinc-600"
                />
                <button
                  onClick={handleSend}
                  className="absolute right-3 p-3 text-generac-orange hover:text-white transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="flex justify-center items-center gap-2 mt-4 opacity-30">
                <Shield size={10} className="text-zinc-500" />
                <p className="text-[8px] text-zinc-500 font-black uppercase tracking-[0.2em]">Secured by PBR Core AI</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatAssistant;
