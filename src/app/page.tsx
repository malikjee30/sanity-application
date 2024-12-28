import { client } from "@/sanity/lib/client";


export default async function Home() {
  const data  = await client.fetch(`*[_type == 'Product']`)
  console.log(data);
  return( 
      <div>
      <h1>Data coming from sanity</h1>
      <section>
        {
          data.map((item: any, i) => {
            return(
              <div className="flex gap-6">
                <h1>{item.productName}</h1>
                <p>{item.price}</p>
              </div>
            );
          })}
        
      </section>
    </div>
  );
}