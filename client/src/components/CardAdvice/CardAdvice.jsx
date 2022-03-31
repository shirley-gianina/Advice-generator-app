import React from "react";
import { Card } from "react-bootstrap";
import divider from "../../images/pattern-divider-desktop.svg";
import Dice from "../../components/Dice/Dice";
import "./CardAdvice.css";

const CardAdvice = ({ id, advice, handleClick }) => {
  return (
    <>
      <Card className="card-advice" style={{ width: "28rem" }}>
        <Card.Title className="card-title">ADVICE #{id}</Card.Title>
        <Card.Body>
          <Card.Text className="card-content">{`"${advice}"`}</Card.Text>
        </Card.Body>
        <Card.Text>
          <img className="img-fluid" src={divider} alt="divider-img" />
        </Card.Text>
        <Dice onClick={handleClick} />
      </Card>
    </>
  );
};

export default CardAdvice;
