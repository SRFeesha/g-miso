import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Il link non porta da nessuna parte</h1>
      <p>Mi spiace darti questa notizia, ma in effetti il link non esiste. </p>
      <a href="/">Torna alla home</a>
    </div>
  </Layout>
)

export default NotFoundPage
