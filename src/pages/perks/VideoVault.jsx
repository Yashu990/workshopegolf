import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Video, Search, ChevronRight, Play, Star } from 'lucide-react';

export default function VideoVault() {
  const sections = [
    { title: 'Drive Academy', videos: 45, icon: '🚀' },
    { title: 'Iron Dynamics', videos: 120, icon: '⚔️' },
    { title: 'Short Game Secrets', videos: 32, icon: '🎯' },
    { title: 'Bunker Mastery', videos: 18, icon: '🏝️' },
    { title: 'Mental Game', videos: 25, icon: '🧠' },
    { title: 'Course Strategy', videos: 50, icon: '🗺️' }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Cinematic Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/luxe_clubhouse_entrance_1775834327928.png"
            className="w-full h-full object-cover"
            alt="Video Vault Banner"
          />
          <div className="absolute inset-0 bg-[#004225]/85" />
        </div>
        
        <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] rounded-full text-[11px] font-black uppercase tracking-widest mb-8">
              <Video size={14} /> The Masterclass Library
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
              Pro Tip <br /> Vault
            </h1>
            <p className="text-lg text-white/50 font-medium leading-relaxed max-w-xl">
              Unlock a curriculum of excellence. 500+ videos tagged by AI analysis categories.
            </p>
          </motion.div>
          
          <div className="relative w-full md:w-96 bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 shadow-2xl">
            <h4 className="text-white font-black uppercase tracking-widest text-xs mb-4">Quick Search</h4>
            <div className="relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
               <input 
                type="text" 
                placeholder="Search by analysis tag..." 
                className="w-full bg-white/10 border-none rounded-2xl h-14 pl-12 pr-6 font-bold text-sm text-white focus:ring-2 focus:ring-[#C9A227] transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="bg-[#004225] rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center relative">
          <div className="lg:w-1/2 p-12 md:p-20 relative z-10">
            <span className="text-[#C9A227] text-xs font-black uppercase tracking-[0.3em] mb-4 block">Pick of the week</span>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Mastering the <br /> Power Draw</h2>
            <p className="text-white/60 mb-10 font-medium max-w-md">Learn the triple-lever system that adds 20 yards to your drive while maintaining a consistent interior path.</p>
            <Button className="bg-[#C9A227] text-[#004225] h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white transition-all">
               Watch Now
            </Button>
          </div>
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto self-stretch">
            <img 
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-60" 
              alt="Feature" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                <Play size={30} className="text-[#004225] fill-[#004225] ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Categories */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              className="bg-white p-10 rounded-[40px] border border-black/5 shadow-soft hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="text-2xl font-black text-[#004225] uppercase tracking-tight mb-2">{s.title}</h3>
              <p className="text-black/30 font-black uppercase text-[10px] tracking-widest mb-8">{s.videos} Sessions Included</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#C9A227] uppercase tracking-widest">Browse Vault</span>
                <div className="w-10 h-10 rounded-xl bg-[#004225]/5 flex items-center justify-center group-hover:bg-[#004225] group-hover:text-white transition-all">
                  <ChevronRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
