import React from 'react'
import Section from './Section'
import ShadowTitle from './ShadowTitle'
import Spacer from './Spacer'
import LogoInsta from '../img/Instagram Logo.svg'
import LogoMail from '../img/Mail Logo.svg'
import LogoFb from '../img/Facebook Logo.svg'
import Button from './Button'
import { Container, Row, Col } from 'react-grid-system'

const Social = () => {
  return (
    <Section id="social">
      <Spacer h={12} />
      <Container>
        <Row>
          <Col md={5} offset={{ lg: 2 }}>
            <ShadowTitle title="Restiamo in contatto" />
            <p className="giant transparent">
              Non lasciamo idee nel cassetto e ogni progetto è un’opportunità
              per rinnovarsi e sperimentare. Puoi restare aggiornato sulle nuove
              attività tramite i social. Per qualsiasi proposta o domanda,
              scrivici pure direttamente.
            </p>
          </Col>
        </Row>
        <Spacer h={10} />
        <Row>
          <Col xs={2} md={1} offset={{ lg: 2 }}>
            <Button
              href="https://www.instagram.com/studio.miso/"
              type="social"
              target="_blank"
            >
              <img src={LogoInsta} alt="logo instagram miso" />
            </Button>
          </Col>
          <Col xs={2} md={1} offset={{ lg: 1, xs: 1 }}>
            <Button
              href="https://www.facebook.com/studiomisobrescia/"
              type="social"
              target="_blank"
            >
              <img src={LogoFb} alt="logo facebook miso" />
            </Button>
          </Col>
          <Col xs={2} md={1} offset={{ lg: 1, xs: 1 }}>
            <Button
              href="mailto:studiomisobrescia@gmail.com"
              type="social"
              target="_blank"
            >
              <img src={LogoMail} alt="logo mail miso" />
            </Button>
          </Col>
        </Row>
      </Container>
      <Spacer h={10} />
    </Section>
  )
}

export default Social
