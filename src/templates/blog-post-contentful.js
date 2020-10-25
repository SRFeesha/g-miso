import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import style from './blog-post.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Spacer from '../components/Spacer'

export const BlogPostContentfulTemplate = ({ data } ) => {
  const post = data.contentfulBlogPost
  console.log(data)

  return (
    <Layout>
      <Container>
          <header className={style.header}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.subtitle}>
              Autore: {post.author.name}
            </p>
            <p className={style.excerpt}>descrizione</p>
          </header>
          <hr className="line" />
          <Row>
            <Col lg={6} offset={{ lg: 1 }}>
              <article className={style.blogContent}>
                {post.body.body}
              </article>
            </Col>
          </Row>
          <Spacer h={8} />
      </Container>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentBlogPostBySlyg($slug: String!) {
    site{
      siteMetadata {
        title
        # author
      }
    }
    contentfulBlogPost( slug: { eq: $slug }) {
      title
      author {
        id
        name
      }
      body {
        body
      }
    }
  }
`