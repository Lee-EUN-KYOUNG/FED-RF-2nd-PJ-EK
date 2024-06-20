
// Import Swiper React components
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./css/styles.scss";

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
          <SwiperSlide key={i}>
            <img src={"./img/" + v + ".jpg"} alt="Intro image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
