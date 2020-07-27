import React from 'react'
// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
import heroImage from '../img/Miso_Hero_Image.png'
// import heroImage from '../img/social/instagram.svg'
import heroStyle from "./Hero.module.css"

console.log(heroImage);

const Hero = class extends React.Component {
  render() {
    return (
        <section id="hero">
            <h1 class={heroStyle.title}>
                Miso<span> è una </span><br />associazione culturale no-profit <span>fondata a </span>Brescia.
            </h1>
            <p className={heroStyle.subtitle}>
                Siamo più di sessanta ragazzi: attori, filmmakers, registi o semplici appassionati
            </p>
            <img alt= "miso all'opera" src={heroImage} className={heroStyle.img} />
        </section>
    )
  }
}
export default Hero
