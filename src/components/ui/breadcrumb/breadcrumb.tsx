import React from 'react';
import { cn } from '@/lib/utils';

const BreadcrumbContainer = ({
   children,
   className,
   ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
   return (
      <div
         className={cn(
            'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
            className
         )}
         {...props}
      >
         {children}
      </div>
   );
};

const BreadcrumbOl = ({
   children,
   className,
   ...props
}: React.HtmlHTMLAttributes<HTMLOListElement>) => {
   return (
      <ol
         className={cn(
            'inline-flex items-center space-x-1 md:space-x-3',
            className
         )}
         {...props}
      >
         {children}
      </ol>
   );
};

const BreadcrumbList = ({
   className,
   children,
   ...props
}: React.HtmlHTMLAttributes<HTMLLIElement>) => {
   return (
      <li className={cn('inline-flex items-center', className)} {...props}>
         {children}
      </li>
   );
};

const BreadcrumbContent = ({
   className,
   children,
   ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) => {
   return (
      <div
         className={cn(
            'inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white',
            className
         )}
         {...props}
      >
         {children}
      </div>
   );
};

BreadcrumbContainer.displayName = 'breadcrumb';
BreadcrumbOl.displayName = 'breadcrumb ol';
BreadcrumbList.displayName = 'breadcrumb list';
BreadcrumbContent.displayName = 'breadcrumb content';
export { BreadcrumbContainer, BreadcrumbOl, BreadcrumbList, BreadcrumbContent };
