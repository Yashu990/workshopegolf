import React from 'react';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, AreaChart, Area, BarChart, Bar,
  Cell
} from 'recharts';
import { 
  TrendingDown, TrendingUp, Calendar, Filter, 
  Download, Info, Sparkles, Target, Zap, Activity
} from 'lucide-react';
import { motion } from 'framer-motion';

const performanceData = [
  { day: 'Mon', score: 82, putts: 32, speed: 102 },
  { day: 'Tue', score: 85, putts: 34, speed: 104 },
  { day: 'Wed', score: 79, putts: 29, speed: 103 },
  { day: 'Thu', score: 81, putts: 31, speed: 105 },
  { day: 'Fri', score: 78, putts: 28, speed: 106 },
  { day: 'Sat', score: 83, putts: 33, speed: 104 },
  { day: 'Sun', score: 80, putts: 30, speed: 105 },
];

const breakdownData = [
  { category: 'Driving', value: 75, color: '#3B4B2A' },
  { category: 'Irons', value: 62, color: '#281A0D' },
  { category: 'Short Game', value: 88, color: '#BDBD9D' },
  { category: 'Putting', value: 45, color: '#ECE8B9' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-primary text-white p-3 rounded-xl shadow-xl border border-white/10 text-xs font-bold">
        <p className="mb-1 opacity-50 uppercase tracking-widest">{label}</p>
        <p className="text-favorite text-base">{payload[0].value} <span className="text-[10px] opacity-70">METRIC</span></p>
      </div>
    );
  }
  return null;
};

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-32">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Performance Analytics</h1>
          <p className="text-primary/60 font-medium">Deep dive into your swing mechanics and scoring trends.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="h-10 bg-card border-none shadow-sm font-bold text-xs uppercase tracking-widest">
            <Filter size={16} className="mr-2" /> Filter
          </Button>
          <Button variant="secondary" className="h-10 bg-card border-none shadow-sm font-bold text-xs uppercase tracking-widest">
            <Calendar size={16} className="mr-2" /> Oct 2023
          </Button>
          <Button className="h-10 shadow-lg shadow-button/20 font-bold text-xs uppercase tracking-widest">
            <Download size={16} className="mr-2" /> Export
          </Button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-primary/10">
        <img src="/images/golf_analytics_charts_1775826232738.png" alt="Analytics Overview" className="w-full h-64 object-cover" />
      </div>

      {/* Insight Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-favorite border border-button/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="w-14 h-14 bg-button text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
          <Sparkles size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary mb-1">AI Performance Summary</h3>
          <p className="text-primary/70 font-medium text-sm leading-relaxed">
            Your swing path has moved <span className="text-button font-bold">2.5° more inside-to-out</span> this month, resulting in a 12-yard increase in average carry distance. However, center-face contact is down 4%. Focus on your impact drills today.
          </p>
        </div>
        <Button variant="secondary" className="h-10 px-6 border-button text-button font-bold text-xs uppercase tracking-widest shrink-0">
          View Drill Plan
        </Button>
      </motion.div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <Card className="lg:col-span-8 p-0 overflow-hidden border-none shadow-soft">
          <CardHeader className="p-8 pb-0">
            <div>
              <CardTitle className="text-xl">Scoring & Consistency</CardTitle>
              <p className="text-primary/40 text-xs font-bold uppercase tracking-widest mt-1">Average: 80.2 (+8.2)</p>
            </div>
            <div className="flex gap-1 bg-primary/5 p-1 rounded-lg">
              <button className="px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-md bg-white shadow-sm text-primary">Score</button>
              <button className="px-3 py-1.5 text-[10px] font-black uppercase tracking-tighter rounded-md text-primary/40">Speed</button>
            </div>
          </CardHeader>
          <div className="px-4 py-8 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B4B2A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B4B2A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#281A0D', opacity: 0.3 }} 
                  dy={15}
                />
                <YAxis 
                  hide 
                  domain={['dataMin - 5', 'dataMax + 5']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3B4B2A" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorScore)" 
                  dot={{ r: 6, fill: '#fff', stroke: '#3B4B2A', strokeWidth: 3 }}
                  activeDot={{ r: 8, strokeWidth: 0, fill: '#281A0D' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="lg:col-span-4 p-8 border-none shadow-soft flex flex-col">
          <CardTitle className="text-xl mb-6">Game Breakdown</CardTitle>
          <div className="flex-1 space-y-6">
            {breakdownData.map((item, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-sm font-bold text-primary">{item.category}</span>
                  <span className="text-xs font-black text-primary/40 uppercase tracking-widest">{item.value}%</span>
                </div>
                <div className="w-full h-3 bg-primary/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-primary/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
              <span className="text-xs font-bold text-primary/60 italic">Trending Up Overall</span>
            </div>
            <Info size={16} className="text-primary/20" />
          </div>
        </Card>

      </div>

      {/* Metric Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-none shadow-soft hover:translate-y-[-4px] transition-transform">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-button/10 text-button rounded-2xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary">Fairway Accuracy</h4>
              <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Top 15% of HCP</p>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-black text-primary">72.4%</span>
            <span className="text-xs font-bold text-green-500 mb-1">+4.2% VS LY</span>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-soft hover:translate-y-[-4px] transition-transform">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-2xl flex items-center justify-center">
              <Activity size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary">GIR Percentage</h4>
              <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">Main Improvement Area</p>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-black text-primary">48.1%</span>
            <span className="text-xs font-bold text-button mb-1">-2.0% VS LY</span>
          </div>
        </Card>

        <Card className="p-6 border-none shadow-soft hover:translate-y-[-4px] transition-transform">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-favorite/50 text-primary rounded-2xl flex items-center justify-center">
              <Zap size={24} />
            </div>
            <div>
              <h4 className="font-bold text-primary">Peak Ball Speed</h4>
              <p className="text-[10px] font-black text-primary/30 uppercase tracking-widest">New Personal Best</p>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <span className="text-3xl font-black text-primary">158.4 <span className="text-xs opacity-40">MPH</span></span>
            <span className="text-xs font-bold text-green-500 mb-1">+8.5 VS LY</span>
          </div>
        </Card>
      </div>

    </div>
  );
}
