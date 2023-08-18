import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariations = cva(
   'rounded-lg border bg-card text-card-foreground shadow-sm',
   {
      variants: {
         variant: {},
      },
      defaultVariants: {},
   }
);

export interface CardInterface
   extends React.HtmlHTMLAttributes<HTMLDivElement>,
      VariantProps<typeof cardVariations> {}

const Card = React.forwardRef<HTMLDivElement, CardInterface>(
   ({ className, children, variant, ...props }, ref) => {
      return (
         <div
            className={cn(cardVariations({ variant }), className)}
            {...props}
            ref={ref}
         >
            {children}
         </div>
      );
   }
);

const CardHeader = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
   />
));

const CardTitle = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
   <h3
      ref={ref}
      className={cn(
         'text-2xl font-semibold leading-none tracking-tight',
         className
      )}
      {...props}
   />
));

const CardDescription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
   <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
   />
));

const CardContent = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));

const CardFooter = React.forwardRef<
   HTMLDivElement,
   React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
   <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
   />
));

Card.displayName = 'Card';
CardHeader.displayName = 'Card Header';
CardTitle.displayName = 'Card Title';
CardDescription.displayName = 'Card Description';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';
export {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
   CardFooter,
};
