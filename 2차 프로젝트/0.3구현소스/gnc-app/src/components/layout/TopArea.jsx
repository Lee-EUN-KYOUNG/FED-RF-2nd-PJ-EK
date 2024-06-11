// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link } from "react-router-dom";
// import { menu } from "../data/gnb";

import Logo from "../modules/Logo";
import TextBanner from "../modules/HeadLine";

// 상단 영역 CSS 불러오기
import "../../css/pivot/top_area.scss";

/// 컴포넌트 코딩구역
export default function TopArea() {
  //// 코드 리턴구역 //////////////
  return (
    <>
      {/* 1.상단영역 */}
      <header className="top-area">
        {/* 네비게이션 GNB파트 */}
        <nav className="gnb01">
          <ul className="logo-part">
            {/* 1. 로고 컴포넌트 */}
            <li>
              <Link to="/">
                <Logo logoStyle="top" />
              </Link>
            </li>
          </ul>
          <ul className="hline-part">
            {/* 2. 헤드라인 영역 */}
            <TextBanner />
          </ul>
        </nav>
      </header>
    </>
  );
} /////////// TopArea /////////////////////
