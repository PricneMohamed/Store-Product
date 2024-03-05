import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/Slider.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function Sliderproduct() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  },[]);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
             product.map((ele)=>{
                return(
                    <SwiperSlide key={ele.id}>
                <img src={ele.image} className="imageProduct" />
              </SwiperSlide>
                )
            })
        }


      </Swiper>
    </>
  );
}
