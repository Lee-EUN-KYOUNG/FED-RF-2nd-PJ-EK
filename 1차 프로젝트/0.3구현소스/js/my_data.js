// 대표이미지 데이터
/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.이미지명 : imgName
    4. 가격 : won
*************************************/
const freeData = [
  {
    idx: "1",
    title: "치즈퀸 무배클럽 맛보기",
    imgName: "free-cate01",
    won: "60,000원",
  },
  {
    idx: "2",
    title: "치즈퀸 무배클럽 12",
    imgName: "free-cate02",
    won: "120,000원",
  },
  {
    idx: "3",
    title: "치즈퀸 무배클럽 18",
    imgName: "free-cate03",
    won: "180,000원",
  },
  {
    idx: "4",
    title: "치즈퀸 무배클럽 25",
    imgName: "free-cate04",
    won: "250,000원",
  },
]; /////////// freeData 배열 /////////

const bData = [
  {
    idx: "1",
    title: "비즈니스 보너스 클럽 100",
    imgName: "B-cate01",
    bwon: "1,000,000원",
  },
  {
    idx: "2",
    title: "비즈니스 클럽 주의사항",
    imgName: "B-cate02",
    bwon: "사업자용 보너스 클럽",
  },
]; /////////// bData 배열 /////////

/************************************* 
    [ 데이터항목 : ]
    1.순번(기본키) : idx
    2.제목 : title
    3.내용 : scont
    4.가입자격: acq
*************************************/

const nData = [
  {
    idx: "1",
    title: "무료 배송 맛보기",
    scont: `
    추천

    탈퇴

    환불

    사용 기한

    양도

    가입 자격

    부분 환불 발생시

    제주 및 산간 지역 배송
    `,
    acq: "무료 배송 맛보기",
  },
  {
    idx: "2",
    title: "무배클럽 12",
    scont: ``,
    acq: "무배클럽 12",
  },
  {
    idx: "3",
    title: "무배클럽 18",
    scont: ``,
    acq: "무배클럽 18",
  },
  {
    idx: "4",
    title: "무배클럽 25",
    scont: ``,
    acq: "무배클럽 25",
  },
  {
    idx: "5",
    title: "비즈니스 보너스 클럽",
    scont: ``,
    acq: "비즈니스 보너스 클럽",
  },
]; /////////// nData 배열 /////////

// 데이터 공개하기
export { freeData, bData, nData };
