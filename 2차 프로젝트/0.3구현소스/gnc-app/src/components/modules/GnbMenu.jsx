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
            <Link to="EXHIBITION">EXHIBITION</Link>
          </li>
          <li className="on">NOTICE</li>
          <li>CONTACT</li>
        </ul>
      </aside>
    </>
  );
}

export default GnbMenu;
