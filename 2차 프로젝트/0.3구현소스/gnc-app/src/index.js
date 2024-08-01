import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// 컴포넌트 연결
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";
import Exhibition from "./components/pages/Exhibition";
import ExhibiDetail from "./components/pages/ExhibiDetail";
import SearchPage from "./components/pages/SearchPage";
import MainNotice from "./components/pages/MainNotice";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Member from "./components/pages/Member";
import Login from "./components/pages/Login";
import BookMark from "./components/modules/BookMark";



// 전체 공통 CSS 불러오기
import "./css/pivot/index.scss";

/// 코드 구역
export default function MainComponent() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="ABOUT" element={<About />} />
          <Route path="EXHIBITION" element={<Exhibition />} />
          <Route path="NOTICE" element={<MainNotice />} />
          <Route path="CONTACT" element={<Contact />} />
          <Route path="ExhibiDetail" element={<ExhibiDetail />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="member" element={<Member />} />                                                     
          <Route path="login" element={<Login />} /> 
          <Route path="bookmark" element={<BookMark />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/////////////// 컴포넌트로 만들고 라우터 안에 넣고 경로 변경시 스크롤 최상단 이동
const ScrollTop = ()=>{

  // 라우터 경로 변경시 path값 읽어오기
  // pathname 객체 속성에 담긴다
  const {pathname} = useLocation();

  // 화면 랜더링 구역에 스크롤 상단이동 코드 넣기
  useEffect(()=>{
    // 스크롤 최상단 이동
    window.scrollTo(0,0);
    // 스크롤 라우터 경로값 확인
    //console.log("라우터 경로:",pathname);

  },[pathname]);

  // 컴포넌트 리턴이 필요하나 소스 리턴이 아니므로 null 을 쓴다
  return null;

}; ////////ScrollTop 컴포넌트 //////////////


/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
