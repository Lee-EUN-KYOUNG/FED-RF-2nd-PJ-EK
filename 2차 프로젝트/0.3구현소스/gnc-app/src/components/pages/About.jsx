import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import gnData from "../data/gnc_data";
import { Link } from "react-router-dom";

// CSS 연결하기
import "../../css/pivot/about.scss";

export default function About(props) {
  /////////////////////////////////////
  return (
    <>
    {/* 제목 */}
      <div className="about-bx">
        <h1>ABOUT</h1>
      </div>
    {/* 뒤로가기 */}
    <button 
    className='go-mbtn'
    style={{
      width: "100%",
      height: "1vh",
      fontSize: "1.2rem",
      border: "none",
      backgroundColor: "#fff",
      paddingTop: "35px",
      textAlign: "left",
      paddingLeft: "31px"
    }}
    >
      <Link to="/"
      style={{
        textDecoration: "none", 
        color:"darkpurple",
        fontFamily: "Noto Sans KR",
        fontWeight: "700",
        fontSize: "1.2rem",
      }}
      >← 뒤로가기
      </Link>
    </button>

      <Swiper
        slidesPerView={5}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="myGridbx"
      >
        {gnData.map(
          (v, i) =>
            Number(v.idx) <= 5 && (
              <SwiperSlide key={i}>
                <div>
                  <section className="gcom-box">
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
                    <div className="abcomp-tit1">
                      <img
                        src={process.env.PUBLIC_URL + v.compimg}
                        alt={v.compname}
                      />
                    </div>
                    <div className="abcomp-tit2">
                      <h1>{v.compname}</h1>
                    </div>
                    <div className="abcomp-tit3">
                      {v.comptext.split("^").map((v, i) => (
                        <p key={i}>{v}</p>
                      ))}
                    </div>
                    <div className="abcomp-tit4">
                      <h2>
                        Tel. {v.comptel} / Fax. {v.compfax}
                      </h2>
                    </div>
                    <a
                      href="#"
                      onClick={() => window.open(v.compweb)}
                      className="abcomp-tit5"
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
