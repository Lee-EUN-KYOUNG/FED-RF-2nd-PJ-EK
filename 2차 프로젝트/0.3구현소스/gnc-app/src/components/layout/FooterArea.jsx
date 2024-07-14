import Footer from "../pages/Footer";

// 하단 영역 CSS 불러오기
import "../../css/pivot/footer_area.scss";

export default function FooterArea() {
  //// 코드 리턴구역 //////////////
  return (
    <footer className="info">
      <p className="gnc-area">GNC Media</p>
      <address>서울시 마포구 동교로 156-4 지엔씨미디어빌딩 2층</address>
      <Footer />
      <p className="copyright">© 2024 GNC Media. All rights reserved.</p>
    </footer>
  );
} /////////// FooterArea /////////////////////
