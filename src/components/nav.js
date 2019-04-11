import React from "react";

const Nav = props => {
  return (
    <nav>
      <a
        href="http://bernadetteengleman.com/index.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Home
      </a>
      <span onClick={props.reset}>Reset</span>
      <h1>Pop The Bubbles Game</h1>
    </nav>
  );
};

export default Nav;
