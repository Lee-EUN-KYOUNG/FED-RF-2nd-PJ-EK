// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);

// addEvent 함수
// ele - 요소, evt - 이벤트, fn - 함수
const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

// 전역변수구역 //////////
/* 
    (참고: JS에서 이름짓는 일반규칙)
    1. 변수/함수 : 캐믈케이스(첫단어소문자 뒷단어 대문자시작)
    2. 생성자함수/클래스 : 파스칼케이스(모든첫글자 대문자)
    3. 상수 : 모든글자 대문자(연결은 언더스코어-스네이크 케이스)
*/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
  console.log("로딩완료!");
  // 이동 버튼 대상 : .abtn
  const abtn = qsa(".abtn");
  // 변경 대상 : #slide
  const slide = qs("#slide-box");
  //console.log(abtn,slide);

  // slide 순번 전역 변수
  let snum = 0;

  // 2. 버튼을 모두 이벤트 설정하기
  for (let x of abtn) {
    x.onclick = goSlide;
  } //////////////// for문

  /*   // 2. 오른쪽 버튼 클릭시 기능 구현
    abtn[1].onclick = () => {
  
    };
  
    // 2. 왼쪽 버튼 클릭시 기능 구현
    abtn[0].onclick = () => {
  
    }; */


   // 광클 금지 변수
   let prot = false;   
  /***************************************************************************************************************
          함수명 : goSlide
          기능 : 슬라이드 이동
       ***************************************************************************************************************/

  function goSlide() {

    /////////// 광클 금지 설정하기 -> 무한 클릭 신호를 막아서 못들어오게 하고 일정시간 후 다시 열어준다
    if(prot)  return;  // 돌아가! (함수나감)
    prot = true; // 잠금 (뒤의 호출이 모두 막힘)
    setTimeout(() => {
        prot=false; // 0.6초후 해제!
    }, 600);
    /////////////////////////////////////////////

    // 두번째 버튼인 .ab2인가?
    let isRbtn = this.classList.contains("ab2");

    ///// 2. 버튼별 분기하기 (나누기)
    // 오른쪽 버튼일 경우 //
    if (isRbtn) {
      // (1) 먼저 왼쪽으로 이동하기
      slide.style.left = "-100%";
      slide.style.transition = ".6s ease-in-out";

      // (2) 이동하는 시간 0.6초간 기다림
      setTimeout(() => {
        // 맨앞 li 맨뒤로 이동
        slide.appendChild(slide.querySelectorAll("li")[0]);
        // 슬라이드 left 값이 -100%이므로 left값을 0으로 변경
        slide.style.left = "0";
        // left 트랜지션 없애기
        slide.style.transition = "none";
      }, 600);
    } // if문 ///

    /// 왼쪽 버튼일 경우
    else{
        // 하위 li 수집하기
        let list = slide.querySelectorAll('li');
        slide.insertBefore(list[list.length-1],list[0]);
        slide.style.left = "-100%";
        slide.style.transition = "none";
        setTimeout(() => {
            /// (3) left 값을 0으로 트랜지션하여 들어옴
            slide.style.left = "0";
            slide.style.transition = ".6s ease-in-out";
        }, 0);
        

    }  ////// else문


  } /////////////////// goSlide 함수
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
