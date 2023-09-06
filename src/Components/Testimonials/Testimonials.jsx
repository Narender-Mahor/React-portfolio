import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper"
import SwiperCore, {
    Autoplay
  } from 'swiper/core';


import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
SwiperCore.use([Autoplay]);

const Testimonials = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate saepe autem fugiat temporibus fuga, maiores illo, cum aspernatur sapiente error nam ducimus! Animi, culpa nisi quos enim est dignissimos laboriosam?",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate saepe autem fugiat temporibus fuga, maiores illo, cum aspernatur sapiente error nam ducimus! Animi, culpa nisi quos enim est dignissimos laboriosam?",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate saepe autem fugiat temporibus fuga, maiores illo, cum aspernatur sapiente error nam ducimus! Animi, culpa nisi quos enim est dignissimos laboriosam?",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate saepe autem fugiat temporibus fuga, maiores illo, cum aspernatur sapiente error nam ducimus! Animi, culpa nisi quos enim est dignissimos laboriosam?",
    },
  ];
  return (
    <div className="t-wrapper" id="testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/* slider */}
      <Swiper
      modules={[ Pagination ]}
      pagination={{ clickable: true }}
      slidesPerView={1} 
      loop={true}
      autoplay={{
          delay: 2000,
          disableOnInteraction: false
      }}
      >
        {clients.map((item, index)=> {
           return(
            <SwiperSlide key={index}>
            <div className="testimonials">
                <img src={item.img} alt=""/>
                <span>{item.review}</span>
            </div>
                

            </SwiperSlide>
           )
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
