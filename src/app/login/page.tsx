'use client';

import React from 'react';
import Button from '@/components/ui/button/button';
import { signIn } from 'next-auth/react';

function Login() {
   const loginHandler = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      signIn('credentials', {
         email: 'dheerajsingh123@gmail.com',
         password: 'Dheeraj123@',
         redirect: false,
      });
   };

   return (
      <div className="p-2">
         <Button onClick={loginHandler} variation="login-button">
            Login
         </Button>
      </div>
   );
}

export default Login;
