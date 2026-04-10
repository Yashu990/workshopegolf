import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Card, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { 
  CheckCircle, Circle, Plus, Sparkles, 
  Clock, Flame, Target, ChevronRight,
  Play, Info, ListTodo, Trophy
} from 'lucide-react';
import { cn } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Practice() {
  const { tasks, toggleTask, addTask } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const dailyMissions = [
    { title: 'Tempo Mastery', color: 'bg-button', icon: Flame, progress: 60 },
    { title: 'Short Game King', color: 'bg-favorite text-primary', icon: Target, progress: 30 },
  ];

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      addTask({ id: Date.now(), title: newTaskTitle, completed: false });
      setNewTaskTitle('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-32">
      {/* Premium Hero Banner */}
      <section className="relative h-[25vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-8">
        <div className="absolute inset-0">
          <img
            src="/ai_training_bay_elite_1775834782760.png"
            className="w-full h-full object-cover"
            alt="Practice Lab"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004225]/90 via-[#004225]/40 to-transparent" />
        </div>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Target size={12} /> High Performance Center
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
            Practice <br /> Laboratory
          </h1>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/5 pb-8">
          <div>
            <h2 className="text-2xl font-bold text-primary tracking-tight uppercase">Active Curriculum</h2>
            <p className="text-primary/60 font-medium">Turn data into muscle memory with structured drills.</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="shadow-lg shadow-button/20 h-11 px-6 bg-primary text-white hover:bg-[#C9A227] hover:text-[#004225] transition-all">
            <Plus size={20} className="mr-2" /> Create Custom Drill
          </Button>
        </div>

      {/* Daily Missions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dailyMissions.map((mission, i) => (
          <Card key={i} className={cn("p-6 border-none overflow-hidden relative", mission.color === 'bg-button' ? "text-white" : "text-primary")}>
             <div className="relative z-10 flex justify-between items-start">
               <div>
                 <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-4 opacity-70">
                   <Trophy size={14} /> Daily Mission
                 </div>
                 <h3 className="text-2xl font-black mb-2">{mission.title}</h3>
                 <p className={cn("text-sm font-medium mb-6", mission.color === 'bg-button' ? "text-white/70" : "text-primary/60")}>Complete 3 sessions of tempo drills.</p>
                 <div className="flex items-center gap-4">
                    <Button className={cn("h-9 px-4 text-xs font-bold uppercase tracking-wider", mission.color === 'bg-button' ? "bg-white text-button hover:bg-white/90" : "bg-primary text-white")}>
                      Continue <Play size={14} className="ml-2 fill-current" />
                    </Button>
                    <span className="text-xs font-black opacity-40">{mission.progress}% COMPLETE</span>
                 </div>
               </div>
               <mission.icon size={80} className="opacity-10 absolute -right-4 -bottom-4 translate-y-4" />
             </div>
             <div className="absolute bottom-0 left-0 h-1 bg-black/10 w-full">
               <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${mission.progress}%` }}
                className="h-full bg-favorite" 
               />
             </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Active Checklist */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-8 border-none shadow-soft">
            <CardHeader className="mb-6">
              <CardTitle className="text-xl flex items-center gap-3">
                <ListTodo className="text-button" /> Active Training List
              </CardTitle>
              <div className="text-xs font-bold text-primary/30 uppercase tracking-widest">
                {tasks.filter(t => t.completed).length}/{tasks.length} Completed
              </div>
            </CardHeader>
            <div className="space-y-4">
              <AnimatePresence mode="popLayout">
                {tasks.map((task, i) => (
                  <motion.div 
                    key={task.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => toggleTask(task.id)}
                    className={cn(
                      "group flex items-center justify-between p-5 rounded-2xl border transition-all cursor-pointer",
                      task.completed 
                        ? "bg-primary text-white border-primary" 
                        : "bg-white border-primary/5 hover:border-button/40 hover:shadow-md"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      {task.completed ? (
                        <div className="w-8 h-8 rounded-full bg-button text-white flex items-center justify-center">
                          <CheckCircle size={20} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full border-2 border-primary/10 group-hover:border-button/40 flex items-center justify-center transition-colors">
                          <Circle size={20} className="opacity-0 group-hover:opacity-100 text-button transition-opacity" />
                        </div>
                      )}
                      <div>
                        <span className={cn("font-bold block tracking-tight", task.completed && "opacity-50")}>
                          {task.title}
                        </span>
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", task.completed ? "text-white/40" : "text-primary/20")}>
                          15 Mins • High Intensity
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={cn("opacity-0 group-hover:opacity-100 transition-opacity", task.completed ? "text-white/20" : "text-primary/20")} size={18} />
                  </motion.div>
                ))}
              </AnimatePresence>
              {tasks.length === 0 && (
                <div className="text-center py-12 bg-primary/5 rounded-3xl border-2 border-dashed border-primary/10">
                  <p className="text-primary/40 font-bold italic">No drills scheduled. Let AI build you a plan.</p>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* AI Recommendations Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-8 border-none bg-primary text-white overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-favorite rounded-xl flex items-center justify-center shadow-lg shadow-favorite/20">
                  <Sparkles size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Recommendations</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'The Hip Depth Drill', time: '10m', type: 'Mechanics' },
                  { title: 'Towel Impact Drill', time: '15m', type: 'Ball Striking' },
                  { title: 'Lag Putting Ladder', time: '20m', type: 'Finesse' },
                ].map((s, i) => (
                  <div key={i} className="p-4 bg-white/10 rounded-2xl border border-white/5 group hover:bg-white/20 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="text-[10px] font-black text-favorite uppercase tracking-widest mb-1">{s.type}</div>
                        <h4 className="font-bold text-base leading-none">{s.title}</h4>
                      </div>
                      <span className="text-[10px] font-bold text-white/40 border border-white/10 px-1.5 py-0.5 rounded uppercase">{s.time}</span>
                    </div>
                    <Button 
                      onClick={() => addTask({ id: Date.now() + i, title: s.title, completed: false })}
                      className="w-full h-9 bg-white text-primary border-none text-xs font-bold uppercase tracking-wider mt-2 group-hover:bg-favorite group-hover:scale-[1.02] transition-all"
                    >
                      Add to Plan
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-button blur-[80px] opacity-30"></div>
          </Card>

          <Card className="p-6 border-none bg-favorite/20 shadow-none">
             <div className="flex gap-4 items-center">
               <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm border border-primary/5">
                 <Info size={20} />
               </div>
               <p className="text-xs font-medium text-primary/70 leading-relaxed italic">
                 "Consistent 15-minute sessions are 4x more effective than one long monthly session."
               </p>
             </div>
          </Card>
        </div>

      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add Personalized Drill">
        <div className="space-y-6">
            <div className="p-4 bg-primary/5 rounded-2xl flex items-center gap-4 border border-primary/5">
                <Target className="text-button" />
                <p className="text-xs font-medium text-primary/60 italic">Define what you want to work on. High intensity drills will be prioritized.</p>
            </div>
          <Input 
            label="Drill Name" 
            placeholder="e.g., Gate Drill (Putting)" 
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            autoFocus
          />
          <Button className="w-full h-12 text-base font-bold uppercase tracking-widest shadow-lg shadow-button/20" onClick={handleAddTask}>
            Save to Active List
          </Button>
        </div>
      </Modal>
    </div>
    </div>
  );
}
