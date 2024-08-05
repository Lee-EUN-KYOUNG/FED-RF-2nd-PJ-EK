import React, { useContext, useEffect, useState } from "react";


import ExhibiDetail from "../pages/ExhibiDetail.jsx";
import {bdata} from "../data/bookmark_data";

import $ from "jquery";
import { addComma } from "../func/common_fn.js";


// CSS 불러오기
import "../../css/pivot/bookmark.scss";

function BookMark(props) {

  // 상태변수 만들기 //////
  // 전시회 토탈정보
  const [tot, setTot] = useState(bdata);

  console.log("데이터 확인:",bdata);

  



  /////////////코드 리턴 ////////////////////
  return (
    <>
          <div className="mark-list">
          {bdata.map((v, i) => (
            <div key={i}>
              <a href="#"
              onClick={(e)=>{
                // 기본이동막기
                e.preventDefault();
                // 상품토탈정보 업데이트
                setTot(v);
                // 상세상품정보 박스 보이기
                $(".bgbx").show();
                // console.log("data:",v);
              }}>
                [{i+1}]
                <img
                  src={process.env.PUBLIC_URL + v.subimg}
                  alt=""
                />
                <aside>
                  <h2>{v.mexhibi}</h2>
                  <h3>{addComma(v.ginfo[0])}개</h3>
                </aside>
              </a>
            </div>
          ))}
        </div>
      {/* 상세 전시회 정보 박스 */}
      <div
        className="bgbx"
        style={{
          position: "fixed",
          top: "0px",
          padding: "12vh 4vw 0",
          boxSizing: "border-box",
          backdropFilter: "blur(8px)",
          width: "100%",
          height: "100vh",
          zIndex: "9999",
        }}
      ></div>

    {  <ExhibiDetail
        // 전시회 토탈정보
        tot={tot}
        // dt 전체데이터(한줄리스트때문)
        dt={bdata}
        // setTot - 한줄리스트 클릭시 변경
        setTot={setTot}
      />}

    </>
  );
}

export default BookMark;
