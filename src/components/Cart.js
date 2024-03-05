import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
export default function Cart() {
  const [cart, setcart] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setcart(data));
  }, []);
  const [delet,setdelete] = useState(null)
  const deleted = (deleProduct) => {
    fetch(`https://fakestoreapi.com/products/${deleProduct}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setcart((del)=>del.filter((i)=>i.id !==deleProduct)));
  };
  const alert = (deleProduct) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: true,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            {
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            },
            deleted(deleProduct)
          );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  useEffect(()=>{
    Swal.fire({
      title: "ملحوظة",
      text: "اذا قمت بأختيار منتج لأضافته في السلة و لم يظهر فذلك ليس خطأ مني ولكن بسبب انه لا يوجد انه لم يتم انذاء api مخصص للعمل مع موقعي",
      icon: "warning",
    });
  })
  return (
    <div className="Cart flex items-center flex-col mt-10">
      <h1 className="text-[40px] font-bold">Your Cart</h1>
      <div className="tableProduct w-[95%] mt-10">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  category
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
              {cart.map((ele) => {
                return (
                  <tr
                    key={ele.id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {ele.name}
                    </th>
                    <td className="px-6 py-4">{ele.category}</td>
                    <td className="px-6 py-4">
                      {ele.description? ele.description.slice(0,30):null}...
                    </td>
                    <td className="px-6 py-4">$ {ele.price}</td>
                    <td className="px-6 py-4">
                      <button className="focus:outline-none text-white bg-sky-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 capitalize tracking-[2px]">
                        confirmation
                      </button>
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 capitalize tracking-[2px]"
                        onClick={() => {
                          alert(ele.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
