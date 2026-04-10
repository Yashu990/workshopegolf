import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, ChevronDown, Menu, X, Globe, User } from 'lucide-react';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] font-sans">
      {/* Main Navbar */}
      <nav className="bg-[#004225] h-[70px] flex items-center border-b border-white/5 shadow-2xl">
        <div className="max-w-[1700px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo - Concept 1 Luxury Crest */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden transition-all group-hover:scale-110">
              <img 
                src="/logo.png" 
                className="w-full h-full object-cover" 
                style={{ mixBlendMode: 'multiply', filter: 'brightness(1.1) contrast(1.1)' }}
                alt="WorkshopeGolf Logo" 
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#C9A227] font-black text-lg md:text-xl tracking-tighter uppercase leading-none">Workshope</span>
              <span className="text-[#C9A227] font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] leading-none mt-0.5 opacity-80">Golf Club</span>
            </div>
          </Link>

          {/* Desktop Navigation Items - Centered */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationLinks.map((item) => (
              <div 
                key={item.name}
                className="relative group h-[70px] flex items-center"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link 
                  to={item.path}
                  className={`flex items-center gap-1.5 px-4 h-full text-[13px] font-bold tracking-tight transition-colors ${
                    location.pathname === item.path || (item.dropdown && item.dropdown.some(s => location.pathname === s.path)) 
                    ? 'text-[#C9A227]' : 'text-white hover:text-[#C9A227]'
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={11} className="opacity-70 group-hover:rotate-180 transition-transform" />}
                </Link>

                <AnimatePresence>
                  {item.dropdown && hoveredItem === item.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-[70px] left-0 w-[260px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-b-2xl py-4 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227] to-[#004225] opacity-50" />
                      {item.dropdown.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-3 text-[#004225] text-[13px] font-bold hover:bg-[#004225]/5 hover:text-[#C9A227] transition-all border-l-4 border-transparent hover:border-[#C9A227]"
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

          {/* Right Section: Icons, Buttons & Mobile Toggle */}
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden xl:flex items-center gap-3">
              <Link to="/signup">
                <button className="bg-[#C9A227] text-[#004225] px-6 h-11 rounded-xl text-[12px] font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-xl shadow-black/20">
                  Join The Tour
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-1 md:gap-3">
              <button className="text-white hover:text-[#C9A227] p-2 transition-colors"><Search size={18} /></button>
              
              <Link to="/shop" className="relative p-2 text-white hover:text-[#C9A227] transition-colors">
                <ShoppingCart size={18} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#C9A227] text-[#004225] text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#004225]">0</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#C9A227] transition-colors"
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>

              <div className="hidden sm:flex items-center gap-1.5 group cursor-pointer text-white hover:text-[#C9A227] ml-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C9A227]/20 border border-white/5 transition-all">
                   <User size={14} className="group-hover:text-[#C9A227]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden h-screen"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[300px] h-screen bg-[#FAFAF7] shadow-4xl lg:hidden z-[101] overflow-y-auto"
            >
              <div className="p-6 bg-[#004225] flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-[#C9A227]">
                   <Globe size={18} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Global Access</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)} className="bg-white/10 p-2 rounded-xl text-white">
                  <X size={20} />
                </button>
              </div>

              <div className="px-6 space-y-4">
                {navigationLinks.map((item) => (
                  <div key={item.name} className="border-b border-black/5 pb-4 last:border-0">
                    <div 
                      className="flex items-center justify-between py-2 cursor-pointer"
                      onClick={() => item.dropdown ? setExpandedMobileItem(expandedMobileItem === item.name ? null : item.name) : null}
                    >
                      {item.dropdown ? (
                        <span className="text-lg font-black text-[#004225] uppercase tracking-tighter">{item.name}</span>
                      ) : (
                        <Link to={item.path} className="text-lg font-black text-[#004225] uppercase tracking-tighter w-full">{item.name}</Link>
                      )}
                      {item.dropdown && (
                        <ChevronDown 
                          size={18} 
                          className={`text-[#C9A227] transition-transform duration-300 ${expandedMobileItem === item.name ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {item.dropdown && expandedMobileItem === item.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-[#004225]/5 rounded-2xl mt-2"
                        >
                          <div className="p-4 space-y-4">
                            {item.dropdown.map(sub => (
                              <Link 
                                key={sub.name}
                                to={sub.path}
                                className="block text-sm font-bold text-[#004225]/70 hover:text-[#C9A227]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="p-6 mt-8 space-y-4">
                <Link to="/signup" className="block text-center bg-[#C9A227] text-[#004225] h-14 rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-xs shadow-xl">
                  Sign Up Today
                </Link>
                <Link to="/login" className="block text-center border-2 border-[#004225]/10 text-[#004225] h-14 rounded-2xl flex items-center justify-center font-black uppercase tracking-widest text-xs">
                  Member Login
                </Link>
              </div>
              
              <div className="p-8 text-center text-[#004225]/20 font-black text-[9px] uppercase tracking-[0.3em]">
                Workshope Golf © 2026
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

