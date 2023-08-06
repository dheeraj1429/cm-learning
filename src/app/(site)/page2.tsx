const getData = async function () {
   const respose = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
      cache: 'force-cache',
   });

   const data = await respose.json();
   return data;
};

export default async function Home() {
   const data: { userId: number; id: number; title: string; body: string }[] =
      await getData();

   if (!data) {
      throw new Error('No data available');
   }

   return (
      <div className="p-4">
         <div className="p-2 text-center items-center space-x-2 grid grid-cols-3">
            {data.map((el) => (
               <div className="shadow h-full p-4" key={el?.id}>
                  <h1 className="text-sm text-gray-500">{el?.body}</h1>
               </div>
            ))}
         </div>
      </div>
   );
}
