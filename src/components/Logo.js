import React from "react";
import LogoStyle from "./Logo.module.css";

const Logo = (props) => {
  return (
    <div className={LogoStyle.logoClass}>
      <img
        className={LogoStyle.logo}
        alt={props.alt}
        src={props.logo}
        width={props.w}
        height={props.h}
      />
    </div>
  );
};

export default Logo;
