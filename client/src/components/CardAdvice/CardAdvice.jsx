import { React, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import DividerDesktop from "../../images/pattern-divider-desktop.svg";
import DividerMobile from "../../images/pattern-divider-mobile.svg";

import Dice from "../../components/Dice/Dice";
import "./CardAdvice.css";

const CardAdvice = ({ id, advice, handleClick }) => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth <= 960 ? setMobile(true) : setMobile(false);
    });
  }, []);

  return (
    <>
      <Card className="card-advice" style={{ width: "28rem" }}>
        <Card.Title className="card-title">ADVICE #{id}</Card.Title>
        <Card.Body>
          <Card.Text className="card-content">{`"${advice}"`}</Card.Text>
        </Card.Body>
        <Card.Text>
          {mobile ? (
            <img
              className="img-fluid"
              src={DividerMobile}
              alt="divider-mobile-img"
            />
          ) : (
            <img
              className="img-fluid"
              src={DividerDesktop}
              alt="divider-desktop-img"
            />
          )}
          {/* <img className="img-fluid" src={DividerDesktop} alt="divider-img" /> */}
        </Card.Text>
        <Dice onClick={handleClick} />
      </Card>
    </>
  );
};

export default CardAdvice;
