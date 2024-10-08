import React, { useRef, useState } from "react";

// 폰트 어썸
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// CSS 불러오기
import "../../css/pivot/searching.scss";


/// 데이터 불러오기
import { exData } from "../data/exhibition_data_sub.js";
import { posterData} from "../data/poster_data_sub.js";

// 캐릭터 리스트 결과 컴포넌트
import SearchingArt from "../modules/SearchingArt";


/////////////////////////////////////////////
function Searching({ kword }) {
  console.log("kword:", kword);
  console.log("data:", posterData);


  /// 상태 관리 변수
  // kword = 전달 받은 키워드
  /// [1] 검색어 상태 관리 변수
  const [kw, setKw] = useState(kword);

  /// [2] 정렬 기준 상태 관리 변수
  const [sort, setSort] = useState("asc");
  // 값: 오름차순 - asc / 내림차순 - desc
  // [3] 체크박스 체크여부 상태관리변수
  const [chk, setChk] = useState([true, true, true]);
  // 배열로 만들고 체크박스 상태를 묶어서 관리함
  console.log("체크훅배열:", chk);


 // 상단 메뉴검색창에서 다시 검색할 경우 검색반응하도록 검색어 비교를 위한 검색어를 저장한다
 // 리랜더링 없이 값만 저장하는 후크는? useRef = 참조변수 사용
 const beforeKword = useRef(kword);

 console.log("참조변수 객체:", beforeKword);

 

 if (beforeKword.current != kword) {
    console.log(beforeKword.current,"==?",kword);
    // 컴포넌트 리랜더링 (검색결과 변경)
    setKw(kword);
    // 다음 검색을 위해 다시 현재 검색어를 참조 변수에 저장
    beforeKword.current = kword;
    // 상단 검색어를 현재 검색창에 넣기
    document.querySelector("#schin").value = kword;
  }


  // 값 : 오름차순 asc , 내림차순 desc

  // 검색어가 있는 데이터 필터하기
  // 변수 = 배열.filter(v=>{if(v.속성명.indexOf(검색어)!=-1)return true})
  //  ---> 결과는 검색어가 있는 경우 변수에 모아서 담아준다 (결과값도 배열, 결과가 없어도 빈 배열)
  // filte() 검색 결과는 항상 배열로 나옴
  const newList = posterData.filter((v) => {
    // 속성중 캐릭터 이름 중 검색 (v.cname)
    // 검색어는 모두 영어일 경우 소문자처리함
    // 문자열.indexOf(문자) 문자열 위치 번호 리턴함! -> 결과가 없으면 -1을 리턴함
    // -1이 아닐경우 true를 리턴하면 filter에서 변수에 저장할 배열로 수집된다

    // let newVal = v.cname.toLocaleLowerCase();


    //let newVal = v["전시회"].toLocaleLowerCase();
    let newVal = v.전시회.toLocaleLowerCase();


    // 전달받은 키워드도 소문자처리
    // 상태 변수인 kw로 대체한다
    // ((중요!!!)) 상태변수인 kw로 대체한다!!!
    let key = kw.toLocaleLowerCase();
    // 문자열이 있는 값만 배열로 재수집!
    if (
      // 1과 2의 조건이 모두 true여야함!
      // 1.검색어 조건 (cname속성)
      newVal.indexOf(key) !== -1 &&
      // 
      // 2. 체크박스항목 조건 (Type 속성)
      // 주의: 조건문 내의 삼항연산자는 반드시 소괄호로
      // 묶어서 논리연산자(&&,||,!)와의 충돌을 막아줘야함!
      // OR문의 결과가 false이려면 모두 false여야함!
      // 체크박스 모두 불체크시 false로 처리!
       ((chk[0] ? v.Type == "Animation" : false) ||
        (chk[1] ? v.Type == "Painting" : false) ||
        (chk[2] ? v.Type == "Design" : false))
      //true && (true||false||false)
      // -> &&문은 모두 true여야 true
      // -> ||문은 하나만 true면 true
    )
      return true;
    // 문자열.indexOf(문자) 문자열위치번호 리턴함
    // 그런데 결과가 없으면 -1을 리턴함!
    // 그래서 -1이 아닐경우 true를 리턴하면
    // filter에서 변수에 저장할 배열로 수집된다!
  }); //////////////// filter ///////////////////


  console.log("검색결과:", newList);


  // [ 결과내 재검색 : 데이터 항목중 alignment값으로 검색함! ]

  // [ 정렬기능 추가하기 ] /////////
  // (1) 오름차순일 경우
  if (sort == "asc") {
    newList.sort((a, b) =>
      a.전시회 > b.전시회 ? 1 : a.전시회 < b.전시회 ? -1 : 0
    );
  } /// if ///////////////////////
  // (2) 내림차순일 경우
  else if (sort == "desc") {
    newList.sort((a, b) =>
      a.전시회 > b.전시회 ? -1 : a.전시회 < b.전시회 ? 1 : 0
    );
  } /// else if ///////////////////

  console.log("newList:", newList);
  /* 
    변수 = 배열.filter(v=>{
        if(v.속성명.indexOf(검색어)!=-1) return true
    })

    -> 결과는 검색어가 있는 경우 변수에 모아서 담아준다!
    -> 결과값도 배열, 결과가 없어도 빈배열!
*/

  // 코드 리턴구역 ////////////////////////
  return (
    <>
      {/* 전체 검색모듈 코드 */}
      <section className="schbx">
        {/* 1. 옵션선택박스 */}
        <div className="schopt">
          {/* 1-1.검색박스 */}
          <div className="searching">
            {/* 검색버튼 돋보기 아이콘 */}
            <FontAwesomeIcon
              icon={faSearch}
              className="schbtn"
              title="Open search"
            />
            {/* 입력창 */}
            <input
              id="sching"
              type="text"
              placeholder="전시회 이름을 검색하세요!"
              defaultValue={kword}
              // 엔터키를 눌렀을때 검색실행
              // 검색어 상태변수만 업데이트하면 끝
              onKeyUp={(e) => {
                if (e.key == "Enter") {
                  // 검색어 상태값 변경변경
                  setKw(e.target.value);
                  // 처음 검색시 정렬은 기본 정렬 오름차순(asc)
                  setSort("asc");
                  // 정렬 선택 박스 선택값 변경
                  document.querySelector("#sel").value = "asc";
                }
              }}
            />
          </div>
          {/* 1-2. 체크박스구역 */}
          <div className="chkbx">
            <ul>
              <li>
                {/* 타이틀 */}
                <h2>
                  Type
                  <span className="spbtn">＋</span>
                </h2>
                {/* 체크박스리스트 */}
                <ol>
                  <li>
                    Animation
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="Animation"
                      className="chkhdn"
                      // 체크박스 체크속성값을 훅연결!
                      checked={chk[0]}
                      // 체크 변경시 change 이벤트 발생
                      onChange={(e) => {
                        // 체크박스의 checked속성은
                        // 체크시 true, 불체크시 false리턴
                        console.log(e.target.checked);
                        // 훅값 업데이트
                        setChk([e.target.checked, chk[1], chk[2]]);
                      }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="Animation" className="chklb"></label>
                  </li>
                  <li>
                    Painting
                    {/* 숨긴 체크박스 */}
                    <input type="checkbox"
                    id="Painting"
                    className="chkhdn"
                    // 체크박스 체크속성값을 훅연결!
                    checked={chk[1]}
                    onChange={(e) => {
                      // 체크박스의 checked속성은
                      // 체크시 true, 불체크시 false리턴
                      console.log(e.target.checked);
                      // 훅값 업데이트
                      setChk([chk[0], chk[2], e.target.checked]);
                    }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="Painting" className="chklb"></label>
                  </li>
                  <li>
                  Design
                    {/* 숨긴 체크박스 */}
                    <input
                      type="checkbox"
                      id="Design"
                      className="chkhdn"
                      // 체크박스 체크속성값을 훅연결!
                      checked={chk[2]}
                      // 체크변경시 change이벤트발생
                      onChange={(e) => {
                        // 체크박스의 checked속성은
                        // 체크시 true, 불체크시 false리턴
                        console.log(e.target.checked);
                        // 훅값 업데이트
                        setChk([chk[0], chk[1],e.target.checked]);
                      }}
                    />
                    {/* 디자인노출 라벨 */}
                    <label htmlFor="Design" className="chklb"></label>
                  </li>
                </ol>
              </li>
            </ul>
          </div>
        </div>
        {/* 2. 결과리스트박스 */}
        <div className="listbx">
          {/* 2-1. 결과 타이틀 */}
          <h2 className="restit">
          검색 결과 ({newList.length})
          </h2>
          {/* 2-2. 정렬선택박스 */}
          <aside className="sortbx">
            <select
              name="sel"
              id="sel"
              className="sel"
              // 값을 변경할때 이벤트 발생
              onChange={(e) => {
                console.log(e.target.value);
                // 정렬 기준 상태 변수 업데이트
                setSort(e.target.value);
              }}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </aside>
          {/* 2-3. 캐릭터 리스트 컴포넌트 : 
            데이터 상태변수 중 첫번째값만 보냄 */}
          <SearchingArt  newList={newList} />
        </div>
      </section>
    </>
  );
}

export default Searching;
