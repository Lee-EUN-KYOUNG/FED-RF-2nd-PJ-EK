// 인트로영역
import React from 'react';
import Notice from '../modules/Notice';
import IntroSide from '../modules/IntroSide';

/// CSS 연결
import "../../css/pivot/_intro.scss";
import "../../css/pivot/notice.scss";
import "../../css/pivot/intro_side.scss";


function Intro(props) {
    return (
        <>
        <div className="Intro-area">
            <Notice/>
            <IntroSide/>
        </div>
        </>
    );
}

export default Intro;