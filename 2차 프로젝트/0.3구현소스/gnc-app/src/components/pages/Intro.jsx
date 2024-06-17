// 인트로영역
import React from 'react';
import Notice from '../modules/notice';
import IntroPage from '../modules/IntroPage';
import IntroPoster from '../modules/IntroPoster';
import GnbMenu from '../modules/GnbMenu';


function Intro(props) {
    return (
        <>
            <Notice/>
            <IntroPage />
            <IntroPoster/>
            <GnbMenu />
        </>
    );
}

export default Intro;