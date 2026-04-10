import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';
import { cn } from './Button';

export function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAppPage = ['/dashboard', '/ai', '/practice', '/analytics', '/shop'].some(path => pathname.startsWith(path));
  const isAuthPage = ['/login', '/signup'].includes(pathname);
  const isPublicPage = ['/', '/courses', '/memberships', '/events', '/perks', '/shop'].some(p => pathname === p || pathname.startsWith(p));

  if (isAuthPage) return null;

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Golf Courses', path: '/courses' },
    { name: 'Memberships', path: '/memberships' },
    { name: 'Events', path: '/events' },
    { name: 'Paradise Perks', path: '/perks' },
    { name: 'Pro Shop', path: '/shop' },
  ];

  const appNavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'AI Coach', path: '/ai' },
    { name: 'Practice', path: '/practice' },
    { name: 'Analytics', path: '/analytics' },
  ];

  const currentNav = isAppPage ? appNavItems : mainNavItems;

  return (
    <nav className="fixed top-0 left-0 right-0 h-[70px] bg-primary z-50 flex items-center px-4 lg:px-12">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white font-black text-xl uppercase tracking-wider mr-8">
          WorkshopeGolf
        </Link>

        {/* Nav Items */}
        <div className="flex items-center gap-1 lg:gap-6 flex-1">
          {currentNav.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                'flex items-center gap-1.5 text-[14px] font-bold transition-colors py-2 px-2 rounded-lg',
                pathname === item.path
                  ? 'text-highlight'
                  : 'text-white/80 hover:text-highlight'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button className="text-white hover:text-highlight transition-colors p-2">
            <Search size={20} strokeWidth={2.5} />
          </button>

          <Link to="/shop" className="relative p-2 text-white hover:text-highlight transition-colors">
            <ShoppingCart size={20} strokeWidth={2.5} />
          </Link>

          {isAppPage ? (
            <Link to="/settings" className="w-9 h-9 rounded-full border-2 border-highlight overflow-hidden flex items-center justify-center">
              <User size={18} className="text-highlight" />
            </Link>
          ) : (
            <Link to="/login" className="bg-transparent border-2 border-white text-white px-5 py-1.5 rounded-lg font-bold hover:bg-white hover:text-primary transition-all text-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
