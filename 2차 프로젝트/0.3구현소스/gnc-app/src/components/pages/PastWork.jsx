import React from "react";

// 모듈 불러오기
import PastArt from "../modules/PastArt";

// 데이터불러오기
import exData from "../data/exhibition_data";

// CSS 연결
import "../../css/pivot/pwork.scss";

function PastWork(props) {
  const eData = exData;
  //
  return (
    <section className="pwork">
      <div className="past-cont">
        <div className="art-box">
          <aside className="list-title">
            <h1>과거작품리스트</h1>
          </aside>
          <PastArt />
          <aside className="list-area">
            {eData.map(
              (v, i) =>
                Number(v.idx) <= 26 && (
                  <ul key={i}>
                    <h3>{v.subexhibi}</h3>
                    <li>전시 기간 : {v.exdate}</li>
                    <li>전시 장소 : {v.exhall}</li>
                    <li>{v.URL복사}</li>
                  </ul>
                )
            )}
          </aside>
          <div className="underline-area">
            {exData.map(
              (v, i) => Number(v.idx) <= 26 &&
            <span key={i}>
                <li>{v.mexhibi}</li>
            </span>
            )}
          </div>
        </div>
        <div className="right-poster"></div>
      </div>
    </section>
  );
}

export default PastWork;
