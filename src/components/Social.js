import React from "react";
import Section from "./Section";
import ShadowTitle from "./ShadowTitle";
import Spacer from "./Spacer";
import SocialStyle from "./Social.module.css";
import LogoInsta from "../img/Instagram Logo.svg";
import LogoMail from "../img/Mail Logo.svg";
import { StylesProvider } from "@material-ui/core/styles";
import LogoFb from "../img/Facebook Logo.svg";
import ButtonSocial from "./ButtonSocial";
import Grid from '@material-ui/core/Grid';

const Social = () => {
  return (
    <Section>
      <Spacer h="10rem" />
      <ShadowTitle title="Restiamo in contatto" />
      <p class="giant transparent">
        Non lasciamo idee nel cassetto e ogni progetto è un’opportunità per
        rinnovarsi e sperimentare. Puoi restare aggiornato sulle nuove attività
        tramite i social Facebook e Instagram o direttamente iscrivendoti alla
        newsletter. Se sei ancora più curioso puoi mandarci direttamente una
        mail a *indirizzo mail*. Risponderemo a tutte le tue domande.
      </p>
      <Spacer h="4rem" />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <ButtonSocial logo={LogoInsta} />
        <ButtonSocial logo={LogoFb} />
        <ButtonSocial logo={LogoMail} />
      </Grid>
    </Section>
  );
};

export default Social;
