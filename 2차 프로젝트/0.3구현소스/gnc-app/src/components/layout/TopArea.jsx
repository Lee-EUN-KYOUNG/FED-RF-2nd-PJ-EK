// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link } from "react-router-dom";
// import { menu } from "../data/gnb";

import Logo from "../modules/Logo";

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
          <ul>
            {/* 1. 로고 컴포넌트 */}
            <li>
              <Link to="/">
                <Logo logoStyle="top" />
              </Link>
            </li>
            {/* 2. GNB메뉴 데이터 배열로 만들기 */}
          </ul>
        </nav>
        {/* 헤드라인 영역 */}
        <nav className="headline">
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>
    </>
  );
} /////////// TopArea /////////////////////
