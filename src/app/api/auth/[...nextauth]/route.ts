import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
   pages: {
      signIn: '/login',
   },
   session: {
      strategy: 'jwt',
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 24 * 60 * 60,
   },
   providers: [
      CredentialsProvider({
         name: 'Sign in',
         credentials: {},
         async authorize(credentials) {
            const { email, password } = credentials as {
               email: string;
               password: string;
            };

            const bodyData = JSON.stringify({
               email,
               password,
            });

            const response = await fetch(`http://localhost:8000/auth/login`, {
               method: 'POST',
               headers: {
                  'Content-type': 'application/json; charset=UTF-8',
               },
               body: bodyData,
            });

            const data = await response.json();

            if (!data) throw new Error('Invalid credentials');

            return {
               id: data?._id,
               email: data?.email,
               accessToken: data?.accessToken,
               role: data?.userRole,
            };
         },
      }),
   ],
   callbacks: {
      async jwt({ token, user }) {
         if (user) {
            token.role = user?.role;
            token.id = user?.id;
            token.accessToken = user?.accessToken;
         }
         return token;
      },
      async session({ session, user, token }) {
         if (token && session.user) {
            session.user.role = token.role;
            session.user.accessToken = token.accessToken;
         }

         return session;
      },
   },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
