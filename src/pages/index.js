import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import Spacer from "../components/Spacer";
import CosaFacciamo from "../components/CosaFacciamo";
import Motivazioni from "../components/Motivazioni";
import CosaDiconoDiNoi from "../components/CosaDiconoDiNoi";
import Sostienici from "../components/Sostienici";
import Social from "../components/Social";
import { Container, Row, Col } from 'react-grid-system';
import { setConfiguration } from 'react-grid-system';

setConfiguration({ gridColumns: 8 });

const Home = () => (
  <Layout>
    <div>
      <Hero />
      {/* <Spacer h="400px" /> */}
      <CosaFacciamo />
      <Motivazioni />
      <CosaDiconoDiNoi />
      <Sostienici />
      <Social />
    </div>
  </Layout>
);

export default Home;
