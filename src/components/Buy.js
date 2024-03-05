import React, { useEffect, useState } from "react";
import "../styles/Buy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShop } from "@fortawesome/free-solid-svg-icons";
import TableProductBuy from "./TableProductBuy";
import { Link } from "react-router-dom";
export default function Buy() {
  const [index, setindex] = useState(0);
  const word = "Welcome,Sir in the Shop";
  useEffect(() => {
    const inter = setInterval(() => {
      setindex((i) => i + 1);
      return ()=>{
        clearInterval(inter);
      }
    },100);
  }, []);
  const compeleteWelcoming = () => {
    return `${word.slice(0, index)}|`;
  };
  return (
    <div className="Buy">
      <div className="logoBuy c1 flex flex-col items-center">
        <h1 className="h1Welcoming text-white lg:text-[40px] md:text-[30px] sm:text-[27px] text-[20px] font-bold tracking-[3px] mt-28 p-3">
          {compeleteWelcoming()}
        </h1>
        <h2 className="h2Welcoming text-white lg:text-[30px] md:text-[30px] sm:text-[25px] text-[25px] p-10">
          Welcome to the purchasing section. Here you will learn about the
          products, their prices, and details about them. We hope you like our
          products.
        </h2>
        <Link to="/allProduct" class="primary-button flex justify-center items-center gap-1 duration-150 buyABtn rounded-md font-bold text-white tracking-[2px]">
          Go
          <span className="ico1">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="c2 flex items-center mt-10 flex-col">
        <h1 className="lg:text-[40px] md:text-[35px] sm:text-[30px] text-[25px] font-bold tracking-[2px]">
          Our Products
        </h1>
        <TableProductBuy />
      </div>
      <div className="c3 mt-10 h-[30vh] bg-[#183153] flex justify-evenly items-center lg:flex-row md:flex-row sm:flex-row flex-col flex-wrap">
    <Link to="/allProduct"  className="text-white princeDown font-bold text-[20px]">
        Prince
        <span className="ml-10 shop">
        <FontAwesomeIcon icon={faShop} />   
             </span>
        </Link>
    <Link to={"/buy"} className="text-white hover:text-gray-200 downLink">Buy A Product</Link>
    <Link to={"/sell"} className="text-white hover:text-gray-200 downLink">Sell A Product</Link>
    <Link to={""} className="text-white hover:text-gray-200 downLink">A Bout US </Link>
    <Link to={""} className="text-white hover:text-gray-200 downLink">Contact With Us</Link>
      </div>
    </div>
  );
}
