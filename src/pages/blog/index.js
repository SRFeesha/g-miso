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

  // console.log(posts)

  return (
    <Layout>
      <Container>
        {/* <h1 className={style.sectionHeading}>Articoli in evidenza</h1>
          <Row>
            <Col lg={6} offset={{ lg: 1 }}>
              <FeaturedPost />
            </Col>
          </Row> */}

        <h1 className={style.sectionHeading}>Ultimi articoli</h1>

        <Row className={style.postList}>

          <div id="blog-post-list">
            {posts && posts.map((post) => (
              <Link key={post.id} className={style.link} to={post.slug}>
                <Row >
                  <Col lg={2}>
                    <Img fluid={post.heroImage.fluid} />
                  </Col>
                  <Col lg={5}>
                    <article className={style.blogPost}>
                      <h3 className={style.title}>{post.title}</h3>
                      <p className={style.subtitle}>
                        {post.publishDate}
                        <span className="transparent">
                          <span className={style.space}> /</span>
                        </span>
                        <span className="transparent">Autore: </span>
                        {post.author.name}
                      </p>
                      <p className={style.excerpt}>{post.subtitle.subtitle}</p>
                    </article>
                  </Col>
                </Row>
                <Spacer h={6} />
              </Link>
              ))}
          </div>
        </Row>
      </Container>
    </Layout>
  )
}

export default BlogIndexPage

export const pageQuery = graphql`
  {
    allContentfulBlogPost (filter: {node_locale: {eq: "it"}}) {
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
          fluid{
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

