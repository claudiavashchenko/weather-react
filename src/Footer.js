import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <span>
        {" "}
        This project was coded by {""}
        <a href="/" target="_blank" rel="noreferrer">
          Claudia Vashchenko {""}
        </a>
        and is {""}
        <a
          href="https://github.com/claudiavashchenko"
          target="_blank"
          rel="noreferrer"
        >
          {""}
          open-sourced on GitHub
        </a>
      </span>
    </div>
  );
}
