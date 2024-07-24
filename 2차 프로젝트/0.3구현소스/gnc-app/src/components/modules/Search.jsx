//
import React, { useState } from "react";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookMark from "./BookMark";
import { exData } from '../data/exhibition_data_sub';
import { posterData } from "../data/poster_data_sub";
// 제이쿼리
import $ from "jquery";

// 폰트 어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


//컨텍스트 API 불러오기
import { dCon } from "./dCon";

//CSS 불러오기
import "../../css/pivot/_search.scss";

//////////////////////////// 컴포넌트 구역
export const Search = memo(({ loginMsg, loginSts, logoutFn, goPage }) => {


  const [tot, setTot] = useState(posterData[0]);



  //const goPage = useNavigate();

  const addOn = (e) => {
    document.querySelector(".gnb02").classList.add("on");
    document.querySelector(".gnb02 input").focus();
  };
  const removeOn = (e) => {
    document.querySelector(".gnb02").classList.remove("on");
    document.querySelector(".gnb02 input").value = "";
  };

  //const goPage = useNavigate();

  // 검색관련 함수들
  // 1. 검색창 보이기 함수
  const showSearch = (e) => {
    // 기본 기능 막기
    e.preventDefault();

    // 검색창 보이기
    // show는 display를 보이게함
    $(".searching").show();

    // 입력창에 포커스 보내기
    $("#schin").focus();
  }; //////// showSearch함수

  // 2. 검색창에 엔터키 누르면 검색함수 호출
  const enterKey = (e) => {
    // e.keyCode는 숫자, e.key문자로 리턴함
    console.log(e.key, e.keyCode);
    if (e.key == "Enter") {
      // 입력창의 입력값 읽어오기 : val()사용
      let txt = $(e.target).val().trim();
      console.log(txt);
      // 빈값이 아니면 검색함수 호출(검색어전달!)
      if (txt != "") {
        // 입력창 비우고 부모박스 닫기
        // $(e.target).val("").parent().hide();
        // 검색 보내기
        goSearch(txt);
        console.log("검색내보내기", goSearch);
      } /// if ///
    } //// if ////
  }; //////// enterkey 함수

  // 3. 검색 페이지로 검색어와 함께 이동하기 함수
  const goSearch = (txt) => {
    console.log("검색하기:");
    /// 라우터 이동 함수로 이동하기
    // 네비게이트 메서드 (라우터 주소, {state:{보낼 객체}})
    goPage("search", { state: { keyword: txt } });
  }; ///////// goSearch ///////////

  // 로컬스 북마크 존재여부 변수
  let markTemp = false;

  // 로컬스 카트 데이터 상태변수
  const [localsMark, setLocalsMark] = useState(
    localStorage.getItem("posterData")
  );

  //로컬스 북마크 데이터 존재 여부에 따라 상태값 변경
  if (localsMark) {
    // 데이터가 있으면 markTemp값 true로 업데이트
    // 데이터 개수가 0이 아니어야함
    let markCnt = JSON.parse(localsMark).length;
    console.log("북마크 데이터수:", markCnt);
    if (markCnt > 0) markTemp = true;
  }

  // 상태 관리 변수 셋팅
  // 1. 페이지 변경 상태 변수
  const [pgName, setPgName] = useState("gnb03");

  // 2. 카트 리스트 사용 여부 = true일때 사용
  const [markSts, setMarkSts] = useState(markTemp);

  /******************************************************************** 
  
                    [컨텍스트 API 공개 변수들]
    1. setPgName :  페이지 이름 셋팅
    2. setMarkSts : 카트 사용 여부 셋팅
    3. setLocalsMark : 로컬스 카트 데이터 변경 함수
    4. localsMark : 로컬스 카트 데이터 변수

  ********************************************************************/

  // 코드리턴구역 //////////////
  return (
    <>
        {/* 로그인 환영메시지 박스 */}
      {/* <div className="logmsg">{loginMsg}</div> */}
      <div className="searchbox">
        <section className="search-track">
          <ul className="gnb02">
            <li className="searching">
              {/*  돋보기 검색버튼 */}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2xs"
                style={{ color: "#545454" }}
                className="schbtn"
                title="Open search"
                onClick={(e) => {
                  // 검색어 읽기
                  addOn();
                  let stxt = e.currentTarget.nextElementSibling.value;
                  if (stxt.trim() != "") {
                    // 검색하기
                    goSearch(stxt);
                  }
                  //else {
                  //  // 검색어 비었을때 메시지
                  //  alert("Please enter a search term!");
                  //}
                }}
              />
              {/* 입력창 */}
              <input
                id="schin"
                type="text"
                placeholder="Search for Exhibition"
                autoComplete="off"
                onBlur={removeOn}
                onKeyUp={enterKey}
              />
            </li>
          </ul>

          {/* 북마크 버튼 */}
          <dCon.Provider
            value={{ setPgName, setMarkSts, setLocalsMark, localsMark }}
          >
            <ul className="gnb03">
              <li>
                <FontAwesomeIcon
                  icon={faBookmark}
                  size="2xs"
                  style={{ color: "#023388" }}
                  onClick={(e) => {
                    // 기본 이동 막기
                    e.preventDefault();
                    $("#marklist").show();
                  }}
                />
                {markSts && (
                  <BookMark
                    // 전시회 토탈 정보
                    tot={tot}
                    // dt 전체 데이터 (한줄 리스트 때문)
                    dt={posterData}
                    // 한줄 리스트 클릭시 변경
                    setTot={setTot}
                  />
                )}
              </li>
            </ul>
          </dCon.Provider>
          {/* 검색 기능 링크 - 클릭시 검색창 보이기 */}
          <a href="#" onClick={showSearch}></a>
        </section>
      </div>
    </>
  );
});
