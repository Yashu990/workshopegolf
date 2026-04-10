import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  Trophy, CheckCircle, Users, Calendar,
  ArrowRight, Sparkles, Award, MapPin,
  Phone, Globe, Zap, Heart, ShieldCheck,
  ChevronRight, Info, Star, Search
} from 'lucide-react';
import juniorVideo from '../../Video/junior.mp4';

const courses = [
  { name: 'Citrus National', phone: '(352) 382-5996', site: 'Visit Website', color: 'bg-emerald-50' },
  { name: 'Silver Dollar GC', phone: '(813) 920-3884', site: 'Visit Website', color: 'bg-blue-50' },
  { name: 'Sugarmill Woods', phone: '(352) 382-3838', site: 'Visit Website', color: 'bg-emerald-50' },
  { name: 'Buffalo Creek GC', phone: '(941) 776-2611', site: 'Visit Website', color: 'bg-amber-50' },
  { name: 'Terra Ceia Bay Country Club', phone: '(941) 729-7663', site: 'Visit Website', color: 'bg-emerald-50' },
  { name: 'The Eagles Golf Club', phone: '(813) 920-6681', site: 'Visit Website', color: 'bg-blue-50' },
];

const events = [
  { name: 'Clearwater Country Club', date: 'June 1, 2026', location: 'Clearwater, FL', fee: '$60' },
  { name: 'Cove Cay Country Club', date: 'June 8, 2026', location: 'Clearwater, FL', fee: '$70' },
  { name: 'Plantation Palms Golf Club', date: 'June 15, 2026', location: 'Land O\' Lakes, FL', fee: '$70' },
  { name: 'Temple Terrace Country Club', date: 'June 22, 2026', location: 'Temple Terrace, FL', fee: '$70' },
  { name: 'Westchase Golf Club', date: 'June 29, 2026', location: 'Tampa, FL', fee: '$70' },
  { name: 'Buffalo Creek Golf Course', date: 'July 6, 2026', location: 'Palmetto, FL', fee: '$40' },
  { name: 'TPC Tampa Bay', date: 'July 13, 2026', location: 'Lutz, FL', fee: '$90' },
  { name: 'Innisbrook (Island)', date: 'July 27, 2026', location: 'Palm Harbor, FL', fee: '$80' },
];

const lessonPackages = [
  { name: '1 Hour Individual Evaluation', price: '$75', desc: 'A complete game assessment designed to establish a performance baseline and create a clear improvement plan.' },
  { name: '1 Hour Lesson', price: '$125', desc: 'Build on your evaluation or refine specific areas of your game.' },
  { name: '5 Lesson Package', price: '$499', desc: 'A structured series of lessons designed to create measurable progress over time.' },
  { name: '10 Lesson Package', price: '$999', desc: 'Designed for juniors and dedicated golfers seeking long-term improvement.' },
];

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function JuniorAcademy() {
  const [activeEventTab, setActiveEventTab] = useState('Tournaments');

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={juniorVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-16 right-8 md:right-16 z-20 flex flex-col md:flex-row gap-4"
        >
          <Link to="/signup">
            <Button className="h-16 px-10 bg-[#C9A227] text-[#004225] rounded-2xl font-black uppercase tracking-widest text-[11px] shadow-2xl hover:scale-105 transition-all">
              Membership Signup
            </Button>
          </Link>
          <Button variant="secondary" className="h-16 px-10 border-2 border-white text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 hover:scale-105 transition-all">
            Event Registration
          </Button>
        </motion.div>
      </section>

      {/* What We Do - Mission Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 text-[#C9A227] font-black uppercase tracking-widest text-xs mb-6">
                <div className="w-8 h-1 bg-[#C9A227]"></div> What We Do
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#004225] uppercase tracking-tighter leading-[0.9] mb-10">
                Junior Golf <br /> Development.
              </h2>
              <p className="text-2xl text-[#004225] font-black mb-8 italic">Instruction to Tournaments. It All Starts Here!</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#004225]/5 rounded-2xl flex items-center justify-center">
                    <Award className="text-[#004225]" />
                  </div>
                  <h4 className="font-black text-[#004225] uppercase tracking-wide">Professional Instruction</h4>
                  <p className="text-sm text-black/50 leading-relaxed font-medium">PGA Instructors designing your path from the lesson tee to the course.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#004225]/5 rounded-2xl flex items-center justify-center">
                    <Zap className="text-[#004225]" />
                  </div>
                  <h4 className="font-black text-[#004225] uppercase tracking-wide">Young Drive</h4>
                  <p className="text-sm text-black/50 leading-relaxed font-medium">Developing the next generation of golfers with passion and precision.</p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn delay={0.1}>
                <div className="bg-[#004225] p-10 rounded-[50px] shadow-2xl text-white h-full">
                  <h4 className="text-2xl font-black uppercase mb-6 tracking-tight">Our Mission</h4>
                  <p className="text-white/60 text-sm leading-relaxed font-medium">Founded to grow the game by making it fun, competitive, and affordable — giving juniors opportunities to play without high entry fees.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="bg-[#C9A227] p-10 rounded-[50px] shadow-2xl text-[#004225] h-full">
                  <h4 className="text-2xl font-black uppercase mb-6 tracking-tight">Leadership</h4>
                  <p className="text-[#004225]/60 text-sm leading-relaxed font-medium">Helping athletes build character and leadership through teamwork, sportsmanship, and personal growth.</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#004225] uppercase tracking-tight mb-6">Why Join Paradise Golf Tour?</h2>
            <p className="text-black/50 font-medium text-lg">Building skills, confidence, and lifelong passion — one swing at a time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Users, title: 'Coaching & Lessons', desc: 'Learn from PGA professionals and experienced instructors passionate about development.' },
              { icon: Zap, title: 'Camps & Clinics', desc: 'Build skills in a fun, group environment during seasonal and weekly training sessions.' },
              { icon: Trophy, title: 'Tournaments & Competition', desc: 'Test your game in organized, age-appropriate events that prepare you for the next level.' }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group space-y-6">
                  <div className="w-16 h-16 bg-[#F8F7F5] rounded-[24px] flex items-center justify-center group-hover:bg-[#004225] group-hover:text-white transition-all duration-500 shadow-sm">
                    <feature.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-[#004225] uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-black/50 leading-relaxed font-medium">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Course Finder Section */}
      <section className="py-32 px-6 bg-[#FAFAF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-5xl font-black text-[#004225] uppercase tracking-tighter leading-none mb-8">Find Your <br /> Perfect Course</h2>
              <p className="text-black/50 font-medium mb-12 italic">Discover golf courses in your area participating in our junior programs.</p>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20" size={20} />
                <input
                  type="text"
                  placeholder="Search by name or location..."
                  className="w-full h-16 bg-white rounded-2xl pl-16 pr-8 text-black font-medium border border-black/5 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#004225]/20"
                />
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {courses.map((course, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className={`p-8 rounded-[32px] border border-black/5 shadow-xl bg-white group hover:-translate-y-2 transition-all duration-500`}>
                    <div className="flex justify-between items-start mb-6">
                      <h4 className="text-xl font-black text-[#004225] uppercase tracking-tight">{course.name}</h4>
                      <Link size={18} className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3 text-black/40 text-[11px] font-black uppercase tracking-widest">
                        <Phone size={14} className="text-[#C9A227]" /> {course.phone}
                      </div>
                      <div className="flex items-center gap-3 text-black/40 text-[11px] font-black uppercase tracking-widest">
                        <Globe size={14} className="text-[#C9A227]" /> {course.site}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-[#004225] text-white rounded-xl text-[10px] font-black uppercase py-3 tracking-widest">View Details</Button>
                      <Button className="flex-1 border border-[#004225]/10 text-[#004225] rounded-xl text-[10px] font-black uppercase py-3 tracking-widest hover:bg-[#004225]/5">Directions</Button>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Hero / Conversion */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="bg-[#004225] rounded-[60px] p-16 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none grayscale contrast-125">
            <img src="/junior_golf_elite_academy_1775834345588.png" className="w-full h-full object-cover" alt="Elite Junior" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="text-[#C9A227] text-xs font-black uppercase tracking-[0.3em] mb-6">Paradise Junior Membership</div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-10">
              Get Started <br /> For $8/Mo
            </h2>
            <p className="text-white/60 text-lg font-medium leading-relaxed mb-12">Join the 2026 Year Round tour and unlock a world of training, community, and competition.</p>
            <div className="flex flex-wrap gap-6">
              <Link to="/signup">
                <Button className="h-16 px-12 bg-[#C9A227] text-[#004225] rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all">
                  Join The Tour
                </Button>
              </Link>
              <div className="px-8 py-5 bg-white/5 rounded-2xl border border-white/10 text-white font-black uppercase tracking-widest text-xs flex items-center gap-4">
                <Zap size={18} className="text-[#C9A227]" /> 2026 Season Open
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs We Offer */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#004225] uppercase tracking-tight mb-6">Programs We Offer</h2>
            <p className="text-black/50 font-medium text-lg">Discover our comprehensive golf programs designed for players of all ages and skill levels.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Junior Lessons',
                desc: 'Individual or group lessons tailored to skill level. Our certified instructors provide personalized coaching to help young golfers develop proper fundamentals and technique.',
                features: ['Ages 5-18', 'Individual & group options', 'Skill-based progression', 'Professional instruction'],
                icon: Star
              },
              {
                title: 'Seasonal Camps',
                desc: 'Summer, winter, and holiday golf camps for all ages. Full-day and half-day options available with lunch and snacks included.',
                features: ['All ages welcome', 'Full & half-day options', 'Meals included', 'Holiday programs'],
                icon: Calendar
              },
              {
                title: 'Junior Tournaments',
                desc: 'Competitive events with divisions by age and skill. Perfect opportunity for young golfers to test their skills in a supportive tournament environment.',
                features: ['Age divisions', 'Skill-based flights', 'Awards ceremony', 'Tournament experience'],
                icon: Trophy
              },
              {
                title: 'Parent (Adult/Child) Tournaments',
                desc: 'Skills challenges, parent-junior scrambles, and fun outings. These events focus on making golf enjoyable while building family connections through the game.',
                features: ['Family-friendly', 'Skills challenges', 'Parent-child events', 'Fun atmosphere'],
                icon: Heart
              }
            ].map((program, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-12 rounded-[50px] border border-black/5 shadow-xl hover:shadow-2xl transition-all h-full group">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-[#004225]/5 rounded-2xl flex items-center justify-center text-[#004225] group-hover:bg-[#004225] group-hover:text-white transition-all">
                      <program.icon size={24} />
                    </div>
                    <h4 className="text-2xl font-black text-[#004225] uppercase tracking-tight">{program.title}</h4>
                  </div>
                  <p className="text-black/50 font-medium leading-relaxed mb-10">{program.desc}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {program.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-xs font-black text-[#004225] uppercase tracking-wide">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]"></div> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-[#004225] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">Benefits of a <br /> Junior Member</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Exclusive Lessons', desc: 'Access to exclusive junior clinics with professional instructors.' },
                  { title: 'Tournament Entry', desc: 'Entry into junior tournaments and seasonal events year-round.' },
                  { title: 'Special Discounts', desc: 'Extra savings on camps and elite development programs.' },
                  { title: 'Official Tour Gear', desc: 'Receive your hat, shirt, and custom tour bag tag.' }
                ].map((benefit, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#C9A227] rounded-full flex items-center justify-center text-[#004225]"><CheckCircle size={14} /></div>
                      <h5 className="text-white font-black uppercase text-sm tracking-widest">{benefit.title}</h5>
                    </div>
                    <p className="text-white/40 text-[13px] font-medium leading-relaxed pl-9">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 rounded-[60px] shadow-2xl">
              <div className="text-[#004225] text-xs font-black uppercase tracking-[0.3em] mb-10 text-center">Eligibility & Access</div>
              <div className="space-y-10">
                <div className="space-y-4">
                  <h4 className="text-3xl font-black text-[#004225] uppercase tracking-tight text-center">Who Can Join?</h4>
                  <p className="text-black/50 text-center font-medium max-w-sm mx-auto italic">For every young golfer ready to learn, play, and have fun.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-6 bg-[#004225]/5 rounded-3xl text-center">
                    <span className="text-xs font-black uppercase text-[#004225]/40 block mb-2 tracking-widest">Ages</span>
                    <span className="text-3xl font-black text-[#004225]">5 – 18</span>
                  </div>
                  <div className="p-6 bg-[#004225]/5 rounded-3xl text-center">
                    <span className="text-xs font-black uppercase text-[#004225]/40 block mb-2 tracking-widest">Levels</span>
                    <span className="text-lg font-black text-[#004225]">Beginner · Intermediate · Advanced</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 border-2 border-dashed border-[#004225]/10 rounded-3xl">
                  <ShieldCheck size={28} className="text-[#C9A227] shrink-0" />
                  <p className="text-[11px] font-bold text-[#004225] uppercase leading-relaxed tracking-wider">Multiple divisions ensure fair and fun play for everyone on the tour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How To Get Started */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#004225] uppercase tracking-tight mb-6">How to Get Started</h2>
            <p className="text-black/50 font-medium text-lg italic">Follow these simple steps to begin your golf journey with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { step: '1', title: 'Sign Up', desc: 'Choose your membership level online.' },
              { step: '2', title: 'Get Involved', desc: 'Start with lessons, join a camp, or play in your first event.' },
              { step: '3', title: 'Grow Your Game', desc: 'Track your progress through tournaments, clinics, and rankings.' }
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center relative group">
                {i < 2 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-px border-t border-dashed border-[#004225]/20 z-0"></div>
                )}
                <div className="w-24 h-24 bg-white border-4 border-[#004225]/5 rounded-[32px] flex items-center justify-center mx-auto mb-10 text-4xl font-black text-[#004225] shadow-xl relative z-10 group-hover:bg-[#C9A227] group-hover:border-[#C9A227] transition-all duration-500">
                  {s.step}
                </div>
                <h4 className="text-2xl font-black text-[#004225] uppercase tracking-tight mb-4">{s.title}</h4>
                <p className="text-black/50 font-medium leading-relaxed">{s.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-[#004225] uppercase tracking-tighter leading-none mb-6">Upcoming Events</h2>
            <p className="text-black/50 font-medium">Find the perfect golf event that fits your current needs.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {['Tournaments', 'Parent/Child', 'Clinics', 'Camps'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveEventTab(tab)}
                className={`px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeEventTab === tab
                    ? 'bg-[#004225] text-white shadow-xl scale-105'
                    : 'bg-[#004225]/5 text-[#004225] hover:bg-[#004225]/10'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-[#FAFAF7] p-8 rounded-[40px] border border-black/5 flex flex-col h-full group hover:bg-[#004225] transition-all duration-500 hover:shadow-2xl">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-3 bg-white rounded-2xl shadow-sm text-[#004225] group-hover:text-[#C9A227] group-hover:bg-white/10 transition-all">
                      <Calendar size={20} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-black/30 group-hover:text-white/40">FJT STEP Exemption</div>
                  </div>
                  <div className="flex-grow space-y-4">
                    <h4 className="text-xl font-black text-[#004225] uppercase tracking-tight leading-tight group-hover:text-white">{event.name}</h4>
                    <p className="text-xs font-black text-[#C9A227] uppercase tracking-[0.2em]">{event.date}</p>
                    <p className="text-xs font-medium text-black/40 group-hover:text-white/40 lowercase">{event.location}</p>
                  </div>
                  <div className="mt-12 pt-8 border-t border-black/5 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-lg font-black text-[#004225] group-hover:text-white">{event.fee}</span>
                    <Button className="bg-[#004225] text-white rounded-xl text-[10px] font-black uppercase py-4 px-8 tracking-widest group-hover:bg-[#C9A227] group-hover:text-[#004225]">Signup</Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="bg-[#004225] mt-16 p-10 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#C9A227]/20 rounded-full flex items-center justify-center text-[#C9A227]">
                <Star size={32} className="fill-[#C9A227]" />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-widest mb-1">FJT STEP Special Exemption</h4>
                <p className="text-white/40 text-[11px] font-medium leading-relaxed">Champions qualify for Florida Junior Tour special tournament exemptions.</p>
              </div>
            </div>
            <Button className="shrink-0 bg-white text-[#004225] rounded-2xl px-10 h-16 font-black uppercase tracking-widest text-xs shadow-xl">Program Details</Button>
          </div>
        </div>
      </section>

      {/* Personalized Lessons Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-[#004225] uppercase tracking-tighter leading-none mb-10">Personalized <br /> Golf Lessons</h2>
          <p className="text-black/50 font-medium text-lg leading-relaxed px-6">Focused coaching help each junior build a strong foundation from swing mechanics and short game skills to course strategy and mental focus.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lessonPackages.map((pkg, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-[50px] border border-black/5 shadow-xl h-full flex flex-col group hover:border-[#C9A227]/40 transition-all">
                <h4 className="text-xl font-black text-[#004225] uppercase tracking-tight mb-4 min-h-[3rem] leading-tight">{pkg.name}</h4>
                <div className="text-4xl font-black text-[#C9A227] mb-8">{pkg.price}</div>
                <p className="text-black/45 text-sm font-medium leading-relaxed mb-10 flex-grow">{pkg.desc}</p>
                <Button className="w-full bg-[#004225] text-white rounded-2xl h-14 font-black uppercase tracking-widest text-[10px] shadow-lg group-hover:bg-[#C9A227] group-hover:text-[#004225] transition-all">Sign Up</Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-32 px-6 pt-16">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-black text-[#004225] uppercase tracking-tight">Golf Course Gallery</h2>
          <div className="w-20 h-1 bg-[#C9A227] mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            "/junior_golf_elite_academy_1775834345588.png",
            "/luxe_clubhouse_entrance_1775834327928.png",
            "/elite_golf_tournament_scene_1775834811761.png",
            "/ai_training_bay_elite_1775834782760.png",
            "/ai_golf_swing_analysis_1775834309564.png",
            "/luxe_golf_merchandise_premium_1775834796057.png"
          ].map((img, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="w-80 h-80 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src={img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt="Gallery"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-[#004225] text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Trophy size={48} className="mx-auto text-[#C9A227] mb-8" />
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter leading-none">Become a Paradise <br /> Junior Member Today</h2>
          <Link to="/signup">
            <Button className="bg-[#C9A227] text-[#004225] h-20 px-16 font-black uppercase tracking-widest shadow-2xl rounded-2xl text-lg hover:bg-white hover:scale-105 transition-all outline outline-offset-8 outline-white/10">
              Apply For Tier Access
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
