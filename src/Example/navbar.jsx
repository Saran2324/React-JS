import React, { useState } from "react";
import "../css/reacteg.css";
import { Link } from "react-router-dom";

const headings = ["Home", "About", "Projects", "Contact"];

function Myfunction() {
  const [si, ssi] = useState(-1);

  return (
    <nav>
      <div className="navi">
        {headings.map((item, index) => (
          <p
            key={index}
            className={si === index ? "newcontent" : "navcontent"}
            onClick={() => {
              ssi(index);
            }}
          >
            <Link
              to={`/${item}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              {item}
            </Link>
          </p>
        ))}
      </div>
    </nav>
  );
}

export default Myfunction;
