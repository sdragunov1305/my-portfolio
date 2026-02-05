"use client";

import React from 'react';
import { Play, Send, Linkedin, Sparkles, Zap, Layout } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen relative py-10 px-6">
      
      {/* ФОНОВЫЙ ГРАДИЕНТ (Мягкие пятна как на концепте) */}
      <div className="fixed inset-0 -z-10 bg-[#1a0b2e]">
        <div className="absolute top-[-20%] left-[-10%] w-full h-full bg-gradient-to-br from-purple-600/40 via-pink-500/20 to-transparent blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-full h-full bg-gradient-to-tl from-cyan-500/30 via-blue-500/10 to-transparent blur-[120px]" />
      </div>

      <main className="max-w-7xl mx-auto space-y-8">
        
        {/* ВЕРХНЯЯ ПАНЕЛЬ (HEADER) */}
        <nav className="glass-ui p-4 flex justify-between items-center">
          <div className="flex gap-4">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase">
            <span className="text-white/50 hover:text-white cursor-pointer transition-colors">Home</span>
            <span className="text-white/50 hover:text-white cursor-pointer transition-colors">Works</span>
            <span className="text-white/50 hover:text-white cursor-pointer transition-colors">Vibes</span>
          </div>
          <button className="btn-neon text-black">Connect</button>
        </nav>

        {/* ОСНОВНАЯ СЕТКА (BENTO GRID) */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Блок: Unlimited Vibes */}
          <div className="col-span-12 md:col-span-5 glass-ui p-10 bg-gradient-to-br from-white/10 to-transparent flex flex-col justify-center">
            <h1 className="text-7xl font-black leading-none tracking-tighter uppercase mb-6">
              Unlimited<br/><span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Vibes</span>
            </h1>
            <div className="flex gap-4">
               <button className="btn-neon text-black">Drop Now</button>
               <button className="px-6 py-2 rounded-full border border-white/20 bg-white/5 text-[10px] font-bold uppercase">Explore</button>
            </div>
          </div>

          {/* Блок: Визуализация (Центральный квадрат) */}
          <div className="col-span-12 md:col-span-4 glass-ui p-2 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-pink-500/40 animate-pulse" />
            <div className="relative h-full w-full border border-white/20 rounded-[20px] flex items-center justify-center">
               <div className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center animate-spin-slow">
                  <Sparkles size={48} className="text-white/80" />
               </div>
            </div>
          </div>

          {/* Блок: Future Mode */}
          <div className="col-span-12 md:col-span-3 space-y-6">
            <div className="glass-ui p-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
               <span className="text-[10px] font-bold tracking-widest text-cyan-300 uppercase">System Status</span>
               <h3 className="text-2xl font-black mt-2 uppercase italic">Future Mode Activated</h3>
            </div>
            <div className="glass-ui p-6 h-full flex items-center justify-center bg-gradient-to-br from-orange-400/20 to-pink-500/20">
               <Zap size={64} className="text-orange-300 drop-shadow-[0_0_15px_rgba(253,186,116,0.5)]" />
            </div>
          </div>

          {/* Нижний ряд */}
          <div className="col-span-12 md:col-span-4 glass-ui p-8 flex items-center gap-6">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
                <Play fill="white" size={24} />
             </div>
             <div>
                <h4 className="text-xl font-black uppercase italic">Creative Flow</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-wider">01 // Session</p>
             </div>
          </div>

          <div className="col-span-12 md:col-span-8 glass-ui p-8 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-cyan-500/10 flex justify-between items-center">
             <p className="text-white/60 text-sm max-w-sm font-medium leading-relaxed">
               Merging aesthetic visuals with cutting-edge tech. We don't just build, we create digital frequency.
             </p>
             <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full glass-ui flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <Linkedin size={20} />
                </div>
                <div className="w-12 h-12 rounded-full glass-ui flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
                  <Send size={20} />
                </div>
             </div>
          </div>

        </div>
      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
}