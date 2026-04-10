import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Target, Mail, Smartphone } from 'lucide-react';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-background font-sans text-primary">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-button/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-favorite/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex flex-col items-center gap-3 group">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-300">
              <Target className="w-10 h-10 text-favorite" />
            </div>
            <span className="font-black text-2xl text-primary tracking-tighter uppercase">Golf AI</span>
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-white">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-primary mb-2">Welcome Back</h1>
            <p className="text-primary/40 font-bold text-sm tracking-tight">Your data-driven comeback starts here.</p>
          </div>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-primary/40 ml-1">Email or Mobile</label>
              <Input 
                type="text" 
                placeholder="Enter your email"
                className="h-14 bg-primary/5 border-none rounded-2xl px-5 font-bold"
                {...register('email')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-primary/40 ml-1">Password</label>
              <Input 
                type="password" 
                placeholder="••••••••"
                className="h-14 bg-primary/5 border-none rounded-2xl px-5 font-bold"
                {...register('password')}
              />
            </div>
            
            <div className="pt-2">
              <Button className="w-full h-14 text-base font-bold uppercase tracking-widest shadow-xl shadow-button/30 rounded-2xl" type="submit">
                Access Dashboard
              </Button>
            </div>
          </form>

          <div className="relative my-8 text-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-primary/5"></div></div>
            <span className="relative bg-white/80 px-4 text-[10px] font-black text-primary/20 uppercase tracking-widest">Or continue with</span>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 h-14 bg-primary/5 hover:bg-primary/10 rounded-2xl flex items-center justify-center transition-colors">
              <Mail size={20} className="text-primary" />
            </button>
            <button className="flex-1 h-14 bg-primary/5 hover:bg-primary/10 rounded-2xl flex items-center justify-center transition-colors">
              <Smartphone size={20} className="text-primary" />
            </button>
          </div>

          <p className="text-center text-xs font-bold text-primary/40 mt-10">
            Forgot your keys? <span className="text-button hover:underline cursor-pointer">Reset Password</span>
          </p>
        </div>

        <p className="text-center text-sm font-bold text-primary/60 mt-8">
          New to the range? <Link to="/signup" className="text-button hover:underline">Get your Free ID</Link>
        </p>
      </motion.div>
    </div>
  );
}
