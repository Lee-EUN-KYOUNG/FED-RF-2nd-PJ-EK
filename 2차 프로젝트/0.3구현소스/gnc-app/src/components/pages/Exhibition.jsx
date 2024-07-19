import React, { useEffect, useRef } from 'react';
import ArtList from '../modules/ArtList';
import { Link } from 'react-router-dom';



export default function Exhibition() {
    const artgridRef = useRef(null);

  useEffect(() => {
    ArtList(artgridRef);
  }, []);

  return (
    <>
    <button 
    lassName='go-mbtn'
    style={{
      width: "100%",
      height: "1vh",
      fontSize: "1.2rem",
      border: "none",
      backgroundColor: "#fff",
      paddingTop: "35px",
      textAlign: "left",
      paddingLeft: "31px"
    }}
    >
      <Link to="/"
      style={{
        fontFamily: "Black Han Sans",
        textDecoration: "none", 
        color:"darkpurple",
        fontSize: "1.2rem",
      }}
      >뒤로가기
      </Link>
    </button>
    <div id="art-showbx" ref={artgridRef}></div>
    </>
  );
}
