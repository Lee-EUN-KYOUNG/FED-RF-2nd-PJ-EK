import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// CSS 연결
import "../../css/pivot/pwork.scss";

// 데이터 불러오기
import exData from "../data/exhibition_data";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

//////////////////////////////////////

export default function PastArt({chgArtFn}) {
  // chgArtFn - 순번으로 내용을 변경하는 부모컴포넌트 함수
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="SwiperArt"
        onSlideChange={(swp)=>{
          console.log("페이지넘김",swp.realIndex);
          chgArtFn(swp.realIndex);
        }}
      >
        {exData.map(
          (v, i) =>
            Number(v.idx) <= 26 && (
              <SwiperSlide key={i}>
                <div className="art-tit1">
                  <img src={v.subimg} alt={v.mexhibi} />
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
