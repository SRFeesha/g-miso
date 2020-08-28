import React from 'react'
import ShadowTitle from '../ShadowTitle'
import style from './CosaFacciamo.module.css'
import Spacer from '../Spacer'
import Form from '../form/FormContainer'
import imgTeatro from '../../img/Teatro.png'
import imgCinema from '../../img/Cinema.jpg'
import { Container, Row, Col } from 'react-grid-system'

const FakeCard = (props) => {
  return (
    <div className={style.FakeCard}>
      <img className={style.fakeImg} src={props.img} alt={props.alt} />
      <Spacer h={3} />
      <h4>{props.title}</h4>
      <hr className="transparent" />
      <p className="big">{props.text}</p>
      <Spacer h={7} />
    </div>
  )
}

const Callout = (props) => {
  return (
    <div className={style.callout}>
      <p className="giant transparent">{props.text}</p>
      <Form />
    </div>
  )
}

const CosaFacciamo = (props) => {
  return (
    <section id="cosa-facciamo">
      <ShadowTitle title="Cosa facciamo" />
      <p className="bigger transparent">
        Sosteniamo i giovani creativi nel mondo dello spettacolo
      </p>

      <Spacer h={9} />

      <Container>
        <Row>
          <Col md={3} sm={5} xs={7}>
            <FakeCard
              img={imgCinema}
              alt="Miso mentre filma per un cortometraggio"
              title="Cinema"
              text="Mettiamo la nostra attrezzatura a disposizione dei cineasti e organizziamo insieme le riprese. Abbiamo fondato nel 2019 il Brixia Film Festival, festival internazionale di cortometraggi."
            />
          </Col>
          <Col md={3} sm={5} xs={7} offset={{ md: 1, sm: 3, xs: 1 }}>
            <FakeCard
              img={imgTeatro}
              alt="Miso a teatro"
              title="Teatro"
              text="Ogni anno presentiamo una rassegna di spettacoli teatrali originali. 
              Tutti gli aspetti dalla regia, scenografia, costumi, e musiche di scena,  sono curate direttamente dai nostri Associati. "
            />
          </Col>
        </Row>
      </Container>
      <Spacer h={11} />
      <Callout
        text="Sei interessato a far parte della nostra Associazione? Non esitare a contattarci."
        cta="Unisciti a noi"
      />
    </section>
  )
}

export default CosaFacciamo
