import React, { useEffect, useRef } from "react";
import ArtList from "../modules/ArtList";
import { Link, useNavigate } from "react-router-dom";

import exData from "../data/exhibition_data";


// CSS 불러오기
import "../../css/pivot/artlist.scss";


export default function Exhibition() {
  // const artgridRef = useRef(null);

  const goNav = useNavigate();
  const goPage = (seq) => {
    goNav("/ExhibiDetail",{state:{page:seq}})
  };
  
  useEffect(() => {
    // ArtList(artgridRef);
  }, []);

  // 코드리턴구역 /////////////////
  return (
    <>
      <div className="exhibiton-mbx">
        <h1>EXHIBITION</h1>
      </div>
      <button
        className="go-mbtn"
        style={{
          width: "100%",
          height: "1vh",
          fontSize: "1.2rem",
          border: "none",
          backgroundColor: "#fff",
          paddingTop: "35px",
          textAlign: "left",
          paddingLeft: "31px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "darkpurple",
            fontFamily: "Noto Sans KR",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          ← 뒤로가기
        </Link>
      </button>
      <div id="art-showbx">
      {Array(26)
        .fill()
        .map((_, i) => (
          <div className="art-wbox" key={i}
          style={{
            cursor: "pointer",}}
            onClick={()=>{
              goPage(i);
            }}
            >
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/subimg/subimg" +
                (i+1 < 10 ? "0" + (i+1) : i+1) +
                ".jpg"
              }
              alt="item image"
            />
            <div className="art-tit">
              <h3>{exData[i].mexhibi}</h3>
            </div>
          </div>
        ))}

      </div>
    </>
  );
}
