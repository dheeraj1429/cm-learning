import React, { forwardRef } from 'react';
import classes from './button.module.css';

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   isLoading?: boolean;
   variation?: 'login-button' | 'deposit-btn' | 'wallet_button';
   children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   (
      { variation, className, children, isLoading, ...props },
      ref
   ): React.JSX.Element => {
      return (
         <button
            className={className || classes[variation || 'login-button']}
            ref={ref}
            {...props}
         >
            {isLoading ? 'Loading..' : children}
         </button>
      );
   }
);

Button.displayName = 'Button';

export default Button;
