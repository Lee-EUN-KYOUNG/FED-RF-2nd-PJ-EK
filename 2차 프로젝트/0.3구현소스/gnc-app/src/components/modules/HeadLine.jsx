// 헤드라인 컴포넌트
import React from "react";

// 폰트 어썸 불러오기

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {faBookmark} from "@fortawesome/free-regular-svg-icons";

// css 불러오기
import "../../css/pivot/_headline.scss";

export default function TextBanner(props) {
  //// 코드 리턴 구역
  return (
    <>
      <div className="headbox">
        <ul className="text-track">
          <h2 className="content">
            현재 전시 중 : 헬로키티 50주년 특별전, DDP 동대문 디자인 플라자
            뮤지엄 전시1관 지하 2층, 2024년 4월 13일 ~ 8월 13일
          </h2>
        </ul>
        <ul className="gnb02">
          <li>
          {/*  돋보기 검색버튼 */}
          <FontAwesomeIcon
          icon={faMagnifyingGlass} 
          />
          </li>
          <li>
          <FontAwesomeIcon
          icon={faBookmark}
           />
          </li>
        </ul>
      </div>
    </>
  );
} //////////// HeadLine
