// 재귀호출 JS

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function mytextFn() {
  //초기 셋팅하기
  // 대상 : .gbox
  const gbox = document.querySelector(".gbox");

  // 움직일 대상 : .gbox ul
  let target = el.querySelector(gbox, "ul");

  // 기준값 업데이트 함수
  const updateCriteria = () => window.innerWidth / 2; ////////

  // 기준값 (윈도우 가로폭의 1/4 -> li 하나 크기)
  let criteria = updateCriteria();

  // 리사이즈시 업데이트
  document.addEventListener(window, "resize", () => {
    criteria = updateCriteria();

    console.log("기준값업데이트:", criteria);
  });

  // 현재 translate 값
  let currVal = 0;

  //// 갤러리 박스를 왼쪽으로 계속 움직이게 하는 재귀호출 함수 만들기
  function moveGallery() {
    // 현재값 1씩 감소
    target.style.translate = --currVal + "px";

    // 하나 크기 만큼 나가면 처리 -> 기준값을 마이너스로 하고 소수점 아래는 버림
    // Math.floor() 소수점 아래 내림(버림) 함수
    // == 보다는 <=로 해야 안전함
    if (currVal <= Math.floor(-criteria)) {
      // 맨앞 li 맨뒤로 이동 -> appendChild(맨앞 li요소)
      target.appendChild(el.querySelectorAlll(target, "li")[0]);
      // translate값 초기화
      target.style.translate = "0px";
      // 하나 크기 만큼 나가면 currVal값 초기화
      currVal = 0;
    } ///////////// if ////////////////

    // 재귀호출!(타임아웃함수로 호출함!)
    // stopSts 변수값이 false 일때만 실행하기
    if (!stopSts) setTimeout(moveGallery, 10);
  } ///////// moveGallery 함수 /////////////

  // 대상에 마우스 오버시 멈추고 아웃시 다시 흘러가게 하기!
  // 대상 : .gbox -> gbox 변수
  // 멈춤 상태 변수
  let stopSts = false;

  // 멈추기
  document.addEventListener(gbox, "mouseenter", () => {
    // 멈춤 상태변수 true로 변경
    stopSts = true;
  });

  // 흘러가기
  document.addEventListener(gbox, "mouseleave", () => {
    // 멈춤 상태 변수 false 변경
    stopSts = false;
    // 재귀함수호출
    moveGallery();
  });

  /* setTimeout(moveGallery,2000); */
}
// 함수 내보내기
export default mytextFn;
