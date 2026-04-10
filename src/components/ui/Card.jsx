import React from 'react';
import { cn } from './Button';

export function Card({ className, children, ...props }) {
  return (
    <div 
      className={cn("bg-card p-4 rounded-lg shadow-soft border border-primary/5", className)} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn("mb-3 flex items-center justify-between", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children, ...props }) {
  return (
    <h3 className={cn("text-lg font-semibold text-primary", className)} {...props}>
      {children}
    </h3>
  );
}
