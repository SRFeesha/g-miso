
import React from "react";
import FCS from "../components/FakeCard.module.css";
import Spacer from "../components/Spacer"

const FakeCard = (props) => {

  return (
    <div className={FCS.FakeCard}>
        <img class={FCS.fakeImg} src={props.img}></img>
        <Spacer h=".75rem" />
        <h4>{props.title}</h4>
        <hr className="transparent" />
        <p class="big">
          {props.text}
        </p>
        <Spacer h="2rem" />
    </div>
  );
};

export default FakeCard;
