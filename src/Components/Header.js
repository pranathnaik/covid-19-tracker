import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <h2>Covid-19 Tracker</h2>
        <a
          href="https://github.com/pranathnaik/covid-19-tracker"
          target="_blank"
        >
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
            alt="source"
            width="40px"
            height="35px"
          />
        </a>
      </div>
    </>
  );
};

export default Header;
