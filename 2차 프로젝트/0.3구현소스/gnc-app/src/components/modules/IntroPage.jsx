/// 인트로 페이지
import React from 'react';

import "../../css/pivot/notice.scss";
import MainSwiper from '../plugin/MainSwiper';


function IntroPage(props) {
    return (
        <>
        <MainSwiper />
        <span className='intro-imgtbox'>
            <h1>자세히 보기</h1>
        </span>
        </>
    );
}

export default IntroPage;