// 공지 상단 메뉴
import React from 'react';
import IntroPage from '../modules/IntroPage';

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
            <p>
            NOITCE
            </p>
            </h1>
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