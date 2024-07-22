import React from "react";
import { Link } from "react-router-dom";

//CSS 불러오기
import "../../css/pivot/contact.scss";

function Contact(props) {
  return (
    <>
      <div className="contact-mbx">
        <h1>CONTACT</h1>
      </div>
      <button
        className="go-mbtn"
        style={{
          width: "100%",
          height: "1vh",
          fontSize: "1.2rem",
          border: "none",
          backgroundColor: "#fff",
          paddingTop: "35px",
          textAlign: "left",
          paddingLeft: "31px",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "darkpurple",
            fontFamily: "Noto Sans KR",
            fontWeight: "700",
            fontSize: "1.2rem",
          }}
        >
          ← 뒤로가기
        </Link>
      </button>
      <div className="iframe-map">
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9903483654384!2d126.91730355197768!3d37.555291179701044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98db7e765a41%3A0xab4fd4131b3f48b3!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDshJzqtZDrj5kg64-Z6rWQ66GcIDE1Ni00!5e0!3m2!1sko!2skr!4v1625465058070!5m2!1sko!2skr"
          }
          style={{ allowFullScreen: "", loading: "lazy" }}
        ></iframe>
      </div>
      <div className="compa-info">
        <h1>(주) 지엔씨미디어</h1>
        <h2>
          Zip Code. KS013/04031 2th floor of GNC Media Building,
          <br></br>
          156-4 Donggyo-ro, Mapo-gu, Seoul, Korea
        </h2>
        <h3>전시사업팀 <br></br> Exhibition Department </h3>
        <h4>expo@gncmedia.com <br></br> T.02-323-9151</h4>
        <h3>아트상품팀 <br></br> Merchandise Department</h3>
        <h4>gnc@gncmedia.com <br></br> T.02-325-1077</h4>
      </div>
    </>
  );
}

export default Contact;
