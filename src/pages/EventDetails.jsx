import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../components/ui/WebsiteNavbar';
import { Button } from '../components/ui/Button';
import { 
  Calendar, Clock, MapPin, Users, Trophy, 
  ArrowLeft, Share2, ShieldCheck, Info, CheckCircle
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
    img: '/elite_golf_tournament_scene_1775834811761.png',
    desc: 'The crown jewel of our tournament calendar. Compete across all three rounds of Paradise Bay\'s iconic Championship layout for the ultimate glory and prize.',
    itinerary: [
      { time: '06:00 AM', event: 'Range Opens & Registration' },
      { time: '07:00 AM', event: 'Shotgun Start (Round 1)' },
      { time: '01:30 PM', event: 'Post-Round Luncheon' }
    ]
  },
  {
    id: 2,
    category: 'Social',
    title: 'CEO Scramble — Q2 Corporate Series',
    date: 'May 9, 2026',
    time: '8:30 AM',
    location: 'Forest Reserve Plains',
    spots: 32,
    totalSpots: 72,
    format: 'Team Scramble · 18 Holes',
    prizePool: 'In-kind Prizes',
    img: 'https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop',
    desc: 'Bring your team, close deals, and build priceless relationships on the fairway. Breakfast, beverages, and an awards luncheon are all included for your team of 4.'
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
    img: '/ai_training_bay_elite_1775834782760.png',
    desc: 'A full-day intensive with our Head Teaching Pro and AI Vision system. Receive a comprehensive biomechanical breakdown and walk away with a 90-day improvement plan.'
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
    desc: 'A relaxed evening of golf on the Glades\' back nine, followed by a three-course dinner at the Members Pavilion as the sun sets over the fairway.'
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
    desc: 'A two-day head-to-head match play knockout. Win your bracket and earn the coveted Invitational Badge—a permanent mark of prestige on your member profile.'
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
    desc: 'Master the shots that actually lower your score. Pitch, chip, and putt your way to better rounds under the guidance of our short game specialist.'
  }
];

export default function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id)) || events[0];

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-32">
      <WebsiteNavbar />
      
      {/* Hero Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden pt-[65px]">
        <div className="absolute inset-0">
          <img src={event.img} className="w-full h-full object-cover" alt={event.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#004225] via-[#004225]/20 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto w-full px-6 pb-12 relative z-10">
          <Link to="/events" className="inline-flex items-center gap-2 text-white/70 hover:text-[#C9A227] transition-colors mb-8 font-bold uppercase text-xs tracking-widest">
            <ArrowLeft size={14} /> Back to Calendar
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-[10px] font-bold uppercase tracking-widest mb-4">
                {event.category}
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none mb-4">
                {event.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-white/70 text-sm font-medium">
                <div className="flex items-center gap-2"><Calendar size={16} className="text-[#C9A227]" /> {event.date}</div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-[#C9A227]" /> {event.location}</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-white/10 border-white/20 text-white rounded-xl hover:bg-white/20 transition-all">
                <Share2 size={18} />
              </Button>
              <Button className="bg-[#C9A227] text-[#004225] h-14 px-10 rounded-xl font-bold uppercase tracking-widest text-sm shadow-2xl hover:bg-white transition-all">
                Secure Your Spot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#004225] uppercase tracking-tight mb-6">About the Event</h2>
              <p className="text-lg text-black/60 font-medium leading-relaxed">
                {event.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#004225] mb-6">
                  <Trophy className="text-[#C9A227]" /> Prize Pool & Format
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-black/5 pb-3">
                    <span className="text-black/40 font-bold text-xs uppercase tracking-widest">Total Purse</span>
                    <span className="text-[#004225] font-bold">{event.prizePool}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/5 pb-3">
                    <span className="text-black/40 font-bold text-xs uppercase tracking-widest">Format</span>
                    <span className="text-[#004225] font-bold">{event.format}</span>
                  </div>
                  <div className="flex justify-between border-b border-black/5 pb-3">
                    <span className="text-black/40 font-bold text-xs uppercase tracking-widest">Tee Time</span>
                    <span className="text-[#004225] font-bold">{event.time}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm">
                <h4 className="flex items-center gap-3 text-lg font-bold text-[#004225] mb-6">
                  <ShieldCheck className="text-[#C9A227]" /> Member Benefits
                </h4>
                <ul className="space-y-4">
                  {[
                    'Premium range balls included',
                    'Digital scorecard integration',
                    'Post-round analytics report',
                    'Exclusive clubhouse access'
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-black/60">
                      <CheckCircle size={16} className="text-emerald-600" /> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#004225] uppercase tracking-tight mb-8">Event Itinerary</h2>
              <div className="space-y-4">
                {(event.itinerary || [
                  { time: '08:00 AM', event: 'Bag Drop & Warmup' },
                  { time: '09:00 AM', event: 'Tournament Commences' },
                  { time: '02:00 PM', event: 'Awards Ceremony' }
                ]).map((item, i) => (
                  <div key={i} className="flex items-center gap-8 p-6 bg-white rounded-2xl border border-black/5 hover:border-[#C9A227]/30 transition-all">
                    <span className="w-24 text-[#C9A227] font-bold text-sm tracking-widest uppercase">{item.time}</span>
                    <span className="text-[#004225] font-bold">{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Action */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#004225] p-10 rounded-[40px] shadow-2xl sticky top-24">
              <h3 className="text-white text-2xl font-bold mb-6 uppercase tracking-tight">Registration</h3>
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Standard Entry</div>
                    <div className="text-white text-2xl font-bold">$149.00</div>
                  </div>
                  <div className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">Non-Members</div>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                  <div>
                    <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Member Entry</div>
                    <div className="text-[#C9A227] text-2xl font-bold">$89.00</div>
                  </div>
                  <div className="text-[#C9A227] text-xs font-bold uppercase tracking-widest">Save 40%</div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                 <div className="flex-1 bg-white/5 rounded-2xl p-4 text-center">
                   <div className="text-white text-xl font-bold">{event.spots}</div>
                   <div className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Left</div>
                 </div>
                 <div className="flex-1 bg-white/5 rounded-2xl p-4 text-center">
                   <div className="text-white text-xl font-bold">{Math.round(((event.totalSpots - event.spots) / event.totalSpots) * 100)}%</div>
                   <div className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Full</div>
                 </div>
              </div>

              <Button className="w-full bg-[#C9A227] text-[#004225] h-14 rounded-xl font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all">
                Register for Event
              </Button>
              <p className="text-center text-white/30 text-[10px] uppercase font-bold tracking-widest mt-6 flex items-center justify-center gap-2">
                <Info size={12} /> Cancellations allowed up to 48hrs prior
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
