import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Users, Trophy, Zap,
  Star, ArrowRight, Tag, ChevronRight, Filter
} from 'lucide-react';

const events = [
  {
    id: 1,
    category: 'Championship',
    title: 'Spring Open Championship 2026',
    date: 'April 26–28, 2026',
    time: '7:00 AM Shotgun Start',
    location: 'Paradise Bay Championship Course',
    spots: 12,
    totalSpots: 80,
    format: 'Stroke Play · 54 Holes',
    prizePool: '$15,000',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop',
    featured: true,
    tag: 'Featured',
    tagColor: 'bg-[#C9A227] text-[#004225]',
    desc: 'The crown jewel of our tournament calendar. Compete across all three rounds of Paradise Bay\'s iconic Championship layout for the ultimate glory and prize.',
  },
  {
    id: 2,
    category: 'Social',
    title: 'CEO Scramble  — Q2 Corporate Series',
    date: 'May 9, 2026',
    time: '8:30 AM',
    location: 'Forest Reserve Plains',
    spots: 32,
    totalSpots: 72,
    format: 'Team Scramble · 18 Holes',
    prizePool: 'In-kind Prizes',
    img: 'https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop',
    tag: 'Corporate',
    tagColor: 'bg-blue-600 text-white',
    desc: 'Bring your team, close deals, and build priceless relationships on the fairway. Breakfast, beverages, and an awards luncheon are all included for your team of 4.',
  },
  {
    id: 3,
    category: 'Clinic',
    title: 'AI Swing Lab: Masterclass Day',
    date: 'May 17, 2026',
    time: '10:00 AM – 4:00 PM',
    location: 'AI Swing Lab Studio',
    spots: 8,
    totalSpots: 20,
    format: 'Individual Coaching · Full Day',
    prizePool: 'N/A',
    img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop',
    tag: 'Limited Spots',
    tagColor: 'bg-red-500 text-white',
    desc: 'A full-day intensive with our Head Teaching Pro and AI Vision system. Receive a comprehensive biomechanical breakdown and walk away with a 90-day improvement plan.',
  },
  {
    id: 4,
    category: 'Social',
    title: 'Sunset Nine-and-Dine',
    date: 'May 23, 2026',
    time: '5:30 PM',
    location: 'Glastonbury Glades',
    spots: 28,
    totalSpots: 40,
    format: 'Casual 9 Holes + Dinner',
    prizePool: 'Best Dressed Award',
    img: 'https://images.unsplash.com/photo-1591491719366-62a0d72acdaf?q=80&w=1974&auto=format&fit=crop',
    tag: 'Social',
    tagColor: 'bg-emerald-500 text-white',
    desc: 'A relaxed evening of golf on the Glades\' back nine, followed by a three-course dinner at the Members Pavilion as the sun sets over the fairway.',
  },
  {
    id: 5,
    category: 'Championship',
    title: 'Mid-Summer Invitational',
    date: 'June 14–15, 2026',
    time: '7:30 AM',
    location: 'Royal Springs Links',
    spots: 24,
    totalSpots: 64,
    format: 'Match Play · Bracket Format',
    prizePool: '$8,000',
    img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop',
    tag: 'Registration Open',
    tagColor: 'bg-[#004225] text-white',
    desc: 'A two-day head-to-head match play knockout. Win your bracket and earn the coveted Invitational Badge—a permanent mark of prestige on your member profile.',
  },
  {
    id: 6,
    category: 'Clinic',
    title: 'Short Game & Scoring Clinic',
    date: 'June 20, 2026',
    time: '9:00 AM – 1:00 PM',
    location: 'Putting Studio & Practice Green',
    spots: 5,
    totalSpots: 15,
    format: 'Group Coaching · Half Day',
    prizePool: 'N/A',
    img: 'https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop',
    tag: 'Almost Full',
    tagColor: 'bg-orange-500 text-white',
    desc: 'Master the shots that actually lower your score. Pitch, chip, and putt your way to better rounds under the guidance of our short game specialist.',
  },
];

const categories = ['All', 'Championship', 'Social', 'Clinic'];

export default function Events() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? events : events.filter(e => e.category === filter);

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/elite_golf_tournament_scene_1775834811761.png"
            className="w-full h-full object-cover"
            alt="Events"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/55 to-[#004225]/95" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-xs font-bold uppercase tracking-[0.2em] mb-7">
            <Calendar size={14} /> 2026 Events Calendar
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-5 uppercase leading-none">
            Events & <br /> Tournaments
          </h1>
          <div className="h-1 w-20 bg-[#C9A227] mx-auto mb-5" />
          <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto">
            Compete, connect, and improve. From elite championships to social evenings — there's an event for every member.
          </p>
        </motion.div>
      </section>

      {/* Stats */}
      <div className="bg-[#004225] py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '24+', label: 'Annual Events' },
            { value: '$45K', label: 'Total Prize Pool' },
            { value: '600+', label: 'Participants / Year' },
            { value: '3', label: 'Event Categories' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-[#C9A227]">{s.value}</div>
              <div className="text-white/55 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Event */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-6">
        <div className="bg-[#004225] rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-72 lg:h-auto">
              <img
                src={events[0].img}
                className="w-full h-full object-cover opacity-70"
                alt={events[0].title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#004225]/80 hidden lg:block" />
              <div className="absolute top-6 left-6 bg-[#C9A227] text-[#004225] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                ⭐ Featured Event
              </div>
            </div>
            <div className="p-10 lg:pl-12 flex flex-col justify-center">
              <span className="text-[#C9A227] text-xs font-black uppercase tracking-[0.2em] mb-3">Championship</span>
              <h2 className="text-3xl font-black text-white mb-4 leading-tight">{events[0].title}</h2>
              <p className="text-white/60 font-medium leading-relaxed mb-6">{events[0].desc}</p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/60 text-sm font-bold">
                  <Calendar size={14} className="text-[#C9A227]" /> {events[0].date}
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm font-bold">
                  <MapPin size={14} className="text-[#C9A227]" /> {events[0].location}
                </div>
                <div className="flex items-center gap-2 text-white/60 text-sm font-bold">
                  <Trophy size={14} className="text-[#C9A227]" /> {events[0].prizePool}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link to={`/events/${events[0].id}`}>
                  <button className="bg-[#C9A227] text-[#004225] px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-white transition-all shadow-lg">
                    Register Now
                  </button>
                </Link>
                <span className="text-white/40 text-sm font-bold">{events[0].spots} spots left</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 pt-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-5">
          <h2 className="text-3xl font-black text-[#004225] uppercase tracking-tight">Upcoming Events</h2>
          <div className="flex gap-3 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-wider transition-all ${
                  filter === cat
                    ? 'bg-[#004225] text-white shadow-lg'
                    : 'bg-white text-[#004225]/60 border border-[#004225]/10 hover:border-[#004225]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-black/5 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 left-4 ${event.tagColor} px-3 py-1 rounded-lg text-[11px] font-black uppercase tracking-wider shadow-md`}>
                  {event.tag}
                </div>
              </div>
              <div className="p-7">
                <div className="text-[#C9A227] text-[10px] font-black uppercase tracking-[0.2em] mb-2">{event.category}</div>
                <h3 className="text-lg font-black text-[#004225] mb-3 leading-tight">{event.title}</h3>
                <p className="text-black/50 text-sm font-medium leading-relaxed mb-5 line-clamp-2">{event.desc}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-black/55 text-xs font-bold">
                    <Calendar size={13} className="text-[#004225]" /> {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-black/55 text-xs font-bold">
                    <Clock size={13} className="text-[#004225]" /> {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-black/55 text-xs font-bold">
                    <MapPin size={13} className="text-[#004225]" /> {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-black/55 text-xs font-bold">
                    <Users size={13} className="text-[#004225]" /> {event.spots} of {event.totalSpots} spots available
                  </div>
                </div>
                {/* Spots Progress */}
                <div className="w-full bg-black/5 h-1.5 rounded-full mb-5 overflow-hidden">
                  <div
                    className="h-full bg-[#004225] rounded-full transition-all"
                    style={{ width: `${((event.totalSpots - event.spots) / event.totalSpots) * 100}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-wider">{event.format}</span>
                  <Link to={`/events/${event.id}`}>
                    <button className="flex items-center gap-2 bg-[#004225] text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C9A227] hover:text-[#004225] transition-all">
                      Register <ChevronRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#004225] text-center px-6">
        <div className="max-w-3xl mx-auto">
          <Trophy size={44} className="mx-auto text-[#C9A227] mb-8" />
          <h2 className="text-4xl md:text-5xl font-black mb-5 text-white uppercase tracking-tighter">Never Miss an Event</h2>
          <p className="text-white/60 font-medium text-lg mb-10">Members receive early registration access and exclusive invitations to private events not listed publicly.</p>
          <Link to="/memberships">
            <button className="bg-[#C9A227] text-[#004225] h-14 px-12 font-black uppercase tracking-widest shadow-2xl rounded-2xl text-sm hover:bg-white hover:scale-105 transition-all">
              Become a Member
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
