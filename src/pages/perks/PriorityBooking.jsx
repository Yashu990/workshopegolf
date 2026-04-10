import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Clock, Calendar, Shield, MousePointerClick, Star } from 'lucide-react';

export default function PriorityBooking() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Professional Hero Banner */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/luxe_clubhouse_entrance_1775834327928.png"
            className="w-full h-full object-cover"
            alt="Priority Booking Banner"
          />
          <div className="absolute inset-0 bg-[#004225]/85" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <Clock size={48} className="mx-auto text-[#C9A227] mb-8" />
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-8 uppercase leading-none">
            Priority <br /> Tee Times
          </h1>
          <div className="h-1.5 w-24 bg-[#C9A227] mx-auto mb-8" />
          <p className="text-lg text-white/50 font-medium max-w-2xl mx-auto">
            Secure the most coveted windows 72 hours before the public.
          </p>
        </motion.div>
      </section>

      {/* Benefits Content */}
      <section className="max-w-7xl mx-auto py-24 px-6 flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/2">
           <h2 className="text-4xl md:text-5xl font-black text-[#004225] uppercase tracking-tighter mb-8">Beat the Public <br /> to the Green</h2>
           <p className="text-lg text-black/60 font-medium leading-relaxed mb-12">
             As a premium member, the calendar opens for you long before anyone else. This ensures you can plan your golf around your life, not the other way around.
           </p>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
             <div className="flex flex-col gap-3">
               <Calendar size={28} className="text-[#C9A227]" />
               <h4 className="font-black text-[#004225] uppercase text-sm tracking-widest">Early Access</h4>
               <p className="text-sm text-black/50 font-medium">Standard bookings open 7 days out. Members book 10 days out.</p>
             </div>
             <div className="flex flex-col gap-3">
               <Shield size={28} className="text-[#C9A227]" />
               <h4 className="font-black text-[#004225] uppercase text-sm tracking-widest">Reserved Slots</h4>
               <p className="text-sm text-black/50 font-medium">Weekend peak hours (7AM-9AM) are reserved exclusively for members.</p>
             </div>
             <div className="flex flex-col gap-3">
               <MousePointerClick size={28} className="text-[#C9A227]" />
               <h4 className="font-black text-[#004225] uppercase text-sm tracking-widest">One-Tap Booking</h4>
               <p className="text-sm text-black/50 font-medium">Store your regular pairings and book with a single click in the app.</p>
             </div>
             <div className="flex flex-col gap-3">
               <Star size={28} className="text-[#C9A227]" />
               <h4 className="font-black text-[#004225] uppercase text-sm tracking-widest">Priority Waitlist</h4>
               <p className="text-sm text-black/50 font-medium">Automatically offered slots when cancellations occur in high-demand times.</p>
             </div>
           </div>
           
           <Button className="bg-[#004225] text-white h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl">
              Open Booking Calendar
           </Button>
        </div>
        <div className="lg:w-1/2 w-full">
           <div className="bg-white rounded-[48px] p-10 shadow-2xl border border-black/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8">
               <span className="bg-[#C9A227] text-[#004225] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Premium Benefit</span>
             </div>
             <h3 className="text-2xl font-black text-[#004225] mb-8 uppercase tracking-tight">Available Priority Slots</h3>
             <div className="space-y-4">
               {[
                 { day: 'Friday Apr 24', time: '7:30 AM', status: 'Priority Only' },
                 { day: 'Friday Apr 24', time: '8:45 AM', status: 'Priority Only' },
                 { day: 'Saturday Apr 25', time: '6:15 AM', status: 'Limited' },
                 { day: 'Saturday Apr 25', time: '7:45 AM', status: 'Priority Only' },
                 { day: 'Sunday Apr 26', time: '7:00 AM', status: 'Priority Only' }
               ].map((slot, i) => (
                 <div key={i} className="flex items-center justify-between p-5 bg-[#F0EFE8] rounded-2xl hover:bg-[#004225] hover:text-white transition-all group cursor-pointer">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-60">{slot.day}</div>
                      <div className="text-lg font-black">{slot.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A227]">{slot.status}</div>
                      <Button className="h-8 px-4 bg-[#004225] text-white rounded-lg text-[10px] font-black mt-2 opacity-0 group-hover:opacity-100 group-hover:bg-[#C9A227] group-hover:text-[#004225] transition-all">Book</Button>
                    </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* FAQ Strip */}
      <section className="bg-[#004225] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-white text-xl font-black uppercase tracking-widest">Have questions about member booking?</h3>
          <Button variant="outline" className="text-white border-white/20 h-14 px-10 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white/10">Read Booking Rules</Button>
        </div>
      </section>
    </div>
  );
}
