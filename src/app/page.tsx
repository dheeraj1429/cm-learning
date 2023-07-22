// const getData = async function () {
//    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments', { cache: 'no-cache' });
//    return await data.json();
// };

import { Avatar, AvatarImage } from '@/components/ui/avatar/avatar';
import { Input } from '@/components/ui/input/input';

export default async function Home() {
   // const data = await getData();
   return (
      <div className="p-2">
         {/* <Avatar className="w-20 shadow-xl bg-gray-300">
            <AvatarImage
               alt="user profile image"
               src="https://images.unsplash.com/photo-1689613188308-ef2815f15810?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
            />
         </Avatar> */}
         <Input type="text" />
      </div>
   );
}
