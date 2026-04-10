import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'next/router';
import { ArrowLeft, Play, Lock, BrainCircuit, Users, Trophy, Target, Sparkles, Activity } from 'lucide-react';

export default function SubPage() {
  const router = useRouter();
  const { category, sub } = router.query;

  // Formatting title
  const title = sub ? sub.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Page Not Found";
  const parentCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

  // Content configurations for different tags
  const getSubContent = () => {
    if (sub?.includes('courses')) {
      return {
        tag: "Course Architecture",
        desc: `Everything you need to master the mechanical flow of ${title}.`,
        icon: Target,
        features: [
          { title: "Fairway Strategies", desc: "Optimal landing zones and club selection for championship play." },
          { title: "Green Analysis", desc: "Detailed undulation maps and grain direction for every hole." }
        ],
        heroImg: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
      };
    }
    if (sub?.includes('membership')) {
        return {
          tag: "The Inner Circle",
          desc: `Unlock the full technical potential of your ${title} status.`,
          icon: Trophy,
          features: [
            { title: "Priority Booking", desc: "Skip the queue with automated weekend tee-time reservations." },
            { title: "Vault Access", desc: "Full library of member-only tutorials and analysis archives." }
          ],
          heroImg: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2070&auto=format&fit=crop"
        };
    }
    if (sub?.includes('junior') || sub?.includes('live') || sub?.includes('videos')) {
        return {
          tag: "Digital Advantages",
          desc: `High-definition coaching and interactive resources for ${title}.`,
          icon: BrainCircuit,
          features: [
            { title: "Expert Coaching", desc: "Top-tier pro instructions tailored to this specific program." },
            { title: "Progressive Learning", desc: "Curated curriculum designed to build your skills step-by-step." }
          ],
          heroImg: "https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=2076&auto=format&fit=crop"
        };
    }
    return {
        tag: "Exclusive Program",
        desc: `Detailed scheduling and resource breakdown for ${title}.`,
        icon: Activity,
        features: [
          { title: "Live Updates", desc: "Real-time notifications for scheduling changes and pairings." },
          { title: "Performance Tracking", desc: "Sync your results directly with your master dashboard." }
        ],
        heroImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
    };
  };

  const content = getSubContent();

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* 1. Dynamic Hero Header */}
      <section className="bg-[#004225] py-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
            <img src={content.heroImg} className="w-full h-full object-cover grayscale brightness-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#004225]/80 to-[#004225]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href={`/${category}`} className="inline-flex items-center gap-3 text-[#C9A227] font-black uppercase text-[13px] tracking-[0.2em] mb-12 hover:translate-x-[-10px] transition-all group">
            <ArrowLeft size={18} className="group-hover:text-white" /> Access {parentCategory}
          </Link>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#C9A227] text-[#004225] px-6 py-2 rounded-full text-[12px] font-black uppercase tracking-widest mb-10 inline-block shadow-2xl">
              {content.tag}
            </div>
            <h1 className="text-6xl md:text-[120px] font-black text-white tracking-tighter mb-8 uppercase leading-none drop-shadow-2xl">
              {title}
            </h1>
            <p className="text-[#C9A227] text-xl font-bold max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              {content.desc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Deep Dive Content Section */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
                <h2 className="text-4xl font-black text-[#004225] mb-8 uppercase tracking-tight leading-none">
                    Strategic <br /> Overview
                </h2>
                <div className="prose prose-xl text-black/60 font-medium leading-relaxed mb-12">
                    <p>
                        Mastering <strong>{title}</strong> requires a combination of technical precision and community engagement. At WorkshopeGolf, we provide the specific tools, professional insights, and physical space needed to excel in this area.
                    </p>
                </div>
                <div className="space-y-12">
                    {content.features.map((feature, i) => (
                        <div key={i} className="flex gap-8 group">
                            <div className="w-16 h-16 bg-[#004225] rounded-2xl flex items-center justify-center shrink-0 text-[#C9A227] group-hover:scale-110 transition-transform shadow-xl">
                                <content.icon size={28} />
                            </div>
                            <div>
                                <h4 className="text-2xl font-black text-[#004225] uppercase mb-2">{feature.title}</h4>
                                <p className="text-black/50 text-lg leading-relaxed font-bold">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className="bg-[#F8F7F2] rounded-[60px] p-12 lg:p-20 relative overflow-hidden border border-black/5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/10 rounded-bl-full"></div>
                    <Sparkles className="text-[#C9A227] mb-12 w-16 h-16" />
                    <h3 className="text-3xl font-black text-[#004225] uppercase tracking-tight mb-8">Member Advantages</h3>
                    <ul className="space-y-6">
                        {['72-Hour Priority Booking', 'Pro-Tag Video Analysis', 'Exclusive League Points', 'Equipment Discounts'].map((perk, i) => (
                            <li key={i} className="flex items-center gap-6 text-[#004225] font-black uppercase text-sm tracking-widest pb-6 border-b border-black/5 last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-[#C9A227]"></div>
                                {perk}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Secondary Visual Card */}
                <div className="mt-8 bg-[#004225] rounded-[40px] p-10 flex items-center justify-between shadow-2xl relative overflow-hidden group">
                    <div className="relative z-10">
                        <h4 className="text-white font-black uppercase text-xl mb-2">Watch Review</h4>
                        <p className="text-[#C9A227] font-bold uppercase text-xs tracking-widest">PGA Professional Breakdown</p>
                    </div>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                        <Play size={24} className="text-[#004225] ml-1" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Locking CTA */}
      <section className="py-40 bg-white text-center px-6 border-t border-black/5 relative">
          <div className="max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-[#F8F7F2] rounded-full flex items-center justify-center mx-auto mb-10 shadow-inner">
                  <Lock size={32} className="text-[#C9A227]" />
              </div>
              <h2 className="text-4xl md:text-7xl font-black text-[#004225] uppercase tracking-tighter mb-10 leading-none">
                  Full Access <br /> Restricted
              </h2>
              <p className="text-black/40 text-xl font-bold mb-16 uppercase tracking-widest">You are currently viewing the guest overview. Log in to access the full analysis engine and booking portal.</p>
              <div className="flex flex-wrap justify-center gap-8">
                  <Link href="/signup">
                      <Button className="bg-[#004225] text-white h-20 px-16 rounded-3xl font-black uppercase tracking-[0.2em] shadow-2xl hover:bg-[#C9A227] hover:text-[#004225] transition-all">
                          Join The Club
                      </Button>
                  </Link>
                  <Link href="/login">
                      <Button variant="secondary" className="h-20 px-16 border-4 border-[#004225] text-[#004225] rounded-3xl font-black uppercase tracking-[0.2em] hover:bg-[#004225] hover:text-white transition-all">
                          Member Login
                      </Button>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
}
