import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function () {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  },[]);
  const AddCart = (prod)=>{
    fetch(`http://localhost:3000/cart`,{
            method:"POST",
            body:JSON.stringify({
                name:prod.title,
                description:prod.description,
                category:prod.category,
                image:prod.image,
                price:prod.price
            })
          }
          ).then(data=>console.log(data))
  }
  const ngv = useNavigate()
  const alertSuc = ()=>{
  Swal.fire({
  position: "center",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
  }
  return (
    <div className="tableProduct w-[95%] mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
              description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-28 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((ele)=>{
                return(
                            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={ele.id}>
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {ele.title}
                            </th>
                            <td className="px-6 py-4">{ele.description.slice(0,30)}...</td>
                            <td className="px-6 py-4">$ {ele.price}</td>
                            <td className="px-6 py-4">
                            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 uppercase " onClick={
                              ()=>{
                                AddCart(ele)
                                alertSuc()
                                setTimeout(() => {
                                  ngv("/cart")
                                }, 1000);
                              }
                            }>Add In Cart</button>
                            <Link to={`/buy/${ele.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase">details</Link>
                            </td>
                          </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
