import React from "react";
import "./Menu.css";
import food from "../../images/Group 23.png";

const Menu = () => {
  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="foods">
        <img src={food} alt="" />
        <img src={food} alt="" />
        <img src={food} alt="" />
      </div>
    </div>
  );
};

export default Menu;
