import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

export default function ProductDetails() {
  const [product, setproduct] = useState({});
  const nagv = useNavigate() 
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  const { productId } = useParams();
  return (
    <div className="ProductDetails p-10 flex mt-10 items-center flex-col h-auto">
      <img className="w-1/4" src={product.image} />
      <h1 className="lg:text-[25px] md:text-[25px] sm:text-[20px] text-[18px] mt-5 font-bold p-3">
        {product.title}
      </h1>
      <h2 className="lg:text-[24px] md:text-[24px] sm:text-[22px] text-[13px] mt-5 p-4">
        {product.description}
      </h2>
      <h2 className="lg:text-[24px] md:text-[24px] sm:text-[22px] text-[13px] mt-5 p-4">
        {product.price} $
      </h2>
      <button
        type="button"
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 uppercase"
        onClick={() => {
          Swal.fire({
            title: "Good job!",
            text: "The item has been added to the cart",
            icon: "success",
          });
          setTimeout(nagv("/cart"),1000)
          fetch("http://localhost:3000/cart",{
            method:"POST",
            body:JSON.stringify({
                name:product.title,
                description:product.description,
                category:product.category,
                price:product.price
            })
          }
          ).then(data=>console.log(data))
        }
        }
      >
        Add IN Cart
      </button>
    </div>
  );
}
