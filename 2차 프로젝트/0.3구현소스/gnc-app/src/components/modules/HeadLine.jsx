// 재귀호출 컴포넌트
import React from "react";

// 재귀호출 JS  불러오기
import mytextFn from "../func/call_myself";



function TextBanner(props) {
  // 기능 생성자 함수 인스턴스 생성하기
  const mytFn = new mytextFn();

  //// 코드 리턴 구역
  return (
    <>
      <section className="sec-intro">
        <h1 className="headbox">
          {mytFn.map((i) => (
            <div key={i}>
              <ul className="linetit">
                <li>
                  <h2>재귀호출테스트</h2>
                </li>
              </ul>
            </div>
          ))}
        </h1>
      </section>
    </>
  );
} //////////// HeadLine

export default TextBanner;
