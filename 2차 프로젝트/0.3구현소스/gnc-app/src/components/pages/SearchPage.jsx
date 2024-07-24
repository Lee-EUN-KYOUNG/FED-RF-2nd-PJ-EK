import React from 'react';
import Searching from '../modules/Searching';



/// 라우터 전달 변수값을 받기 위해 useLocation을 불러옴
import { Link, useLocation } from 'react-router-dom';


function SearchPage() {

    // 라우터 전달값 받기 객체 생성
    const loc = useLocation();

    // 넘어온 키워드 받기
    let keyword = loc.state.keyword;
    console.log("검색어:",keyword);

    /////// 코드 리턴 구역
    return (
        <>
            <h1 className='tit'>
                전시회 리스트 (Search Result)
            </h1>
            <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "darkpurple",
            fontFamily: "Noto Sans KR",
            fontWeight: "700",
            fontSize: "1.2rem",
            marginLeft: "25px",
          }}
        >
          ← 뒤로가기
        </Link>
            <Searching kword={keyword}/>
        </>
    );
}

export default SearchPage;