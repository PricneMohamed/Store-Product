import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Sliderproduct from "./Sliderproduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faShop } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Home() {
  const [index, setindex] = useState(1);
  const word = "Welcome to our website!";
  useEffect(() => {
    const inter = setInterval(() => {
      setindex((i) => i + 1);
      return () => {
        clearInterval(inter);
      };
    }, 100);
  }, []);
  const compeletHedr = () => {
    return `${word.slice(0, index)}|`;
  };
  return (
    <div className="Home">
      <div className="Homeimage c1 flex  flex-col items-center p-10">
        <h1 className="text-white hed text-[40px] font-bold mt-20">
          {compeletHedr()}
        </h1>
        <h2 className="text-white lg:text-[25px] md:text-[25px] sm:text-[24px] p-3 mt-10 font-[400] sm:w-[80%] md:w-[80%] lg:w-[80%]">
          We are delighted to have you here and visit our site. We hope you find
          what you're looking for and enjoy your experience with us. If you have
          any questions or inquiries, please don't hesitate to ask. Our team is
          always ready to assist you and provide the necessary support. Thank
          you once again for your visit, and we look forward to serving you to
          the best of our abilities.
        </h2>
        <Link to="/allProduct" className="bg-gray-700 shadow-lg mt-10 px-5 font-bold tracking-[2px] hover:bg-sky-600 btnSlider duration-150  py-3 flex justify-center items-center rounded-md text-white">
            GO  
        <span className="ml-2 text-[20px] duration-200">
        <FontAwesomeIcon icon={faArrowRight} />
        </span>
        </Link>
      </div>
      <div className="c2 mt-20 flex items-center flex-col p-10">
        <Sliderproduct />
        <h1 className="lg:text-[30px] md:text-[30px] sm:text-[25px] text-[20px] h1Slider p-10">
          Discover our amazing products There are more than 20 products waiting
          for you to see them
        </h1>
        <Link to={"/allProduct"} className="bg-sky-500 px-5 font-bold tracking-[2px] hover:bg-sky-600 btnSlider duration-150  py-3 flex justify-center items-center rounded-md text-white">
            GO  
        <span className="ml-2 text-[20px] duration-200">
        <FontAwesomeIcon icon={faArrowRight} />
        </span>
        </Link>
      </div>
      <div className="c3 h-[30vh] bg-[#183153] flex justify-evenly items-center lg:flex-row md:flex-row sm:flex-row flex-col flex-wrap">
    <Link   className="text-white princeDown font-bold text-[20px]">
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
