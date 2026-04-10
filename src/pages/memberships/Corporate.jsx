import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  Briefcase, CheckCircle, Globe, Shield, 
  ArrowRight, Award, Building, Star, Users
} from 'lucide-react';

export default function Corporate() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-32">
      <WebsiteNavbar />
      
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/elite_corporate_golf_summit_1775835836896.png"
            className="w-full h-full object-cover"
            alt="Elite Corporate"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/40 to-[#004225]/90" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Building size={14} /> The Executive Tier
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
            Elite <br /> Corporate
          </h1>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
            The sanctuary for business leadership. Where mission statements meet the fairway and global partnerships are solidified.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-24 mt-24">
        
        {/* Tier Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
           <div className="lg:col-span-7 space-y-10">
              <h2 className="text-5xl font-bold text-[#004225] uppercase tracking-tighter leading-none">Your Out-of-Office <br /> Boardroom.</h2>
              <p className="text-xl text-black/60 leading-relaxed font-medium italic border-l-4 border-[#C9A227] pl-8">
                "We provide the environment, you provide the vision. The Elite Corporate member experience is engineered for reliability, prestige, and seamless client hospitality."
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                 <div className="space-y-4">
                    <CheckCircle className="text-emerald-600" size={24} />
                    <h4 className="font-bold text-[#004225] uppercase">4 Designations</h4>
                    <p className="text-sm text-black/50 leading-relaxed">Assign membership privileges to up to 4 key executives with full voting rights.</p>
                 </div>
                 <div className="space-y-4">
                    <Globe className="text-emerald-600" size={24} />
                    <h4 className="font-bold text-[#004225] uppercase">Global Reciprocity</h4>
                    <p className="text-sm text-black/50 leading-relaxed">Full access for all designees to our international network of 50+ prestigious partner clubs.</p>
                 </div>
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm">
                 <h3 className="text-xl font-bold text-[#004225] uppercase mb-6 flex items-center gap-3">
                    <Star className="text-[#C9A227]" /> Exclusive Features
                 </h3>
                 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Private Boardroom Booking',
                      'VIP Valet & Concierge',
                      'Quarterly Team Building Days',
                      'Corporate Branding Rights',
                      'Priority Event Hosting',
                      'Monthly Executive Sync'
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-black/70">
                         <div className="w-1.5 h-1.5 bg-[#C9A227] rounded-full" /> {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
           
           <div className="lg:col-span-5 bg-[#004225] p-12 rounded-[50px] shadow-2xl text-white sticky top-24">
              <div className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest mb-4">Corporate Portfolio</div>
              <div className="flex items-baseline gap-2 mb-8 border-b border-white/10 pb-8">
                 <span className="text-6xl font-bold">$999</span>
                 <span className="text-white/40 font-bold tracking-widest uppercase text-xs">/ Monthly</span>
              </div>
              
              <div className="space-y-6 mb-12">
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Initiation Fee</span>
                    <span className="font-bold text-[#C9A227]">$2,499</span>
                 </div>
                 <div className="flex justify-between items-center text-sm">
                    <span className="text-white/50">Billing frequency</span>
                    <span className="font-bold">Quarterly or Annual</span>
                 </div>
                 <div className="flex justify-between items-center text-sm text-emerald-400">
                    <span className="opacity-70 italic text-white/50 underline cursor-pointer">Tax Deductible Information</span>
                    <Link to="/contact"><ArrowRight size={14}/></Link>
                 </div>
              </div>
              
              <Link to="/signup">
                <Button className="w-full bg-[#C9A227] text-[#004225] h-14 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all">
                  Schedule Consultation
                </Button>
              </Link>
              <p className="text-center text-white/30 text-[9px] uppercase font-bold tracking-widest mt-8">
                 Our Corporate specialist will contact you within 4 hours.
              </p>
           </div>
        </div>

        {/* Brand Integration */}
        <section className="bg-white rounded-[50px] p-20 border border-black/5 overflow-hidden relative">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div>
                 <h2 className="text-3xl font-bold text-[#004225] uppercase tracking-tight mb-6">Corporate Brand Presence</h2>
                 <p className="text-lg text-black/50 leading-relaxed font-bold">
                   As an Elite Corporate member, your brand becomes part of the WorkshopeGolf fabric. From personalized scorecards to priority hosting of your annual charity classic, we provide the platform for your corporate legacy.
                 </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-[#FAFAF7] p-8 rounded-3xl text-center space-y-3">
                    <Users className="mx-auto text-[#004225]" size={24} />
                    <div className="text-[#004225] text-2xl font-bold">4</div>
                    <div className="text-black/30 text-[9px] font-bold uppercase tracking-widest">Team Spots</div>
                 </div>
                 <div className="bg-[#FAFAF7] p-8 rounded-3xl text-center space-y-3">
                    <Building className="mx-auto text-[#004225]" size={24} />
                    <div className="text-[#004225] text-2xl font-bold">VIP</div>
                    <div className="text-black/30 text-[9px] font-bold uppercase tracking-widest">Lounge Access</div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
}
