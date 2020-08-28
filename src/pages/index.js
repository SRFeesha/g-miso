import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/hero/Hero'
import CosaFacciamo from '../components/cosaFacciamo/CosaFacciamo'
import Motivazioni from '../components/Motivazioni'
import CosaDiconoDiNoi from '../components/CosaDiconoDiNoi/CosaDiconoDiNoi'
import Social from '../components/Social'
import ChiCiSostiene from '../components/ChiCiSostiene'
import Dona from '../components/dona/Dona'

const Home = () => (
  <Layout>
    <Hero />
    <CosaFacciamo />
    <Motivazioni />
    <CosaDiconoDiNoi />
    <ChiCiSostiene />
    <Dona />
    <Social />
  </Layout>
)

export default Home
