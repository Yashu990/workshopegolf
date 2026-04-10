import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigationLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Courses', 
    path: '/courses', 
    dropdown: [
      { name: 'Summer Selection', path: '/courses/summer' },
      { name: 'Winter Selection', path: '/courses/winter' },
      { name: 'Code of the Green', path: '/courses/rules' }
    ] 
  },
  { 
    name: 'Memberships', 
    path: '/memberships', 
    dropdown: [
      { name: 'Regular Memberships', path: '/memberships' },
      { name: 'Young Executive', path: '/memberships/young-executive' },
      { name: 'Corporate Packages', path: '/memberships/corporate' }
    ] 
  },
  { 
    name: 'Events', 
    path: '/events', 
    dropdown: [
      { name: 'Upcoming Tournaments', path: '/events' },
      { name: 'Play Day Pairings', path: '/events/pairings' },
      { name: 'Seasonal Leagues', path: '/events/leagues' }
    ] 
  },
  { 
    name: 'workshope Perks', 
    path: '/perks', 
    dropdown: [
      { name: 'Junior Golf Academy', path: '/perks/junior' },
      { name: 'Live Coaching', path: '/perks/live' },
      { name: 'Pro Swing Tip Videos', path: '/perks/videos' },
      { name: 'Priority Tee Times', path: '/perks/tee-times' }
    ] 
  },
  { name: 'Pro Shop', path: '/shop' },
];

export function WebsiteNavbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] font-sans">
      {/* Main Navbar */}
      <nav className="bg-[#004225] h-[65px] flex items-center border-b border-white/5">
        <div className="max-w-[1700px] w-full mx-auto px-6 flex items-center justify-between">
          
          {/* Logo - Concept 1 Luxury Crest */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
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
          </Link>

          {/* Navigation Items - Centered */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((item) => (
              <div 
                key={item.name}
                className="relative group h-[65px] flex items-center"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link 
                  to={item.path}
                  className={`flex items-center gap-1.5 px-4 h-full text-[13px] font-bold tracking-tight transition-colors ${
                    item.name === 'Memberships' ? 'text-[#C9A227]' : 'text-white hover:text-[#C9A227]'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={12} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                </Link>

                <AnimatePresence>
                  {item.dropdown && hoveredItem === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-[65px] left-0 w-[260px] bg-white shadow-2xl rounded-b-xl py-4"
                    >
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-2.5 text-[#004225] text-[13.5px] font-bold hover:bg-[#004225]/5 hover:text-[#C9A227] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Section: Icons, Buttons & Membership */}
          <div className="flex items-center gap-3 xl:gap-6">
            <div className="hidden xl:flex items-center gap-2">
              <Link to="/signup">
                <button className="bg-[#C9A227] text-[#004225] px-5 py-2 rounded-lg text-[13px] font-black uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-black/10">
                  Start Free Trial
                </button>
              </Link>
              <Link to="/login">
                <button className="border border-white/30 text-white px-5 py-2 rounded-lg text-[13px] font-black uppercase tracking-wider hover:bg-white/10 transition-all">
                  Log In
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-1.5 lg:gap-3">
              <button className="text-white hover:text-[#C9A227] p-2"><Search size={18} /></button>
              
              <div className="relative p-2 text-white hover:text-[#C9A227] cursor-pointer">
                <ShoppingCart size={18} />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#C9A227] text-[#004225] text-[8.5px] font-black rounded-full flex items-center justify-center">0</span>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 group cursor-pointer text-white hover:text-[#C9A227]">
                <span className="text-[12px] font-black uppercase tracking-wider">Membership</span>
                <ChevronDown size={11} className="opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
