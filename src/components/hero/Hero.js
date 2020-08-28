import React from 'react'
import style from './Hero.module.css'
import Spacer from '../Spacer'

const Hero = class extends React.Component {
  render() {
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
          <div className={style.imgContainer}></div>
        </div>
      </section>
    )
  }
}
export default Hero
