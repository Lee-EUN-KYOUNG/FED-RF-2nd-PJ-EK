// 공지 상단 메뉴
import React from "react";
import IntroPage from "../modules/IntroPage";

// CSS 연결
import "../../css/pivot/notice.scss";

//////////// 코드구역
function Notice(props) {
  return (
    <>
      <section className="notice-box">
        <div className="notice-bar">
          {/* 공지바 영역 */}
          <h1>
            <p>NOITCE</p>
          </h1>
          <div className="notice-main">
            <h2>NEW!</h2>
            <div className="notice-text">
              <p>GNC 미디어 에이전시 홈페이지 리뉴얼!</p>
            </div>
          </div>
        </div>
        <div className="intro-page">
          {/* 인트로 메인 이미지 영역 */}
          <IntroPage />
        </div>
      </section>
    </>
  );
}

export default Notice;
