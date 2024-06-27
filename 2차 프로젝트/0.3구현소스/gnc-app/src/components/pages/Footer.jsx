import React from "react";

// 폰트어썸 불러오기
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

// 하단 영역 CSS 불러오기
import "../../css/pivot/footer_area.scss";

function Footer(props) {
  return (
    <section className="footer-box">
      <ul className="etc">
        <li className="tel">
          <FontAwesomeIcon icon={faPhone} beatFade size="lg" />
          <h2>02-323-9151</h2>
        </li>
        <li className="message">
          <FontAwesomeIcon icon={faEnvelope} beatFade size="lg" />
          <h2>expo@gncmedia.com</h2>
        </li>
        <li className="fax">
          <FontAwesomeIcon icon={faPrint} beatFade size="lg" />
          <h2>02-325-2433</h2>
        </li>
      </ul>
      <div className="contact-box">
        <ul className="c-tit">
          <h2>전시회 제안은?</h2>
          <h3>GNC Media</h3>
          <li>
            <h1>프로젝트 의뢰</h1>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
