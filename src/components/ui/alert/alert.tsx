import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva('text-sm', {
   variants: {
      variant: {
         default:
            'p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400',
         danger:
            'p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400',
         success:
            'p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400',
         warning:
            'p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300',
      },
   },
   defaultVariants: {
      variant: 'default',
   },
});

export interface AlertContainerInterface
   extends React.HtmlHTMLAttributes<HTMLDivElement>,
      VariantProps<typeof alertVariants> {}
export interface AlertInterface
   extends React.HtmlHTMLAttributes<HTMLSpanElement> {
   heading: string;
}

const AlertContainer = React.forwardRef<
   HTMLDivElement,
   AlertContainerInterface
>(({ className, children, variant, ...props }, ref) => {
   return (
      <div
         ref={ref}
         {...props}
         className={cn(alertVariants({ variant }), className)}
         role="alert"
      >
         {children}
      </div>
   );
});

const Alert = ({ className, heading, ...props }: AlertInterface) => {
   return (
      <span className={cn('font-medium', className)} {...props}>
         {heading}
      </span>
   );
};

AlertContainer.displayName = 'Alert Container';
Alert.displayName = 'Alert';
export { AlertContainer, alertVariants, Alert };
