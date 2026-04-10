import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Check, Trophy, Briefcase, Award,
  TrendingUp, Star, Users, Globe, Shield
} from 'lucide-react';

const ArrowRight = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const plans = [
  {
    name: 'Young Executive', price: '$149', target: 'Ages 18–35',
    desc: 'Designed for the next generation of golf enthusiasts. Build your career and your game simultaneously.',
    features: ['Full Weekday Course Access', 'Junior Executive Networking Events', 'Quarterly Skills Clinics', '10% Pro Shop Discount', 'Mobile App AI Analysis (Standard)', 'Complimentary Range Balls (Small Bucket)'],
    gradient: 'from-white to-[#F0F4E8]', textColor: 'text-[#004225]', btnBg: 'bg-[#004225]', btnText: 'text-white',
    path: '/memberships/young-executive'
  },
  {
    name: 'Regular Member', price: '$299', target: 'Full Individual', highlight: true,
    desc: 'Our hallmark membership. Total immersion into the WorkshopeGolf experience with no limitations.',
    features: ['Unlimited Course Access (Any Day)', 'Advanced AI Swing Lab Access', 'Private Locker & Storage', '20% Pro Shop Discount', 'Invitations to Seasonal Championships', 'Concierge Tee-Time Reservations', 'Unlimited Range Access'],
    gradient: 'from-[#004225] to-[#00301b]', textColor: 'text-white', btnBg: 'bg-[#C9A227]', btnText: 'text-[#004225]',
    path: '/signup'
  },
  {
    name: 'Elite Corporate', price: '$999', target: 'Business Teams',
    desc: 'For the leaders who close deals on the fairway. Provide your executives with a premium sanctuary.',
    features: ['4 Individual Designations', 'Premium Boardroom Booking', 'Corporate Branding on Scorecards', 'VIP Valet & Concierge Services', 'Hosting Privileges for Clients', 'Quarterly Team Building Days', 'Private Event Priority'],
    gradient: 'from-white to-[#F0F4E8]', textColor: 'text-[#004225]', btnBg: 'bg-[#004225]', btnText: 'text-white',
    path: '/memberships/corporate'
  },
];

const perks = [
  { icon: Globe, title: 'Global Reciprocity', desc: 'Access 50+ partner clubs across North America and Europe.' },
  { icon: Briefcase, title: 'B2B Networking', desc: 'Monthly mixers with the region\'s top CEOs and decision makers.' },
  { icon: Trophy, title: 'Championship Access', desc: 'Invitations to seasonal member tournaments and pro-am events.' },
  { icon: Shield, title: 'Guest Privileges', desc: 'Bring up to 2 guests per round with exclusive member rates.' },
];

const tableRows = [
  { label: '7-Day Course Access', exec: false, regular: true, corporate: true },
  { label: 'AI Swing Lab Studio', exec: 'Mobile Only', regular: true, corporate: true },
  { label: 'Private Locker', exec: false, regular: true, corporate: true },
  { label: 'Private Boardroom', exec: false, regular: false, corporate: true },
  { label: 'Global Reciprocity', exec: false, regular: true, corporate: true },
  { label: 'VIP Concierge', exec: false, regular: false, corporate: true },
  { label: 'Pro Shop Discount', exec: '10%', regular: '20%', corporate: '30%' },
];

export default function Memberships() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden">

      {/* Hero */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/luxe_clubhouse_entrance_1775834327928.png"
            className="w-full h-full object-cover"
            alt="Memberships"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/40 to-[#004225]/90" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-xs font-black uppercase tracking-[0.2em] mb-8">
            <Trophy size={14} /> Exclusive Membership Tiers
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
            The Inner Circle
          </h1>
          <p className="text-[#C9A227] text-xl font-bold tracking-[0.2em] uppercase max-w-2xl mx-auto border-y border-[#C9A227]/30 py-4 mt-8">
            Select Your Tier · Access Your Excellence
          </p>
        </motion.div>
      </section>

      {/* Perks Strip */}
      <div className="bg-white border-b border-black/5 py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {perks.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-10 h-10 bg-[#004225]/8 rounded-xl flex items-center justify-center shrink-0">
                <p.icon size={18} className="text-[#004225]" />
              </div>
              <div>
                <h5 className="font-black text-[#004225] text-sm uppercase tracking-wide">{p.title}</h5>
                <p className="text-black/50 text-xs leading-relaxed font-medium mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plans */}
      <section className="max-w-7xl mx-auto py-28 px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight mb-3">Choose Your Plan</h2>
          <p className="text-black/50 font-medium">All memberships include a complimentary 14-day trial period.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col p-10 rounded-[40px] shadow-xl border border-black/5 bg-gradient-to-br ${plan.gradient} ${plan.textColor}`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#C9A227] text-[#004225] px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Most Preferred
                </div>
              )}
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 mb-3 block">{plan.target}</span>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-5">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-5">
                  <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-base font-bold opacity-50">/mo</span>
                </div>
                <p className="text-[14px] font-medium leading-relaxed opacity-75">{plan.desc}</p>
              </div>
              <div className="h-px w-full bg-current opacity-10 mb-8" />
              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={16} className={plan.highlight ? 'text-[#C9A227] mt-0.5 shrink-0' : 'text-[#004225] mt-0.5 shrink-0'} strokeWidth={3} />
                    <span className="text-[14px] font-bold leading-tight">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to={plan.path}>
                <button className={`w-full rounded-2xl font-black uppercase tracking-[0.15em] text-sm shadow-xl transition-all hover:scale-[1.03] active:scale-95 ${plan.btnBg} ${plan.btnText} py-4 flex items-center justify-center gap-3 group`}>
                  {plan.path === '/signup' ? 'Begin Membership' : 'Explore Tier Details'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Compare Table */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight mb-3">Compare Benefits</h2>
          <div className="h-1 w-20 bg-[#C9A227] mx-auto" />
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#004225]/10">
                <th className="py-6 px-6 text-left font-black text-[#004225] uppercase tracking-widest text-xs">Feature</th>
                <th className="py-6 px-6 text-center font-black text-[#004225] uppercase tracking-widest text-xs">Young Exec</th>
                <th className="py-6 px-6 text-center font-black text-[#004225] uppercase tracking-widest text-xs bg-[#004225]/5 rounded-t-xl">Regular</th>
                <th className="py-6 px-6 text-center font-black text-[#004225] uppercase tracking-widest text-xs">Elite Corp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm font-bold text-black/60">
              {tableRows.map((row, i) => (
                <tr key={i} className="hover:bg-black/[0.02] transition-colors">
                  <td className="py-5 px-6 font-black text-[#004225] uppercase text-xs tracking-wide">{row.label}</td>
                  {[row.exec, row.regular, row.corporate].map((val, ci) => (
                    <td key={ci} className={`py-5 px-6 text-center ${ci === 1 ? 'bg-[#004225]/5' : ''}`}>
                      {val === true ? <Check size={18} className="mx-auto text-[#004225]" strokeWidth={3} /> :
                       val === false ? <span className="text-black/20">—</span> :
                       <span className="text-[#004225] font-black">{val}</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Beyond the scorecard */}
      <section className="bg-[#F0EFE8] py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="aspect-square rounded-[50px] overflow-hidden shadow-2xl border-8 border-white">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="Premium Golf" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-10 rounded-[36px] shadow-2xl hidden md:block">
              <Trophy size={40} className="text-[#C9A227] mb-3" />
              <h4 className="text-xl font-black text-[#004225] uppercase tracking-tight">Elite Legacy</h4>
              <p className="text-black/40 font-bold uppercase text-[10px] tracking-widest mt-1">Est. 1926 · Excellence Refined</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black text-[#004225] uppercase tracking-tighter mb-8 leading-none">Beyond the Scorecard</h2>
            <p className="text-lg text-black/60 font-medium leading-relaxed mb-10 italic">
              "Membership at WorkshopeGolf isn't just about tee times. It's about a community of high-performers who bring the same intensity to the green as they do to their boardrooms."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md"><Briefcase size={20} className="text-[#004225]" /></div>
                <h5 className="font-black text-[#004225] uppercase text-sm tracking-widest">B2B Networking</h5>
                <p className="text-sm text-black/50 leading-relaxed font-medium">Monthly mixers with the region's top CEOs and decision makers.</p>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-md"><Award size={20} className="text-[#004225]" /></div>
                <h5 className="font-black text-[#004225] uppercase text-sm tracking-widest">Reciprocal Rights</h5>
                <p className="text-sm text-black/50 leading-relaxed font-medium">Global access to 50+ partner clubs across North America and Europe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#004225] text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <TrendingUp size={44} className="mx-auto text-[#C9A227] mb-8" />
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tighter">Invest in Your Excellence</h2>
          <p className="text-xl text-white/60 mb-12 font-medium">Join 2,500+ professionals who have transformed their networking and golf game at WorkshopeGolf.</p>
          <Link to="/signup">
            <button className="bg-[#C9A227] text-[#004225] h-16 px-14 font-black uppercase tracking-widest shadow-2xl rounded-2xl text-base hover:bg-white hover:scale-105 transition-all">
              Apply For Membership
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
