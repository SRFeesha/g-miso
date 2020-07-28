import React from "react";
import Quote from "./Quote";
import Section from "./Section";
import ShadowTitle from "./ShadowTitle";
const CosaDiconoDiNoi = () => {
  return (
    <Section>
      <ShadowTitle title="Cosa dicono di noi" />
      <Quote
        // <> (shorthand for React.Fragment) è un modo per renderizzare l'hatml in jsx
        cit={
          <>
            Ci sono voluti solo <strong>pochi mesi</strong> perché arrivassero a
            mettere in scena il loro primo <strong>dramma teatrale</strong>,
            dare il via alle riprese del loro primo cortometraggio e a gettare
            basi solide per cominciare a girare il secondo. <br /> Sono giovani,
            determinati e hanno le idee piuttosto chiare: nei mesi scorsi hanno
            battezzato la loro associazione culturale <strong>Miso</strong>"
          </>
        }
        author="Giornale di Brescia"
        detail="19 mag 2018"
      ></Quote>

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
        side="left"
      >
        {" "}
      </Quote>
    </Section>
  );
};

export default CosaDiconoDiNoi;
