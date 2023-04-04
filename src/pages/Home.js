import React from 'react'

import { useState,useEffect } from 'react'

import {Link} from "react-router-dom"


export const Home = () => {
    const [pro ,setPro] = useState([])

    const [cart,setCart]= useState([])

    useEffect(()=>{

        async function getPro(){
            const response = await fetch("http://localhost:8000/products")
            const data = await response.json()
            setPro(data)
        }getPro()
    },[])


    const handle=(id)=>{
        getitem()
        async function getitem(){
            const response = await fetch(`http://localhost:8000/products/${id}`)
            const data = await response.json()
            setCart(data)
        }
    }
console.log(cart)
    
  return (
    <main>
        <section className="w-4/5  mx-auto">
        <div className="flex justify-start flex-wrap m-5">
            {pro.map((data)=>(
            <div key={data.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                  <Link to={"#"}>
                      <img className="rounded-t-lg" src={data.product_image} alt="" />
                  </Link>
              <div className="p-5">
                  <Link to={"#"}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
                  <div className='flex justify-between'>
                      <button>{data.price}</button>
                      <button onClick={()=>{handle(data.id)}} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center mt-2 text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Cart</button>
                  </div>
              </div>
            </div>
        ))}
        </div>
        </section>
    </main>
  )
}
