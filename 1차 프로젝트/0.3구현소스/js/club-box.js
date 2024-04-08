// 나의 함수 불러오기
import myFn from "./my_function.js";

// 데이터 셋팅 불러오기
import * as dkbData from "./dkb_data.js";




///////////// 무료배송클럽 구현 코드 랩핑 구역 시작 /////
(() => {
    // 대상 : .free-box
    const freeBox = myFn.qs(".free-box");
    // 데이터 : dkb_data.js의 freeData 배열
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