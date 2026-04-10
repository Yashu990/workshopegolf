import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../components/ui/WebsiteNavbar';
import { Button } from '../components/ui/Button';
import { MapPin, Calendar, Clock, ArrowRight, ShieldCheck, Sun, Snowflake, BookOpen } from 'lucide-react';

export default function Courses() {
  const categories = [
    {
      title: "Summer 2026 Selection",
      icon: Sun,
      desc: "Lush fairways and vibrant greens. Experience the peak of championship golf.",
      courses: [
        { name: "Paradise Bay Championship", location: "Coastal Route 45", difficulty: "Expert", img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop" },
        { name: "Forest Reserve Plains", location: "North Pine Valley", difficulty: "Intermediate", img: "https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop" }
      ]
    },
    {
      title: "Winter 2025-2026 Exclusives",
      icon: Snowflake,
      desc: "Pristine conditions and specialized winter maintenance for year-round play.",
      courses: [
        { name: "Royal Springs Links", location: "West Highland", difficulty: "Beginner Friendly", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" },
        { name: "Glastonbury Glades", location: "South Valley", difficulty: "Intermediate", img: "https://images.unsplash.com/photo-1591491719366-62a0d72acdaf?q=80&w=1974&auto=format&fit=crop" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* 1. Immersive Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#004225]">
          <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004225] via-transparent to-transparent"></div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-4 uppercase leading-none">
            Elite Tracks
          </h1>
          <div className="h-1 w-24 bg-[#C9A227] mx-auto mb-6"></div>
          <p className="text-[#C9A227] text-xl font-bold tracking-[0.2em] uppercase">Championship Layouts • Year-Round Condition</p>
        </motion.div>
      </section>

      {/* 2. Course Categories */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-32 last:mb-0">
            <div className="flex items-center justify-between mb-16 border-b border-black/5 pb-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#004225] rounded-2xl flex items-center justify-center text-[#C9A227]">
                  <cat.icon size={32} />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight">{cat.title}</h2>
                  <p className="text-black/50 font-bold uppercase text-sm tracking-widest">{cat.desc}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {cat.courses.map((course, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-[40px] overflow-hidden shadow-soft hover:shadow-2xl transition-all border border-black/5"
                >
                  <div className="h-80 relative overflow-hidden">
                    <img src={course.img} alt={course.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[12px] font-black uppercase text-[#004225] shadow-xl">
                      {course.difficulty}
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="flex items-center gap-2 text-black/40 text-[12px] font-black uppercase tracking-widest mb-4">
                      <MapPin size={16} className="text-[#C9A227]" /> {course.location}
                    </div>
                    <h3 className="text-3xl font-black text-[#004225] mb-8 uppercase leading-tight">{course.name}</h3>
                    <div className="flex items-center justify-between">
                      <Link to={`/courses/${course.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button className="bg-[#004225] text-white hover:bg-[#C9A227] hover:text-[#004225] px-8 h-14 rounded-2xl font-black uppercase tracking-widest transition-all">
                          Course Blueprint
                        </Button>
                      </Link>
                      <button className="w-14 h-14 border-2 border-black/5 rounded-2xl flex items-center justify-center hover:border-[#C9A227] transition-all">
                        <ArrowRight size={20} className="text-[#004225]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Rules & Regs Section - Custom Visuals */}
      <section className="bg-[#F8F7F2] py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black text-[#004225] uppercase tracking-tighter mb-8 leading-none">
              The Code of <br /> The Green
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#004225]/5 rounded-xl flex items-center justify-center shrink-0">
                  <BookOpen className="text-[#004225]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#004225] uppercase mb-2">Pace of Performance</h4>
                  <p className="text-black/60 font-medium leading-relaxed">Maintaining a 4h 15m cycle ensures a seamless experience for all members. Our GPS-equipped carts track pace in real-time.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-[#004225]/5 rounded-xl flex items-center justify-center shrink-0">
                   <ShieldCheck className="text-[#004225]" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#004225] uppercase mb-2">Architectural Integrity</h4>
                  <p className="text-black/60 font-medium leading-relaxed">Traditional collared attire and soft spikes are mandated to preserve course aesthetics and green health.</p>
                </div>
              </div>
            </div>
            <Button className="mt-12 bg-[#C9A227] text-[#004225] h-16 px-12 rounded-2xl font-black uppercase tracking-widest shadow-2xl">
              Download Full Regulations
            </Button>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-square bg-white rounded-[60px] shadow-2xl p-1 relative overflow-hidden border border-black/5">
                <img src="https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover rounded-[55px]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#004225]/40 to-transparent"></div>
             </div>
             <div className="absolute -bottom-10 -right-10 bg-[#C9A227] text-[#004225] p-10 rounded-[40px] shadow-2xl hidden md:block">
                <div className="text-5xl font-black mb-2 uppercase">98%</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Member Etiquette <br /> Compliance</div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-[#004225] text-center px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-10 text-white uppercase tracking-tighter leading-none">Elevate <br className="md:hidden" /> Your Game</h2>
          <Link to="/signup">
            <Button className="bg-[#C9A227] text-[#004225] hover:bg-white hover:scale-105 transition-transform text-xl h-20 px-16 shadow-2xl rounded-3xl font-black uppercase tracking-[0.2em]">
                Secure Your Spot
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
