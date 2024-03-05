import React, { useEffect, useState } from 'react'
import "../styles/product.css"
import { Link } from 'react-router-dom'
export default function AllProduct() {
    const [product,setproduct] = useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=>res.json())
        .then(data=>setproduct(data))
    },[])
  return (
    <div className='AllProduct p-10 mt-20 flex items-center flex-col'>
        <h1 className='lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] whitespace-nowrap font-bold tracking-[3px]'>Welcome in Our Store </h1>
        <div className='flex justify-evenly flex-wrap'>
        {product.map((ele)=>{
            return(
                <div class="relative product flex overflow-hidden flex-col justify-center mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl lg:w-96 md:w-80 sm:w-72 w-[100%]" key={ele.id}>
  <div class="relative lg:h-[32%] md:h-[32%] sm:h-[32%] h-auto  mx-4 flex justify-center  -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
    <img
    style={{objectFit:"cover"}}
    width="200px"
      src={ele.image}
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      {ele.title}
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
        {ele.description.slice(0,120)}...
    </p>
  </div>
  <div className="p-6 pt-0">
    <Link
    to={`/buy/${ele.id}`}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Details
    </Link>
  </div>
</div> 
            )
        })}
        </div>
    </div>
  )
}
