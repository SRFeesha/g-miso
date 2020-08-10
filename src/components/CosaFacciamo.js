import React from 'react'
import ShadowTitle from './ShadowTitle'
import FakeCard from './FakeCard'
// import imgTeatro from '../img/Teatro.jpg'
import imgTeatro from '../img/Teatro.png'
import imgCinema from '../img/Cinema.jpg'
import Spacer from './Spacer'
import Callout from './Callout'
import { Container, Row, Col } from 'react-grid-system'

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
              img={imgTeatro}
              alt="Miso a teatro"
              title="Teatro"
              text="Ogni anno presentiamo una rassegna di spettacoli teatrali originali. 
              Tutti gli aspetti dalla regia, scenografia, costumi, e musiche di scena,  sono curate direttamente dai nostri Associati. "
            />
          </Col>
          <Col md={3} sm={5} xs={7} offset={{ md: 1, sm: 3, xs: 1 }}>
            <FakeCard
              img={imgCinema}
              alt="Miso mentre filma per un cortometraggio"
              title="Cinema"
              text="Mettiamo la nostra attrezzatura a disposizione dei cineasti e organizziamo insieme le riprese. Abbiamo fondato nel 2019 il Brixia Film Festival, festival internazionale di cortometraggi."
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
