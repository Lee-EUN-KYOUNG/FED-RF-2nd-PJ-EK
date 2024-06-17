import React from "react";
import IntroPoster from "../modules/IntroPoster";
import GnbMenu from "../modules/GnbMenu";


//CSS 연결
import "../../css/pivot/intro_side.scss";


function IntroSide(props) {
  return (
    <>
    <div className="intro_side">
    {/* 사이드 포스터 */}
    <section className="side-poster">
      <IntroPoster />
    </section>
    {/* GNB 메뉴 */} 
    <section className="Gnb-Menu">
      <GnbMenu />
    </section>
    </div>
    </>
  );
}

export default IntroSide;
