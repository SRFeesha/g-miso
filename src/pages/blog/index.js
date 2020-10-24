import React from 'react'
import Layout from '../../components/Layout'
// import BlogRoll from '../../components/blog/BlogRoll'
// import FeaturedPost from '../../components/blog/FeaturedPost'
import style from '../../components/blog/blog.module.css'
import { Container, Row, Col } from 'react-grid-system'
import { Link } from 'gatsby'

// export default class BlogIndexPage extends React.Component {
const BlogIndexPage = ({ data }) => {
  const { edges: posts } = data.allContentfulBlogPost
  console.log(data);

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
          <Col lg={2}></Col>
          <Col lg={5}>
            <div id="blog-post-list">
              {posts &&
                posts.map(({ node: post }) => (
                  <Link key={post.id} className={style.link} to={post.slug}>
                    <article className={style.blogPost}>
                      <h3 className={style.title}>{post.title}</h3>
                      {/* <p className={style.subtitle}>
                        {post.date}
                        <span className="transparent">
                          <span className={style.space}> /</span>
                        </span>
                        <span className="transparent">Autore: </span>
                        {post.frontmatter.author}Ezio
                          <span className="transparent">
                          <span className={style.space}>/</span>
                            Tempo di lettura:{' '}
                        </span>
                        {post.timeToRead} min{' '}
                      </p> */}
                      <p className={style.excerpt}>{post.excerpt}</p>
                    </article>
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
    allContentfulBlogPost {
      edges {
        node {
          id
          slug
          title
          # tags
          publishDate(locale: "IT")
          body {
            body
          }
          author {
            id
            name
          }
        }
      }
    }
  }
`

