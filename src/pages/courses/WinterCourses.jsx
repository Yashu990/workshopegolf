import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Snowflake, MapPin, Star, Flag, Clock } from 'lucide-react';

const winterCourses = [
  {
    name: 'Royal Springs Links',
    location: 'West Highland Estate',
    difficulty: 'Beginner Friendly',
    par: 70,
    yards: '6,100',
    holes: 18,
    rating: '4.8',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop',
    tag: 'All Year',
    tagColor: 'bg-blue-500 text-white',
    desc: 'Wide, forgiving fairways with gentle slopes. The perfect setting to build confidence without sacrificing the prestige of a full links layout.',
  },
  {
    name: 'Glastonbury Glades',
    location: 'South Valley Basin',
    difficulty: 'Intermediate',
    par: 72,
    yards: '6,950',
    holes: 18,
    rating: '4.6',
    img: 'https://images.unsplash.com/photo-1591491719366-62a0d72acdaf?q=80&w=1974&auto=format&fit=crop',
    tag: 'Scenic',
    tagColor: 'bg-emerald-600 text-white',
    desc: 'Traverse rolling meadows, a wildlife sanctuary, and a stunning 140-metre par 3 island green. Golf and nature in perfect harmony.',
  }
];

export default function WinterCourses() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591491719366-62a0d72acdaf?q=80&w=1974&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Winter Courses"
          />
          <div className="absolute inset-0 bg-[#004225]/85" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-400/20 border border-blue-400/40 text-blue-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <Snowflake size={14} /> All-Season Durability
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
            Winter <br /> Courses
          </h1>
          <div className="h-1.5 w-24 bg-blue-400 mx-auto mb-8" />
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto">
            Our specialized drainage and winter-hardy greens ensure a premium experience regardless of the frost.
          </p>
        </motion.div>
      </section>

      {/* Course List */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {winterCourses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-[48px] overflow-hidden mb-8 shadow-2xl relative">
                <img src={course.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={course.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                   <Button className="bg-[#C9A227] text-[#004225] h-14 px-10 rounded-2xl font-black uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-all duration-500">Book Now</Button>
                </div>
              </div>
              <div className="px-4">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#C9A227] border border-[#C9A227]/30 px-3 py-1 rounded-lg">Winter Certified</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30">Rating: {course.rating}/5.0</span>
                 </div>
                 <h3 className="text-4xl font-black text-[#004225] uppercase tracking-tighter mb-4">{course.name}</h3>
                 <p className="text-black/50 font-medium leading-relaxed max-w-lg mb-6">{course.desc}</p>
                 <div className="flex gap-8 border-t border-black/5 pt-6">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-black/30 mb-1">Total Yards</span>
                        <span className="text-lg font-black text-[#004225]">{course.yards}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase text-black/30 mb-1">Difficulty</span>
                        <span className="text-lg font-black text-[#004225]">{course.difficulty}</span>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
