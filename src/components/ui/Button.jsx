import React from 'react';
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ variant = 'primary', className, children, ...props }) {
  const baseStyles = "h-11 px-4 rounded-md font-medium transition-colors flex items-center justify-center";
  
  const variants = {
    primary: "bg-button hover:bg-button/90 text-white shadow-sm",
    secondary: "border border-button text-button hover:bg-button/5"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </button>
  );
}
