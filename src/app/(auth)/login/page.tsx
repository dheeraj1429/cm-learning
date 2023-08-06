'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/button/button';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Login() {
   const [isLoading, setIsLoading] = useState(false);

   const router = useRouter();

   const loginHandler = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      setIsLoading(true);
      const response = await signIn('credentials', {
         email: 'dheerajsingh123@gmail.com',
         password: 'Dheeraj123@',
         redirect: false,
      });

      console.log(response);

      if (!!response && response?.status === 200 && response?.ok) {
         router.push('/dashboard');
      }
   };

   return (
      <div className="p-2">
         <Button
            isLoading={isLoading}
            onClick={loginHandler}
            variation="login-button"
         >
            Login
         </Button>
      </div>
   );
}

export default Login;
