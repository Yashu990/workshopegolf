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
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);
  const location = useLocation();

  // Close overlays on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setCartOpen(false);
    setUserMenuOpen(false);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] font-sans">
      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-[#004225] h-[90px] flex items-center px-4 md:px-10 z-[110] shadow-2xl"
          >
            <div className="max-w-[1200px] w-full mx-auto flex items-center gap-4">
              <img src="/logo.png" className="w-8 h-8 object-cover rounded-lg" style={{ mixBlendMode: 'multiply', filter: 'brightness(1.5)' }} alt="Logo" />
              <input 
                autoFocus
                type="text" 
                placeholder="Search courses, gear, or members..." 
                className="w-full bg-transparent border-none outline-none text-white text-xl md:text-2xl font-bold placeholder:text-white/20"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="p-2 text-white hover:text-[#C9A227] transition-colors"
              >
                <X size={28} strokeWidth={3} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <nav className="bg-[#004225] h-[70px] flex items-center border-b border-white/5 shadow-2xl">
        <div className="max-w-[1700px] w-full mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo - Concept 1 Luxury Crest */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <div className="w-10 h-10 md:w-14 md:h-14 overflow-hidden transition-all group-hover:scale-110">
              <img 
                src="/logo.png" 
                className="w-full h-full object-cover" 
                style={{ mixBlendMode: 'multiply', filter: 'brightness(1.2)' }}
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
              <button 
                onClick={() => setSearchOpen(true)}
                className="text-white hover:text-[#C9A227] p-2 transition-colors"
              >
                <Search size={18} />
              </button>
              
              <button 
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-white hover:text-[#C9A227] transition-colors"
                style={{ background: 'none', border: 'none' }}
              >
                <ShoppingCart size={18} />
                <span className="absolute top-0 right-0 w-4 h-4 bg-[#C9A227] text-[#004225] text-[9px] font-black rounded-full flex items-center justify-center border-2 border-[#004225]">2</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#C9A227] transition-colors"
              >
                {mobileMenuOpen ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
              </button>

              <div 
                className="relative hidden sm:flex items-center gap-1.5 group cursor-pointer text-white hover:text-[#C9A227] ml-2"
                onMouseEnter={() => setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C9A227]/20 border border-white/5 transition-all">
                   <User size={14} className="group-hover:text-[#C9A227]" />
                </div>
                
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, x: -100 }}
                      animate={{ opacity: 1, y: 0, x: -100 }}
                      exit={{ opacity: 0, y: 10, x: -100 }}
                      className="absolute top-[35px] right-0 w-[200px] bg-white shadow-4xl rounded-xl py-3 overflow-hidden z-[120]"
                    >
                      <div className="px-4 py-2 border-b border-black/5 mb-2">
                        <p className="text-[10px] font-black text-black/30 uppercase tracking-[0.2em]">Member Access</p>
                      </div>
                      <Link 
                        to="/login"
                        className="block px-6 py-2 text-[#004225] text-[13px] font-bold hover:bg-[#004225]/5 hover:text-[#C9A227] transition-all"
                      >
                        Sign In
                      </Link>
                      <Link 
                        to="/signup"
                        className="block px-6 py-2 text-[#004225] text-[13px] font-bold hover:bg-[#004225]/5 hover:text-[#C9A227] transition-all"
                      >
                        Join the Tour
                      </Link>
                      <div className="mt-2 pt-2 border-t border-black/5">
                        <Link 
                          to="/support"
                          className="block px-6 py-2 text-[#004225]/40 text-[11px] font-bold hover:text-[#C9A227] transition-all"
                        >
                          Help & Support
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm h-screen z-[105]"
            />
            <motion.div 
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[450px] h-screen bg-white z-[110] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              <div className="p-8 bg-[#004225] flex items-center justify-between">
                <div>
                  <h3 className="text-white font-black text-2xl uppercase tracking-tighter leading-none mb-1">Your Selection</h3>
                  <p className="text-[#C9A227] text-[10px] font-bold uppercase tracking-widest">Premium Performance Gear</p>
                </div>
                <button onClick={() => setCartOpen(false)} className="bg-white/10 p-2 rounded-xl text-white hover:bg-white/20 transition-all">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Cart Item 1 */}
                <div className="flex gap-6 items-center">
                  <div className="w-24 h-24 bg-[#FAFAF7] rounded-2xl overflow-hidden border border-black/5 flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=200" alt="Special Edition Driver" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#004225] font-black uppercase tracking-tighter text-lg leading-tight mb-1">Tour Precision Driver</h4>
                    <p className="text-black/40 text-[11px] font-bold uppercase tracking-widest mb-3">Limited Edition Gold Series</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#C9A227] font-black text-xl">$599.00</span>
                      <div className="flex items-center gap-3 bg-[#FAFAF7] px-3 py-1.5 rounded-lg border border-black/5">
                        <button className="text-[#004225] font-black">-</button>
                        <span className="text-[#004225] font-black text-sm">1</span>
                        <button className="text-[#004225] font-black">+</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cart Item 2 */}
                <div className="flex gap-6 items-center">
                  <div className="w-24 h-24 bg-[#FAFAF7] rounded-2xl overflow-hidden border border-black/5 flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?auto=format&fit=crop&q=80&w=200" alt="Clubhouse Polo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#004225] font-black uppercase tracking-tighter text-lg leading-tight mb-1">Clubhouse Elite Polo</h4>
                    <p className="text-black/40 text-[11px] font-bold uppercase tracking-widest mb-3">Breathable Emerald Tech</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#C9A227] font-black text-xl">$85.00</span>
                      <div className="flex items-center gap-3 bg-[#FAFAF7] px-3 py-1.5 rounded-lg border border-black/5">
                        <button className="text-[#004225] font-black">-</button>
                        <span className="text-[#004225] font-black text-sm">1</span>
                        <button className="text-[#004225] font-black">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-black/5 space-y-6 bg-[#FAFAF7]">
                <div className="flex items-center justify-between">
                  <span className="text-[#004225]/40 font-bold uppercase tracking-widest text-xs">Subtotal</span>
                  <span className="text-[#004225] font-black text-2xl tracking-tighter">$684.00</span>
                </div>
                <button className="w-full bg-[#004225] text-white h-16 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-[#005530] transition-all">
                  Secure Checkout
                </button>
                <p className="text-center text-[10px] text-black/20 font-bold uppercase tracking-widest">Complimentary Express Shipping Included</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
