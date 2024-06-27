import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./css/grid_styles.scss";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import gnData from "../data/gnc_data";

export default function MainGrid() {
  

  /////////////////////////////////////
  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="myGrid"
      >
        {gnData.map(
          (v, i) =>
            Number(v.idx) <= 5 && (
              <SwiperSlide key={i}>
                <div>
                  <section className="gncom-box">
                    <FontAwesomeIcon
                      icon={faPaperclip}
                      rotation={180}
                      size="2xs"
                      style={{
                        position: "absolute",
                        left: "50%",
                        translate: "-50%",
                        top: "-18px",
                        color: "rgb(225 24 65)",
                        fontSize: "28px",
                      }}
                    />
                    <div className="comp-tit1">
                      <img src={v.compimg} alt={v.compname} />
                    </div>
                    <div className="comp-tit2">
                      <h1>{v.compname}</h1>
                    </div>
                    <div className="comp-tit3">
                      {v.comptext.split("^").map((v, i) => (
                        <p key={i}>{v}</p>
                      ))}
                    </div>
                    <div className="comp-tit4">
                      <h2>
                        Tel. {v.comptel} / Fax. {v.compfax}
                      </h2>
                    </div>
                    <a
                      href="#"
                      onClick={() => window.open(v.compweb)}
                      className="comp-tit5"
                    >
                      <h3>{v.compweb}</h3>
                    </a>
                  </section>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}
