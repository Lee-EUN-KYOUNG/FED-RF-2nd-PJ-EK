// 상단영역 컴포넌트 ///

// GNB 데이터 불러오기
import { Link, useNavigate } from "react-router-dom";
// import { menu } from "../data/gnb";
//import LogPage from "../modules/LogPage";

import Logo from "../modules/Logo";
import TextBanner from "../modules/HeadLine";
import {Search} from "../modules/Search";



// 상단 영역 CSS 불러오기`
import "../../css/pivot/top_area.scss";
import { useCallback } from "react";

/// 컴포넌트 코딩구역
export default function TopArea() {

  //const logpage = useCallback(()=>{
  //  loginMsg, loginSts, logoutFn, goPage
  //});

  const goPage = useNavigate();
  console.log("여기");

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
            <a
                href="#"
                onClick={(e) => {
                  // 기본 이동 막기
                  e.preventDefault();
                  // 라우터 이동 메서드 호출
                  goPage("/");
                }}
              >
                <Logo logoStyle="top" />
              </a>
              {/* <Link to="/">
                <Logo logoStyle="top" />
              </Link> */}
            </li>
            {/* 2. 헤드라인 영역 */}
            <li>
              <TextBanner />
            </li>
            {/* 3. 서치 박스 및 북마크 영역 */}
            <li>
              <Search goPage={goPage} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
} /////////// TopArea /////////////////////
