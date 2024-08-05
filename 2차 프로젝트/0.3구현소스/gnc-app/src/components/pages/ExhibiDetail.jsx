import React, { useContext, useEffect, useRef, useState } from "react";

// 데이터 불러오기
// import exData from "../data/exhibition_data";
import bdata from "../data/bookmark_data";
import ArtList from "../modules/ArtList";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { dCon } from "../modules/dCon";

// CSS 불러오기
import "../../css/pivot/exhibi_detail.scss";

// 제이쿼리 불러오기
import $ from "jquery";
import { addComma } from "../func/common_fn";

function ExhibiDetail({ dt, setTot, tot }) {



  console.log("tot 확인:",tot);

  // tot - 상품토탈정보
  // setTot - 상품토탈정보 업데이트함수
  // dt - 상품데이터

  /* 
  [포스터 데이터 연동 파트]
  [데이터 구조정의]
  1. idx : 전시회고유번호
  2. type : 전시회 장르
  3. mexhibi : 전시회 이름
  4. exdate : 전시회기간
  5. subexhibi : 서브 타이틀
  6. cnt : 전시회 북마크 횟수 합계
  
  */

  // 전시회 정보 개별 셋업
  const gtype = tot.Type;
  const gIdx = tot.idx;
  const ginfo = tot.ginfo;


  // console.log(gtype, gexhi, gIdx, ginfo);

  // 컨텍스트 사용
  const myCon = useContext(dCon);

  // 제이쿼리 이벤트함수에 전달할 ginfo값 참조변수
  
  const getGinfo = useRef(ginfo);
  if (getGinfo.current != ginfo) getGinfo.current = ginfo;

  ///////// 화면 렌더링 실행 구역
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    // [ 수량증감 버튼클릭시 증감기능구현 ]

    // 1. 대상요소 ///////
    // (1) 숫자출력 input
    const sum = $("#sum");
    // (2) 수량증감 이미지버튼
    const numBtn = $(".chg_num img");
    // (3) 총합계 요소
    const total = $("#total");
    // console.log(sum,numBtn);

    // 2. 수량증감 이벤트함수 ///
    numBtn.on("click", (e) => {
      // (1) 이미지순번(구분하려고)
      let seq = $(e.currentTarget).index();
      console.log("버튼순번:", seq, e.target);
      // 0은 증가 / 1은 감소

      // (2) 기존 숫자값 읽기
      let num = Number(sum.val());
      console.log("현재숫자:", num);

      // (3) 증감반영하기(0은 false,1은 true 처리)
      sum.val(seq == 0 ? ++num : num == 1 ? 1 : --num);
      // seq가0이냐?그럼 증가:아니면 (num이 1이냐)
      // 그럼1 아니면 감소 -> num이 1이하면 안되니까!
      // 증감기호가 변수 앞에 있어야 먼저증감하고 할당함!

      console.log("ginfo 전달변수확인:", ginfo);
      console.log("getGinfo 참조변수확인:", getGinfo.current);

      // [ 문제!!! ginfo값으로 읽으면 최초에 셋팅된 값이
      // 그대로 유지된다! 왜? 본 함수는 최초한번만 셋팅되기때문! ]
      // [ 해결책 : 새로들어오는 ginfo값을 참조변수에 넣어서
      // 본 함수에서 그 값을 읽으면 된다! ]

      // (4) 총합계 반영하기
      // 원가격은 컴포넌트 전달변수 ginfo[0] -> 갱신안됨!
      // 원가격은 참조변수 getGinfo 사용 -> 매번 업데이트됨!
      total.text(addComma(getGinfo.current[0] * num) + "개");
      
    }); //////// click ////////

    // 참고) 제거용 -> numBtn.off("click");
  }, []); /// 현재컴포넌트 처음생성시 한번만 실행구역 ///

  // [ 화면랜더링구역 : 매번 ] ///
  useEffect(() => {
    // 매번 리랜더링 될때마다 수량초기화!
    $("#sum").val(1);
    // 총합계 초기화
    $("#total").text(addComma(ginfo[0]) + "개");
  }); ////////// useEffect //////

  ////////////// 코드 리턴 구역

  return (
    <>
      <Swiper
        className="Sub-Swiper"
        //spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        // onInit() 메서드는 스와이퍼 로딩시 실행되는 메서드
        onInit={(swp) => {
          // swp 스와이퍼객체 자신
          swp.slideTo(this.state.page, 0);
          // slideTo(이동할 페이지 순번, 이동시간)
          // 실제로 슬라이드 해당 순번으로 이동함!
          // 이동시간을 0주면 이동 애니메이션이 안보임
        }}
      >
        {/* 1. 상세 정보 박스 */}
        {/* 1-1. 전시회 제목박스 */}
        {bdata.map(
          (v, i) =>
            Number(v.idx) <= 26 && (
              <SwiperSlide key={i} className="subcont-slide">
                <div className="ExhibiDetail">
                  <section className="exdesc-box">
                    {/* 전시회 제목박스 영역 */}
                    <div className="ex-mtit">
                      {/* 전시회명 */}
                      <h2>{v.mexhibi}</h2>
                      {/* 전시회 서브명 */}
                      <h3>{v.subexhibi}</h3>
                      {/* 전시회 날짜명 */}
                      <h3>{v.exdate}</h3>
                      {/* 전시회 장소 */}
                      <h3>{v.exhall}</h3>
                    </div>
                    {/* 전시회 설명박스 영역 */}
                    <div className="exdesc-sub">
                      <h2>{v.exsubinfo}</h2>
                    </div>
                  </section>
                  {/* 전시회 서브 메인 영역 */}
                  <section className="main-exdesc">
                    {/* 이미지 파트 */}
                    <div className="main-eximg1">
                      <img src={process.env.PUBLIC_URL + v.subimg} alt="" />
                    </div>
                    {/* 슬로건 파트 */}
                    <div className="sub-title">
                      <h2>{v.subtitle}</h2>
                    </div>
                    {/* 메인 서브 텍스트 파트 */}
                    <div className="main-subtit">
                      <h3>{v.exsubinfo}</h3>
                    </div>
                    {/* <div className="main-excomp">
                      {exData.excomposition.split("^").map((v, i) => (
                        <h4 key={i}>{v}</h4>
                      ))}
                    </div> */}
                  </section>
                  {/* 첫번째 박스 */}
                  <div className="exhibi-box">
                    {/* 전시회 즐겨찾기 */}

                    <button
                      className="ex-bookmark"
                      onClick={(e) => {
                        // 기본이동막기
                        e.preventDefault();
                        
                        // 창닫기
                        $(".bgbx").hide();
                        // 창닫을때 초기화하기!
                        // 수량초기화!
                        $("#sum").val(1);
                        // 총합계 초기화
                        $("#total").text(addComma(ginfo[0]) + "개");

                      // 전시회 상세보기
                      $(".ExhibiDetail").show();
                       if(setTot){
                        return (
                          <a
                            href="#"
                            key={i}
                            onClick={(e) => {
                              // 기본이동막기
                              e.preventDefault();
                              // 선택 데이터 찾기
                              // -> gtype항목값 + ginfo[0]항목
                              let res = dt.find((v) => {
                                if (v.gtype == gtype && v.ginfo[1] == "m")
                                  return true;
                              }); //// find /////
                              console.log(res);
                              // 상품상세모듈 전달 상태변수 변경
                              // find에서 받은값은 객체값
                              // 상품토탈정보로 모든 객체값을 업데이트함
                              setTot(res);
                              
                            }}
                          >
                          </a>
                        );
                       }



                        // 1. 로컬스 전시회 데이터에 넣기
                        if (!localStorage.getItem("bdata")) {
                          // 로컬스없으면 만들기
                          localStorage.setItem("bdata", "[]");
                        } ////////////// if

                        /// 2. 로컬스 읽어와서 파싱하기;
                        let locals = localStorage.getItem("bdata");
                        locals = JSON.parse(locals);

                        // 3. 기존 데이터 중 동일 데이터 거르기

                        // poster값만 모아서 다른 배열 만들기
                        let newLocals = locals.map((v) => v.poster);
                        console.log("idx 새배열:", newLocals);

                        // include 비교
                        let retSts = newLocals.includes(gtype);

                        console.log("중복상태:",retSts);

                        if(retSts){
                        alert("중복 선택입니다!")
                        return;
                        }/////if

                        // 4. 로칼스에 객체 데이터 추가하기
                        locals.push({
                          idx: gIdx,
                          Type : gtype,
                          ginfo: ginfo,
                          cnt: $("#sum").val()
                        });

                        // 로컬스에 문자화하여 입력하기
                        localStorage.setItem(
                          "bdata",
                          JSON.stringify(locals)
                        );
                        console.log(localStorage.getItem("bdata"));
                        // 로컬스 즐겨찾기 데이터 상태값 변경
                        myCon.setLocalsMark(localStorage.getItem("bdata"));
                        // // 즐겨찾기 리스트 생성 상태값 변경
                        // myCon.setMarkSts(true);
                      }}
 
                    >
                      즐겨찾기
                    </button>
                    {/* 전시회 URL 복사 */}
                    <button className="ex-linkbx">
                      <a href={v.URL복사} target="_blank">
                        URL 복사
                      </a>
                    </button>
                    {/* 전시회 목록 */}
                    <button className="ex-btn">
                      <Link to="/EXHIBITION">전시 목록</Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </>
  );
}

export default ExhibiDetail;
