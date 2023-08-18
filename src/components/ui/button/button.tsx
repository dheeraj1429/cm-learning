import React, { forwardRef } from 'react';
import classes from './button.module.css';
import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(classes.base, {
   variants: {
      variant: {
         primary: classes.primary,
         secondary: classes.secondary,
      },
      size: {
         small: classes.small,
         medium: classes.medium,
      },
   },
   defaultVariants: {
      variant: 'primary',
      size: 'medium',
   },
});

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof button> {
   isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
   (
      { className, variant, size, isLoading, children, ...props },
      ref
   ): React.JSX.Element => {
      return (
         <button
            className={button({ className, variant, size })}
            ref={ref}
            {...props}
         >
            {isLoading ? 'loading' : children}
         </button>
      );
   }
);

Button.displayName = 'Button';
export default Button;
