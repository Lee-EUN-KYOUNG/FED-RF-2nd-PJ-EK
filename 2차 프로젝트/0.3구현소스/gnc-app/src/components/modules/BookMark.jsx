import React, { useContext, useEffect, useState } from "react";
import { addComma } from "../func/common_fn";


import {posterData} from "../data/poster_data_sub.js";

//컨텍스트 API 불러오기
import { dCon } from "./dCon";

// CSS 불러오기
import "../../css/pivot/bookmark.scss";

// 제이쿼리 불러오기
import $ from "jquery";

function BookMark(props) {
  /******************************************************************** 
  
                    [컨텍스트 API 공개 변수들]
    1. setPgName :  페이지 이름 셋팅
    2. setMarkSts : 카트 사용 여부 셋팅
    3. setLocalsMark : 로컬스 카트 데이터 변경 함수
    4. localsMark : 로컬스 카트 데이터 변수
    5. posterData = poster 전시회 데이터 posterData

  ********************************************************************/

  // 강제 리랜더링을 위한 상태 변수
  // 불린값을 넣어놓고 강제 리랜더링이 필요한경우
  // setForce(!force); 기존 불린값을 반대로 넣어준다
  const [force, setForce] = useState(false);

  // sestForce(Math.randow()) 랜덤수 넣어준다

  // 컨텍스트 사용
  const myCon = useContext(dCon);

  // 로컬스 데이터 가져오기
  const posterData = JSON.parse(myCon.localsMark);

  // 전체 데이터 갯수
  const dataCnt = posterData.length;
  
  console.log("데이터수:", dataCnt);

  console.log("로컬스:", posterData);

  // 총합계 함수
  const totalFn = () => {
    let result = 0;

    // 합계 금액은 모든 합계 히든 필드 값을 더한다
    // 제이쿼리 forEach는 each((순번,요소)=>{})메서드다
    $(".sum-num2").each((idx, ele) => {
      
      console.log("값:", $(ele).val());

      // 숫자로 변환후 기존값에 더하기함
      result += Number($(ele).val());
    });

    // 호출한 곳에 합계 리턴
    return result;
  };

  /// 화면 랜더링 구역 : dataCnt, force의존성
  useEffect(() => {
    // 카트 버튼 나타나기

    $("#mymark")
      .removeClass("on")
      .delay(500) // 애니메이션 지연시간
      .fadeIn(300, function () {
        // 나타난후 클래스 넣으면 오른쪽 이동 + 작아짐
        $(this).addClass("on");
      });
    // 총합계 찍기
    $(".total-num").text(addComma(totalFn()));
  }, [dataCnt, force]);

  // 의존성 추가 -> 강제 리랜더링 상태 변수도 등

  /////////////코드 리턴 ////////////////////
  return (
    <>
      <section id="marklist">
        <a
          href="#"
          className="cbtn cbtn2"
          onClick={(e) => {
            e.preventDefault();
            $("#marklist").hide();
            // 오른쪽으로 이동하여 사라지게
            $("#marklist").animate({ right: "-60vw" }, 400);
          }}
        >
          <span>닫기버튼</span>
        </a>
        <table>
          {/* 항목별 세로 비율 설정 */}
          <colgroup>
            <col span="1" style={{ width: "8%" }} />
            <col span="1" style={{ width: "5%" }} />
            <col span="1" style={{ width: "38%" }} />
            <col span="1" style={{ width: "15%" }} />
            <col span="1" style={{ width: "20%" }} />
            <col span="1" style={{ width: "8%" }} />
            <col span="1" style={{ width: "5%" }} />
          </colgroup>
          {/* 테이블 제목 */}
          <caption>
            <h1> 즐겨찾기 리스트 ({dataCnt})</h1>
          </caption>
          {/* 테이블 상단영역 : 분류 항목 출력 */}
          <thead>
            <tr>
              <th>번호</th>
              <th>포스터</th>
              <th>전시회명</th>
              <th>전시기간</th>
              <th>슬로건</th>
              <th>합계</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={8}>
                <div
                  className="scbar"
                  style={{
                    display: "block",
                    overflowY: "auto",
                    height: "40vh",
                    width: "60vw",
                  }}
                >
                  {/* 내부용 스크롤되는 테이블 */}
                  <table style={{ margin: "0", width: "100%" }}>
                    <tbody>
                      {/*
                        [포스터 데이터 연동 파트]
                        [데이터 구조정의]
                        1. idx : 전시회고유번호
                        2. poster : 전시회 포스터
                        3. 전시회 : 전시회 이름
                        4. 전시기간 : 전시회기간
                        5. 슬로건 : 서브 타이틀
                        6. cnt : 전시회 북마크 횟수 합계
                        */}
                      {posterData.map((v, i) => (
                        <tr key={i}>
                          {/* 일련번호 */}
                          <td>{i + 1}</td>
                          {/* 상품 번호 */}
                          <td>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                `${v.poster}.png`
                              }
                              alt="item"
                            />
                          </td>
                          <td>{v.전시회}</td>
                          <td>{v.전시기간}</td>
                          <td>{v.슬로건}</td>
                          <td className="cnt-mpart">
                            <div>
                              <span>
                                <input
                                  type="text"
                                  className="item-cnt"
                                  readOnly=""
                                  defaultValue={v.cnt}
                                  onBlur={() => {
                                    console.log("ddd");
                                  }}
                                  //onChange={() => {}}
                                />
                                <b
                                  className="btn-cnt"
                                  onClick={(e) => {
                                    // 업데이트 대상 (input)
                                    let tg = $(e.currentTarget).siblings(
                                      "input"
                                    );
                                    // 입력창의 blur 이벤트발생을 위해 강제로 포커스를 준다
                                    tg.focus();
                                    // 하위 클릭된 이미지 종류 파악하기
                                    // e.target으로 설정하여 하위 요소인 이미지가 선택되게 해줌
                                    // e.currentTarget은 이벤트가 걸린 요소 자신이다
                                    let btnAlt = $(e.target).attr("alt");
                                    console.log(btnAlt);
                                    // 증가 감소 분기하여 숫자 변경 반영하기
                                    if (btnAlt == "증가") {
                                      //tg값을 읽어와서 1을 더한
                                      tg.val(Number(tg.val()) + 1);
                                    } /////////// if
                                    else if (btnAlt == "감소") {
                                      // tg값을 읽어와서 1을 뺀다
                                      // 단 1보다 작아지면 안됨
                                      tg.val(
                                        Number(tg.val()) == 1
                                          ? 1
                                          : Number(tg.val() - 1)
                                      );
                                    } /////////// else if
                                    // 클릭시 반영버튼 나타나기
                                    $(e.currentTarget)
                                      .siblings(".btn-insert")
                                      .show()
                                      .next()
                                      .show();
                                  }}
                                >
                                  {/* <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/cnt_up.png"
                                    }
                                    alt="증가"
                                  /> */}
                                  {/* <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/images/cnt_down.png"
                                    }
                                    alt="감소"
                                  /> */}
                                </b>
                              </span>
                            </div>
                          </td>
                          <td>
                            {/* <span className="sum-num1">
                              {addComma(v.ginfo[3] * v.cnt)}
                            </span>
                            원 */}
                            {/*
                          계산된 합계 금액 숫자만 히든 필드에 넣고
                          총합계 계산에 사용함
                          */}
                            {<input
                              className="sum-num2"
                              type="hidden"
                              defaultValue={v.ginfo[3] * v.cnt}
                            />}
                          </td>
                          <td>
                            {/* 데이터 삭제 기능 버튼 */}
                            <button
                              className="cfn"
                              onClick={(e) => {
                                e.preventDefault();
                                // confirm()의 "확인" 클릭시 true
                                if (window.confirm("지우시겠습니까?")) {
                                  console.log("삭제");
                                  console.log("현재객체", posterData);
                                  console.log("지울순번", i);
                                  // splice 자체를 찍으면 지워진 요소가 찍힘
                                  //console.log("지움",posterData.splice(i,1));

                                  // 지울 배열 순번은 map()에서 i로 들어옴
                                  // 지울 배열은 posterData임

                                  // 데이터 지우기
                                  posterData.splice(i, 1);

                                  // 데이터 문자화하기 : 변경된 원본을 문자화
                                  let res = JSON.stringify(posterData);

                                  // 로컬쓰 "posterData"에 반영하기
                                  localStorage.setItem("posterData", res);

                                  // 즐겨찾기 리스트 전역 상태 변수 변경
                                  myCon.setLocalsMark(res);

                                  // 데이터 갯수가 0이면 즐겨찾기 리스트 상태변수를 flase로 변경하여
                                  // 즐겨찾기 리스트 출력을 없앤다

                                  if (posterData.length == 0)
                                    myCon.setMarkSts(false);

                                } ////// if
                              }}
                            >
                              ×
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="6">즐겨찾기 총 횟수 :</td>
              <td>
                <span className="total-num"></span>개
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </section>
      {/* 카트 상품 개수 출력박스 */}
      <div className="cntBx">{dataCnt}</div>
    </>
  );
}

export default BookMark;
