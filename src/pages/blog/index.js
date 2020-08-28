import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import FeaturedPost from '../../components/FeaturedPost'
import style from '../../components/blog/blog.module.css'
import { Container, Row, Col } from 'react-grid-system'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <h1 className={style.sectionHeading}>Articoli in evidenza</h1>
          <Row>
            <Col lg={6} offset={{ lg: 1 }}>
              <FeaturedPost />
            </Col>
          </Row>

          <h1 className={style.sectionHeading}>Ultimi articoli</h1>
          <Row className={style.postList}>
            <Col lg={2}></Col>
            <Col lg={5}>
              <BlogRoll />
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
