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
    <Container>
      sono un container
    </Container>
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