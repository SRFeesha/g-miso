import React from "react";
import Section from "./Section";
import ShadowTitle from "./ShadowTitle";
import Spacer from "./Spacer";
import LogoInsta from "../img/Instagram Logo.svg";
import LogoMail from "../img/Mail Logo.svg";
import LogoFb from "../img/Facebook Logo.svg";
import ButtonSocial from "./ButtonSocial";
import { Container, Row, Col } from "react-grid-system";

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
              attività tramite i social Facebook e Instagram o direttamente
              iscrivendoti alla newsletter. Se sei ancora più curioso puoi
              mandarci direttamente una mail a *indirizzo mail*. Risponderemo a
              tutte le tue domande.
            </p>
          </Col>
        </Row>
        <Spacer h={9} />
        <Row>
          <Col xs={2} md={1} offset={{ lg: 2}}>
            <ButtonSocial logo={LogoInsta} href="https://www.instagram.com/studio.miso/" />
          </Col>
          <Col xs={2} md={1} offset={{ lg: 1, xs:1 }}>
            <ButtonSocial logo={LogoFb} href="https://www.facebook.com/studiomisobrescia/" />
            </Col>
            <Col xs={2} md={1} offset={{ lg: 1, xs:1 }}>
            <ButtonSocial logo={LogoMail} />
            </Col>
        </Row>
      </Container>
      <Spacer h={10}  />
    </Section>
  );
};

export default Social;
