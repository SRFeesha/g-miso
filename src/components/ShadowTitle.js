import React from "react";
import STS from "../components/ShadowTitle.module.css";

const shadowTitle = (props) => {
  const title = props.title

  return (
    <div className={STS.father}>
      <div className={STS.shadow}>{title}</div>
      <div className={STS.shadowTitle}>{title}</div>
    </div>
  );
};

export default shadowTitle;
