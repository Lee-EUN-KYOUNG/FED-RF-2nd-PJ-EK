import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./css/grid_styles.scss";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import gnData from "../data/gnc_data";





export default function MainGrid() {

  //////////////////////////////////////
  return (
    <>
      <Swiper
        slidesPerView={2}
        grid={{
          column: 5,
        }}
        spaceBetween={30}
        //pagination={{
        //  clickable: true,
        //}}
        modules={[Grid, Pagination]}
        className="myGrid"
      >
        {gnData.map(
          (v, i) =>
            Number(v.idx) <= 5 && (
              <SwiperSlide key={i}>
                <Link
                  className="Grid-box"
                  state={{
                    cname: v.cname, // 캐릭터 이름
                    ctext: v.ctext, // 캐릭터 이름
                    comptel: v.comptel, // 캐릭터 설명
                    compfax: v.compfax, // 캐릭터 상세
                    compweb: v.compweb, // 캐릭터 상세
                  }}
                >
                <section className="gncom-box">
                  <div className="comp-tit1">
                  <img src={v.compimg} alt={v.cname} />
                  </div>
                  <div className="comp-tit2">
                  <h1>{v.cname}</h1>
                  </div>
                  <div className="comp-tit3">
                    <h2>{v.comptel}</h2>
                    <h2>{v.compfax}</h2>
                  </div>
                  <div className="comp-tit4">
                    <h3>{v.comptext}</h3>
                    <h3>{v.compweb}</h3>
                  </div>
                </section>
                </Link>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
