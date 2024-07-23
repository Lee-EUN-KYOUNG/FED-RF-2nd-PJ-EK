import React, { useContext, useEffect, useState } from 'react';


// 데이터 불러오기
import exData from '../data/exhibition_data';
import { posterData } from '../data/poster_data_sub';
import ArtList from '../modules/ArtList';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { dCon } from '../modules/dCon';

// CSS 불러오기
import "../../css/pivot/exhibi_detail.scss";

// 제이쿼리 불러오기
import $ from "jquery";

function ExhibiDetail({ dt, setTot, tot }) {


  // 컨텍스트 사용
  const myCon = useContext(dCon);

  /* 
  [포스터 데이터 연동 파트]
  [데이터 구조정의]
  1. idx : 전시회고유번호
  2. poster : 전시회 포스터
  3. 전시회 : 전시회 이름
  4. 전시기간 : 전시회기간
  5. 슬로건 : 서브 타이틀
  6. cnt : 전시회 북마크 횟수 합계
  
  */

  // 전시회 정보 개별 셋업
  //let gpos = tot.poster;
  // let ginfo = tot.전시회;
  // let gtime = tot.전시기간;
  // let gtit = tot.슬로건;
  // let gIdx = tot.idx;


  // 도착페이지 파라미터 받기
  const {state} = useLocation();
  console.log(state.page);
  
    ///////// 화면 렌더링 실행 구역
    useEffect(()=>{window.scrollTo(0,0);});


    useEffect(()=>{
      // 1. 대상 출력
          // 숫자 출력 input
          const sum = $("#sum");
      // 총합계 요소
          const total = $("#total");

    },[]);





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
        onInit={(swp)=>{ // swp 스와이퍼객체 자신
          swp.slideTo(state.page,0);
          // slideTo(이동할 페이지 순번, 이동시간)
          // 실제로 슬라이드 해당 순번으로 이동함!
          // 이동시간을 0주면 이동 애니메이션이 안보임
          
        }}
        >
      {/* 1. 상세 정보 박스 */}
        {/* 1-1. 전시회 제목박스 */}
          {exData.map(
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
                    {/* 전시회 날짜명 */}
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
                        <img src={process.env.PUBLIC_URL+v.subimg} alt="" />
                    </div>
                    {/* 슬로건 파트 */}
                    <div className="sub-title">
                      <h2>{v.subtitle}</h2>
                    </div>
                    {/* 메인 서브 텍스트 파트 */}
                    <div className="main-subtit">
                      <h3>{v.subtext}</h3>
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
                    <button className="ex-bookmark"
                    onClick={()=>{

                      // 1. 로컬스 전시회 데이터에 넣기
                      if(!localStorage.getItem("posterData")){
                        // 로컬스없으면 만들기
                        localStorage.setItem("posterData","[]");
                      } ////////////// if
      
                      /// 2. 로컬스 읽어와서 파싱하기;
                      let locals = localStorage.getItem("posterData");
                      locals = JSON.parse(locals);
      
                      // 3. 기존 데이터 중 동일 데이터 거르기
      
                      // [방법 2]
                      // 배열.includes(비교값)
                      // 주의사항: 배열값이 단일값이어야 비교가 됨
                      // 예) let aa= [11, 22, 33]
                      // aa.includes(22) -> 있으면 결과가 true
      
                      // idx값만 모아서 다른 배열 만들기
                      let newLocals = locals.map(v=>v.idx);
                      console.log("idx 새배열:",newLocals);
      
                        // include 비교
                        //let retSts = newLocals.includes(gIdx);



                        //console.log("중복상태:",retSts);

                        //if(retSts){
                        //  alert("중복 선택입니다!")
                        //  return;
                        //}/////if
      


                      // 4. 로칼스에 객체 데이터 추가하기
                      //locals.push({
                      //  idx: gIdx,
                      //  info: ginfo,
                      //  time: gtime,
                      //  tit : gtit,
                      //  poster : gpos,
                      //});
      


                       



                      // 로컬스에 문자화하여 입력하기
                      localStorage.setItem("posterData", JSON.stringify(locals));
      
                      // 로컬스 즐겨찾기 데이터 상태값 변경
                      myCon.setLocalsMark(localStorage.getItem("posterData"));
                      // 즐겨찾기 리스트 생성 상태값 변경
                      myCon.setMarkSts(true);
                      }}
                    >
                      즐겨찾기
                    </button>
                    {/* 전시회 URL 복사 */}
                    <button className="ex-linkbx">
                      <a href={v.URL복사} target="_blank">URL 복사</a>
                    </button>
                    {/* 전시회 목록 */}
                    <button className="ex-btn">
                    <Link to="/EXHIBITION">
                    전시 목록
                    </Link>
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