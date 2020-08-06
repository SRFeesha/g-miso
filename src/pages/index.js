import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CosaFacciamo from "../components/CosaFacciamo";
import Motivazioni from "../components/Motivazioni";
import CosaDiconoDiNoi from "../components/CosaDiconoDiNoi";
import Sostienici from "../components/Sostienici";
import Social from "../components/Social";

const Home = () => (
  <Layout>
    <Hero />
    <CosaFacciamo />
    <Motivazioni />
    <CosaDiconoDiNoi />
    <Sostienici />
    <Social />
  </Layout>
);

export default Home;
