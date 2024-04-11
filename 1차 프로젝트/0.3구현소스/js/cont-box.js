// 쇼핑몰 배너 JS - 가로방향 배너 슬라이드 //

// 나의 함수 불러오기
import myFn from "./my_function.js";

// 데이터 셋팅 불러오기
import * as dkbData from "./my_data.js";



// 슬라이드 함수호출!
loadFn();

/***************************************************** 

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {
  // 이동 버튼 대상 : .abtn
  const abtn = myFn.qsa(".abtn");
  // 변경 대상 : #slide
  const slide = myFn.qs("#slide-box");

  // 블릿버튼 : .indic
  let indic = myFn.qs(".indic");

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
  indic = myFn.qsa('.indic li');


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

  function goSlide(e) {
    // a요소 기본이동 막기
    e.preventDefault();
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



///////////// 무료배송클럽 구현 코드 랩핑 구역 시작 /////
(() => {
  // 대상 : .free-box
  const freeBox = myFn.qs(".free-box");
  // 데이터 : my_data.js의 freeData 배열
  const fData = dkbData.freeData;
  
  // html 변수
  let hcode = "<ul>";

  // li 구성을 hcode 변수에 대입 연산자로 할당함
  // freeData 배열은 총 4개. 모두 돌기를 셋팅

  fData.forEach((v) => {
    hcode += `
    <li>
     <img src="./images/${v.imgName}.jpg" alt="${v.title}">
     <span>${v.won}</span>
    </li>
`;
  }); //////////////////////////// forEach

  hcode += `</ul>`;

  // console.log(hcode);

  // 화면 출력하기
  freeBox.innerHTML = hcode;

})(); /////////////// 무료배송클럽 코드 랩핑 구역 종료


///////////// 비즈니스 배송클럽 구현 코드 랩핑 구역 시작 /////
(() => {
  // 대상 : .business-box
  const bouBox = myFn.qs(".business-box");
  // 데이터 : my_data.js의 bData 배열
  const boData = dkbData.bData;
  
  // html 변수
  let hcode = "<ul>";

  // li 구성을 hcode 변수에 대입 연산자로 할당함
  // bData 배열은 총 4개. 모두 돌기를 셋팅

  boData.forEach((v) => {
    hcode += `
    <li>
     <img src="./images/${v.imgName}.png" alt="${v.title}">
     <span>${v.bwon}</span>
    </li>
`;
  }); //////////////////////////// forEach

  hcode += `</ul>`;

  // console.log(hcode);

  // 화면 출력하기
  bouBox.innerHTML = hcode;

})(); /////////////// 비즈니스 배송 코드 랩핑 구역 종료


///////////// 유의 사항 구현 코드 랩핑 구역 시작 /////
(() => {
// 대상 : .cinfo-box
const cinfoBox = myFn.qs(".cinfo-box");
// 데이터 : dkb_data.js의 nData 배열
const iData = dkbData.nData;

let hcode = '<ul class="cInfo-box">';

// li 구성을 hcode 변수에 대입 연산자로 할당함
for (let i = 0; i < 5; i++) {
  hcode += `
  <li>
   <h4>${iData[i].title}</h4>
   <p>${iData[i].scont}</p>
   <p>${iData[i].acq}</p>
  </li>

`;
} //////////////////// for문//////////////////////////////////

hcode += `</ul>`;

// 화면 출력하기
cinfoBox.innerHTML = hcode;


})(); /////////////// 유의 사항 구현 코드 랩핑 구역 종료



