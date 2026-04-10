import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { useRouter } from 'next/router';
import { ArrowLeft, MapPin, Calendar, Users, Trophy } from 'lucide-react';

export default function SubPage() {
  const router = useRouter();
  const { category, sub } = router.query;

  // Formatting title
  const title = sub ? sub.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : "Page Not Found";
  const parentCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";

  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Dynamic Header */}
      <section className="bg-white py-20 px-6 border-b border-black/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <Link href={`/${category}`} className="inline-flex items-center gap-2 text-[#C9A227] font-black uppercase text-[12px] tracking-widest mb-8 hover:text-[#004225] transition-colors">
            <ArrowLeft size={16} /> Back to {parentCategory}
          </Link>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <h1 className="text-5xl md:text-8xl font-black text-[#004225] tracking-tighter mb-6 uppercase leading-none">
              {title}
            </h1>
            <p className="text-black/40 text-lg md:text-xl font-bold max-w-2xl mx-auto uppercase">
              Official guide & deep-dive into {title} at WorkshopeGolf.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Placeholder */}
      <section className="max-w-4xl mx-auto py-32 px-6">
        <div className="bg-white p-12 rounded-[50px] shadow-soft border border-black/5">
            <h2 className="text-3xl font-black text-[#004225] mb-8 uppercase tracking-tight">Overview</h2>
            <div className="prose prose-lg text-black/60 font-medium leading-relaxed max-w-none">
                <p className="mb-8">
                    Welcome to the specialized section for <strong>{title}</strong>. This area contains all relevant information, digital resources, and physical scheduling details for this specific category within our golf community. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
                    <div className="p-8 bg-[#004225]/5 rounded-3xl border border-[#004225]/10">
                        <Users size={32} className="text-[#004225] mb-4" />
                        <h4 className="font-black text-[#004225] uppercase text-sm mb-2">Member Eligibility</h4>
                        <p className="text-sm">Available to all Regular and Young Executive members. Priority booking enabled.</p>
                    </div>
                    <div className="p-8 bg-[#C9A227]/5 rounded-3xl border border-[#C9A227]/10">
                        <Calendar size={32} className="text-[#C9A227] mb-4" />
                        <h4 className="font-black text-[#C9A227] uppercase text-sm mb-2">Seasonal Window</h4>
                        <p className="text-sm">Currently active for the 2026 season. Check the specific calendar for peak hours.</p>
                    </div>
                </div>
                <p>
                    For more specific inquiries regarding <strong>{title}</strong>, please contact our community concierge or use the digital portal to manage your bookings and analysis data.
                </p>
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-[#004225] text-center px-6 mt-20">
          <div className="max-w-3xl mx-auto">
              <Trophy size={48} className="mx-auto text-[#C9A227] mb-8" />
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8 tracking-tight">Access Restricted to Members</h2>
              <p className="text-white/60 text-lg mb-12">Full analysis and high-definition content for this section are only available to registered WorkshopeGolf members.</p>
              <Link href="/signup">
                  <Button className="bg-[#C9A227] text-[#004225] h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl">
                      Start Your Journey
                  </Button>
              </Link>
          </div>
      </section>
    </div>
  );
}
