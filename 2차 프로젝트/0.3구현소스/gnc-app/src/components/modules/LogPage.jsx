import React, { memo } from "react";
import { Link } from "react-router-dom";



export const LogPage = memo(({ loginMsg, loginSts, logoutFn }) => {
  console.log("상단영역!!!");
  return (
    <>
    {/* 로그인 환영메시지 박스 */}
    <div className="logmsg">{loginMsg}</div>
      {
        /* 회원가입, 로그인 버튼 - 로그인 상태가 null일때 나옴 */
        loginSts === null && (
          <>
            <li>
              <Link to="/member">회원가입</Link>
            </li>
            <li>
              <Link to="/login">로그인</Link>
            </li>
          </>
        )
      }
      {
        /* 로그인 상태이면 로그아웃 버튼 나옴 */
        loginSts !== null && (
          <>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  // 기본 이동 막끼
                  e.preventDefault();
                  // 로그아웃 처리 함수 호출
                  logoutFn();
                }}
              >
                로그아웃
              </a>
            </li>
          </>
        )
      }
    </>
  );
}); /////////// LogPage /////////////////////
