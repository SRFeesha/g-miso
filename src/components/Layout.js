import React from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import useSiteMetadata from './SiteMetadata'
import { setConfiguration } from 'react-grid-system'
import '../styles/global.css'

// eslint-disable-next-line
import font from '../styles/font/font.css'

setConfiguration({ gridColumns: 8 })

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div className="layout-container">
      <Helmet>
        <html lang="it" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/logo/Favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/logo/Favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#333"
        />
        <meta name="theme-color" content="#333" />

        <meta property="og:type" content="nonprofit" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/Hero.jpg`} 
        
        />        
      </Helmet>

      <Navbar />

      <div>{children}</div>

      <Footer />
    </div>
  )
}

export default TemplateWrapper
