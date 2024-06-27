import React from "react";

// 모듈 불러오기
import PastArt from "../modules/PastArt";

// 데이터불러오기
import exData from "../data/exhibition_data";

// CSS 연결
import "../../css/pivot/pwork.scss";
import posData from "../data/poster_data";

function PastWork(props) {
  const eData = exData;
  //
  return (
    <section className="pwork">
      <div className="past-cont">
        <div className="art-box">
          {/* <aside className="list-title">
            <h1>과거작품리스트</h1>
          </aside> */}
          <section className="art-main">
            <aside className="banner-area">
              <PastArt />
            </aside>
            <aside className="list-area">
              {eData.map(
                (v, i) =>
                  Number(v.idx) <= 26 && (
                    <div key={i} class={i == 0 ? "on" : ""}>
                      <h3>{v.subexhibi}</h3>
                      <ul>
                        <li>전시 기간 : {v.exdate}</li>
                        <li>전시 장소 : {v.exhall}</li>
                        <li>{v.URL복사}</li>
                      </ul>
                    </div>
                  )
              )}
            </aside>
            <aside className="right-poster">
              {posData.map((v, i) => (
                <img
                  key={i}
                  src={"/img/" + v.poster}
                  alt={v.전시회}
                  className={i == 0 ? "on" : ""}
                />
              ))}
            </aside>
          </section>
          <div className="underline-area">
            <ul>
              {exData.map(
                (v, i) =>
                  Number(v.idx) <= 26 && (
                    <li key={i}>
                      <h2>{v.mexhibi}</h2>
                    </li>
                  )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PastWork;
