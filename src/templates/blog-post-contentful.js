import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import style from './blog-post.module.css'
import { Container, Row, Col } from 'react-grid-system'
import Spacer from '../components/Spacer'

export const BlogPostContentfulTemplate = ({ data } ) => {
  const post = data.contentfulBlogPost
  console.log(post)

  return (
    <Layout>
      <Container>
          <header className={style.header}>
            <h1 className={style.title}>{post.title}</h1>
            <p className={style.subtitle}>
              Autore: {post.author.name}
            </p>
            <p className={style.excerpt}>{post.subtitle.subtitle}</p>
          </header>
          <Img fluid={post.heroImage.fluid} />
          <Row>
            <Col lg={6} offset={{ lg: 1 }}>
              <article className={style.blogContent} dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html}} >
                
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
  query ContentBlogPostBySlug($slug: String!) {
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
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid{
          ...GatsbyContentfulFluid
        }
      }
      subtitle {
        id
        subtitle
      }
    }
  }
`