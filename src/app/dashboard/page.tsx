'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Button from '@/components/ui/button/button';
import { signOut } from 'next-auth/react';

function Dashboard() {
   const { data: session } = useSession({
      required: true,
      onUnauthenticated() {
         redirect('/login');
      },
   });

   console.log(session);

   const logOutHandler = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      signOut({
         redirect: false,
      });
      redirect('/login');
   };

   if (!session) {
      return null;
   }

   return (
      <div>
         <Button onClick={logOutHandler}>Logout</Button>
      </div>
   );
}

export default Dashboard;
