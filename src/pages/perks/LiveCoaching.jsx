import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Play, Zap, Globe, MessageSquare } from 'lucide-react';

export default function LiveCoaching() {
  return (
    <div className="min-h-screen bg-[#004225] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Cinematic Hero Banner */}
      <section className="relative h-[70vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/golf_live_coaching_1775827546780.png"
            className="w-full h-full object-cover"
            alt="Live Coaching Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004225]/95 via-[#004225]/40 to-transparent" />
        </div>
        
        <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] rounded-full text-[11px] font-black uppercase tracking-widest mb-8">
              <Zap size={14} className="fill-[#C9A227]" /> Real-Time Global Instruction
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.85]">
              Golf Live <br /> Coaching
            </h1>
            <p className="text-lg text-white/50 font-medium leading-relaxed mb-12 max-w-xl">
              Connect with the world's finest PGA professionals instantly. Our live streaming platform provides a lag-free environment for real-time biomechanical analysis.
            </p>
            <div className="flex flex-wrap gap-4">
               <Button className="bg-[#C9A227] text-[#004225] h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all">
                Enter Live Lobby
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white/5 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Globe, title: 'Global Roster', desc: 'Book sessions with top-tier coaches from North America, Europe, and Asia.' },
            { icon: Zap, title: 'Lag-Free 8K', desc: 'Ultra-low latency streaming technology ensures zero communication delay.' },
            { icon: MessageSquare, title: 'In-Stream Chat', desc: 'Instant messaging and screenshot annotation tools for detailed feedback.' }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="p-8 bg-white/5 rounded-[40px] border border-white/10 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-[#C9A227]/20 rounded-2xl flex items-center justify-center mb-6">
                <item.icon size={28} className="text-[#C9A227]" />
              </div>
              <h3 className="text-white text-xl font-bold uppercase mb-4 tracking-tight">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet Our Coaches */}
      <section className="py-24 px-6 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004225] uppercase tracking-tighter mb-4">Meet Our Master Coaches</h2>
            <div className="h-1.5 w-24 bg-[#004225] mx-auto mb-6" />
            <p className="text-black/40 font-medium max-w-2xl mx-auto">Learn from the mentors of tour champions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "David Vance", role: "Elite Swing Biomechanist", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80" },
              { name: "Sarah Miller", role: "Short Game Technical Pro", img: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80" },
              { name: "John Sterling", role: "Senior Performance Coach", img: "https://images.unsplash.com/photo-1591491640784-3232eb748d4b?auto=format&fit=crop&q=80" }
            ].map((coach, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-[40px] overflow-hidden mb-6 shadow-2xl relative">
                  <img src={coach.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={coach.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004225] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-white text-2xl font-bold mb-1">{coach.name}</h4>
                    <p className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">{coach.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Step-by-Step */}
      <section className="py-24 px-6 bg-[#004225]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-8 italic">The Live <br /> Experience</h2>
              <div className="space-y-12">
                {[
                  { title: "1. Match & Book", desc: "Select a coach filtered by your specific AI analysis swing tags." },
                  { title: "2. Visual Integration", desc: "Our platform syncs your live range feed with the coach's remote dashboard." },
                  { title: "3. Direct Voice Loop", desc: "Ultra-low latency audio for instant adjustments during your drill." },
                  { title: "4. Session Archive", desc: "Every live tip is automatically clipped and stored in your vault." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-white font-bold group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-all">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-white/60 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/5">
                <img src="/ai_golf_swing_analysis_1775834309564.png" className="w-full h-full object-cover opacity-80" alt="Tech" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-[#C9A227] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                    <Play size={30} className="text-[#004225] fill-[#004225] ml-1" />
                  </div>
                </div>
              </div>
              {/* Floating Stat */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl">
                <div className="text-[10px] font-bold uppercase tracking-widest text-black/40 mb-2">Streaming Quality</div>
                <div className="text-3xl font-bold text-[#004225]">Lag-Free 8K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 px-6 text-center bg-[#004225]">
          <div className="max-w-3xl mx-auto">
              <p className="text-3xl md:text-5xl text-white font-bold mb-10 leading-tight">
                "The live sessions feel like having a pro standing right next to me on the range. The analysis is instant and game-changing."
              </p>
              <div className="h-1 w-20 bg-[#C9A227] mx-auto mb-6" />
              <h5 className="text-[#C9A227] font-bold uppercase tracking-widest text-sm">Marcus Chen · Premium Member</h5>
          </div>
      </section>
    </div>
  );
}
