import React from 'react';

const Layout = function ({ children }: { children: React.ReactNode }) {
   return (
      <div className="w-full h-screen flex items-center justify-center">
         {children}
      </div>
   );
};

export default Layout;
