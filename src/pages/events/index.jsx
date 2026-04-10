import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../components/ui/WebsiteNavbar';
import { Button } from '../components/ui/Button';
import { Calendar, Users, Trophy, Flag, MapPin, ChevronRight, Star, Clock, Megaphone, GlassWater } from 'lucide-react';

export default function Events() {
  const categories = [
    {
      title: "Championship Tournaments",
      icon: Trophy,
      desc: "High-stakes competition for those who live for the leaderboard.",
      events: [
        { title: "Summer Invitational 2026", date: "June 24-26, 2026", loc: "Paradise Bay", slots: "12/48 Joined", reward: "$5,000 Purse" },
        { title: "Club Match Play", date: "August 10, 2026", loc: "Forest Reserve", slots: "32/64 Joined", reward: "Hof Fame Entry" }
      ]
    },
    {
      title: "Social & Lifestyle",
      icon: GlassWater,
      desc: "Where golf meets premium hospitality. Networking at its finest.",
      events: [
        { title: "Young Executive Mixer", date: "July 02, 2026", loc: "The Terrace Club", slots: "Limited", reward: "Open Bar & DJs" },
        { title: "Midnight Scramble", date: "August 20, 2026", loc: "Glastonbury Glades", slots: "10 Teams Left", reward: "GLO-Golf Trophy" }
      ]
    }
  ];

  const results = [
    { tournament: "Spring Masters", winner: "Michael V.", score: "-8", hcp: "2", status: "Professional" },
    { tournament: "Executive Cup", winner: "Sarah L.", score: "-4", hcp: "10", status: "Member" },
    { tournament: "Junior Open", winner: "Jake P.", score: "Even", hcp: "14", status: "Under 18" },
    { tournament: "Seniors Classic", winner: "Robert D.", score: "-2", hcp: "6", status: "Member" }
  ];

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* 1. Dynamic Hero Header */}
      <section className="bg-white py-32 px-6 border-b border-black/5 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#C9A227]/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="bg-[#004225] text-white px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-[0.3em] mb-10 inline-block shadow-2xl">
              2026 Seasonal Calendar
            </div>
            <h1 className="text-6xl md:text-[140px] font-black text-[#004225] tracking-tighter mb-8 uppercase leading-[0.8]">
              Events
            </h1>
            <div className="h-1.5 w-32 bg-[#C9A227] mx-auto mb-10"></div>
            <p className="text-black/40 text-xl font-bold max-w-2xl mx-auto uppercase tracking-[0.1em] leading-relaxed">
              From championship tournament cycles to exclusive sunset mixers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Structured Event Categories */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-32 last:mb-0">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#004225] rounded-3xl flex items-center justify-center text-[#C9A227] shadow-xl">
                  <cat.icon size={32} />
                </div>
                <div>
                  <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight leading-none mb-2">{cat.title}</h2>
                  <p className="text-black/30 font-bold uppercase text-sm tracking-widest">{cat.desc}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {cat.events.map((event, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 15 }}
                  className="group flex flex-col md:flex-row items-center bg-white border border-black/5 rounded-[40px] p-10 shadow-soft hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#004225]"></div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 text-[12px] font-black uppercase tracking-widest text-[#C9A227] mb-4">
                      <Calendar size={16} /> {event.date}
                      <span className="text-black/10">•</span>
                      <MapPin size={16} /> {event.loc}
                    </div>
                    <h3 className="text-3xl font-black text-[#004225] mb-6 uppercase tracking-tight group-hover:text-[#C9A227] transition-colors">{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-8">
                        <div className="flex items-center gap-3">
                            <Users size={18} className="text-black/20" />
                            <span className="text-sm font-black text-black/50 uppercase">{event.slots}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star size={18} className="text-[#C9A227]" />
                            <span className="text-sm font-black text-black/50 uppercase">{event.reward}</span>
                        </div>
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 md:ml-10">
                      <button className="w-14 h-14 bg-[#F8F7F2] rounded-2xl flex items-center justify-center text-[#004225] group-hover:bg-[#004225] group-hover:text-white transition-all shadow-sm">
                          <ChevronRight size={24} />
                      </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 3. Hall of Fame Results (Dark Sidebar Style) */}
      <section className="bg-[#004225] py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
              <h2 className="text-[20vw] font-black text-white uppercase tracking-tighter select-none">LEADERBOARD</h2>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-20">
                  <div>
                      <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Championship <br /> Archives</h2>
                      <p className="text-[#C9A227] font-black uppercase tracking-[0.3em] text-sm">Where Legends Are Ink'd</p>
                  </div>
                  <Button className="bg-[#C9A227] text-[#004225] h-18 px-12 rounded-[24px] font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:scale-105 transition-all">Download Full 2025 History</Button>
              </div>

              <div className="bg-white/5 backdrop-blur-3xl rounded-[60px] p-10 md:p-16 border border-white/10 shadow-2xl overflow-x-auto">
                  <div className="min-w-[800px]">
                      <div className="grid grid-cols-5 border-b border-white/10 pb-10 mb-10 text-[12px] font-black uppercase tracking-widest text-[#C9A227]">
                          <div className="col-span-2">Tournament Designation</div>
                          <div>Master Champion</div>
                          <div>Card Score</div>
                          <div>Category</div>
                      </div>
                      {results.map((r, i) => (
                          <div key={i} className="grid grid-cols-5 py-8 border-b border-white/5 last:border-0 items-center group transition-colors hover:bg-white/5 px-4 rounded-2xl">
                              <div className="col-span-2">
                                  <div className="text-white font-black uppercase text-xl leading-none mb-1">{r.tournament}</div>
                                  <div className="text-white/20 font-bold uppercase text-[10px] tracking-widest">Spring Season Cycle</div>
                              </div>
                              <div className="text-white font-black uppercase text-sm">{r.winner}</div>
                              <div className="text-[#C9A227] font-black text-3xl tracking-tighter">{r.score}</div>
                              <div className="text-white/30 font-black uppercase text-[11px] tracking-widest">{r.status}</div>
                          </div>
                      ))}
                  </div>
              </div>
          </div>
      </section>

      {/* 4. League Interest Form Area */}
      <section className="py-40 bg-white text-center px-6">
          <div className="max-w-4xl mx-auto">
              <Megaphone size={64} className="mx-auto text-[#004225] mb-12" />
              <h2 className="text-5xl md:text-8xl font-black text-[#004225] uppercase tracking-tighter mb-12 leading-[0.9]">Join The Summer <br /> Evening League</h2>
              <p className="text-black/40 text-xl font-bold mb-16 uppercase tracking-widest max-w-2xl mx-auto">The 2026 Season starts July 15th. Only 12 team slots remaining in the competitive bracket.</p>
              <div className="flex flex-wrap justify-center gap-8">
                  <Link to="/signup">
                      <Button className="bg-[#004225] text-white h-20 px-16 rounded-[28px] font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-[#C9A227] hover:text-[#004225] transition-all text-lg">
                          Register Team
                      </Button>
                  </Link>
                  <Button variant="secondary" className="h-20 px-16 border-4 border-[#004225] text-[#004225] rounded-[28px] font-black uppercase tracking-[0.2em] text-lg">
                      Rules Handbook
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
