import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, Phone, Mail, ArrowRight, Flag 
} from 'lucide-react';
import { Button } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Press Kit', path: '/press' },
      { name: 'Contact', path: '/contact' }
    ],
    Courses: [
      { name: 'Summer Selection', path: '/courses/summer' },
      { name: 'Winter Selection', path: '/courses/winter' },
      { name: 'The Rules', path: '/courses/rules' },
      { name: 'Tee Time Booking', path: '/shop' }
    ],
    Experience: [
      { name: 'Junior Academy', path: '/perks/junior' },
      { name: 'Live Coaching', path: '/perks/live' },
      { name: 'Pro Shop', path: '/shop' },
      { name: 'Membership Plans', path: '/memberships' }
    ]
  };

  return (
    <footer className="bg-[#002B18] text-white pt-16 pb-8 px-6 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none select-none">
        <h1 className="text-[150px] font-black leading-none translate-y-12 translate-x-12">WORKSHOPE</h1>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Newsletter Section - Slimmer */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 mb-12">
          <div className="max-w-md">
            <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">The Green Letter</h2>
            <p className="text-white/40 text-sm font-medium">Weekly tactical tips & exclusive Pro Shop discounts.</p>
          </div>
          <div className="w-full lg:w-auto flex items-center gap-3">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/5 border border-white/10 rounded-xl h-12 px-5 min-w-[240px] font-bold text-xs outline-none"
            />
            <Button className="bg-[#C9A227] text-[#004225] h-12 px-8 rounded-xl font-black uppercase tracking-widest text-[10px]">
              Join
            </Button>
          </div>
        </div>

        {/* Links Grid - More Compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
             <div className="flex items-center gap-4 mb-8 group">
               <div className="w-12 h-12 overflow-hidden transition-all group-hover:scale-110">
                 <img 
                   src="/logo.png" 
                   className="w-full h-full object-cover" 
                   style={{ mixBlendMode: 'multiply', filter: 'brightness(1.1) contrast(1.1)' }}
                   alt="WorkshopeGolf Logo" 
                 />
               </div>
               <div className="flex flex-col">
                 <span className="text-[#C9A227] font-black text-xl tracking-tighter uppercase leading-none">Workshope</span>
                 <span className="text-[#C9A227] font-bold text-[10px] uppercase tracking-[0.4em] leading-none mt-0.5 opacity-80">Golf Club</span>
               </div>
             </div>
             <p className="text-white/30 text-sm font-medium leading-relaxed mb-6 max-w-xs">
               Elite destination where tradition meets high-performance technology.
             </p>
             <div className="flex gap-3">
               {[Star, Star, Star, Star].map((Icon, i) => (
                 <a key={i} href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-[#C9A227] transition-all">
                   <Icon size={14} />
                 </a>
               ))}
             </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h5 className="font-black uppercase tracking-[0.2em] text-[10px] text-[#C9A227] mb-6">{title}</h5>
              <ul className="space-y-3">
                 {items.map(link => (
                   <li key={link.name}>
                     <Link to={link.path} className="text-white/30 hover:text-[#C9A227] transition-all text-xs font-bold leading-none">
                       {link.name}
                     </Link>
                   </li>
                 ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-white/20">
            <span>&copy; {currentYear} Workshope Golf</span>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2">
               <Phone size={14} className="text-[#C9A227]" />
               <span className="text-[10px] font-black text-white/60">0800 GOLF EXCEL</span>
             </div>
             <div className="flex items-center gap-2">
               <MapPin size={14} className="text-[#C9A227]" />
               <span className="text-[10px] font-black text-white/40 uppercase">Augusta Heights</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
