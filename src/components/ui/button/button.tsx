import React, { forwardRef } from 'react';
import classes from './button.module.css';
import { ButtonProps } from '.';

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

export default Button;
