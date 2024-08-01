import React, { useContext, useEffect, useState } from "react";

import { posterData } from "../data/poster_data_sub.js";
import ExhibiDetail from "../pages/ExhibiDetail.jsx";



// CSS 불러오기
import "../../css/pivot/bookmark.scss";



function BookMark(props) {
  // 상태변수 만들기 //////
  // 상품토탈정보
  const [tot, setTot] = useState(posterData[0]);

  /////////////코드 리턴 ////////////////////
  return (
    <>
      {/* 아이템 디테일 컴포넌트 불러오기
          cat - 카테고리, ginfo - 상품정보, 
          dt - 상품데이터, setGinfo - ginfo값 변경메서드
        */}
      <ExhibiDetail
        // 상품토탈정보
        tot={tot}
        // dt 전체데이터(한줄리스트때문)
        dt={posterData}
        // setTot - 한줄리스트 클릭시 변경
        setTot={setTot}
      />
    </>
  );
}

export default BookMark;
