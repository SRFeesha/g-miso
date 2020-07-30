import React from "react";
import QuoteStyle from "./Quote.module.css";
import Logo from "./Logo"

const Quote = (props) => {
  return (
    <div className={QuoteStyle.quote}>
      <hr></hr>
      <blockquote>
        <p>{props.cit}</p>
        <footer>
          <Logo logo={props.logo} />
          <div class={QuoteStyle.from}>
            <cite>{props.author}</cite>
            <p>{props.detail}</p>
          </div>
        </footer>
      </blockquote>
    </div>
  );
};

export default Quote;
