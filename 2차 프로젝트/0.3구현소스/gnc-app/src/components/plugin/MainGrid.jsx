import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./css/grid_styles.scss";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default function MainGrid() {

    const imgArr = ["gnc01", "gnc02", "gnc03", "gnc04","gnc05"];
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 3,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="myGrid"
      >
        {imgArr.map((v, i) => (
          <SwiperSlide key={i}>
            <img src={"./img/" + v + ".jpg"}
            alt="GNC IMG"
            className="Grid-box"
            />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
