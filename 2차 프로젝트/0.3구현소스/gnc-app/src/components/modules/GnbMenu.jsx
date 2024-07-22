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
          <li>
            <Link
              to="ABOUT"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              ABOUT
            </Link>
          </li>
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
          <li>
            <Link
              to="CONTACT"
              style={{
                textDecoration: "none",
                color: "#000",
              }}
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default GnbMenu;
