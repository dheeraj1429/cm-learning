import { cn } from '@/lib/utils';

function Skeleton({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) {
   return (
      <div
         className={cn(
            'animate-pulse bg-muted h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4',
            className
         )}
         {...props}
      />
   );
}

export { Skeleton };
