import React from "react";
import QuoteStyle from "./Quote.module.css";

const Quote = (props) => {
  return (
    <div className={QuoteStyle.quote}>
      <hr></hr>
      <blockquote>
        <p>{props.cit}</p>
        <footer>
          <cite>{props.author}</cite>
          <p>{props.detail}</p>
        </footer>
      </blockquote>
    </div>
  );
};

export default Quote;
