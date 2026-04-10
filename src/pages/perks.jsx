import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Gift, Star, Tag, Coffee, Utensils, Car, Dumbbell,
  Shirt, Globe, BookOpen, ChevronRight, ShoppingBag, Trophy, TrendingUp
} from 'lucide-react';

const perks = [
  {
    icon: ShoppingBag,
    title: 'Pro Shop Discounts',
    category: 'Retail',
    desc: 'Members enjoy exclusive tiered discounts across the entire Pro Shop — from premium golf equipment to branded apparel.',
    benefits: ['10% – Young Executive', '20% – Regular Member', '30% – Elite Corporate'],
    color: 'bg-amber-50',
    iconColor: 'text-amber-700',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Utensils,
    title: 'Members\' Dining Room',
    category: 'Hospitality',
    desc: 'A private dining space reserved exclusively for members. Enjoy breakfast, lunch, and post-round menus crafted by our executive chef.',
    benefits: ['Priority seating 7 days a week', 'Private event hosting available', 'Chef\'s Table experience (Elite+)'],
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-700',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Dumbbell,
    title: 'AI Swing Lab Access',
    category: 'Performance',
    desc: 'Get unlimited access to our state-of-the-art biomechanical analysis studio powered by 8K cameras and machine learning.',
    benefits: ['Mobile App (All Members)', 'Full Studio (Regular & Elite)', 'Monthly Pro Reviews (Elite)'],
    color: 'bg-blue-50',
    iconColor: 'text-blue-700',
    iconBg: 'bg-blue-100',
  },
  {
    icon: Car,
    title: 'VIP Valet & Parking',
    category: 'Convenience',
    desc: 'Arrive and depart in style. VIP parking spaces and complimentary valet service for Elite Corporate members and designated guests.',
    benefits: ['Reserved parking (Regular+)', 'Complimentary valet (Elite)', 'Guest valet tokens (4/month)'],
    color: 'bg-purple-50',
    iconColor: 'text-purple-700',
    iconBg: 'bg-purple-100',
  },
  {
    icon: Coffee,
    title: 'Clubhouse Lounge',
    category: 'Hospitality',
    desc: 'Unwind in the members-only lounge after your round. Enjoy curated whiskey tastings, premium coffee, and live jazz on Fridays.',
    benefits: ['Unlimited lounge access', 'Monthly wine tasting events', 'Complimentary post-round drinks'],
    color: 'bg-rose-50',
    iconColor: 'text-rose-700',
    iconBg: 'bg-rose-100',
  },
  {
    icon: Globe,
    title: 'Global Reciprocal Access',
    category: 'Travel',
    desc: 'Your WorkshopeGolf membership opens doors at 50+ prestigious partner clubs across North America and Europe. Play the world.',
    benefits: ['Access to 50+ partner clubs', 'No green fee surcharges', 'Concierge booking assistance'],
    color: 'bg-sky-50',
    iconColor: 'text-sky-700',
    iconBg: 'bg-sky-100',
  },
  {
    icon: Shirt,
    title: 'Branded Welcome Kit',
    category: 'Gift',
    desc: 'Every new member receives a premium onboarding gift box curated from our Pro Shop\'s top-tier range.',
    benefits: ['Embroidered polo shirt', 'Branded golf towel & ball marker', 'Members handbook & scorecard holder'],
    color: 'bg-orange-50',
    iconColor: 'text-orange-700',
    iconBg: 'bg-orange-100',
  },
  {
    icon: BookOpen,
    title: 'Skills Clinics & Lessons',
    category: 'Performance',
    desc: 'Access our quarterly group skills clinics covering every aspect of the game — from driver dynamics to short-game mastery.',
    benefits: ['2 clinics per quarter (Young Exec)', '4 clinics per quarter (Regular)', 'Private monthly lessons (Elite)'],
    color: 'bg-teal-50',
    iconColor: 'text-teal-700',
    iconBg: 'bg-teal-100',
  },
];

const deals = [
  { partner: 'TrackMan Golf', deal: '15% off simulator sessions', logo: '🎯' },
  { partner: 'Callaway Golf', deal: 'Exclusive member fittings', logo: '⛳' },
  { partner: 'Titleist', deal: '20% off custom Pro V1s', logo: '🏌️' },
  { partner: 'FootJoy', deal: '25% off golf footwear', logo: '👟' },
  { partner: 'Bushnell', deal: 'Rangefinder member discount', logo: '🔭' },
  { partner: 'Golf Pride', deal: 'Free regrip service (4/yr)', logo: '🖐' },
];

export default function Perks() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Performance', 'Hospitality', 'Retail', 'Travel', 'Gift', 'Convenience'];
  const filtered = selectedCategory === 'All' ? perks : perks.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-[#004225] py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C9A227 0%, transparent 60%)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-xs font-black uppercase tracking-[0.2em] mb-8">
            <Gift size={14} /> Exclusive Member Privileges
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]">
            Paradise Perks
          </h1>
          <p className="text-[#C9A227] text-xl font-bold tracking-[0.15em] uppercase mb-4">
            The rewards of belonging to something extraordinary
          </p>
          <p className="text-white/55 max-w-2xl mx-auto font-medium text-lg">
            From exclusive Pro Shop discounts to global course access and private dining — your membership pays for itself.
          </p>
        </motion.div>
      </section>

      {/* Value Calculation */}
      <div className="bg-white border-y border-black/5 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: '💰', value: '$2,400+', label: 'Annual Savings (Regular)' },
            { icon: '⛳', value: '50+', label: 'Reciprocal Partner Clubs' },
            { icon: '🎁', value: '8', label: 'Active Perk Categories' },
            { icon: '🏌️', value: '24/7', label: 'Member Support' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl mb-2">{s.icon}</div>
              <div className="text-2xl font-black text-[#004225]">{s.value}</div>
              <div className="text-black/45 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Perks Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-14 gap-5">
          <div>
            <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight">Member Benefits</h2>
            <p className="text-black/45 font-medium mt-1">Curated perks designed to elevate every aspect of your membership.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#004225] text-white shadow-lg'
                    : 'bg-white text-[#004225]/55 border border-[#004225]/10 hover:border-[#004225]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {filtered.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`${perk.color} rounded-2xl p-7 border border-black/5 hover:shadow-lg transition-all group`}
            >
              <div className={`w-12 h-12 ${perk.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <perk.icon size={22} className={perk.iconColor} />
              </div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 mb-2">{perk.category}</div>
              <h3 className="text-lg font-black text-[#004225] mb-3 leading-tight">{perk.title}</h3>
              <p className="text-black/55 text-sm font-medium leading-relaxed mb-5">{perk.desc}</p>
              <ul className="space-y-2">
                {perk.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-bold text-black/60">
                    <ChevronRight size={13} className={perk.iconColor} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#004225] text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Gift size={44} className="mx-auto text-[#C9A227] mb-8" />
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
