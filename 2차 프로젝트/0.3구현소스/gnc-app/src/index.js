import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 컴포넌트 연결
import Layout from "./components/layout/Layout";
import Main from "./components/pages/Main";

// 전체 공통 CSS 불러오기
//import "../src/css/pivot/index.scss";

/// 코드 구역
export default function MainComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          {/* <Route path="movies" element={<Movies />} /> */}
          {/* <Route path="movies/series" element={<Series />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

/// 컴포넌트 출력 ///
// 먼저 root 객체 만들기
const root = ReactDOM.createRoot(document.querySelector("#root"));
// 출력하기
root.render(<MainComponent />);
