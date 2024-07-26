/// 인트로 페이지
import React from "react";

import "../../css/pivot/notice.scss";
import MainSwiper from "../plugin/MainSwiper";
import { Link, useNavigate } from "react-router-dom";

function IntroPage(props) {
  const goNav = useNavigate();
  const goPage = (seq) => {
    goNav("/ExhibiDetail", { state: { page: seq } });
  };

  return (
    <>
      <MainSwiper />
      {/* <Link to="EXHIBITION"> */}
      <span className="intro-imgtbox">
        <h1 onClick={() => goPage(0)} style={{ cursor: "pointer" }}>
          자세히 보기
        </h1>
      </span>
      {/* </Link> */}
    </>
  );
}

export default IntroPage;
