// 전체 레이아웃 컴포넌트 ///

import { useCallback, useEffect, useState } from "react";
import FooterArea from "./FooterArea";
import MainArea from "./MainArea";
import TopArea from "./TopArea";
import { useNavigate } from "react-router-dom";


//컨텍스트 API 불러오기
import { dCon } from "../modules/dCon";

// 제이쿼리
import $ from "jquery";


export default function Layout(){


// 상태 관리 변수
  // 1. 로그인 상태 관리 변수
  // -> 초기값으로 세션 스토리지 "minfo"를 할당함
  const [loginSts, setLoginSts] = useState(sessionStorage.getItem("minfo"));

  // 상태관리변수 변경함수도 전달시 콜백처리해야 메모이제이션됨!
  // const 콜백처리함수 = useCallback((x)=>{setLoginSts(x)},[loginSts])

  //const [loginSts, setLoginSts] = useState();
  //useState(localStorage.getItem("minfo"));

  // 2. 로그인 환영 메시지 상태 변수
  const [loginMsg, setLoginMsg] = useState(null);
  //console.log(loginMsg);

    // [공통함수]
  // 1. 라우팅 이동 함수 : 라우터 이동 후크인 useNavigate는 다른 useCallback() 후크로 처리할 수 없다
  // 별도의 함수를 만들고 이것을 콜백 처리해준다
  const goNav = useNavigate();
  // 함수 메모처리를 위해 useCallback()에 넣어준다
  const goPage = useCallback((pm1, pm2) => {
    goNav(pm1, pm2);
  }, []);

  // 2. 로그인 환영 메시지 생성 함수
  const makeMsg = useCallback((name) => {
    // 유저아이콘
    let usrIcon = ["🙍‍♂️", "🧏‍♀️", "🦸‍♂", "👨‍🎤", "🦸‍♀"];
    // 랜덤수 : 0~4사이의 수
    let rdm = Math.floor(Math.random() * 5);
    // 로그인 메시지 상태변수 업데이트
    setLoginMsg(`Welcome ${name} ${usrIcon[rdm]}`);

    //  메시지 생성시 게시판 조회 데이터 세션스 삭제(초기화)
    // 추가 삭제 : 게시판 조회 데이터 세션스
    sessionStorage.removeItem("bd-rec");
  }, []); /////// makeMsg 함수 /////////

  // 3. 로그 아웃 함수 만들기
  const logoutFn = useCallback(() => {
    // 1. 로그인 상태값 null
    setLoginSts(null);
    // 2. 세션스 지우기 : minfo
    // 세션스 지우기
    sessionStorage.removeItem("minfo");
    // 추가 삭제 : 게시판 조회 데이터 세션스
    sessionStorage.removeItem("bd-rec");

    // 3. 로그인 메시지 초기화
    setLoginMsg(null);
    // 4. 메인 페이지로 돌아가기
    goPage("/");
    //5. 
  }, []); //////// logoutFn 함수 /////////  

    //////////// 화면 랜더링 구역 -> 로그인 상태 체크 ///////////
    useEffect(() => {
        // 세션스(minfo)의 값이 있으면 null이 아니면 로그인 상태 변수 업데이트
        // null이 아니면 조건문이 true
        if (sessionStorage.getItem("minfo")) {
          // 세션스 변수 할당
          let ss = sessionStorage.getItem("minfo");
          // 로그인 상태값
          setLoginSts(ss);
          // 로그인 메시지 업데이트 : 세션스값의 unm(이름값)을 보내준다
          makeMsg(JSON.parse(ss).unm);
        } ///// if ///////
        //$.cookie("aa","bb",{expires: 2});
      }, []);






    //// 코드 리턴구역 //////////////
    return(
        <dCon.Provider
      value={{
        loginSts,
        setLoginSts,
        setLoginMsg,
        goPage,
        makeMsg,
        logoutFn,
        loginMsg,
      }}
    >
           {/* 1.상단영역 */}
           <TopArea 
           loginMsg={loginMsg}
           loginSts={loginSts}
           logoutFn={logoutFn}
           goPage={goPage}
           />
           {/* 2.메인영역 */}
           <MainArea />
           {/* 3.하단영역 */}
           <FooterArea />
    </dCon.Provider>
    );

} /////////// Layout /////////////////////