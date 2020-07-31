import React from "react";
import FCS from "../components/FakeCard.module.css";
import Spacer from "../components/Spacer"

const FakeCard = (props) => {

  return (
    <div className={FCS.FakeCard}>
        <img className={FCS.fakeImg} src={props.img} alt={props.alt}></img>
        <Spacer h=".75rem" />
        <h4>{props.title}</h4>
        <hr className="transparent" />
        <p className="big">
          {props.text}
        </p>
        <Spacer h="2rem" />
    </div>
  );
};

export default FakeCard;
