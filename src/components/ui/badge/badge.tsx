import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
   'inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10',
   {
      variants: {
         variant: {
            default:
               'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
            secondary:
               'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
            destructive:
               'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
            outline: 'text-foreground',
         },
      },
      defaultVariants: {
         variant: 'default',
      },
   }
);

export interface BadgeInterface
   extends React.HtmlHTMLAttributes<HTMLDivElement>,
      VariantProps<typeof badgeVariants> {}

const Badge = function ({ className, variant, ...props }: BadgeInterface) {
   return (
      <div className={cn(badgeVariants({ variant }), className)} {...props} />
   );
};

export default Badge;
