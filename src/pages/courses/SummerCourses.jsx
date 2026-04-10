import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteNavbar } from '../../components/ui/WebsiteNavbar';
import { Button } from '../../components/ui/Button';
import { Flag, Sun, MapPin, Star, ArrowRight } from 'lucide-react';

const summerCourses = [
  {
    name: 'workshope Bay Championship',
    location: 'Coastal Route 45',
    difficulty: 'Expert',
    par: 72,
    yards: '7,420',
    holes: 18,
    rating: '4.9',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop',
    tag: 'Championship',
    tagColor: 'bg-[#C9A227] text-[#004225]',
    desc: 'A coastal masterpiece carved along the cliffs. Unpredictable sea winds make every round a unique challenge for seasoned players.',
  },
  {
    name: 'Forest Reserve Plains',
    location: 'North Pine Valley',
    difficulty: 'Intermediate',
    par: 71,
    yards: '6,830',
    holes: 18,
    rating: '4.7',
    img: 'https://images.unsplash.com/photo-1592919016381-60a3792f4415?q=80&w=1974&auto=format&fit=crop',
    tag: 'Members Favourite',
    tagColor: 'bg-[#004225] text-white',
    desc: 'Tall pines line every fairway in this strategic woodland layout. Precision over power — accuracy is your best club here.',
  }
];

export default function SummerCourses() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans overflow-x-hidden pt-[65px]">
      <WebsiteNavbar />
      
      {/* Hero Banner */}
      <section className="relative h-[65vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="Summer Courses"
          />
          <div className="absolute inset-0 bg-[#004225]/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 border border-amber-400/40 text-amber-400 rounded-full text-xs font-black uppercase tracking-widest mb-8">
            <Sun size={14} /> Peak Season Selection
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-6 uppercase leading-none">
            Summer <br /> Courses
          </h1>
          <div className="h-1.5 w-24 bg-amber-400 mx-auto mb-8" />
          <p className="text-white/60 text-lg font-medium max-w-xl mx-auto">
            Experience our championship tracks in their prime condition under the summer sun.
          </p>
        </motion.div>
      </section>

      {/* Course List */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {summerCourses.map((course, i) => (
            <motion.div
              key={course.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl border border-black/5 flex flex-col sm:flex-row h-full group"
            >
              <div className="sm:w-1/2 relative h-64 sm:h-auto overflow-hidden">
                <img src={course.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={course.name} />
                <div className={`absolute top-6 left-6 ${course.tagColor} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest`}>
                    {course.tag}
                </div>
              </div>
              <div className="sm:w-1/2 p-8 flex flex-col">
                 <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase text-black/40"><Flag size={12}/> Par {course.par}</span>
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase text-black/40"><MapPin size={12}/> {course.yards} Yds</span>
                 </div>
                 <h3 className="text-2xl font-black text-[#004225] uppercase tracking-tight mb-4">{course.name}</h3>
                 <p className="text-sm text-black/50 font-medium leading-relaxed mb-8 flex-grow">{course.desc}</p>
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                       <Star size={14} className="fill-[#C9A227] text-[#C9A227]" />
                       <span className="text-sm font-black text-[#004225]">{course.rating}</span>
                    </div>
                    <Button className="bg-[#004225] text-white h-10 px-6 rounded-xl font-black uppercase tracking-widest text-[10px]">Book Now</Button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
