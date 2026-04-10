import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingCart, Star, Filter, Search, Tag, Zap,
  Package, ArrowRight, CheckCircle, X, ChevronDown
} from 'lucide-react';

const products = [
  {
    id: 1, name: 'Pro Swing Trainer', price: 89.99, originalPrice: 119.99,
    category: 'Training Aids', rating: 4.8, reviews: 142,
    desc: 'Weighted resistance club designed for speed and lag training. Grooves proper sequencing in just 10 minutes daily.',
    badge: 'Best Seller', badgeColor: 'bg-[#C9A227] text-[#004225]',
    img: '/junior_golf_elite_academy_1775834345588.png',
  },
  {
    id: 2, name: 'Impact Tape Pack (50)',  price: 19.99, originalPrice: null,
    category: 'Training Aids', rating: 4.6, reviews: 89,
    desc: 'Check your strike location instantly. Indispensable for dialling in center-face contact with every iron and wedge.',
    badge: 'New', badgeColor: 'bg-emerald-500 text-white',
    img: '/ai_golf_swing_analysis_1775834309564.png',
  },
  {
    id: 3, name: 'Putting Alignment Mirror', price: 34.99, originalPrice: 44.99,
    category: 'Putting', rating: 4.9, reviews: 203,
    desc: 'Perfect your eye position, face angle, and stroke path simultaneously. Used by Tour players in their pre-round warmup.',
    badge: 'Top Rated', badgeColor: 'bg-blue-500 text-white',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 4, name: 'Golf AI Performance Cap', price: 29.99, originalPrice: null,
    category: 'Apparel', rating: 4.5, reviews: 56,
    desc: 'Ultra-lightweight moisture-wicking performance cap. Embroidered with the Golf AI emblem. Dark olive colorway.',
    badge: null, badgeColor: '',
    img: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 5, name: 'Lag Shot 7-Iron', price: 149.99, originalPrice: 179.99,
    category: 'Training Aids', rating: 4.7, reviews: 318,
    desc: 'The ultra-flexible shaft forces you to load the club correctly, building lag, tempo, and muscle memory simultaneously.',
    badge: 'Members -20%', badgeColor: 'bg-purple-600 text-white',
    img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 6, name: 'Chipping Net Pro', price: 59.99, originalPrice: 79.99,
    category: 'Training Aids', rating: 4.4, reviews: 74,
    desc: 'Dual-target collapsible chipping net with a weighted base. Practice trajectory control from your garden or living room.',
    badge: 'Sale', badgeColor: 'bg-red-500 text-white',
    img: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 7, name: 'Members Polo – Olive', price: 64.99, originalPrice: null,
    category: 'Apparel', rating: 4.6, reviews: 38,
    desc: 'Tour-quality performance polo in our signature deep olive. Tailored fit. Sweat-wicking. Club logo embroidered at chest.',
    badge: 'Exclusive', badgeColor: 'bg-[#004225] text-white',
    img: '/luxe_golf_merchandise_premium_1775834796057.png',
  },
  {
    id: 8, name: 'Titleist Pro V1x · Dozen', price: 54.99, originalPrice: 64.99,
    category: 'Balls & Equipment', rating: 4.9, reviews: 512,
    desc: 'The most played ball on Tour. High velocity, penetrating trajectory, and exceptional Drop-and-Stop short game control.',
    badge: 'Partner Deal', badgeColor: 'bg-[#C9A227] text-[#004225]',
    img: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=400&auto=format&fit=crop',
  },
];

const categories = ['All', 'Training Aids', 'Putting', 'Apparel', 'Balls & Equipment'];

export default function Shop() {
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id));

  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);
  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);

  const filtered = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans pb-24">

      {/* Hero */}
      <section className="bg-[#004225] py-24 min-h-[500px] flex items-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/luxe_golf_merchandise_premium_1775834796057.png" className="w-full h-full object-cover opacity-30" alt="Shop Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#004225] via-[#004225]/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A227]/20 border border-[#C9A227]/30 rounded-full text-[#C9A227] text-xs font-bold uppercase tracking-[0.2em] mb-5">
              <Tag size={12} /> Members Get Up To 30% Off
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter mb-4 leading-none">
              The <br /> Pro Shop
            </h1>
            <p className="text-white/60 font-medium max-w-lg text-lg leading-relaxed">Premium training aids, apparel, and equipment — curated by our teaching professionals and exclusive to WorkshopeGolf members.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
              <div className="text-2xl font-black text-[#C9A227]">8</div>
              <div className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-1">Products</div>
            </div>
            <div className="bg-white/10 rounded-2xl px-6 py-4 text-center">
              <div className="text-2xl font-black text-[#C9A227]">Free</div>
              <div className="text-white/50 text-[10px] font-black uppercase tracking-widest mt-1">Shipping $75+</div>
            </div>
            <button
              onClick={() => setCartOpen(true)}
              className="relative bg-[#C9A227] text-[#004225] rounded-2xl px-6 py-4 font-black hover:bg-white transition-all"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Filters + Search */}
      <div className="border-b border-black/5 bg-white sticky top-0 z-30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#004225] text-white shadow-md'
                    : 'bg-[#F0EFE8] text-[#004225]/60 hover:bg-[#004225]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2.5 rounded-xl border border-black/10 bg-[#F8F7F5] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#004225]/20 w-64"
            />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-black/30 font-bold">No products found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-black/5 group flex flex-col"
              >
                <div className="relative h-52 overflow-hidden bg-[#F0EFE8]">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 ${product.badgeColor} px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow`}>
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-[10px] font-black text-[#004225]/40 uppercase tracking-widest mb-1.5">{product.category}</div>
                  <h3 className="font-black text-[#004225] mb-2 leading-tight">{product.name}</h3>
                  <p className="text-xs text-black/50 font-medium leading-relaxed mb-4 flex-grow">{product.desc}</p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={12} className={j < Math.floor(product.rating) ? 'text-[#C9A227] fill-[#C9A227]' : 'text-black/20'} />
                    ))}
                    <span className="text-[10px] font-bold text-black/40 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-xl font-black text-[#004225]">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs font-bold text-black/30 line-through ml-2">${product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1.5 bg-[#004225] text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#C9A227] hover:text-[#004225] transition-all"
                    >
                      <ShoppingCart size={13} /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#004225] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C9A227]/20 border border-[#C9A227]/30 rounded-full text-[#C9A227] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <Zap size={11} /> Member Exclusive
            </div>
            <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">Regular Members Save 20%</h3>
            <p className="text-white/55 font-medium">Upgrade your membership to unlock automatic discounts on all Pro Shop purchases, storewide.</p>
          </div>
          <Link to="/memberships">
            <button className="shrink-0 bg-[#C9A227] text-[#004225] px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white hover:scale-105 transition-all flex items-center gap-2 relative z-10">
              View Membership Plans <ArrowRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 h-full w-96 bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-black/5">
                <h2 className="text-xl font-black text-[#004225] uppercase tracking-tight">Your Cart ({cartCount})</h2>
                <button onClick={() => setCartOpen(false)} className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">
                  <X size={18} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-16 text-black/30">
                    <Package size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="font-bold">Your cart is empty.</p>
                    <p className="text-sm mt-1">Add some products from the shop.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 bg-[#F8F7F5] rounded-2xl p-4">
                      <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-black text-[#004225] text-sm truncate">{item.name}</h4>
                        <p className="text-black/45 text-xs font-bold mt-0.5">Qty: {item.qty}</p>
                        <p className="text-[#004225] font-black mt-1">${(item.price * item.qty).toFixed(2)}</p>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-black/25 hover:text-red-500 transition-colors mt-1">
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
              {cart.length > 0 && (
                <div className="p-6 border-t border-black/5">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-black text-[#004225] uppercase tracking-wide text-sm">Total</span>
                    <span className="text-2xl font-black text-[#004225]">${total.toFixed(2)}</span>
                  </div>
                  {total < 75 && (
                    <p className="text-xs font-bold text-amber-600 bg-amber-50 rounded-xl px-3 py-2 mb-4">
                      Add ${(75 - total).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <button className="w-full bg-[#004225] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#C9A227] hover:text-[#004225] transition-all shadow-lg flex items-center justify-center gap-2">
                    <CheckCircle size={18} /> Checkout
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
