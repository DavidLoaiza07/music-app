import React from "react";
import "./index.css";


import HeaderBody from "../HeaderBody/index";
import MiddleBody from "../MiddleBody/index";

const MainBody = () => {
  return (
    <div className="MainBody_container">
      <HeaderBody />
      <MiddleBody />
    </div>
  );
};

export default MainBody;
