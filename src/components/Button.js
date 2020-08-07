import React from "react";
import Ripples from "react-ripples";
import style from "./Button.module.css";


// const x = {props.type};

const Button = (props) => {
    return (
        <div className={style[props.type]}>
      <Ripples>
        <a href={props.href} className={style.btn} target={props.target}>
          {props.children}
        </a>
      </Ripples>
    </div>
  );
};

export default Button;
