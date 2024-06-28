// 로고 컴포넌트
import React from "react";

// 이미지 경로 데이터 불러오기
import { isrc } from "../data/img_src";

export default function Logo({ logoStyle }) {


  // 코드 리턴 구역
  return (
    <h1>
      <img src={process.env.PUBLIC_URL+isrc.logo} alt="GNC Logo" />
    </h1>
  ); /////////////// return //////////////////////
} /////////////// Logo //////////////////////
