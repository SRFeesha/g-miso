import React from 'react'
import Layout from '../../components/Layout'
// import BlogRoll from '../../components/blog/BlogRoll'
import FeaturedPost from '../../components/blog/FeaturedPost'
import style from '../../components/blog/blog.module.css'
import { Container, Row, Col } from 'react-grid-system'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Spacer from '../../components/Spacer'

const BlogIndexPage = ({ data }) => {
  const { nodes: posts } = data.allContentfulBlogPost

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <h1 className={style.sectionHeading}>Ultimi articoli</h1>
            <div className={style.postList}>
              {posts &&
                posts.map((post) => (
                  <Link key={post.id} className={style.link} to={post.slug}>
                    <div className={style.blogPostImage}>
                      <Img
                        fluid={post.heroImage.fluid}
                        // imgStyle={{ objectFit: 'cover' }}
                      />
                    </div>
                    <article className={style.blogPost}>
                      <p className={style.subtitle + ' transparent'}>
                        {post.publishDate}
                        <span className={style.space}>/</span>
                        Scritto da: {post.author.name}
                      </p>
                      <h3 className={style.title}>{post.title}</h3>
                      <p className={style.excerpt}>{post.subtitle.subtitle}</p>
                    </article>
                    <Spacer h={8} />
                  </Link>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  {
    allContentfulBlogPost(filter: { node_locale: { eq: "it" } }) {
      nodes {
        id
        slug
        author {
          id
          name
        }
        heroImage {
          id
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        publishDate(locale: "IT", formatString: "D MMM YYYY")
        subtitle {
          subtitle
        }
        title
      }
    }
  }
`
