import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
// import Spacer from "../components/Spacer";
import CosaFacciamo from "../components/CosaFacciamo";
import Motivazioni from "../components/Motivazioni";

const Home = () => (
  <Layout>
    <div>
      <Hero />
      {/* <Spacer h="400px" /> */}
      <CosaFacciamo />
      <Motivazioni />
    </div>
  </Layout>
);

export default Home;
