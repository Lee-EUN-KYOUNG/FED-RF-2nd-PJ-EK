import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// 데이터 불러오기
import exData from '../data/exhibition_data';


function ExhibiDetail() {

    const loc = useLocation();
    const aname = loc.state.aname;
    const adesc = loc.state.adesc;
    const asbtit = loc.state.asbtit;
    
    ///////// 화면 렌더링 실행 구역
    useEffect(()=>{window.scrollTo(0,0);});






    ////////////// 코드 리턴 구역
    return (
        <>
                  {/* 2. 상세 정보 박스 */}
      <div className="detail">
        {/* 2-1. 캐릭터 설명 박스 */}
        <div className="adesc-box">
          {/* 캐릭터명 */}
          <h2>{aname}</h2>
          {/* 캐릭터 소개 */}
          <div className="art-des">
            {
              // 문자 데이터중 "^"로 잘라서 배열로 만들고 각각 p태그로 랩핑한다
              adesc.split("^").map((v, i) => (
                <p key={i}>{v}</p>
              ))
            }
          </div>
        </div>
        {/* 2-2. 캐릭터 명세 */}
        <div className="asb-tit">
          <div>
            <h3>EXHIBITION</h3>
            {/* 테이블로 명세 배열만큼 tr을 만들어준다 */}
            <table>
              <tbody>
                {asbtit.split("^").map((v, i) => (
                  <tr key={i}>
                    {v.split(":").map((v, i) => (
                      <td key={i}>{v}{i==0&&":"}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </>
    );
}

export default ExhibiDetail;