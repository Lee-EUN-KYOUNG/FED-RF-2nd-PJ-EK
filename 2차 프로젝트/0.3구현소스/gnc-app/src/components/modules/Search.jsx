//
import React from "react";
import { memo } from "react";


// 제이쿼리
import $ from "jquery";

// 폰트 어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

//CSS 불러오기
import "../../css/pivot/_search.scss";

//////////////////////////// 컴포넌트 구역
export const Search = memo(({ goPage }) => {
  
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
    console.log(e.key,e.keyCode);
    if (e.key == "Enter") {
      // 입력창의 입력값 읽어오기 : val()사용
      let txt = $(e.target).val().trim();
      console.log(txt);
      // 빈값이 아니면 검색함수 호출(검색어전달!)
      if (txt != "") {
        // 입력창 비우고 부모박스 닫기
        $(e.target).val("").parent().hide();
        // 검색 보내기
        goSearch(txt);
        console.log("검색내보내기",goSearch);
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

  // 코드리턴구역 //////////////
  return (
    <>
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
          <ul className="gnb03">
            <li>
              {/* 북마크 버튼 */}
              <FontAwesomeIcon
                icon={faBookmark}
                size="2xs"
                style={{ color: "#023388" }}
              />
            </li>
          </ul>
          {/* 검색 기능 링크 - 클릭시 검색창 보이기 */}
          <a href="#" onClick={showSearch}>
          </a>
        </section>
      </div>
    </>
  );
});
