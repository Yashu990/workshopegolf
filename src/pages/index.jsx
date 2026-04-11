import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

import { 
  Activity, Target, Video, TrendingUp, CheckCircle, 
  Smartphone, UploadCloud, BrainCircuit, Users, 
  ShoppingBag, Star, Zap, AlignEndHorizontal
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Landing() {
  const aiFeatures = [
    { icon: Video, title: "Frame-by-Frame AI Analysis", desc: "Upload your swing and our vision models map 24 key body points instantly." },
    { icon: Target, title: "Smart Action Plans", desc: "Get tailored practice drills designed to fix your specific mechanical flaws." },
    { icon: Activity, title: "Real-time Feedback", desc: "Instant audio and visual corrections during your range sessions." },
    { icon: BrainCircuit, title: "Virtual Coach Chat", desc: "Ask our AI coach about course strategy, swing theory, or your progress." },
  ];

  const steps = [
    { icon: UploadCloud, title: "1. Upload Swing", desc: "Record your swing on your phone or use our driving range camera integration." },
    { icon: BrainCircuit, title: "2. AI Analysis", desc: "Within seconds, receive a complete breakdown of your posture, takeaway, and impact." },
    { icon: Target, title: "3. Custom Drills", desc: "Follow targeted drills tailored specifically to your mechanics and physical limitations." },
    { icon: TrendingUp, title: "4. Track & Improve", desc: "Watch your handicap drop as you groove a more consistent, powerful swing." },
  ];

  const testimonials = [
    { name: "Alex R.", hcp: "Hcp 12 → 4", text: "The AI coach caught a sway in my backswing I've had for years. Fixed in 2 weeks." },
    { name: "Sarah M.", hcp: "Hcp 18 → 10", text: "It's like having a tour coach in your pocket. The custom practice plans are a game changer." },
    { name: "James T.", hcp: "Hcp 5 → Scratch", text: "The precise metrics on club path and face angle helped me finally reach scratch." },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative h-[110vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale-[20%] contrast-[110%]">
            <source src="/video/10755051-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#004225]/90 via-[#004225]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-[13px] font-bold uppercase tracking-widest mb-8 border border-white/10">
              <img src="/logo.png" className="w-5 h-5 object-cover rounded-md" style={{ mixBlendMode: 'multiply' }} alt="WG" /> The Future of Golf Improvement
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[1] mb-8">
              MASTER YOUR SWING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A227] to-[#ffffff]">WITH AI PRECISION.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Stop guessing. Get tour-level analysis and personalized plans <br className="hidden md:block" />
              from our dedicated AI coach instantly on the range.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/signup">
                <Button className="h-16 px-10 text-lg bg-[#C9A227] text-[#004225] hover:bg-white hover:scale-105 transition-all font-black uppercase tracking-widest shadow-2xl">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="secondary" className="h-16 px-10 text-lg border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all font-black uppercase tracking-widest">
                  Log In
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-background/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">How it works</h2>
            <p className="text-xl text-primary75 max-w-2xl mx-auto">Transform your game in four simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-button/30 to-transparent"></div>
                )}
                <div className="w-16 h-16 bg-background border-2 border-primary/10 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm mx-auto md:mx-0">
                  <step.icon className="w-8 h-8 text-button" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 text-center md:text-left">{step.title}</h3>
                <p className="text-primary75 text-center md:text-left leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6 text-primary">Your Personal AI Golf Coach</h2>
              <p className="text-lg text-primary/60 mb-10 font-medium leading-relaxed">
                Stop guessing what's wrong with your swing. Our proprietary AI engine dissects your mechanics and builds a blueprint for your perfect swing.
              </p>
              <div className="space-y-8">
                {aiFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-2 text-primary uppercase tracking-tight">{feature.title}</h4>
                      <p className="text-primary/50 leading-relaxed text-sm md:text-base font-medium">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
              <div className="relative bg-white border border-primary/5 rounded-[40px] p-8 shadow-2xl overflow-hidden group">
                <div className="flex border-b border-primary/5 pb-6 mb-8 gap-4 items-center">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  <div className="ml-4 text-[10px] font-black tracking-widest text-primary/30 uppercase">Dashboard Analysis</div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/5">
                    <AlignEndHorizontal size={20} className="text-primary mb-3" />
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1">Estimated Hcp</div>
                    <div className="text-3xl font-bold text-primary">14.2 <span className="text-green-600 text-xs font-bold">↓ 1.5</span></div>
                  </div>
                  <div className="bg-primary/5 rounded-2xl p-6 border border-primary/5">
                    <Activity size={20} className="text-primary mb-3" />
                    <div className="text-[10px] font-black uppercase tracking-widest text-primary/40 mb-1">Swing Speed</div>
                    <div className="text-3xl font-bold text-primary">103 mph</div>
                  </div>
                </div>
                <div className="mt-6 bg-primary text-white h-72 rounded-[32px] border border-primary/5 flex items-center justify-center overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                  <img src="/ai_golf_swing_analysis_1775834309564.png" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="AI Analysis" />
                  <p className="font-bold text-xs uppercase tracking-[0.2em] z-10 flex flex-col items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-white" />
                    Interactive Trajectory
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004225] to-transparent opacity-40"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>      {/* Exclusive Perks Showcase */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-primary mb-4">Exclusive Member Perks</h2>
            <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-6"></div>
            <p className="text-xl text-primary/60 max-w-2xl mx-auto font-medium">Elevate your experience beyond the range with our elite member services.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Junior Academy", desc: "Elite pathways for the next generation.", path: "/perks/junior", img: "/junior_golf_elite_academy_1775834345588.png" },
              { title: "Live Coaching", desc: "1-on-1 sessions with world-class pros.", path: "/perks/live", img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80" },
              { title: "Video Vault", desc: "Unlock thousands of pro swing secrets.", path: "/perks/videos", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=600" },
              { title: "Priority Booking", desc: "Skip the line for peak tee times.", path: "/perks/tee-times", img: "https://images.unsplash.com/photo-1591491640784-3232eb748d4b?auto=format&fit=crop&q=80" }
            ].map((perk, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
                <Link to={perk.path}>
                  <div className="relative h-96 rounded-[32px] overflow-hidden border border-primary/5 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                    <img src={perk.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={perk.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <div className="w-10 h-1bg-[#C9A227] mb-4"></div>
                      <h4 className="text-2xl font-bold text-white mb-2">{perk.title}</h4>
                      <p className="text-white/60 text-sm font-bold uppercase tracking-widest">{perk.desc}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/perks">
              <Button variant="secondary" className="h-14 px-10 border-2 border-primary text-primary font-black uppercase tracking-widest hover:bg-primary/5">View All Club Perks</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Practice & Community */}
      <section className="py-24 bg-background border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn className="bg-white rounded-[40px] p-12 border border-primary/5 shadow-soft hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Structured Practice</h3>
              <p className="text-primary/60 mb-8 leading-relaxed font-medium">
                Aimless ball-beating ruins swings. Our platform builds structured, progressive drills focused strictly on your weak points.
              </p>
              <Link to="/practice" className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:translate-x-2 transition-transform">
                Explore Practice Plans <span className="text-[#C9A227]">→</span>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-white rounded-[40px] p-12 border border-primary/5 shadow-soft hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">Global Leaderboards</h3>
              <p className="text-primary/60 mb-8 leading-relaxed font-medium">
                Join challenges, compete with friends, and see how your handicap drops compared to players in your age bracket.
              </p>
              <div className="flex mt-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full bg-primary/10 border-4 border-white flex items-center justify-center text-[10px] font-black shrink-0 text-primary" style={{ marginLeft: i > 1 ? '-15px' : '0' }}>WG{i}</div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Pro Shop Preview */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-button/10 text-button rounded-full text-sm font-semibold mb-3">
              <ShoppingBag className="w-4 h-4" /> Member Perks
            </div>
            <h2 className="text-3xl font-bold text-primary mb-3">The Pro Shop</h2>
            <p className="text-primary75">Members get exclusive discounts on premium training aids, sensors, and branded apparel selected by our pros.</p>
          </div>
          <Link to="/shop" className="shrink-0">
            <Button variant="secondary" className="h-12 border-2 border-primary text-primary hover:bg-primary/5">Browse Pro Shop</Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Real Golfers. Real Results.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-background p-8 rounded-2xl shadow-sm border border-primary/5 relative">
                <Star className="text-favorite w-8 h-8 absolute top-8 right-8 fill-favorite" />
                <p className="text-primary font-medium text-lg italic mb-6">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-button text-sm font-semibold">{t.hcp}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-24 bg-background px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#004225] mb-4">Choose Your Membership Plan</h2>
            <p className="text-xl text-primary/60">Find the perfect golf membership that fits your needs and lifestyle.</p>
          </div>

          <div className="flex justify-center gap-4 mb-16">
            <button className="px-8 py-3 bg-[#004225] text-white rounded-lg font-bold">Year Round</button>
            <button className="px-8 py-3 bg-[#002B18] text-white/60 rounded-lg font-bold hover:text-white transition-colors">Summer</button>
            <button className="px-8 py-3 bg-[#002B18] text-white/60 rounded-lg font-bold hover:text-white transition-colors">Winter</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Silver Card */}
            <div className="bg-[#B8B8B8] rounded-[32px] p-1 shadow-2xl overflow-hidden relative group">
              <div className="bg-[#B8B8B8] p-10 h-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-1">2026-27 Silver Year-Round Card</h3>
                <p className="text-sm opacity-60 mb-1">2026-2027</p>
                <p className="text-xs opacity-60 mb-8">May 1, 2026 - April 30, 2027</p>
                
                <div className="w-full bg-white/90 backdrop-blur rounded-2xl p-6 mb-4 shadow-sm border border-black/5">
                  <p className="text-xl font-bold">$20/month billed once</p>
                  <p className="text-lg font-bold">annually before april 1st</p>
                </div>
                
                <div className="w-full space-y-3 opacity-30 mb-8">
                  <div className="bg-black/5 rounded-xl p-3 text-[10px] font-bold">$22/month billed once annually after april 1st</div>
                  <div className="bg-black/5 rounded-xl p-3 text-[10px] font-bold">$24/month billed once annually after may 1st</div>
                </div>

                <Button className="w-full bg-[#004225] text-white h-14 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
                  Select Plan
                </Button>
                <p className="text-[8px] mt-4 opacity-40">Membership is non-transferable. Course availability may vary. Discounts and offers are subject to participating locations.</p>
              </div>
            </div>

            {/* Gold Card */}
            <div className="bg-[#FDE08A] rounded-[32px] p-1 shadow-2xl overflow-hidden relative scale-105 z-10">
              <div className="bg-[#FDE08A] p-10 h-full flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-1">2026-27 Gold Year-Round Card</h3>
                <p className="text-sm opacity-60 mb-1">2026-2027</p>
                <p className="text-xs opacity-60 mb-8">May 1, 2026 - April 30, 2027</p>
                
                <div className="w-full bg-white/90 backdrop-blur rounded-2xl p-6 mb-4 shadow-sm border border-black/5">
                  <p className="text-xl font-bold">$25/month billed once</p>
                  <p className="text-lg font-bold">annually before april 1st</p>
                </div>
                
                <div className="w-full space-y-3 opacity-30 mb-8">
                  <div className="bg-black/5 rounded-xl p-3 text-[10px] font-bold">$27/month billed once annually after april 1st</div>
                  <div className="bg-black/5 rounded-xl p-3 text-[10px] font-bold">$29/month billed once annually after may 1st</div>
                </div>

                <Button className="w-full bg-[#004225] text-white h-14 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
                  Select Plan
                </Button>
                <p className="text-[8px] mt-4 opacity-40">Membership is non-transferable. Course availability may vary. Discounts and offers are subject to participating locations.</p>
              </div>
            </div>

            {/* Platinum Card */}
            <div className="bg-[#D28972] rounded-[32px] p-1 shadow-2xl overflow-hidden relative">
              <div className="bg-[#D28972] p-10 h-full flex flex-col items-center text-center">
                <div className="absolute top-6 right-6 bg-[#FF0000] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Best Value</div>
                <h3 className="text-2xl font-bold mb-1">2026-27 Platinum Year-Round Card</h3>
                <p className="text-sm opacity-60 mb-1">2026-2027</p>
                <p className="text-xs opacity-60 mb-8">May 1, 2026 - April 30, 2027</p>
                
                <div className="w-full bg-white/90 backdrop-blur rounded-2xl p-6 mb-4 shadow-sm border border-black/5">
                  <p className="text-xl font-bold">$30/month billed once</p>
                  <p className="text-lg font-bold">annually before april 1st</p>
                </div>
                
                <div className="w-full space-y-3 opacity-30 mb-8">
                  <div className="bg-black/5 rounded-xl p-3 text-[10px] font-bold">$32/month billed once annually after april 1st</div>
                  <div className="bg-black/5 rounded-xl p-3 text-[10px] font-bold">$34/month billed once annually after may 1st</div>
                </div>

                <Button className="w-full bg-[#004225] text-white h-14 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform">
                  Select Plan
                </Button>
                <p className="text-[8px] mt-4 opacity-40">Membership is non-transferable. Course availability may vary. Discounts and offers are subject to participating locations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Membership Features Table */}
      <section className="pb-24 bg-background px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004225] mb-4">Membership Features & Benefits:</h2>
            <p className="text-lg text-primary/40">Compare All Features</p>
          </div>

          <div className="bg-white rounded-[32px] overflow-hidden shadow-2xl border border-primary/5">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="p-6 text-sm font-bold text-primary/60 border-b border-primary/5">Features</th>
                  <th className="p-6 text-sm font-bold text-primary border-b border-primary/5 text-center">Silver</th>
                  <th className="p-6 text-sm font-bold text-primary border-b border-primary/5 text-center">Gold</th>
                  <th className="p-6 text-sm font-bold text-primary border-b border-primary/5 text-center">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/5">
                {[
                  { name: "Priority Tee Times", silver: false, gold: false, platinum: true },
                  { name: "Preferred Event Pricing – (Winter and Summer)", silver: false, gold: false, platinum: true },
                  { name: "Preferred Event Pricing – (Year-Round)", silver: false, gold: false, platinum: true },
                  { name: "Preferred Pricing for Merchandise – (Winter and Summer)", silver: false, gold: false, platinum: true },
                  { name: "Two Complimentary Rounds – (Winter and Summer)", silver: false, gold: false, platinum: true },
                  { name: "Four Complimentary Rounds – (Year-Round)", silver: false, gold: false, platinum: true },
                  { name: "One Complimentary Round – (Winter and Summer)", silver: false, gold: true, platinum: true },
                  { name: "Two Complimentary Rounds – (Year-Round)", silver: false, gold: true, platinum: true },
                  { name: "Preferred Card Rates", silver: true, gold: true, platinum: true },
                  { name: "Double Eagle Coupons", silver: true, gold: true, platinum: true },
                  { name: "Member for a Day", silver: true, gold: true, platinum: true },
                  { name: "Online Tee Time Bookings", silver: true, gold: true, platinum: true },
                  { name: "Loyalty Program", silver: true, gold: true, platinum: true },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-primary/[0.02] transition-colors">
                    <td className="p-6 text-sm font-bold text-primary/80">{row.name}</td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center">
                        {row.silver ? <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">✓</div> : <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">✕</div>}
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center">
                        {row.gold ? <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">✓</div> : <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">✕</div>}
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex justify-center">
                        {row.platinum ? <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">✓</div> : <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-700 font-bold">✕</div>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Feature Descriptions Grid */}
      <section className="pb-24 bg-background px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004225] mb-4">Feature Descriptions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Leagues and Play Days", desc: "Organized weekly leagues and curated play days that give Members regular opportunities to compete, connect, and experience great courses together." },
              { title: "Preferred Event Pricing (PEP)", desc: "Offers member on play-days, making every round more rewarding and affordable." },
              { title: "Complimentary Rounds", desc: "Enjoy one (or two) at Heritage Isles Golf & Country Club, a premier experience valued at $89, included with your membership." },
              { title: "Preferred Card Rates", desc: "Cardmembers unlock exclusive pricing with preferred rates on rounds at participating clubs." },
              { title: "Double Eagle Coupons", desc: "Offer special savings with rates even lower than standard cardmember discounts for select rounds." },
              { title: "Member for a Day", desc: "Gives access to private clubs, allowing you to experience premium courses, amenities, and member-only benefits for a single day." },
              { title: "Play-Day Participation", desc: "At premier clubs, gaining access to top-tier courses, competitive formats, and memorable social experiences." },
              { title: "Online Tee Time Bookings", desc: "Members enjoy priority booking with flexible scheduling and access to preferred rates, ensuring convenience and value every round." },
              { title: "Loyalty Program", desc: "Earn points and unlock exclusive perks through our loyalty rewards program, making every round and event more rewarding." },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-white p-8 rounded-3xl shadow-xl border border-primary/5 hover:scale-[1.02] transition-all group">
                <h4 className="text-xl font-bold text-[#004225] mb-4 group-hover:text-[#C9A227] transition-colors">{card.title}</h4>
                <p className="text-sm text-primary/60 leading-relaxed font-medium">{card.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Membership Offers */}
      <section className="pb-32 bg-background px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004225] mb-4">Featured Membership Offers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Round of Golf at Citrus National or Sugarmill Woods",
                price: "$39.00",
                type: "One Day",
                desc: "18-hole round with cart for one player at Citrus National or Sugarmill Woods Golf Club.",
                img: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80",
                badge: "Limited Offer"
              },
              { 
                title: "workshopeGolf Gift Card",
                price: "$100 - $1000",
                type: "Voucher",
                desc: "The perfect gift for any golfer. Can be used for rounds, merchandise, or lessons.",
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=600",
                badge: "Gift Ideas"
              },
              { 
                title: "April 21 Play Day at Innisbrook South",
                price: "$90.00",
                type: "One Day Event",
                desc: "4-Player Scramble, Individual Net Quota, or just play for fun at the legendary Innisbrook.",
                img: "/elite_golf_tournament_scene_1775834811761.png",
                category: "PARAIDSE PLAY DAY"
              },
              { 
                title: "May 4 Play Day at Tampa Palms",
                price: "$89.00",
                type: "One Day Event",
                desc: "Monday May 4, 2026. Join us at the beautiful Tampa Palms Golf & Country Club.",
                img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=600",
                category: "PARAIDSE PLAY DAY"
              },
              { 
                title: "May 14 Play Day at TPC Tampa Bay",
                price: "$110.00",
                type: "One Day Event",
                desc: "Tournament-level conditions at TPC Tampa Bay. Individual and Team formats available.",
                img: "https://images.unsplash.com/photo-1591491640784-3232eb748d4b?auto=format&fit=crop&q=80",
                category: "PARAIDSE PLAY DAY"
              },
              { 
                title: "May 19 Play Day at Southern Hills",
                price: "$110.00",
                type: "One Day Event",
                desc: "Experience the rolling hills and challenging greens of Southern Hills.",
                img: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80",
                category: "PARAIDSE PLAY DAY"
              }
            ].map((offer, i) => (
              <FadeIn key={i} delay={i * 0.05} className="bg-white rounded-[32px] overflow-hidden shadow-xl border border-primary/5 flex flex-col md:flex-row h-full group hover:shadow-2xl transition-all">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <img src={offer.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={offer.title} />
                  {offer.category && (
                    <div className="absolute inset-0 bg-[#004225]/80 flex items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="border-2 border-[#C9A227] p-4 text-white font-bold tracking-[0.2em] text-xs">
                        {offer.category}
                      </div>
                    </div>
                  )}
                </div>
                <div className="md:w-1/2 p-8 flex flex-col">
                  <h4 className="text-xl font-bold text-[#004225] mb-2 leading-tight">{offer.title}</h4>
                  <p className="text-xs text-primary/40 font-bold uppercase tracking-widest mb-4">{offer.type}</p>
                  <p className="text-2xl font-black text-[#004225] mb-4">{offer.price}</p>
                  <p className="text-sm text-primary/60 mb-8 font-medium line-clamp-3">{offer.desc}</p>
                  <div className="mt-auto">
                    <Button className="bg-[#C9A227] text-[#004225] font-bold px-8 py-3 rounded-lg hover:bg-[#004225] hover:text-white transition-all">
                      View Details
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="pb-24 bg-background px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#004225] mb-4">Additional Benefits</h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-primary/5 group">
              <div className="h-64 relative overflow-hidden">
                <img src="/junior_golf_elite_academy_1775834345588.png" className="absolute inset-0 w-full h-full object-cover grayscale opacity-20" alt="GHIN" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="bg-[#004225] text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mb-4">USGA GHIN</div>
                  <h3 className="text-2xl font-bold text-[#004225]">Establishing a Handicap Index</h3>
                  <p className="text-xs text-[#004225]/60 mt-2 font-medium">Anytime. Anywhere. From any set of tees.</p>
                </div>
              </div>
              <div className="p-8 text-center bg-white">
                <h4 className="text-xl font-bold text-[#004225] mb-1">GHIN Handicap Signup</h4>
                <p className="text-sm text-primary/40 font-bold mb-6">12 months starting January 1, 2026</p>
                <p className="text-3xl font-black text-[#004225] mb-8">$42.00</p>
                <Button className="w-full bg-[#C9A227] text-[#004225] font-bold h-14 rounded-xl hover:bg-[#004225] hover:text-white transition-all">
                  Select Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Access and Experience */}
      <section className="pb-32 bg-background px-4 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full overflow-hidden opacity-5 pointer-events-none">
          <img src="/luxe_clubhouse_entrance_1775834327928.png" className="w-full h-full object-cover grayscale" alt="Clubhouse" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-[#004225] mb-4">Exclusive Access and Experience</h2>
            <p className="text-lg text-primary/40 font-medium">Relationship-driven membership club with privileges and community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Leverage Technology", 
                points: ["Book rounds and track stats with our smart platform.", "Personalized insights powered by AI to elevate your game."] 
              },
              { 
                title: "Play-Day Rounds", 
                points: ["Play in exclusive tournaments at premier courses.", "Compete, connect, and enjoy a tour-level experience."] 
              },
              { 
                title: "Build Community", 
                points: ["Join a vibrant network of passionate golfers.", "Connect through leagues, events, and social play."] 
              },
              { 
                title: "Member for a Day", 
                points: ["Access private club amenities like a full member.", "Enjoy dining, practice, and play without long-term commitment."] 
              },
              { 
                title: "Loyalty Program", 
                points: ["Earn rewards every time you tee it up.", "Unlock perks, upgrades, and exclusive member offers."] 
              },
              { 
                title: "Great Deals", 
                points: ["Access preferred rates at top courses.", "Enjoy savings on rounds, gear, and experiences."] 
              }
            ].map((section, i) => (
              <FadeIn key={i} delay={i * 0.05} className="group">
                <h4 className="text-xl font-bold text-[#004225] mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-[#C9A227] rounded-full"></div>
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-4 group/item">
                      <div className="w-2 h-2 rounded-full bg-[#004225]/10 mt-1.5 group-hover/item:bg-[#C9A227] transition-colors"></div>
                      <p className="text-sm text-primary/60 font-medium leading-relaxed">{point}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Golf Course Gallery */}
      <section className="pb-32 bg-background overflow-hidden px-4">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#004225] mb-4">Golf Course Gallery</h2>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ width: "fit-content" }}
          >
            {[
              "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=600",
              "/elite_golf_tournament_scene_1775834811761.png",
              "/luxe_clubhouse_entrance_1775834327928.png",
              "https://images.unsplash.com/photo-1591491640784-3232eb748d4b?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&q=80&w=600",
              "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=600",
              "/elite_golf_tournament_scene_1775834811761.png",
              "/luxe_clubhouse_entrance_1775834327928.png",
              "https://images.unsplash.com/photo-1591491640784-3232eb748d4b?auto=format&fit=crop&q=80&w=600"
            ].map((img, i) => (
              <div key={i} className="w-[450px] h-[300px] shrink-0 rounded-[32px] overflow-hidden shadow-2xl border border-primary/5">
                <img src={img} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
              </div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-background text-center px-4 relative overflow-hidden border-t border-primary/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">Ready to drop your handicap?</h2>
          <p className="text-xl text-primary/60 mb-10 font-medium">Join thousands of golfers hitting straighter drives and making more putts using Golf AI.</p>
          <Link to="/signup">
            <Button className="bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-transform text-lg h-16 px-12 shadow-2xl rounded-full tracking-[0.1em] font-black uppercase">
              Begin Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
