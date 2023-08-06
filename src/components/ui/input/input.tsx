import React from 'react';
import { cn } from '@/lib/utils';

export interface InputInterface
   extends React.InputHTMLAttributes<HTMLInputElement> {
   className?: string;
   children?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputInterface>(
   ({ className, children, ...props }, ref) => {
      return (
         <input
            className={cn(
               'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
               className
            )}
            ref={ref}
            {...props}
         >
            {children}
         </input>
      );
   }
);

Input.displayName = 'input';

export { Input };
