// 재귀호출 JS

// 제이쿼리 + 제이쿼리UI
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";


function mytextFn() {

  
  // 반복할 테스트
  let textbox = "텍스트반복실험";
  const n = 3;

  // 반복할 텍스트 갯수
  let answer = [...textbox].map((v)=>v.repeat(n));

  console.log(answer);
  

 
}
// 함수 내보내기
export default mytextFn;













