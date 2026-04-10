import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { 
  Users, Clock, Trophy, MapPin, 
  Search, Filter, ChevronRight, Info 
} from 'lucide-react';

const pairings = [
  { time: '07:30 AM', hole: '1', players: ['Marcus Chen', 'David Vance', 'Sarah Miller', 'John Sterling'], hcp: ['1.2', '4.5', '2.8', '5.1'], cart: 'A-01' },
  { time: '07:45 AM', hole: '1', players: ['Robert Fox', 'Jane Cooper', 'Cameron Williamson', 'Leslie Alexander'], hcp: ['12.1', '8.4', '15.2', '9.0'], cart: 'A-02' },
  { time: '08:00 AM', hole: '1', players: ['Guy Hawkins', 'Bessie Cooper', 'Jacob Jones', 'Kristin Watson'], hcp: ['4.3', '6.7', '2.1', '5.5'], cart: 'A-03' },
  { time: '07:30 AM', hole: '10', players: ['Theresa Webb', 'Arlene McCoy', 'Eleanor Pena', 'Jerome Bell'], hcp: ['18.2', '22.1', '14.5', '19.8'], cart: 'B-01' },
  { time: '07:45 AM', hole: '10', players: ['Darlene Robertson', 'Courtney Henry', 'Albert Flores', 'Annette Black'], hcp: ['7.8', '9.1', '6.5', '8.2'], cart: 'B-02' }
];

export default function Pairings() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-32">
      <WebsiteNavbar />
      
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/elite_golf_pairings_dashboard_1775835268416.png"
            className="w-full h-full object-cover"
            alt="Pairings"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/40 to-[#004225]/90" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Trophy size={14} /> Official Tournament Pairings
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
            Pairings & <br /> Tee Times
          </h1>
          <p className="text-white/50 text-lg font-medium max-w-2xl mx-auto">
            Spring Open Championship 2026 · Round 1
          </p>
        </motion.div>
      </section>

      {/* Control Bar */}
      <div className="sticky top-[65px] bg-white border-b border-black/5 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" size={16} />
              <input 
                type="text" 
                placeholder="Find a player..." 
                className="pl-10 pr-4 py-2 bg-[#F0EFE8] border-none rounded-xl text-sm font-bold w-64 focus:ring-2 focus:ring-[#004225]/20 transition-all"
              />
            </div>
            <Button variant="outline" className="border-black/10 rounded-xl px-4 h-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
               <Filter size={14} /> Hole Filter
            </Button>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
                <div className="text-[10px] font-bold text-black/30 uppercase tracking-widest leading-none">Status</div>
                <div className="text-emerald-600 font-bold text-sm">Live Updates Active</div>
             </div>
             <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Pairings List */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {pairings.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-[32px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Time Slot */}
                <div className="md:w-48 bg-[#004225] p-8 flex flex-col justify-center items-center text-center">
                  <Clock className="text-[#C9A227] mb-2" size={24} />
                  <div className="text-white text-2xl font-bold">{group.time}</div>
                  <div className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest mt-1">Starting Hole {group.hole}</div>
                </div>

                {/* Players Grid */}
                <div className="flex-1 p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                  {group.players.map((player, j) => (
                    <div key={j} className="flex flex-col">
                      <div className="text-[10px] font-bold text-black/30 uppercase tracking-widest mb-1">Player {j+1}</div>
                      <div className="text-[#004225] font-bold text-lg mb-1">{player}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold bg-[#F0EFE8] px-2 py-0.5 rounded text-black/50 uppercase">HCP: {group.hcp[j]}</span>
                      </div>
                    </div>
                  ))}
                  
                  {/* Cart Label */}
                  <div className="absolute top-4 right-8 flex items-center gap-2">
                     <span className="text-[10px] font-bold text-black/20 uppercase tracking-widest">Cart {group.cart}</span>
                  </div>
                </div>

                {/* Action */}
                <div className="px-8 flex items-center bg-[#FAFAF7] md:bg-white">
                  <Button className="w-full md:w-auto bg-[#004225]/5 text-[#004225] hover:bg-[#004225] hover:text-white transition-all rounded-xl h-12 px-6 text-xs font-bold uppercase tracking-widest">
                    Live Score <ChevronRight size={14} className="ml-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Strip */}
      <section className="max-w-7xl mx-auto px-6">
         <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex items-start gap-6">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
               <Info size={24} className="text-white" />
            </div>
            <div>
               <h4 className="text-[#004225] font-bold text-lg mb-2">Notice to Competitors</h4>
               <p className="text-emerald-900/60 font-medium text-sm leading-relaxed">
                 Please arrive at your starting tee at least 15 minutes prior to your scheduled time. Cart assignments are final. Tournament rules and local notices are available at the starter\'s hut.
               </p>
            </div>
         </div>
      </section>
    </div>
  );
}
