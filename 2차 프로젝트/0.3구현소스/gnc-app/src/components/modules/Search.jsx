//
import React from "react";

// 폰트 어썸 불러오기

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

//CSS 불러오기
import "../../css/pivot/_search.scss";

//////////////////////////// 컴포넌트 구역
function Search(props) {
  return (
    <>
      <div className="searchbox">
        <section className="search-track">
          <ul className="gnb02">
            <li className="searching">
              {/*  돋보기 검색버튼 */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ color: "#545454",}}
                className="schbtn"
                title="Open search"
              />
            {/* 입력창 */}
            <input
            id="schin"
            type="text"
            placeholder="Search for Exhibition"
            />
            </li>
          </ul>
          <ul className="gnb03">
            <li>
              {/* 북마크 버튼 */}
              <FontAwesomeIcon icon={faBookmark} style={{ color: "#023388" }} />
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Search;
