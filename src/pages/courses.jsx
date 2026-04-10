import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../components/ui/WebsiteNavbar';
import { Link } from 'react-router-dom';
import { Flag, Sun, Snowflake, ShieldCheck, MapPin, Star, ArrowRight } from 'lucide-react';

export default function Courses() {
  const categories = [
    {
      title: 'Summer Selection',
      desc: 'Our premier championship tracks optimized for peak performance during the golden months.',
      path: '/courses/summer',
      icon: Sun,
      color: 'bg-amber-500',
      img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Winter selection',
      desc: 'Resilient layouts designed to maintain playability and green speed through the cooler seasons.',
      path: '/courses/winter',
      icon: Snowflake,
      color: 'bg-blue-500',
      img: 'https://images.unsplash.com/photo-1591491719366-62a0d72acdaf?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Course Rules',
      desc: 'The official WorkshopeGolf Code of the Green. Tradition, etiquette, and regulations.',
      path: '/courses/rules',
      icon: ShieldCheck,
      color: 'bg-[#004225]',
      img: 'https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Courses Overview"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/40 to-[#004225]/90" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <Flag size={14} /> World-Class Destinations
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
            The Courses
          </h1>
          <div className="h-1.5 w-24 bg-[#C9A227] mx-auto mb-8" />
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto uppercase tracking-widest">
            Championship Layouts · Infinite Variety
          </p>
        </motion.div>
      </section>

      {/* Category Grid */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={cat.path} className="group block h-full">
                <div className="bg-white rounded-[48px] overflow-hidden shadow-xl border border-black/5 flex flex-col h-full hover:shadow-2xl transition-all hover:translate-y-[-8px]">
                   <div className="h-64 relative overflow-hidden">
                      <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cat.title} />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute top-8 left-8">
                         <div className={`w-14 h-14 ${cat.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                            <cat.icon size={28} />
                         </div>
                      </div>
                   </div>
                   <div className="p-10 flex-grow flex flex-col">
                      <h3 className="text-3xl font-black text-[#004225] uppercase tracking-tighter mb-4">{cat.title}</h3>
                      <p className="text-black/40 font-medium leading-relaxed mb-8 flex-grow">{cat.desc}</p>
                      <div className="flex items-center gap-2 text-[#004225] font-black uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                         Explore Catalog <ArrowRight size={14} />
                      </div>
                   </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white py-20 px-6 border-y border-black/5">
         <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: '4', label: 'Unique Courses' },
              { val: '72', label: 'Holes Total' },
              { val: '24/7', label: 'Maintenance' },
              { val: 'Top 10', label: 'National Rank' }
            ].map((s, i) => (
                <div key={i}>
                  <div className="text-4xl font-black text-[#004225] mb-2">{s.val}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-black/30">{s.label}</div>
                </div>
            ))}
         </div>
      </section>
    </div>
  );
}
