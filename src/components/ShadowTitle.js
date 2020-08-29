import React from 'react'
import style from './ShadowTitle.module.css'
import Spacer from './Spacer'
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".shadow+title",
//         scrub: true,
//         // markers: true
//     }
// });

// tl.to(".shadow", {x: 500, y: -300})


const shadowTitle = (props) => {
  return (
    <div>
      <Spacer h={12} />

      <div className={"shadow+title" && style.father}>
        <div className={"shadow" && style.shadow}>{props.title}</div>
        <div className={style.shadowTitle}>{props.title}</div>
      </div>
    </div>
  )
}

export default shadowTitle
