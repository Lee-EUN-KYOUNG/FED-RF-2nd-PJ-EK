
/// 공통 함수 JS

// 객체 내보내기 : 변수 선언과 이름없이 바로 직접 내보냄!

// const myFn =  -> 선언과 할당후 export default 하려면 하단에서 해야됨

export default
{
    // 요소선택함수 ////////
    qs: (x) => document.querySelector(x),
    qsEl: (el, x) => el.querySelector(x),
    qsa: (x) => document.querySelectorAll(x),
    qsaEl: (el, x) => el.querySelectorAll(x),
  };

  