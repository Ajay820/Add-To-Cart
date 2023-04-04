
export const Cart = () => {
 const products = [ {
    "id": "1002",
    "name": "bOAt Rockerz 450",
    "product_image": "/images/1002.png",
    "price": "$49"
},
{
  "id": "1003",
  "name": "JBL TUNE",
  "product_image": "/images/1003.png",
  "price": "$60"
}

 ]
  return (
    <div>
      {products.map((data)=>(
        <div key={data.id}>
          <div className="h-[100px] w-4/5 flex mx-auto mt-20 justify-around bg-black text-white p-2">
            <img src={data.product_image} alt="" />
            <h1 className="mt-7">{data.name}</h1>
            <p className="mt-7">{data.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
