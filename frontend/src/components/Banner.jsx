import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleShopNowClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         
         <SwiperSlide style={{ backgroundImage: "url('/images/banner10.jpg')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4 text-black"></h1>
           
         </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: "url('banner6.jpg')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
         <div className="text-center ">
           
         </div>
      
        </SwiperSlide>
       
        <SwiperSlide style={{ backgroundImage: "url('/images/megasale.jpg')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4"></h1>
           
         </div>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundImage: "url('/images/banner8.jpg')", height: "550px", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="text-center ">
           <h1 className="text-5xl font-bold mb-4 text-black"></h1>
           
         </div>
        </SwiperSlide>
  
        
      </Swiper>
    </>
  );
}


        


 