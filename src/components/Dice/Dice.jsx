import React from "react";
import dice from "../../images/icon-dice.svg";
import "./Dice.css";

const Dice = ({ onClick }) => {
  return (
    <div className="dice" onClick={onClick}>
      <img src={dice} alt="dice-icon" />
    </div>
  );
};

export default Dice;
