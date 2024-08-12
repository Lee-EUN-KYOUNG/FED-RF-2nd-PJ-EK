//
import React, { useContext, useEffect, useState } from "react";
import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import BookMark from "./BookMark";
import { exData } from "../data/exhibition_data_sub";
import { bdata } from "../data/bookmark_data";

// 제이쿼리
import $ from "jquery";

// 폰트 어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

//컨텍스트 API 불러오기
import { dCon } from "./dCon";
import { addComma } from "../func/common_fn";

//CSS 불러오기
import "../../css/pivot/_search.scss";

//////////////////////////// 컴포넌트 구역
export const Search = memo(({ goPage }) => {
  console.log("써치들어옴!");
  //function Search({ loginMsg, loginSts, logoutFn, goPage }) => {

  // 컨텍스트 사용
  const myCon = useContext(dCon);

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

  /******************************************************************** 
  
                    [컨텍스트 API 공개 변수들]
    1. setPgName :  페이지 이름 셋팅
    2. setMarkSts : 카트 사용 여부 셋팅
    3. setLocalsMark : 로컬스 카트 데이터 변경 함수
    4. localsMark : 로컬스 카트 데이터 변수
    5. bdata = 전시회 데이터

  ********************************************************************/

  // 로컬스 북마크 존재여부변수
  let MarkTemp = false;

  // 북마크 사용여부 : true 일때 사용
  const [markSts, setMarkSts] = useState(MarkTemp);

  /* 
       [컨텍스트 API 공개 변수들]
   1. setMarkSts : 카트 사용 여부 셋팅
   2. setLocalsMark : 로컬스 카트 데이터 변경 함수
   3. localsMark : 로컬스 카트 데이터 변수
   4. bdata = 전시회 데이터
 
 */

  useEffect(() => {
    const bxdata = () => {
      if (!localStorage.getItem("bdata")) {
        localStorage.setItem("bdata", JSON.stringify([]));
        setLocalsMark(localStorage.getItem("bdata"));
        return [];
      }
      //return JSON.parse(bdata);
    };
    console.log("확인:", bxdata);
    bxdata();
  }, []);

  // 강제 리랜더링을 위한 상태변수
  const [force, setForce] = useState(false);
  // -> 불린값을 넣어놓고 강제 리랜더링이 필요한 경우
  // setForce(!force) -> 기존 불린값을 반대로 넣어준다!

  // 로컬스 데이터 가져오기
  const bdata = JSON.parse(myCon.localsMark);
  console.log("로컬스:", bdata);

  const [localsMark, setLocalsMark] = useState(localStorage.getItem("bdata"));
  // 로컬스 북마크 데이터 존재여부에 따라 상태값 변경
  if(localsMark){
    // 데이터가 있으면 MarkTemp값 true로 변경
    // 데이터 개수가 0이 아니어야함!
    let markCnt = JSON.parse(localsMark).length;
    console.log("북마크 데이터수:",markCnt);
    if(markCnt > 0) MarkTemp = true;
  } //////////// 북마크존재여부 if ////////

  // const MyCont = () => {
  //   const [data, setData] = useState([]);
  //   // [ 로컬스 북마크 데이터 상태변수 ] ///
  //   useEffect(() => {
  //     // 컴포넌트가 마운트될 때 로컬스토리지에서 데이터 불러오기
  //     const bdata = JSON.parse(myCon.localsMark);
  //     setData(bdata);
  //   }, [])};

  console.log("조사조사조사!");

  // 전체 데이터 개수
  const dataCnt = bdata.length;
  console.log("데이터수:", dataCnt);

  // 총합계함수 /////////////
  const totalFn = () => {
    // 합계금액은 모든 합계 히든필드 값을 더한다!
    // 제이쿼리 forEach는 each((순번,요소)=>{}) 메서드다!

    let result = 0;

    $(".sum-num2").each((idx, ele) => {
      console.log("값:", $(ele).val());
      // 숫자로 변환후 기존값에 더하기함!
      result += Number($(ele).val());
    });

    // 호출한 곳에 합계리턴
    return result;
  }; ////////// totalFn ///////////

  /// 화면 랜더링 구역 : dataCnt, force의존성
  useEffect(() => {
    // 북마크 버튼 나타나기
    console.log("dataCnt,force의존성");
    $("#marklist")
      .removeClass("on")
      .delay(500) // 애니메이션 지연시간
      .fadeIn(300, function () {
        // 나타난후 클래스 넣으면 오른쪽 이동 + 작아짐
        $(this).addClass("on");
      });
    // 총합계 찍기
    $(".total-num").text(addComma(totalFn()));
  }, [dataCnt, force]);

  // 의존성 추가 -> 강제 리랜더링 상태 변수도 등

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
                placeholder="전시회 찾기"
                style={{color: "hotpink"}}
                autoComplete="off"
                onBlur={removeOn}
                onKeyUp={enterKey}
              />
            </li>
          </ul>
          {/* <BookMark/> */}
          {/* 북마크 버튼 */}
          <section id="marklist">
            <ul className="gnb03">
              <li>
                <a href="#" className="cbtn cbtn2">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    size="2xs"
                    style={{ color: "#023388" }}
                    onClick={(e) => {
                      // 기본 이동 막기
                      e.preventDefault();
                      $("#bookmark").animate({ right: "-60vw" }, 400);
                      $("#bookmark").toggle();
                    }}
                  />
                </a>
                <table
                  id="bookmark"
                  style={{
                    position: "fixed",
                    display: "none",
                    top: "0p",
                    left: "0",
                    zIndex: "999",
                    backgroundColor: "white",
                  }}
                >
                  {/* 항목별 세로 비율 설정 */}
                  <colgroup>
                    <col span="1" style={{ width: "5%" }} />
                    <col span="1" style={{ width: "45%" }} />
                    <col span="1" style={{ width: "17.5%" }} />
                    <col span="1" style={{ width: "10%" }} />
                    <col span="1" style={{ width: "5%" }} />
                    <col span="1" style={{ width: "5%" }} />
                    <col span="1" style={{ width: "12.5%"}} />
                  </colgroup>
                  {/* 테이블 제목 */}
                  <caption
                  style={{
                    backgroundColor: "white",
                  }}
                  >
                    <h1> 즐겨찾기 리스트 ({dataCnt})</h1>
                  </caption>
                  {/* 테이블 상단영역 : 분류 항목 출력 */}
                  <thead>
                    <tr>
                      <th>순서</th>
                      <th>전시 이미지</th>
                      <th>전시회 이름</th>
                      <th>전시 기간</th>
                      <th>즐겨찾기 횟수</th>
                      <th>반영여부</th>
                      <th>삭제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={12.5}>
                        <div
                          className="scbar"
                          style={{
                            display: "block",
                            overflowY: "auto",
                            height: "65vh",
                            width: "97vw",
                          }}
                        >
                          {/* 내부용 스크롤되는 테이블 */}
                          <table style={{ margin: "0", width: "100%" }}>
                            <tbody>
                              {/*
                        [포스터 데이터 연동 파트]
                        [데이터 구조정의]
                        1. idx : 전시회고유번호
                        2. poster : 전시회 포스터
                        3. 전시회 : 전시회 이름
                        4. 전시기간 : 전시회기간
                        5. 슬로건 : 서브 타이틀
                        6. cnt : 전시회 북마크 횟수 합계
                        */}
                              {bdata.map((v, i) => (
                                <tr key={i}>
                                  {/* 일련번호 */}
                                  <td>{i + 1}</td>
                                  {/* 상품 번호 */}
                                  <td>
                                    <img
                                      src={process.env.PUBLIC_URL + v.subimg}
                                      alt="item"
                                      style={{
                                        width: "100%",
                                        height: "1000%",
                                      }}
                                    />
                                  </td>
                                  <td>{v.mexhibi}</td>
                                  <td>{v.exdate}</td>
                                  {/* <td>{v.ginfo[1]} </td> */}
                                  <td>{addComma(v.ginfo[0])}개</td>
                                  <td className="cnt-mpart">
                                    <div>
                                      <span>
                                        <input
                                          type="text"
                                          className="item-cnt"
                                          readOnly=""
                                          defaultValue={v.cnt}
                                          onBlur={() => {
                                            console.log("ddd");
                                          }}
                                          //onChange={() => {}}
                                        />
                                        
                                        {/* 반영버튼 */}
                                        <button
                                          className="btn-insert"
                                          onClick={(e) => {
                                            /// 1. 클릭시 실제 데이터 수량변경 반영하기
                                            // 대상: bdata -> 배열변환데이터
                                            // i는 배열순번임!(map 돌때 i가 들어옴)
                                            bdata[i].cnt = $(e.currentTarget)
                                              .siblings(".item-cnt")
                                              .val();
                                            console.log("수량업데이트:", bdata);
                                            // 2. 데이터 문자화하기 : 변경된 원본을 문자화
                                            let res = JSON.stringify(bdata);

                                            // 3.로컬스 "bdata"반영하기
                                            localStorage.setItem("bdata", res);

                                            // 4. 즐겨찾기 전역상태변수 변경
                                            myCon.setLocalsMark(res);

                                            // 5. 반영버튼 숨기기
                                            $(e.currentTarget)
                                              .hide() // 숨기기
                                              .next() // "취소"버튼
                                              .hide(); // 숨기기

                                            // -> 아래 6번은 리랜더링 되면 해결됨
                                            // 그리고 데이터변경 sync가 맞지 않는 경우가
                                            // 생기게 됨!
                                            // 데이터를 변경했음에도 리랜더링이 안된 이유는
                                            // 배열의 객체값이 변경되거나 배열 순서를 변경한
                                            // 경우 배열이 변경되었다고 체크되지 않는다!
                                            // 따라서 이때 강제 리랜더링이 필요하다!
                                            setForce(!force);

                                            // 6. 전체 총합계 계산 다시하기
                                            //$(".total-num").text(addComma(totalFn()));
                                          }}
                                        >
                                          반영
                                        </button>
                                        {/* 취소버튼 */}
                                        <button
                                          className="btn-cancel"
                                          onClick={(e) => {
                                            $(e.currentTarget)
                                              .hide()
                                              .prev() // "반영"버튼
                                              .hide()
                                              .siblings("input")
                                              .val(v.cnt);
                                            // 취소버튼 자신의
                                            // css를 변경하고(안보이게)
                                            // 이전버튼인 "반영"버튼도
                                            // 안보이게 하고
                                            // 형제요소중 input을 찾아
                                            // 값으로 기존값인 v.cnt를 넣는다!
                                          }}
                                        >
                                          취소
                                        </button>
                                        <b
                                          className="btn-cnt"
                                          onClick={(e) => {
                                            // 업데이트 대상 (input)
                                            let tg = $(
                                              e.currentTarget
                                            ).siblings("input");

                                            // 입력창의 blur 이벤트발생을 위해 강제로 포커스를 준다
                                            tg.focus();
                                            // 하위 클릭된 이미지 종류 파악하기
                                            // e.target으로 설정하여 하위 요소인 이미지가 선택되게 해줌
                                            // e.currentTarget은 이벤트가 걸린 요소 자신이다
                                            let btnAlt = $(e.target).attr(
                                              "alt"
                                            );
                                            console.log(btnAlt);
                                            // 증가 감소 분기하여 숫자 변경 반영하기
                                            if (btnAlt == "증가") {
                                              //tg값을 읽어와서 1을 더한
                                              tg.val(Number(tg.val()) + 1);
                                            } /////////// if
                                            else if (btnAlt == "감소") {
                                              // tg값을 읽어와서 1을 뺀다
                                              // 단 1보다 작아지면 안됨
                                              tg.val(
                                                Number(tg.val()) == 1
                                                  ? 1
                                                  : Number(tg.val() - 1)
                                              );
                                            } /////////// else if
                                            // 클릭시 반영버튼 나타나기
                                            $(e.currentTarget)
                                              .siblings(".btn-insert")
                                              .show()
                                              .next() // 취소버튼
                                              .show();
                                          }}
                                        >
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/img/cnt_up.png"
                                            }
                                            alt="증가"
                                          />
                                          <img
                                            src={
                                              process.env.PUBLIC_URL +
                                              "/img/cnt_down.png"
                                            }
                                            alt="감소"
                                          />
                                        </b>
                                      </span>
                                    </div>
                                  </td>
                                  <td>
                                    {/* <span className="sum-num1">
                                      {addComma(v.ginfo[0] * v.cnt)}
                                    </span>
                                    개 */}
                                    {/*
                          계산된 합계 금액 숫자만 히든 필드에 넣고
                          총합계 계산에 사용함
                          */}
                                      {
                                      <input
                                        className="sum-num2"
                                        type="hidden"
                                        defaultValue={v.ginfo[0] * v.cnt}
                                      />
                                    }
                                  </td>
                                  <td>
                                    {/* 데이터 삭제 기능 버튼 */}
                                    <button
                                      className="cfn"
                                      onClick={() => {
                                        //e.preventDefault();
                                        // confirm()의 "확인" 클릭시 true
                                        if (window.confirm("지우시겠습니까?")) {
                                          //console.log("삭제");
                                          //console.log("현재객체", bdata);
                                          //console.log("지울순번", i);
                                          // splice 자체를 찍으면 지워진 요소가 찍힘
                                          //console.log("지움",bdata.splice(i,1));

                                          // 지울 배열 순번은 map()에서 i로 들어옴
                                          // 지울 배열은 bdata임

                                          // 데이터 지우기
                                          bdata.splice(i, 1);

                                          // 데이터 문자화하기 : 변경된 원본을 문자화
                                          let res = JSON.stringify(bdata);

                                          // 로컬쓰 "bdata"에 반영하기
                                          localStorage.setItem("bdata", res);

                                          // 즐겨찾기 리스트 전역 상태 변수 변경
                                          myCon.setLocalsMark(res);

                                          // 데이터 갯수가 0이면 즐겨찾기 리스트 상태변수를 flase로 변경하여
                                          // 즐겨찾기 리스트 출력을 없앤다

                                          if (bdata.length == 0)
                                            myCon.setMarkSts(false);
                                        } ////// if
                                      }}
                                    >
                                      ×
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="6">즐겨찾기 추가 총 횟수 :</td>
                        <span
                        className="total-num"
                        style={{
                          fontSize:"1.4rem",
                          fontWeight:"bold",
                          marginLeft: "-10vw",
                          fontFamily: "Gowun Dodum",
                      }}
                        >
                        </span>
                        <a style={{
                          fontSize:"1.4rem",
                          fontWeight:"bold",
                          fontFamily: "Gowun Dodum",
                          }}>개</a>
                    </tr>
                  </tfoot>
                </table>
              </li>
            </ul>
          </section>
          {/* 북마크 즐겨찾기 개수 출력박스 */}
          <div className="cntBx">{dataCnt}</div>
          {/* 검색 기능 링크 - 클릭시 검색창 보이기 */}
          <a href="#" onClick={showSearch}></a>
        </section>
      </div>
    </>
  );
});
