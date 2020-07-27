
import React from "react";
import FCS from "../components/FakeCard.module.css";
import Spacer from "../components/Spacer"

const FakeCard = (props) => {

  return (
    <div className={FCS.FakeCard}>
        {/* <div class={FCS.fakeImg}></div> */}
        <img class={FCS.fakeImg} src={props.img}></img>
        <h4>{props.title}</h4>
        <p class="big">
          {props.text}
        </p>
        <Spacer h="16px" />
        <hr />
    </div>
  );
};

export default FakeCard;
