import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { 
  Trophy, Users, Calendar, ArrowRight, 
  TrendingUp, Award, Shield, CheckCircle 
} from 'lucide-react';

const leagueStandings = [
  { rank: 1, name: 'Emerald Eagles', played: 12, won: 9, drawn: 2, points: 29 },
  { rank: 2, name: 'Fairway Phantoms', played: 12, won: 8, drawn: 3, points: 27 },
  { rank: 3, name: 'Clubhouse Kings', played: 12, won: 7, drawn: 4, points: 25 },
  { rank: 4, name: 'Bunker Bandits', played: 12, won: 6, drawn: 3, points: 21 },
  { rank: 5, name: 'Par-Tee Players', played: 12, won: 5, drawn: 2, points: 17 }
];

export default function Leagues() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-32">
      <WebsiteNavbar />
      
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/elite_golf_league_trophy_1775835502103.png"
            className="w-full h-full object-cover"
            alt="Leagues"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/80 via-[#004225]/40 to-[#004225]/90" />
        </div>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <Award size={14} /> Seasonal Competition
          </div>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter uppercase leading-none mb-6">
            Leagues & <br /> Standings
          </h1>
          <p className="text-white/60 text-lg font-medium max-w-2xl mx-auto">
            The ultimate test of consistency and camaraderie. Join a league and engrave your name in club history.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 space-y-24 pt-24">
        
        {/* Active Leagues */}
        <section>
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-[#004225] uppercase tracking-tight">Active Leagues</h2>
              <p className="text-black/40 font-medium italic">New season commencing Sept 2026</p>
            </div>
            <Button className="bg-[#004225] text-white hover:bg-[#C9A227] hover:text-[#004225] transition-all rounded-xl h-12 px-8 font-bold uppercase tracking-widest text-xs">
               Registration Portal <ArrowRight size={14} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'The Executive 18', type: 'Men\'s Scratch', spots: 'Limited', img: '/mens_scratch_league_golf_1775835643924.png' },
              { title: 'The Emerald Ladies', type: 'Women\'s Handicap', spots: 'Open', img: '/womens_golf_league_smiles_1775835667819.png' },
              { title: 'Masters Over 50', type: 'Seniors League', spots: 'Waitlist', img: '/senior_golf_league_sunset_1775835693170.png' }
            ].map((league, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[40px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="h-48 relative">
                   <img src={league.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={league.title} />
                   <div className="absolute inset-0 bg-black/20" />
                   <div className="absolute top-6 left-6 flex gap-2">
                      <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20">
                        {league.type}
                      </span>
                   </div>
                </div>
                <div className="p-8">
                   <h3 className="text-2xl font-bold text-[#004225] mb-4 uppercase">{league.title}</h3>
                   <div className="space-y-3 mb-8">
                      <div className="flex items-center justify-between text-black/50 text-sm font-medium">
                         <span>Status</span>
                         <span className="text-emerald-600 font-bold">{league.spots}</span>
                      </div>
                      <div className="flex items-center justify-between text-black/50 text-sm font-medium">
                         <span>Match Day</span>
                         <span className="text-black/80 font-bold">Every Tuesday</span>
                      </div>
                   </div>
                   <Button className="w-full bg-[#FAFAF7] border border-black/5 text-[#004225] hover:bg-[#004225] hover:text-white transition-all rounded-2xl h-12 font-bold uppercase tracking-widest text-xs">
                      View Details
                   </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Standings */}
        <section className="bg-white rounded-[48px] p-12 shadow-sm border border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
             <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#C9A227]/10 text-[#C9A227] rounded-3xl flex items-center justify-center">
                   <Trophy size={32} />
                </div>
                <div>
                   <h2 className="text-3xl font-bold text-[#004225] uppercase tracking-tight">Main League Standings</h2>
                   <p className="text-black/40 font-medium">Updated live after every round</p>
                </div>
             </div>
             <div className="flex bg-[#FAFAF7] p-1 rounded-2xl">
                <button className="px-6 py-2 bg-white rounded-xl shadow-sm text-[#004225] font-bold text-xs uppercase tracking-widest">Team</button>
                <button className="px-6 py-2 text-black/40 font-bold text-xs uppercase tracking-widest">Individual</button>
             </div>
          </div>

          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead>
                   <tr className="border-b border-black/5">
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Rank</th>
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Team Name</th>
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Played</th>
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Won</th>
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Drawn</th>
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Points</th>
                      <th className="pb-6 text-black/30 font-bold uppercase text-[10px] tracking-widest">Trend</th>
                   </tr>
                </thead>
                <tbody>
                   {leagueStandings.map((team, i) => (
                      <tr key={i} className="group hover:bg-[#FAFAF7] transition-colors border-b border-black/5 last:border-none">
                         <td className="py-6 font-bold text-[#004225]">#{team.rank}</td>
                         <td className="py-6 font-bold text-[#004225] flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#004225]/5 flex items-center justify-center text-[#004225]">
                               <Shield size={16} />
                            </div>
                            {team.name}
                         </td>
                         <td className="py-6 text-black/60 font-medium text-sm">{team.played}</td>
                         <td className="py-6 text-black/60 font-medium text-sm">{team.won}</td>
                         <td className="py-6 text-black/60 font-medium text-sm">{team.drawn}</td>
                         <td className="py-6 font-bold text-[#004225]">{team.points}</td>
                         <td className="py-6">
                            <TrendingUp className="text-emerald-500" size={18} />
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
        </section>

        {/* Benefits Strip */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
           {[
             { icon: CheckCircle, title: 'Official GHG Handicap', desc: 'All league rounds contribute to your official handicap.' },
             { icon: Users, title: 'Team Networking', desc: 'Meet fellow members through structured competitive play.' },
             { icon: Calendar, title: 'Fixed Schedule', desc: 'Know when you play. Our Tuesday/Thursday slots are guaranteed.' },
             { icon: Award, title: 'Quarterly Prizes', desc: 'Top teams receive Pro Shop credit and seasonal trophies.' }
           ].map((item, i) => (
             <div key={i} className="space-y-4">
                <item.icon className="text-[#C9A227]" size={28} />
                <h4 className="font-bold text-[#004225] uppercase tracking-tight text-lg">{item.title}</h4>
                <p className="text-black/50 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </section>

      </div>
    </div>
  );
}
