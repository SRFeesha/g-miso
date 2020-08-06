import React from "react";
import Quote from "./Quote";
import Section from "./Section";
import ShadowTitle from "./ShadowTitle";
import { Container, Row, Col } from "react-grid-system";
import GiornaleDiBrescia from '../img/socialProof/logo_gdb.png'
import Calabrone from '../img/socialProof/logo_calab.png'

const CosaDiconoDiNoi = () => {
  return (
    <Section id="dicono-di-noi">
      <Container>
        <Row >
          <ShadowTitle title="Cosa dicono di noi" />
        </Row>
        <Row>
          <Col md={7}>
            <Quote
              // <> (shorthand for React.Fragment) è un modo per renderizzare l'hatml in jsx
              cit={
                <>
                  Ci sono voluti solo <strong>pochi mesi</strong> perché
                  arrivassero a mettere in scena il loro primo{" "}
                  <strong>dramma teatrale</strong>, dare il via alle riprese del
                  loro primo cortometraggio e a gettare basi solide per
                  cominciare a girare il secondo. <br /> Sono giovani,
                  determinati e hanno le idee piuttosto chiare: nei mesi scorsi
                  hanno battezzato la loro associazione culturale{" "}
                  <strong>Miso</strong>"
                </>
              }
              author="Giornale di Brescia"
              detail="19 mag 2018"
              logo={GiornaleDiBrescia}
            ></Quote>
          </Col>
        </Row>
        <Row>
          <Col md={7} offset={{ md: 1 }}>
            <Quote 
              cit={
                <>
                  il coinvolgimento di giovani con diverse competenze:{" "}
                  <strong>scenografia</strong>, costumi, gestione audio e luci,
                  fotografia, riprese video, la presenza in sala di{" "}
                  <strong>centinaia di giovani</strong>: Era la prima volta in
                  pubblico per la neonata associazione culturale Miso.
                </>
              }
              author="Il Calabrone"
              detail="Cooperativa sociale Onlus"
              logo={Calabrone}
            >
              {" "}
            </Quote>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default CosaDiconoDiNoi;
