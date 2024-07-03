
// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./css/swiper_styles.scss";

// import required modules
import { Scrollbar } from "swiper/modules";



export default function MainSwiper() {
  const imgArr = ["intro01", "intro02", "intro03"];

  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {imgArr.map((v, i) => (
          <SwiperSlide>
            <img
            key={i}
            src={process.env.PUBLIC_URL+ "./img/" + v}
            alt={"Intro image"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
