// nextauth.d.ts
import { DefaultSession, DefaultUser } from 'next-auth';
// common interface for JWT and Session
interface IUser extends DefaultUser {
   role?: { roleName: string };
   accessToken: string;
}
declare module 'next-auth' {
   interface User extends IUser {}
   interface Session {
      user?: User;
   }
}
declare module 'next-auth/jwt' {
   interface JWT extends IUser {}
}
