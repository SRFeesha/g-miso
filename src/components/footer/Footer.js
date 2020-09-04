import React from 'react'
import { Link } from 'gatsby'
import Spacer from '..//Spacer'
import style from './Footer.module.css'
import logo from '../../img/logo/logo_white_48.png'
import { Container, Row, Col } from 'react-grid-system'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className={style.footer}>
        <Spacer h={11} />
        <hr className="line" />
        <Spacer h={9} />
        <Container>
          <Row>
            <Col lg={2} offset={{ lg: 1 }} className={style.col}>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
              <a href="https://www.instagram.com/miso.associazione/">
                Instagram
              </a>
              <a href="https://www.facebook.com/studiomisobrescia/">Facebook</a>
              <a href="mailto:studiomisobrescia@gmail.com">Inviaci una mail</a>
            </Col>
            <Col lg={2} className={style.col}>
              <a href="https://www.iubenda.com/privacy-policy/52804844" target="_blank">Privacy Policy</a>
              <Link to="/">Trattamento dei dati</Link>
              <Link to="/">Organigramma Miso</Link>
              <Link to="/">Statuto dell'associazione</Link>
            </Col>
            <Col lg={3} className={style.col}>
              <p>
                Miso · Associazione di promozione sociale <br />
                Via Moretto 84 · 25121 · Brescia (BS)
                <br />
                Codice Fiscale 98198280178
              </p>
              <Link to="/">
                <img src={logo} alt="logo miso" className={style.logo} />
              </Link>
            </Col>
          </Row>
          <Row>
            <Col
            // offset={{lg: 5}}
            >
              <p className={style.credit}>
                Made with Gatsby by{' '}
                <a
                  className="discrete-link"
                  href="https://youcancallmeben.design"
                >
                  Beniamino Marini
                </a>
              </p>
            </Col>
          </Row>
        </Container>
        <Spacer h={6} />
      </footer>
    )
  }
}

export default Footer
