import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../components/ui/WebsiteNavbar';
import { Button } from '../components/ui/Button';
import { Check, Star, Trophy, Users, Shield, Zap, TrendingUp, CreditCard, Award, Briefcase } from 'lucide-react';

export default function Memberships() {
  const plans = [
    {
      name: "Young Executive",
      price: "$149",
      target: "Ages 18-35",
      desc: "Designed for the next generation of golf enthusiasts. Build your career and your game simultaneously.",
      features: [
        "Full Weekday Course Access",
        "Junior Executive Networking Events",
        "Quarterly Skills Clinics",
        "10% Pro Shop Discount",
        "Mobile App AI Analysis (Standard)",
        "Complimentary Range Balls (Small Bucket)"
      ],
      gradient: "from-white to-[#F0F4E8]",
      textColor: "text-[#004225]",
      btnBg: "bg-[#004225]",
      btnText: "text-white"
    },
    {
      name: "Regular Member",
      price: "$299",
      target: "Full Individual",
      desc: "Our hallmark membership. Total immersion into the WorkshopeGolf experience with no limitations.",
      features: [
        "Unlimited Course Access (Any Day)",
        "Advanced AI Swing Lab Access",
        "Private Locker & Storage",
        "20% Pro Shop Discount",
        "Invitations to Seasonal Championships",
        "Concierge Tee-Time Reservations",
        "Unlimited Range Access"
      ],
      highlight: true,
      gradient: "from-[#004225] to-[#00301b]",
      textColor: "text-white",
      btnBg: "bg-[#C9A227]",
      btnText: "text-[#004225]"
    },
    {
      name: "Elite Corporate",
      price: "$999",
      target: "Business Teams",
      desc: "For the leaders who close deals on the fairway. Provide your executives with a premium sanctuary.",
      features: [
        "4 Individual Designations",
        "Premium Boardroom Booking",
        "Corporate Branding on Scorecards",
        "VIP Valet & Concierge Services",
        "Hosting Privileges for Clients",
        "Quarterly Team Building Days",
        "Private Event Priority"
      ],
      gradient: "from-white to-[#F0F4E8]",
      textColor: "text-[#004225]",
      btnBg: "bg-[#004225]",
      btnText: "text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Hero Header */}
      <section className="bg-[#004225] py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#000]/10"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10">
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]">
            The Inner Circle
          </h1>
          <p className="text-[#C9A227] text-xl font-bold tracking-[0.2em] uppercase max-w-2xl mx-auto border-y border-[#C9A227]/30 py-4 mt-8">
            Select Your Tier • Access Your Excellence
          </p>
        </motion.div>
      </section>

      {/* Comparison Grid */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-12 rounded-[50px] shadow-2xl border border-black/5 bg-gradient-to-br ${plan.gradient} ${plan.textColor}`}
            >
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#C9A227] text-[#004225] px-8 py-2.5 rounded-full text-[12px] font-black uppercase tracking-[0.2em] shadow-2xl">
                  Most Preferred
                </div>
              )}
              
              <div className="mb-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-4 block">{plan.target}</span>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-6">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-lg font-bold opacity-50">/mo</span>
                </div>
                <p className="text-[16px] font-medium leading-relaxed opacity-80">{plan.desc}</p>
              </div>

              <div className="h-[1px] w-full bg-current opacity-10 mb-10"></div>
              
              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0">
                        <Check size={18} className={plan.highlight ? 'text-[#C9A227]' : 'text-[#004225]'} strokeWidth={3} />
                    </div>
                    <span className="text-[15px] font-bold leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup">
                <button className={`w-full h-18 rounded-[24px] font-black uppercase tracking-[0.15em] text-sm shadow-xl transition-all hover:scale-[1.03] active:scale-95 ${plan.btnBg} ${plan.btnText} py-5 flex items-center justify-center gap-3 group`}>
                  Begin Membership <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Wealth of Knowledge Section */}
      <section className="bg-[#F8F7F2] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
                <div className="aspect-square rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                    <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-12 rounded-[40px] shadow-2xl">
                    <Trophy size={48} className="text-[#C9A227] mb-4" />
                    <h4 className="text-2xl font-black text-[#004225] uppercase tracking-tight">Elite Legacy</h4>
                    <p className="text-black/40 font-bold uppercase text-[10px] tracking-widest">Est. 1926 • Excellence Refined</p>
                </div>
            </div>
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-[#004225] uppercase tracking-tighter mb-8 leading-none">Beyond the <br /> Scorecard</h2>
              <p className="text-lg text-black/60 font-medium leading-relaxed mb-12 italic">"Membership at WorkshopeGolf isn't just about tee times. It's about a community of high-performers who bring the same intensity to the green as they do to their boardrooms."</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg"><Briefcase size={22} className="text-[#004225]" /></div>
                    <h5 className="font-black text-[#004225] uppercase text-sm tracking-widest">B2B Networking</h5>
                    <p className="text-sm text-black/50 leading-relaxed font-bold">Monthly mixers with the region's top CEOs and decision makers.</p>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg"><Award size={22} className="text-[#004225]" /></div>
                    <h5 className="font-black text-[#004225] uppercase text-sm tracking-widest">Reciprocal Rights</h5>
                    <p className="text-sm text-black/50 leading-relaxed font-bold">Global access to 50+ partner clubs across North America and Europe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Overview Tables */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight mb-4">Compare Benefits</h2>
            <div className="h-1 w-20 bg-[#C9A227] mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b-2 border-[#004225]/10">
                        <th className="py-8 px-6 text-left font-black text-[#004225] uppercase tracking-widest text-sm">Service Feature</th>
                        <th className="py-8 px-6 text-center font-black text-[#004225] uppercase tracking-widest text-sm">Young Exec</th>
                        <th className="py-8 px-6 text-center font-black text-[#004225] uppercase tracking-widest text-sm bg-[#004225]/5">Regular Member</th>
                        <th className="py-8 px-6 text-center font-black text-[#004225] uppercase tracking-widest text-sm">Elite Corp</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-sm font-bold text-black/60">
                    <tr className="hover:bg-black/[0.02] transition-colors">
                        <td className="py-6 px-6 font-black text-[#004225] uppercase">7-Day Course Access</td>
                        <td className="py-6 px-6 text-center">—</td>
                        <td className="py-6 px-6 text-center bg-[#004225]/5 text-[#004225] font-black px-4"><Check size={20} className="mx-auto" /></td>
                        <td className="py-6 px-6 text-center font-black text-[#004225]"><Check size={20} className="mx-auto" /></td>
                    </tr>
                    <tr className="hover:bg-black/[0.02] transition-colors">
                        <td className="py-6 px-6 font-black text-[#004225] uppercase">AI Swing Lab Studio</td>
                        <td className="py-6 px-6 text-center">Mobile Only</td>
                        <td className="py-6 px-6 text-center bg-[#004225]/5 text-[#004225] font-black px-4"><Check size={20} className="mx-auto" /></td>
                        <td className="py-6 px-6 text-center font-black text-[#004225]"><Check size={20} className="mx-auto" /></td>
                    </tr>
                    <tr className="hover:bg-black/[0.02] transition-colors">
                        <td className="py-6 px-6 font-black text-[#004225] uppercase">Private Boardroom</td>
                        <td className="py-6 px-6 text-center">—</td>
                        <td className="py-6 px-6 text-center bg-[#004225]/5 text-[#004225] font-black px-4">—</td>
                        <td className="py-6 px-6 text-center font-black text-[#004225]"><Check size={20} className="mx-auto" /></td>
                    </tr>
                    <tr className="hover:bg-black/[0.02] transition-colors">
                        <td className="py-6 px-6 font-black text-[#004225] uppercase">Global Reciprocity</td>
                        <td className="py-6 px-6 text-center">—</td>
                        <td className="py-6 px-6 text-center bg-[#004225]/5 text-[#004225] font-black px-4"><Check size={20} className="mx-auto" /></td>
                        <td className="py-6 px-6 text-center font-black text-[#004225]"><Check size={20} className="mx-auto" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-32 bg-[#004225] text-center px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <TrendingUp size={48} className="mx-auto text-[#C9A227] mb-8" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">Invest in Your Excellence</h2>
          <p className="text-xl text-white/70 mb-12 font-medium">Join 2,500+ professionals who have transformed their networking and their golf game at WorkshopeGolf.</p>
          <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-[#C9A227] text-[#004225] h-20 px-16 font-black uppercase tracking-widest shadow-2xl rounded-2xl text-lg hover:bg-white hover:scale-105 transition-all">
                    Apply For Membership
                </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const ArrowRight = ({ size, className }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
);
