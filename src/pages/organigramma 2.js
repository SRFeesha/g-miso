import React from 'react'
import Layout from '../components/Layout'
import downloadFile from '../../static/organigramma-miso.pdf'

const Organigramma = () => (
  <>
    <Layout>
        <h1>Organigramma associazione Miso</h1>
        <a className="btn" href={downloadFile} download>Download the directly imported file</a>{` `}
    </Layout>
  </>
)

export default Organigramma
