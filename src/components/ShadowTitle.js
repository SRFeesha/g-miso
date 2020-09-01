import React, { useRef, useEffect } from 'react'
import Spacer from './Spacer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// fix for gatsby html render https://www.gatsbyjs.org/docs/debugging-html-builds/
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

const ShadowTitle = (props) => {
  const shadowRef = useRef(null);
  // const triggerRef = useRef(null);

  useEffect(() => {
    // console.log(shadowRef)
    gsap.to(
      shadowRef.current, {
        x: -180,
        scrollTrigger: {
          id: `${shadowRef.current.textContent}`,
          trigger: shadowRef.current,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
          scrub: true,
          // markers: true
        }}
    );
  }, []);

    return (
      <div>
        <Spacer h={12} />
        <div 
          className="shadow-title-parent full-bleed" 
          // ref = {triggerRef}
        >
          <div 
            className="shadow"
            // ref = {div => shadowRefs.current.push(div)}
            ref = {shadowRef}
          >
            {props.title}
          </div>
          <div className="shadow-title">{props.title}</div>
        </div>
      </div>
    )
}

export default ShadowTitle
