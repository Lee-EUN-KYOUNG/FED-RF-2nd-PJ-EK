/// 인트로 페이지
import React from 'react';

import "../../css/pivot/notice.scss";
import MainSwiper from '../plugin/MainSwiper';
import { Link } from 'react-router-dom';


function IntroPage(props) {
    return (
        <>
        <MainSwiper />
        <Link to="EXHIBITION">
        <span className='intro-imgtbox'>
            <h1>자세히 보기</h1>
        </span>
        </Link>
        </>
    );
}

export default IntroPage;