import React from "react";
import Button from "./Button";
import CS from "./Callout.module.css";

const Callout = (props) => {
  return (
    <div className={CS.callout}>
      <p className="giant transparent">{props.text}</p>
      <Button >{props.cta}</Button>
    </div>
  );
};

export default Callout;
