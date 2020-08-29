import React from 'react'
import style from './ShadowTitle.module.css'
import Spacer from './Spacer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.shadow+title',
    scrub: true,
    markers: true,
  },
})
tl.to('.shadow+title .shadow', { x: 2000 })

const shadowTitle = (props) => {
  return (
    <div>
      <Spacer h={12} />

      <div className="shadow+title">
        <div className="shadow">{props.title}</div>
        <div className="shadow-title">{props.title}</div>
      </div>
    </div>
  )
}

export default shadowTitle
