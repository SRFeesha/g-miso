import React from "react";
import HeroImage from "../img/Miso_Hero_Image.png";
import HeroStyle from "./Hero.module.css";
import Spacer from "./Spacer";
import Section from "./Section";

const Hero = class extends React.Component {
  render() {
    return (
      <Section id="hero">
        <Spacer h={11} />
        <div className={HeroStyle.hero}>
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
        </div>
      </Section>
    );
  }
};
export default Hero;
