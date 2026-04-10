import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  PlayCircle, Target, Video, ArrowRight, Zap, 
  TrendingDown, TrendingUp, Calendar, ChevronRight,
  MoreVertical, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

const StatCard = ({ title, value, change, trend, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
  >
    <Card className="p-5 hover:shadow-md transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-button group-hover:text-white transition-colors duration-300">
          <Icon size={20} />
        </div>
        <button className="text-primary/30 hover:text-primary">
          <MoreVertical size={18} />
        </button>
      </div>
      <div>
        <p className="text-sm font-medium text-primary/60 mb-1">{title}</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-2xl font-bold text-primary">{value}</h4>
          <span className={cn(
            "text-xs font-bold flex items-center gap-0.5",
            trend === 'up' ? "text-green-500" : "text-button"
          )}>
            {trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {change}
          </span>
        </div>
      </div>
    </Card>
  </motion.div>
);

import { cn } from '../components/ui/Button';

export default function Dashboard() {
  const { user } = useStore();

  const recentSessions = [
    { id: 1, title: 'Iron Tempo Session', date: 'Oct 12, 2023', duration: '45 mins', accuracy: '82%', type: 'Range' },
    { id: 2, title: 'Putting Practice', date: 'Oct 10, 2023', duration: '30 mins', accuracy: '91%', type: 'Green' },
    { id: 3, title: '9-Hole Sim Round', date: 'Oct 08, 2023', duration: '1.2 hrs', accuracy: '74%', type: 'Sim' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-32">
      
      {/* Header & Quick Stats */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Welcome back, {user.name}</h1>
          <p className="text-primary/60 mt-1 font-medium flex items-center gap-2">
            <Calendar size={16} /> Week 12 of your Improvement Plan
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="bg-card border-none shadow-sm h-10 px-4">
            <Clock size={18} className="mr-2" /> Log Activity
          </Button>
          <Link to="/practice">
            <Button className="h-10 px-6 shadow-lg shadow-button/20">
              <Zap size={18} className="mr-2" /> Start Practice
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-primary/10">
        <img src="/images/golfer_dashboard_ui_1775826416450.png" alt="Golfer Dashboard Overview" className="w-full h-48 md:h-72 object-cover object-top" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Handicap Index" value="14.2" change="-0.8" trend="down" icon={Target} delay={0.1} />
        <StatCard title="Avg Swing Speed" value="103.4" change="+2.1" trend="up" icon={TrendingUp} delay={0.2} />
        <StatCard title="Fairways Hit" value="68%" change="+5%" trend="up" icon={Zap} delay={0.3} />
        <StatCard title="Avg Putts" value="31.2" change="-1.2" trend="down" icon={TrendingDown} delay={0.4} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main Focus & AI Analysis Card */}
        <div className="lg:col-span-8 space-y-6">
          <Card className="overflow-hidden border-none bg-primary text-white p-0">
            <div className="flex flex-col md:flex-row h-full">
              <div className="flex-1 p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-favorite text-xs font-bold uppercase tracking-wider mb-6">
                  <Zap size={14} /> Current AI Focus
                </div>
                <h2 className="text-3xl font-bold mb-4">Fixing the Early Extension</h2>
                <p className="text-white/70 mb-8 leading-relaxed max-w-md">
                  Your last 5 sessions show a pivot stall leading to early extension. We've updated your drills to focus on hip depth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/ai">
                    <Button className="bg-favorite text-primary hover:bg-favorite/90 border-none font-bold">Review Analysis</Button>
                  </Link>
                  <Button variant="secondary" className="border-white/20 text-white hover:bg-white/10">3 Recommended Drills</Button>
                </div>
              </div>
              <div className="w-full md:w-72 bg-gradient-to-br from-button to-primary flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full border-4 border-favorite flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl font-black">82</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">Swing Quality Score</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-0 overflow-hidden">
            <CardHeader className="p-6 pb-0">
              <CardTitle className="text-xl">Weekly Progress</CardTitle>
              <Button variant="secondary" className="h-8 text-xs border-none bg-primary/5">Last 7 Days</Button>
            </CardHeader>
            <div className="px-6 py-10 h-64 flex items-end justify-between gap-1 overflow-hidden">
              {[45, 60, 25, 80, 55, 95, 40].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 0.5 + (i * 0.05), duration: 0.8 }}
                  className="w-full bg-gradient-to-t from-button to-[#556b2f] rounded-t-lg relative group cursor-pointer"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}m
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="px-6 pb-6 flex justify-between text-[10px] font-bold text-primary/30 uppercase tracking-widest">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </Card>
        </div>

        {/* Recent Activity Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <Card className="h-full">
            <CardHeader className="mb-6">
              <CardTitle className="text-xl">Recent Activity</CardTitle>
              <Link to="/analytics" className="text-button text-sm font-bold flex items-center hover:underline">
                View All <ChevronRight size={16} />
              </Link>
            </CardHeader>
            <div className="space-y-6">
              {recentSessions.map((session, i) => (
                <div key={session.id} className="flex gap-4 group cursor-pointer">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110",
                    session.type === 'Range' ? "bg-button/10 text-button" : 
                    session.type === 'Green' ? "bg-favorite/30 text-primary" : "bg-primary/10 text-primary"
                  )}>
                    {session.type === 'Range' ? <Target size={20} /> : 
                     session.type === 'Green' ? <Zap size={20} /> : <Video size={20} />}
                  </div>
                  <div className="flex-1 border-b border-primary/5 pb-4">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="font-bold text-primary leading-none">{session.title}</h5>
                      <span className="text-[10px] font-bold text-green-600 bg-green-100 px-1.5 py-0.5 rounded uppercase">{session.accuracy}</span>
                    </div>
                    <div className="flex justify-between text-xs text-primary/40 font-medium">
                      <span>{session.date}</span>
                      <span>{session.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Card className="bg-favorite/30 border-none p-5">
                <h5 className="font-bold text-primary mb-2 flex items-center gap-2">
                  <Zap size={16} className="text-button" /> Goal Status
                </h5>
                <p className="text-sm text-primary/70 mb-4 font-medium">You're 3 sessions away from hitting your monthly goal!</p>
                <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-button h-full w-[70%]"></div>
                </div>
                <div className="mt-2 text-[10px] font-black text-primary/40 uppercase text-right">7/10 SESSIONS</div>
              </Card>
            </div>
          </Card>
        </div>

      </div>
    </div>
  );
}
