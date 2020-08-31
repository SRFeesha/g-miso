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
  const shadowRefs = useRef([]);
  shadowRefs.current = [];

  useEffect(() => {
    shadowRefs.current.forEach((el, index) => {
      gsap.to(el, 
        {
          x: -200,
          scrollTrigger: {
            id: `shadow-${index+1}`,
            trigger: el,
            start: 'top bottom',
            toggleActions: 'play none none reverse',
            scrub: true,
            markers: true
          }
        }
      );
    });
  }, []);

  const addToRefs = el => {
    if (el && !shadowRefs.current.includes(el)) {
        shadowRefs.current.push(el);
    }
    // console.log(this.revealRefs)
  };

    return (
      <div>
        <Spacer h={12} />
        <div 
          className="shadow+title" 
          // ref = {this.addToRefs}
        >
          <div 
            className="shadow"
            ref = {addToRefs}
          >
            {props.title}
          </div>
          <div className="shadow-title">{props.title}</div>
        </div>
      </div>
    )
}

export default ShadowTitle
