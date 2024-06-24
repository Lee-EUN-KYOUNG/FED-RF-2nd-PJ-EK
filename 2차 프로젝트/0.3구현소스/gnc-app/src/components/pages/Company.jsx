import React from 'react';


// 모듈 연결하기
import MainGrid from '../plugin/MainGrid';


function Company(props) {
    return (
        <>
        <MainGrid />
        <section className="gnc-box">
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
        </>
    );
}

export default Company;