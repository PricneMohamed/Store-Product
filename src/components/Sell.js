import { useNavigate } from "react-router";
import Swal from 'sweetalert2'
export default function Sell() {
  const ngv = useNavigate()
  function AddProduct(data){
    fetch("https://fakestoreapi.com/products",{
      method:"POST",
      body:JSON.stringify({
        title:data.ProductName,
        description:data.description,
        category:data.Category,
        price:data.Price,
        image:data.Image
      })
    }).then(data=>console.log(data))
    doneAlert()
  }
  const doneAlert = ()=>{
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  }
  return (
    <div className="Sell felx justify-center items-center">
      <h1 className="lg:text-[40px] absolute left-[50%] translate-x-[-50%] md:text-[35px] sm:text-[30px] text-[20px] font-bold">Enter Your Product</h1>
      <form className="flex justify-center items-center flex-col flex-wrap p-10 mt-10" onSubmit={
        (e)=>{
          e.preventDefault()
          const dataForm = new FormData(e.target);
          const data = Object.fromEntries(dataForm.entries())
          if(data.ProductName !== '' &&
              data.description !== '' &&
              data.category !== '' &&
              data.price !== '' &&
              data.Image !== ''
          ){
            AddProduct(data)
            ngv("/allProduct")
          }else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please make sure that the fields are filled out",
            });
          }
        }
      }>
        <div className="space-y-12  w-[70%] flex justify-center flex-col ">
          <div className="border-b border-gray-900/10 pb-12 flex justify-center felx-col">
            <div className="mt-10 flex justify-center flex-col w-[60%] flex-wrap">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="ProductName"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    type="description"
                    autoComplete="email"
                    className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full w-[50%]">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Category"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-[200%] p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full w-[50%]">
                <label
                  htmlFor="Price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="Price"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-[200%] p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
              <div className="col-span-full w-[50%]">
                <label
                  htmlFor="Image"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Url Image
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Image"
                    id="Image"
                    autoComplete="Image"
                    className="block w-[200%] p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                  />
                </div>
              </div>
              {/* <div className="col-span-full w-[50%] mt-10">
                <div className="font-[sans-serif] max-w-md mx-auto">
                  <label className="text-[14px] text-black mb-2 block">
                    Upload Photo Product
                  </label>
                  <input
  type="file"
  name="image"
  className="w-[200%] text-black text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-black rounded"
  onChange={(e) => {
    const file = e.target.files[0];  
    const reader = new FileReader(); 

    reader.onload = (event) => {
      const imageUrl = event.target.result; 
      };

    reader.readAsDataURL(file); 

  }}
/>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          onClick={
            ()=>{
              const em = document.querySelectorAll("input")
              em.forEach((ele)=>{
                ele.value = '';
              })
            }
          }
          >
            Cancel
          </button>
          <button
          type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={
              ()=>{
              }
            }
            >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
