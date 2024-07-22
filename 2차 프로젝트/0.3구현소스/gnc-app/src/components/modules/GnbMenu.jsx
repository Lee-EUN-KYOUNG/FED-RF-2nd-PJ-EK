import React from "react";
import { Link } from "react-router-dom";

function GnbMenu(props) {
  return (
    <>
      <aside className="GNB-BOX">
        <ul className="GNB-CT">
          <p>CONTENT</p>
        </ul>
        <ul className="GNB-BAR">
          <li>ABOUT</li>
          <li>
            <Link
              to="EXHIBITION"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              EXHIBITION
            </Link>
          </li>
          <li className="on">
            <Link
              to="NOTICE"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              NOTICE
            </Link>
          </li>
          <li>CONTACT</li>
        </ul>
      </aside>
    </>
  );
}

export default GnbMenu;
