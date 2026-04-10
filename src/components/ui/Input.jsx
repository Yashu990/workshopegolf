import React, { forwardRef } from 'react';
import { cn } from './Button';

export const Input = forwardRef(({ className, label, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-primary75">{label}</label>}
      <input
        ref={ref}
        className={cn(
          "h-11 px-3 rounded-md border border-primary/20 bg-card text-primary focus:outline-none focus:ring-2 focus:ring-button focus:border-transparent transition-all",
          className
        )}
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';
