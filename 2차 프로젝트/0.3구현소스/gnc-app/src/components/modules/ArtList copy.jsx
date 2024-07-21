import React from 'react';
import exData from '../data/exhibition_data';


// CSS 불러오기
import "../../css/pivot/artlist.scss";

export default function ArtList(ref) {
    const agrid = ref.current;
<>
</>
// 이미지 넣기
if (agrid) {
    for (let i = 1; i <= 26; i++) {
      agrid.innerHTML += `
        <div class="art-wbox">
          <img src=${process.env.PUBLIC_URL}/img/subimg/subimg${i<10?"0"+i:i}.jpg alt="">
          <div class="art-tit">
          <h3>${exData[i - 1].mexhibi}</h3>
          </div>
        </div>
      `;
    }
  }
}

