import React from "react";
import HeroImage from "../img/Miso_Hero_Image.png";
import HeroStyle from "./Hero.module.css";

const Hero = class extends React.Component {
  render() {
    return (
      <section id="hero" className={HeroStyle.hero}>
        <div className={HeroStyle.headline}>
          <h1 className={HeroStyle.title}>
            Miso<span> è una </span>
            <br />
            associazione culturale no-profit <span>fondata a </span>
            Brescia.
          </h1>
          <p className={HeroStyle.subtitle}>
            Siamo più di sessanta ragazzi: attori, filmmakers, registi o
            semplici appassionati
          </p>
        </div>
        <img alt="miso all'opera" src={HeroImage} className={HeroStyle.img} />
      </section>
    );
  }
};
export default Hero;
