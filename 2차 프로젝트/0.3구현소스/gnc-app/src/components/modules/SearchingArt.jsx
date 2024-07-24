import React from 'react';


/// CSS 불러오기
import "../../css/pivot/searching_art.scss";

// 데이터 불러오기
import { Link } from "react-router-dom";

import {posterData} from "../data/poster_data_sub.js";




function SearchingArt(newList) {
    /// dt -  검색된 배열 데이터, total - 검색된 배열 데이터 개수
    console.log(newList, Array.isArray(newList));


  const dt = newList["newList"];

  const total = dt.length;
  console.log("데이터수:",total);
  
  return (
    <>
      {
        // 데이터 갯수가 0이 아닐때 출력
        total > 0 && (
          <ul className="clist">
            {dt.map((v, i) => (
              <li key={i}>
                <Link to="/EXHIBITION">
                  <img src={process.env.PUBLIC_URL+"/img/"+v.subimg} alt={v.전시회} />
                  <h3>{v.전시회}</h3>
                </Link>
              </li>
            ))}
          </ul>
        )
      }
      {
        /// 선택 데이터가 0개이면 아래 출력
        total == 0 && (
          // 데이터 없으면 출력할 코드
          <h2 style={{ textAlign: "center" }}>
            해당 전시회가 없습니다. 다시 검색해주세요!
          </h2>
        )
      }
    </>
  );
}

export default SearchingArt;