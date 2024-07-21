import React, { useEffect } from 'react';


// 데이터 불러오기
import exData from '../data/exhibition_data';
import ArtList from '../modules/ArtList';

function ExhibiDetail() {

  
  
    ///////// 화면 렌더링 실행 구역
    useEffect(()=>{window.scrollTo(0,0);});



    ////////////// 코드 리턴 구역
    return (
      <>
      {/* 1. 상세 정보 박스 */}
        {/* 1-1. 전시회 제목박스 */}
        <div className="adesc-box">
          {exData.map(
          (v, i) =>
            Number(v.idx) <= 26 && (
              <div className="detail" key={i}>
                <Link to="/ExhibiDetail">
                  <section className="exdesc-box">
                    {/* 전시회 제목박스 영역 */}
                    <div className="ex-mtit">
                    {/* 전시회명 */}
                    <h2>{v.mexhibi}</h2>
                    {/* 전시회 서브명 */}
                    <h3>{v.subexhibi}</h3>
                    {/* 전시회 날짜명 */}
                    <h3>{v.exdate}</h3>
                    {/* 전시회 날짜명 */}
                    <h3>{v.exhall}</h3>
                    </div>
                    {/* 전시회 설명박스 영역 */}
                    <div className="exdesc-sub">
                      <h2>{v.exsubinfo}</h2>
                    </div>
                    {/* 전시회 즐겨찾기 */}

                    {/* 전시회 URL 복사 */}
                    <button className="ex-linkbx">
                      {v.URL복사}
                    </button>
                    {/* 전시회 목록 */}
                    <Link to="/Exhibition">
                    <button className="ex-btn">전시 목록</button>
                    </Link>
                  </section>
                  {/* 전시회 서브 메인 영역 */}
                  <section className="main-exdesc">
                    {/* 이미지 파트 */}
                    <div className="main-eximg1">
                        <img src={process.env.PUBLIC_URL+v.subimg} alt="" />
                    </div>
                    {/* 슬로건 파트 */}
                    <div className="sub-title">
                      <h2>{v.subtitle}</h2>
                    </div>
                    {/* 메인 서브 텍스트 파트 */}
                    <div className="main-subtit">
                      <h3>{v.subtext}</h3>
                    </div>
                  </section>
                </Link>
              </div>
            )
        )}


        </div>
        </>
    );
}

export default ExhibiDetail;