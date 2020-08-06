import React from "react";
import Section from "./Section";
import ShadowTitle from "./ShadowTitle";
import Spacer from "./Spacer";
import { Container, Row, Col } from "react-grid-system";

const Motivazioni = () => {
  return (
    <Section id="motivazioni">
      <Spacer h={12} />
      <Container>
        <Row>
          <Col md={5} sm={8} offset={{ md: 2 }}>
            <ShadowTitle title="Le nostre motivazioni" />
            <p className="giant transparent" style={{ maxWidth: 660 + "px" }}>
              L’Italia è una miniera d’oro di <strong>talenti</strong> che non
              possono restare nascosti—è fondamentale{" "}
              <strong>unire le nostre voci</strong> e farci sentire. <br />
              La nostra è una rete per <strong>connettere</strong> fra loro i{" "}
              <strong>giovani</strong> che lavorando insieme scoprono nuove
              capacità, risorse o idee che da soli spesso non trovano.
            </p>
          </Col>
        </Row>
      </Container>
      <Spacer h={13} />
    </Section>
  );
};

export default Motivazioni;
