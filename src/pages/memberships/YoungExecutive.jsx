import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Trophy, CheckCircle, Users, Calendar, 
  ArrowRight, Sparkles, Zap, ShieldCheck 
} from 'lucide-react';

export default function YoungExecutive() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-32">
      <WebsiteNavbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/young_executive_golf_networking_1775835814422.png"
            className="w-full h-full object-cover"
            alt="Young Executive"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/40 to-[#004225]/90" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Zap size={14} /> Next-Gen Leadership
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
            Young <br /> Executive
          </h1>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
            Designated for high-performers aged 18–35. Build your legacy on the green and your network in the clubhouse.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-24 mt-24">
        
        {/* Tier Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#004225] uppercase tracking-tight">The Future of Golf is Yours</h2>
              <p className="text-lg text-black/60 leading-relaxed font-medium">
                The Young Executive tier is more than just a membership; it's an investment in your career and your lifestyle. We've curated a suite of benefits that cater to the busy professional who values high-intensity networking as much as a perfect swing.
              </p>
              <div className="space-y-4">
                 {[
                   'Full Weekday Course Access',
                   'Quarterly B2B Networking Skills Clinics',
                   'Digital AI Swing Lab Integration',
                   'Exclusive "35 Under 35" Masterclasses',
                   'Reduced Guest Rates'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-black/80 font-bold">
                      <CheckCircle size={20} className="text-emerald-600" /> {item}
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="bg-[#004225] p-12 rounded-[50px] shadow-2xl text-white">
              <div className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest mb-4">Membership Dues</div>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                 <span className="text-6xl font-bold">$149</span>
                 <span className="text-white/40 font-bold tracking-widest uppercase text-xs">/ Monthly</span>
              </div>
              
              <ul className="space-y-6 mb-12">
                 <li className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Initiation Fee</span>
                    <span className="font-bold border-b border-[#C9A227] text-[#C9A227]">$499 Onetime</span>
                 </li>
                 <li className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Reciprocal Access</span>
                    <span className="font-bold">Global Network Included</span>
                 </li>
                 <li className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Trial Period</span>
                    <span className="font-bold text-emerald-400">14 Days Risk Free</span>
                 </li>
              </ul>
              
              <Link to="/signup">
                <Button className="w-full bg-[#C9A227] text-[#004225] h-14 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all">
                  Apply for Tier Access
                </Button>
              </Link>
           </div>
        </div>

        {/* Benefits Grid */}
        <section className="py-24 border-t border-black/5">
           <h2 className="text-center text-3xl font-bold text-[#004225] uppercase tracking-tight mb-16">Core Tier Benefits</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-4">
                 <Users className="text-[#C9A227]" size={32} />
                 <h4 className="text-xl font-bold text-[#004225] uppercase">Executive Network</h4>
                 <p className="text-black/50 text-sm leading-relaxed">Early access to B2B mixers and professional development workshops hosted in the Library.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-4">
                 <Sparkles className="text-[#C9A227]" size={32} />
                 <h4 className="text-xl font-bold text-[#004225] uppercase">AI Performance</h4>
                 <p className="text-black/50 text-sm leading-relaxed">Unlimited mobile app analysis powered by our 8K biomechanical vision system.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm space-y-4">
                 <ShieldCheck className="text-[#C9A227]" size={32} />
                 <h4 className="text-xl font-bold text-[#004225] uppercase">Priority Booking</h4>
                 <p className="text-black/50 text-sm leading-relaxed">48-hour early window for weekday tee times and simulator sessions.</p>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
