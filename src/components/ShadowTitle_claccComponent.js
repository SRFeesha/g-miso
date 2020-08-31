import React from 'react'
// import style from './ShadowTitle.module.css'
import Spacer from './Spacer'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// fix for gatsby html render https://www.gatsbyjs.org/docs/debugging-html-builds/
if (typeof window !== `undefined`) {
  gsap.registerPlugin(ScrollTrigger)
  gsap.core.globals("ScrollTrigger", ScrollTrigger)
}

class ShadowTitle extends React.Component {
  constructor(props){
    super(props);
    // reference to the DOM node
    this.shadow = null;
    this.trigger = null;

    this.revealRefs = useRef([]);

    // reference to the animation
    this.tl = null;
    this.addToRefs = this.addToRefs.bind(this)
  }

  componentDidMount(){
    // use the node ref to create the animation
    // this.tl = gsap.timeline({
    //   paused: true,
    //   scrollTrigger: {
    //     start: "top top",
    //     end: "bottom bottom",
    //     trigger: this.trigger,
    //     scrub: true,
    //     markers: true,
    //   },
    // }); 
    
    // this.tl.to(
    //   this.shadow, 
    //   { 
    //     x: -800 
    //   })
    // console.log(this.trigger.)

  }

  addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
    // console.log(this.revealRefs)
  };

  render(){
    // return <div ref={div => this.myElement = div} />;
    return (
      <div>
        <Spacer h={12} />
        <div 
          className="shadow+title" 
          ref = {this.addToRefs}
        >
          <div 
            className="shadow"
            // ref = { div => this.shadow = div }
          >
            {this.props.title}
          </div>
          <div className="shadow-title">{this.props.title}</div>
        </div>
      </div>
    )
  }
}

export default ShadowTitle
