import React, { useEffect, useRef } from "react";
import style from "./Hero.module.css";
import Spacer from "../Spacer";
import { gsap } from "gsap"
import heroImage from '../../img/Hero-2x-scura.png'

const Hero = () => {
  let imgContainerRef = useRef(null);
  
  // create and pause the timeLine
  useEffect(() => {
    const hero = imgContainerRef.firstElementChild;
    // obviously this should be a timeline
    gsap.from(imgContainerRef, 1.2, { y: 1280, ease: "ease-out" }, "Start")
    gsap.from(hero, 2, { scale: 1.6, ease: "ease-out" }, 1.4)
  }, []);

  return (
    <section id="hero">
      <Spacer h={11} />
      <div className={style.hero}>
        <div className={style.headline}>
          <h1 className={style.title}>
            Miso<span> è una </span>
            <br />
            associazione culturale no-profit <span>fondata a </span>
            Brescia.
          </h1>
          <p className={style.subtitle}>
            Siamo più di sessanta ragazzi: attori, filmmakers, registi o
            semplici appassionati
          </p>
        </div>
        <div className={style.imgContainer} ref={el => imgContainerRef = el}>
          <img src={heroImage} className={style.heroImg} alt="miso teatro" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
