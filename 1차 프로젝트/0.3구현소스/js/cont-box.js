// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// DOM 선택함수
const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);


const addEvt = (ele, evt, fn) => ele.addEventListener(evt, fn);

// HTML태그 로딩후 loadFn함수 호출! ///
addEvt(window, "DOMContentLoaded", loadFn);

/***************************************************** 

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
  // 이동 버튼 대상 : .abtn
  const abtn = qsa(".abtn");
  // 변경 대상 : #slide
  const slide = qs("#slide-box");

  // 블릿버튼 : .indic
  let indic = document.querySelector(".indic");

  //// 초기 셋팅하기
  // 5개의 슬라이드와 블릿을 만들어주기
  for (let i = 0; i < 5; i++) {
    // 슬라이드 넣기
    slide.innerHTML += `
    <li data-seq="${i}">
      <img src="images/cont_0${i+1}.jpeg" alt="slide">
    </li>
    `;

    // 블릿 넣기
    indic.innerHTML += `
    <li ${i===0?'class="on"':''}>
    <img src="images/dot1.png" alt="흰색">
    <img src="images/dot2.png" alt="회색">
    </li>
    `;
  } ////////// for문 ///////


  // 블릿의 li까지 수집! indic 변수
  indic = document.querySelectorAll('.indic li');


  // 버튼을 모두 이벤트 설정하기
  for (let x of abtn) {
    x.onclick = goSlide;
  } //////////////// for문

  // 광클 금지 변수
  let prot = false;

  
  /***************************************************************************************************************
                                        함수명 : goSlide
                                       기능 : 슬라이드 이동
  ***************************************************************************************************************/

  function goSlide() {
    /////////// 광클 금지 설정하기
    if (prot) return;
    prot = true;
    setTimeout(() => {
      prot = false; // 0.6초후 해제!
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
    else {
      // 하위 li 수집하기
      let list = slide.querySelectorAll("li");

      // (1) 맨뒤 li 맨앞으로 이동하기
      slide.insertBefore(list[list.length - 1], list[0]);

      // (2) left 값을 -100%로 변경하여 맨뒤 li가 맨앞으로 온것을 숨긴다
      slide.style.left = "-100%";
      slide.style.transition = "none";

      setTimeout(() => {
        /// (3) left 값을 0으로 트랜지션하여 들어옴
        slide.style.left = "0";
        slide.style.transition = ".6s ease-in-out";
      }, 0);
    } ////// else문



    // 3. 블릿을 위해 읽어올 슬라이드 순번 구하기
    let seq = slide.querySelectorAll('li')[isRbtn?1:0]
      .getAttribute('data-seq');


    // 4. 블릿 변경하기
    // 모든 클래스 on 지우기 + 현재 순번 클래스 넣기
    indic.forEach((ele,idx)=>{

      // ele - 각각의 li , idx - 각각의 순번
     if(idx==seq){
       ele.classList.add('on');
     } /// if ////

     else {
       // 나머지는 on 빼기
       ele.classList.remove('on');
     } //// else ////

   }); /// forEach ///



  } /////////////////// goSlide 함수

} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
