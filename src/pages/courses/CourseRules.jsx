import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { ShieldCheck, Clock, BookOpen, Wind, ChevronRight } from 'lucide-react';

const rules = [
  { icon: Clock, title: 'Pace of Play', desc: 'All rounds must be completed within 4 hours 15 minutes. GPS carts notify rangers of slow groups automatically.', detail: 'Expected time for 9 holes: 2h. Expected time for 18 holes: 4h 15m.' },
  { icon: ShieldCheck, title: 'Dress Code', desc: 'Collared shirts, tailored shorts or trousers required. Soft spikes mandatory on all courses at all times.', detail: 'No denim, tracksuits, or athletic hoodies permitted on the course.' },
  { icon: BookOpen, title: 'Course Etiquette', desc: "Repair pitch marks, rake bunkers, and replace divots. Respect other players' concentration on the tee.", detail: 'Always wait for the group in front to be out of range before hitting.' },
  { icon: Wind, title: 'Cart Policy', desc: 'Carts must remain 30m from greens. Walking permitted on all courses. Caddies available on weekends.', detail: 'Follow all arrow directional signage and cross fairways at 90 degrees.' },
];

export default function CourseRules() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Hero Banner */}
      <section className="relative h-[55vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Course Rules"
          />
          <div className="absolute inset-0 bg-[#004225]/85" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <ShieldCheck size={14} /> The Player's Charter
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
            Course <br /> Rules
          </h1>
          <div className="h-1.5 w-24 bg-[#C9A227] mx-auto mb-8" />
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto">
            Upholding the traditions of the game and ensuring a premium experience for all members.
          </p>
        </motion.div>
      </section>

      {/* Rules Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rules.map((rule, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[48px] border border-black/5 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="w-16 h-16 bg-[#004225] text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#004225]/20">
                <rule.icon size={28} />
              </div>
              <h3 className="text-3xl font-black text-[#004225] uppercase tracking-tighter mb-6">{rule.title}</h3>
              <p className="text-lg text-black/40 font-medium leading-relaxed mb-8">{rule.desc}</p>
              
              <div className="bg-[#F0EFE8] p-6 rounded-3xl border border-black/5">
                 <div className="text-[10px] font-black uppercase tracking-widest text-[#004225]/40 mb-2">Policy Detail</div>
                 <p className="text-sm font-bold text-[#004225]">{rule.detail}</p>
              </div>

              <div className="mt-10 flex items-center gap-2 text-[#C9A227] font-black uppercase tracking-widest text-xs cursor-pointer hover:gap-4 transition-all">
                  Request Clarification <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dress Code Strip */}
      <section className="bg-[#004225] py-24 px-6 text-center text-white">
          <div className="max-w-3xl mx-auto">
             <h2 className="text-4xl font-black uppercase tracking-tighter mb-8">Visual Dress Code Guide</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {['Collared Shirts', 'Tailored Pants', 'Golf Shoes', 'Appropriate Shorts'].map((item, i) => (
                    <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-xs font-black uppercase tracking-widest">
                        {item}
                    </div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
}
