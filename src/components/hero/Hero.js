import React, { useEffect, useRef } from "react";
import style from "./Hero.module.css";
import Spacer from "../Spacer";
import { gsap } from "gsap";
import Splitting from "splitting";
// import 'splitting/dist/splitting.css'
// import 'splitting/dist/splitting-cells.css'

import heroImage from "../../img/Hero-2x-scura.png";

const Hero = () => {
  let imgContainerRef = useRef(null);
  let titleRef = useRef(null);
  let subtitleRef = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (titleRef) {
        let results = Splitting({ target: titleRef, by: "lines" });

        results.forEach((splitResult) => {
          const wrappedLines = splitResult.lines
            .map(
              (wordsArr) => `
        <div class="mask-line">
          ${wordsArr
            .map(
              (word) => `${word.outerHTML}<span class="whitespace"> 
         </span>`
            )
            .join("")}
        </div>`
            )
            .join("");
          splitResult.el.innerHTML = wrappedLines;
        });
      }
    }
  }, []);

  useEffect(() => {
    const hero = imgContainerRef.firstElementChild;
    const maskRef = titleRef.querySelectorAll(".mask-line");
    let lineRefs = [];

    maskRef.forEach((l, i) => {
      lineRefs[i] = l.querySelectorAll(".word");
      i++;
    });

    tl.from(imgContainerRef, 1.2, { y: 1280, ease: "ease-out" })
      .from(hero, 2, { scale: 1.6, ease: "ease-out" }, .2)
      .to(titleRef, 0, { autoAlpha: 1}, 1)
      .staggerFrom(lineRefs, .4, { y: 100, ease: 'ease-out', autoAlpha: 0 }, .05, 1)
      .fromTo(subtitleRef, .3, {yPercent: 50, ease: 'ease-out', autoAlpha: 0}, {yPercent: 0, autoAlpha: .5}, 1.5)

    // tl.to(titleRef,0,{autoAlpha:1})
    // tl.staggerFrom(lineRefs, 0.4, { yPercent: 100, ease: "ease-out", autoAlpha: 0 }, 0.05);
  }, [tl]);

  return (
    <section id="hero">
      <Spacer h={11} />
      <div className={style.hero}>
        <div className={style.headline}>
          <h1
            className={style.title}
            ref={el => titleRef = el}
            data-splitting
          >
            Miso<em className={style.low}> è una </em>
            <br />
            associazione culturale no-profit{" "}
            <em className={style.low}>fondata a </em>
            Brescia.
          </h1>
          <Spacer h={5} />
          <p className={style.subtitle} ref={el => subtitleRef = el}>
            Siamo più di sessanta ragazzi: attori, filmmakers, registi o
            semplici appassionati
          </p>
        </div>
        <div
          className={style.imgContainer}
          ref={el => imgContainerRef = el}
        >
          <img src={heroImage} className={style.heroImg} alt="miso teatro" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
