import React from "react";
import ShadowTitle from "./ShadowTitle";
import FakeCard from "./FakeCard";
import imgTeatro from "../img/Teatro.png";
import imgCinema from "../img/Cinema.png";
import Spacer from "./Spacer";
import Callout from "./Callout";
import Grid from '@material-ui/core/Grid';

const CosaFacciamo = (props) => {
  return (
    <section id="cosa-facciamo">
      <ShadowTitle title="Cosa facciamo" />
      <p class="bigger transparent">
        Sosteniamo i giovani creativi nel mondo dello spettacolo
      </p>
      <Spacer h="54px" />
      <Grid 
        container 
        direction="row" 
        justify="space-evenly" 
        alignItems="flex-start">
        <FakeCard
          img={imgTeatro}
          title="Teatro"
          text="Ogni anno presentiamo una rassegna di spettacoli teatrali originali. 
          Tutti gli aspetti dalla regia, scenografia, costumi, e musiche di scena,  sono curate direttamente dai nostri Associati. "
        />
        <FakeCard
          img={imgCinema}
          title="Cinema"
          text="Mettiamo la nostra attrezzatura a disposizione dei cineasti e organizziamo insieme le riprese. Abbiamo fondato nel 2019 il il Brixia Film Festival, festival internazionale di cortometraggi."
        />
      </Grid>
      <Spacer h="128px" />
      <Callout 
        text = "Sei interessato a far parte della nostra Associazione? Non esitare a contattarci."
        cta = "Unisciti a noi"
      />
    </section>
  );
};

export default CosaFacciamo;
